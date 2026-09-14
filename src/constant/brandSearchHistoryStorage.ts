const BRAND_SEARCH_HISTORY_KEY = "smart_bottle_brand_search_history";
const MAX_HISTORY = 8;

type TyStorage = {
  setStorageSync?: (o: { key: string; data: unknown }) => void;
  getStorageSync?: (o: { key: string }) => unknown;
};

const getTy = (): TyStorage | undefined =>
  (globalThis as { ty?: TyStorage }).ty;

const readRaw = (): unknown => {
  try {
    const res = getTy()?.getStorageSync?.({ key: BRAND_SEARCH_HISTORY_KEY });
    if (res && typeof res === "object" && "data" in res) {
      return (res as { data: unknown }).data;
    }
    return res ?? null;
  } catch {
    return null;
  }
};

export const readBrandSearchHistory = (): string[] => {
  const data = readRaw();
  if (!Array.isArray(data)) return [];
  return data.filter(
    (item): item is string => typeof item === "string" && item.trim().length > 0
  );
};

export const pushBrandSearchHistory = (label: string): void => {
  const trimmed = label.trim();
  if (!trimmed) return;
  const next = [
    trimmed,
    ...readBrandSearchHistory().filter((item) => item !== trimmed),
  ].slice(0, MAX_HISTORY);
  try {
    getTy()?.setStorageSync?.({ key: BRAND_SEARCH_HISTORY_KEY, data: next });
  } catch {
    /* ignore */
  }
};
