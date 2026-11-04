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

let hidePaused = 0;

/** Native scanCode overlays can be dismissed by hideMenuButton; pause while scanning. */
export const pausePanelChromeHide = (): void => {
  hidePaused += 1;
};

export const resumePanelChromeHide = (): void => {
  hidePaused = Math.max(0, hidePaused - 1);
};

const withTy = (run: (ty: TyChrome) => void): void => {
  const { ty } = globalThis as { ty?: TyChrome };
  if (!ty) return;
  run(ty);
};

/**
 * 隱藏 Tuya 面板原生懸浮「…」與標題列 icon（含關閉）。
 * 只用非 Sync API：IDE 常掛了 *Sync 名稱但未實作，呼叫會噴錯。
 */
export const hidePanelFloatingButtons = (): void => {
  if (hidePaused > 0) return;
  withTy((ty) => {
    callChromeApi(ty.hideMenuButton);
    callChromeApi(ty.hideBoardTitleIcon);
  });
};

/** Native scanCode can no-op while the capsule is hidden; show it just before scanning. */
export const showPanelFloatingButtons = (): void => {
  withTy((ty) => {
    callChromeApi(ty.showMenuButton);
    callChromeApi(ty.showBoardTitleIcon);
  });
};
