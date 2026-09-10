export type SmartPrepFailureStage = "login" | "request" | "response";

type ErrorDetail = {
  code?: string;
  message: string;
};

const asCode = (value: unknown): string | undefined =>
  typeof value === "string" || typeof value === "number"
    ? String(value)
    : undefined;

const asMessage = (value: unknown): string | undefined =>
  typeof value === "string" && value.trim() ? value.trim() : undefined;

const redactSensitiveValues = (message: string): string =>
  message
    .replace(
      /((?:authorization_)?code|session|token|secret)\s*[:=]\s*[^\s,;]+/gi,
      "$1=[redacted]"
    )
    .slice(0, 240);

const readErrorDetail = (error: unknown): ErrorDetail => {
  if (error instanceof Error) {
    return { message: redactSensitiveValues(error.message || "Unknown error") };
  }

  if (typeof error === "string") {
    return { message: redactSensitiveValues(error) };
  }

  if (error && typeof error === "object") {
    const value = error as Record<string, unknown>;
    const inner =
      value.innerError && typeof value.innerError === "object"
        ? (value.innerError as Record<string, unknown>)
        : undefined;
    const code = asCode(value.errorCode ?? value.code ?? inner?.errorCode);
    const message =
      asMessage(value.errorMsg) ??
      asMessage(value.errMsg) ??
      asMessage(value.message) ??
      asMessage(inner?.errorMsg) ??
      asMessage(inner?.message);

    return { code, message: redactSensitiveValues(message || "Unknown error") };
  }

  return { message: "Unknown error" };
};

export class SmartPrepError extends Error {
  readonly stage: SmartPrepFailureStage;
  readonly code?: string;

  constructor(stage: SmartPrepFailureStage, error: unknown) {
    const detail = readErrorDetail(error);
    super(detail.message);
    this.name = "SmartPrepError";
    this.stage = stage;
    this.code = detail.code;
    Object.setPrototypeOf(this, SmartPrepError.prototype);
  }
}

export const asSmartPrepError = (
  stage: SmartPrepFailureStage,
  error: unknown
): SmartPrepError =>
  error instanceof SmartPrepError ? error : new SmartPrepError(stage, error);

export const formatSmartPrepDiagnostic = (error: unknown): string => {
  const detail = asSmartPrepError("response", error);
  return `Debug: ${detail.stage}${detail.code ? ` · ${detail.code}` : ""} · ${
    detail.message
  }`;
};
