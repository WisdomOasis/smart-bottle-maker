export const BRAND_BANNER_CLICKED_KEY = "smart_bottle_brand_banner_clicked";

export const readBrandBannerClicked = (): boolean => {
  try {
    const { ty } = globalThis as {
      ty?: { getStorageSync?: (o: { key: string }) => unknown };
    };
    const res = ty?.getStorageSync?.({ key: BRAND_BANNER_CLICKED_KEY });
    const data =
      res && typeof res === "object" && "data" in res
        ? (res as { data: unknown }).data
        : res;
    return data === true || data === "true" || data === 1;
  } catch {
    return false;
  }
};

export const writeBrandBannerClicked = (): void => {
  try {
    const { ty } = globalThis as {
      ty?: { setStorageSync?: (o: { key: string; data: boolean }) => void };
    };
    ty?.setStorageSync?.({ key: BRAND_BANNER_CLICKED_KEY, data: true });
  } catch {
    /* ignore */
  }
};
