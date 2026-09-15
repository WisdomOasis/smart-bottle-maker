/** Soft-call native chrome APIs; IDE often rejects unimplemented ones. */
const swallowPromise = (value: unknown): void => {
  try {
    Promise.resolve(value).catch(() => undefined);
  } catch {
    // ignore
  }
};

const callChromeApi = (
  fn: ((p?: Record<string, unknown>) => unknown) | undefined
): void => {
  if (typeof fn !== "function") return;
  try {
    const result = fn({
      success: () => undefined,
      fail: () => undefined,
      complete: () => undefined,
    });
    swallowPromise(result);
  } catch {
    // ignore unsupported APIs
  }
};

type TyChrome = Record<string, (p?: Record<string, unknown>) => unknown>;

/**
 * 隱藏 Tuya 面板原生懸浮「…」與標題列 icon（含關閉）。
 * 只用非 Sync API：IDE 常掛了 *Sync 名稱但未實作，呼叫會噴錯。
 */
export const hidePanelFloatingButtons = (): void => {
  const { ty } = globalThis as { ty?: TyChrome };
  if (!ty) return;

  callChromeApi(ty.hideMenuButton);
  callChromeApi(ty.hideBoardTitleIcon);
};
