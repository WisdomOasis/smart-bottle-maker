export const CUSTOM_BRAND_ID = "custom";

export const CUSTOM_MIX_WATER_MIN = 0;
export const CUSTOM_MIX_POWDER_MIN = 0;
export const CUSTOM_MIX_POWDER_MAX = 50;

export const CUSTOM_MIX_RATIO_DRAFT_KEY = "smart_bottle_custom_mix_ratio_draft";

export interface CustomMixRatioDraft {
  waterMl: number | null;
  powderG: number | null;
}

export const EMPTY_CUSTOM_MIX_DRAFT: CustomMixRatioDraft = {
  waterMl: null,
  powderG: null,
};

export const readCustomMixRatioDraft = (): CustomMixRatioDraft => {
  try {
    const { ty } = globalThis as {
      ty?: { getStorageSync?: (o: { key: string }) => unknown };
    };
    const res = ty?.getStorageSync?.({ key: CUSTOM_MIX_RATIO_DRAFT_KEY });
    const data =
      res && typeof res === "object" && "data" in res
        ? (res as { data: unknown }).data
        : res;
    if (!data || typeof data !== "object") {
      return { ...EMPTY_CUSTOM_MIX_DRAFT };
    }
    const d = data as CustomMixRatioDraft;
    const water = d.waterMl;
    const powder = d.powderG;
    return {
      waterMl:
        water === null || water === undefined || Number.isNaN(Number(water))
          ? null
          : Number(water),
      powderG:
        powder === null || powder === undefined || Number.isNaN(Number(powder))
          ? null
          : Number(powder),
    };
  } catch {
    return { ...EMPTY_CUSTOM_MIX_DRAFT };
  }
};

export const writeCustomMixRatioDraft = (draft: CustomMixRatioDraft): void => {
  try {
    const { ty } = globalThis as {
      ty?: { setStorageSync?: (o: { key: string; data: unknown }) => void };
    };
    ty?.setStorageSync?.({ key: CUSTOM_MIX_RATIO_DRAFT_KEY, data: draft });
  } catch {
    /* ignore */
  }
};

export const clampCustomWaterMl = (n: number) =>
  Math.max(CUSTOM_MIX_WATER_MIN, Math.round(n));

export const clampCustomPowderG = (n: number) =>
  Math.min(
    CUSTOM_MIX_POWDER_MAX,
    Math.max(CUSTOM_MIX_POWDER_MIN, Math.round(n))
  );

export const isCustomMixRatioComplete = (
  waterMl: number | null,
  powderG: number | null
): boolean => waterMl != null && powderG != null && waterMl > 0 && powderG > 0;
