/** Soft-call native chrome APIs; IDE often rejects unimplemented ones. */
const callChromeApi = (
  fn: ((p?: Record<string, unknown>) => unknown) | undefined
): void => {
  if (typeof fn !== "function") return;
  try {
    const result = fn({
      fail: () => undefined,
      complete: () => undefined,
    });
    if (
      result != null &&
      typeof (result as Promise<unknown>).then === "function"
    ) {
      (result as Promise<unknown>).catch(() => undefined);
    }
  } catch {
    // ignore unsupported APIs
  }
};

/** 隱藏 Tuya 面板原生懸浮「…」與標題列 icon（含關閉） */
export const hidePanelFloatingButtons = (): void => {
  const { ty } = globalThis as {
    ty?: Record<string, (p?: Record<string, unknown>) => unknown>;
  };
  callChromeApi(ty?.hideMenuButton);
  callChromeApi(ty?.hideBoardTitleIcon);
};
