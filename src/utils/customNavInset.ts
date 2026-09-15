import { useEffect, useState } from "react";
import {
  getMenuButtonBoundingClientRect,
  getSystemInfoSync,
} from "@ray-js/ray";

type SystemInfoLike = {
  statusBarHeight?: number;
};

type MenuRect = {
  bottom?: number;
};

const readSystemInfo = (): SystemInfoLike => {
  try {
    return (getSystemInfoSync?.() as SystemInfoLike) || {};
  } catch {
    return {};
  }
};

/**
 * Top inset so custom nav sits fully below the native capsule / status bar.
 * Large fallback (88) matches the last working commit — too-small top inset
 * leaves only the bottom of nav icons tappable under the capsule.
 * Never call getMenuButtonBoundingClientRectSync (IDE stubs crash / hook errors).
 */
export const getCustomNavTopInset = (): number => {
  const { statusBarHeight = 0 } = readSystemInfo();
  const bar = Number(statusBarHeight) || 0;
  return Math.max(88, Math.ceil(bar + 44));
};

const topInsetFromMenu = (menu: MenuRect, fallback: number): number => {
  if (typeof menu.bottom === "number" && menu.bottom > 0) {
    return Math.max(fallback, Math.ceil(menu.bottom + 8));
  }
  return fallback;
};

const fetchMenuButtonRect = (): Promise<MenuRect | null> =>
  new Promise((resolve) => {
    try {
      if (typeof getMenuButtonBoundingClientRect !== "function") {
        resolve(null);
        return;
      }
      let settled = false;
      const finish = (rect: MenuRect | null) => {
        if (settled) return;
        settled = true;
        resolve(rect);
      };
      getMenuButtonBoundingClientRect({
        success: (rect) => finish(rect || null),
        fail: () => finish(null),
        complete: () => {
          setTimeout(() => finish(null), 0);
        },
      });
    } catch {
      resolve(null);
    }
  });

/**
 * Prefer async capsule bottom on real devices; fall back to the sync-safe value.
 */
export const useCustomNavTopInset = (): number => {
  const [topInset, setTopInset] = useState(getCustomNavTopInset);

  useEffect(() => {
    let cancelled = false;
    fetchMenuButtonRect().then((menu) => {
      if (cancelled || !menu) return;
      setTopInset(topInsetFromMenu(menu, getCustomNavTopInset()));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return topInset;
};
