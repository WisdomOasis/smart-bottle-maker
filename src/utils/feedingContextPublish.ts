import { encodeFeedingContextRaw } from "./feedingContextRaw.js";

export type FeedingContextSaveStage =
  | "validation"
  | "publish"
  | "send_timeout"
  | "readback"
  | "offline"
  | "cancelled";

type PublishFailureOrigin = "native_fail" | "native_false" | "exception";
const safeErrorCode = (code: unknown): string | undefined =>
  (typeof code === "number" && Number.isFinite(code)) ||
  (typeof code === "string" && /^[-\w]{1,64}$/.test(code))
    ? String(code)
    : undefined;

export class FeedingContextSaveError extends Error {
  readonly stage: FeedingContextSaveStage;
  readonly code?: string;
  readonly innerCode?: string;
  readonly origin?: PublishFailureOrigin;

  constructor(
    stage: FeedingContextSaveStage,
    detail?: unknown,
    origin?: PublishFailureOrigin
  ) {
    super(stage);
    this.name = "FeedingContextSaveError";
    this.stage = stage;
    this.origin = origin;
    Object.setPrototypeOf(this, FeedingContextSaveError.prototype);
    // Never retain platform error text: it may contain the submitted context.
    if (detail && typeof detail === "object") {
      const value = detail as Record<string, unknown>;
      this.code = safeErrorCode(value.errorCode);
      if (value.innerError && typeof value.innerError === "object") {
        this.innerCode = safeErrorCode(
          (value.innerError as Record<string, unknown>).errorCode
        );
      }
    }
  }
}

export const feedingContextDiagnostic = (error: unknown): string => {
  if (!(error instanceof FeedingContextSaveError))
    return "DP119-r3 / validation";
  return [
    "DP119-r3",
    error.stage,
    error.origin,
    error.code ?? "no_code",
    error.innerCode,
  ]
    .filter(Boolean)
    .join(" / ");
};

export const feedingContextSaveMessage = (error: unknown): string => {
  if (error instanceof FeedingContextSaveError) {
    switch (error.stage) {
      case "publish":
        return "Couldn’t send this baby profile to the device.";
      case "send_timeout":
        return "Sending the baby profile timed out. Try again.";
      case "readback":
        return "The device didn’t confirm the baby profile.";
      case "offline":
        return "Device offline. Reconnect and try again.";
      default:
        break;
    }
  }
  return "Couldn’t save this baby profile. Try again.";
};

type DpReport = { deviceId: string; dps: Record<string, unknown> };
type NativePublishParams = {
  deviceId: string;
  dps: Record<string, string>;
  mode: number;
  pipelines: number[];
  options: Record<string, never>;
  success: (result: unknown) => void;
  fail: (error: unknown) => void;
};

export const publishFeedingContext = (input: {
  context: string;
  deviceId: string;
  modelDeviceId: string;
  isOnline: boolean;
  timeoutMs?: number;
  publish: (params: NativePublishParams) => void;
  subscribe: (listener: (report: DpReport) => void) => () => void;
  onAccepted?: () => void;
}): {
  promise: Promise<void>;
  cancel: (stage?: "offline" | "cancelled") => void;
} => {
  let cancel: (stage?: "offline" | "cancelled") => void = () => undefined;
  const promise = new Promise<void>((resolve, reject) => {
    let finished = false;
    let started = false;
    let accepted = false;
    let reported = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let unsubscribe: (() => void) | undefined;
    const finish = (error?: FeedingContextSaveError) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      unsubscribe?.();
      if (error) reject(error);
      else resolve();
    };
    cancel = (stage = "cancelled") =>
      finish(new FeedingContextSaveError(stage));
    if (!input.isOnline) {
      finish(new FeedingContextSaveError("offline"));
      return;
    }
    const raw = encodeFeedingContextRaw(input.context);
    if (raw === null) {
      finish(new FeedingContextSaveError("validation"));
      return;
    }
    // Send by the agreed numeric DP ID. Runtime schema metadata is not a
    // firmware capability check and may omit fields such as maxlen.
    if (!input.deviceId || input.modelDeviceId !== input.deviceId) {
      finish(new FeedingContextSaveError("validation"));
      return;
    }
    const timeoutMs = input.timeoutMs ?? 8000;
    try {
      unsubscribe = input.subscribe((report) => {
        if (
          finished ||
          !started ||
          report.deviceId !== input.deviceId ||
          typeof report.dps?.["119"] !== "string" ||
          (report.dps["119"] as string).toLowerCase() !== raw
        )
          return;
        reported = true;
        if (accepted) finish();
      });
      timer = setTimeout(
        () => finish(new FeedingContextSaveError("send_timeout")),
        timeoutMs
      );
      started = true;
      input.publish({
        deviceId: input.deviceId,
        dps: { "119": raw },
        mode: 2,
        pipelines: [],
        options: {},
        success: (result) => {
          if (finished || accepted) return;
          if (result === false) {
            finish(
              new FeedingContextSaveError("publish", undefined, "native_false")
            );
            return;
          }
          accepted = true;
          clearTimeout(timer);
          input.onAccepted?.();
          if (reported) finish();
          else
            timer = setTimeout(
              () => finish(new FeedingContextSaveError("readback")),
              timeoutMs
            );
        },
        fail: (error) =>
          finish(new FeedingContextSaveError("publish", error, "native_fail")),
      });
    } catch (error) {
      finish(new FeedingContextSaveError("publish", error, "exception"));
    }
  });
  return { promise, cancel: (stage) => cancel(stage) };
};
