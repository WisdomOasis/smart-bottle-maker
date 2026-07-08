const FORMULA_DETAIL_ENTRY_KEY = "smart_bottle_formula_detail_entry";

type TyStorage = {
  getStorageSync?: (o: { key: string }) => unknown;
  setStorageSync?: (o: { key: string; data: unknown }) => void;
  removeStorageSync?: (o: { key: string }) => void;
};

const getTy = (): TyStorage | undefined =>
  (globalThis as { ty?: TyStorage }).ty;

export const writeFormulaDetailEntryId = (entryId: string): void => {
  try {
    getTy()?.setStorageSync?.({
      key: FORMULA_DETAIL_ENTRY_KEY,
      data: entryId,
    });
  } catch {
    /* ignore */
  }
};

export const readFormulaDetailEntryId = (): string | null => {
  try {
    const res = getTy()?.getStorageSync?.({ key: FORMULA_DETAIL_ENTRY_KEY });
    const data =
      res && typeof res === "object" && "data" in res
        ? (res as { data: unknown }).data
        : res;
    return typeof data === "string" && data ? data : null;
  } catch {
    return null;
  }
};

export const clearFormulaDetailEntryId = (): void => {
  try {
    getTy()?.removeStorageSync?.({ key: FORMULA_DETAIL_ENTRY_KEY });
  } catch {
    /* ignore */
  }
};
