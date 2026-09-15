import {
  getMenuButtonBoundingClientRectSync,
  getSystemInfoSync,
} from "@ray-js/ray";

/**
 * Top inset so custom nav sits fully below the native capsule / status bar.
 */
export const getCustomNavTopInset = (): number => {
  let statusBarHeight = 0;
  try {
    const info = getSystemInfoSync?.() as
      | { statusBarHeight?: number }
      | undefined;
    statusBarHeight = Number(info?.statusBarHeight) || 0;
  } catch {
    // ignore
  }

  const fallback = Math.max(88, Math.ceil(statusBarHeight + 44));

  try {
    const menu = getMenuButtonBoundingClientRectSync?.();
    if (menu && typeof menu.bottom === "number" && menu.bottom > 0) {
      return Math.max(fallback, Math.ceil(menu.bottom + 8));
    }
  } catch {
    // IDE / platforms without capsule API
  }

  return fallback;
};
