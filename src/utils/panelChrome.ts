/** 隱藏 Tuya 面板原生懸浮「…」與標題列 icon（含關閉） */
export const hidePanelFloatingButtons = (): void => {
  const { ty } = globalThis as {
    ty?: Record<string, (p?: Record<string, unknown>) => unknown>;
  };

  try {
    const systemInfo = ty?.getSystemInfoSync?.() as
      | { brand?: string }
      | undefined;
    if (systemInfo?.brand === "devtools") return;
  } catch {
    // Continue on hosts that do not expose system information here.
  }

  [ty?.hideMenuButton, ty?.hideBoardTitleIcon].forEach((method) => {
    try {
      const result = method?.({ fail: () => undefined });
      if (
        result &&
        typeof (result as { catch?: unknown }).catch === "function"
      ) {
        (result as Promise<unknown>).catch(() => undefined);
      }
    } catch {
      // These optional host APIs are unavailable in some IDE runtimes.
    }
  });
};
