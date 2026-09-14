export const readInputValue = (event: unknown): string => {
  if (event == null) return "";
  const e = event as {
    value?: string;
    detail?: { value?: string };
    target?: { value?: string };
  };
  return String(e.value ?? e.detail?.value ?? e.target?.value ?? "");
};
