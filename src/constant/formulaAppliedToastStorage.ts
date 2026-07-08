const FORMULA_TOAST_KEY = "smart_bottle_formula_toast";

export type FormulaToastKind = "applied" | "saved" | "enabled";

type TyStorage = {
  getStorageSync?: (o: { key: string }) => unknown;
  setStorageSync?: (o: { key: string; data: unknown }) => void;
  removeStorageSync?: (o: { key: string }) => void;
};

const getTy = (): TyStorage | undefined =>
  (globalThis as { ty?: TyStorage }).ty;

export const markFormulaAppliedToast = (): void => {
  try {
    getTy()?.setStorageSync?.({ key: FORMULA_TOAST_KEY, data: "applied" });
  } catch {
    /* ignore */
  }
};

export const markFormulaSavedToast = (): void => {
  try {
    getTy()?.setStorageSync?.({ key: FORMULA_TOAST_KEY, data: "saved" });
  } catch {
    /* ignore */
  }
};

export const markFormulaEnabledToast = (): void => {
  try {
    getTy()?.setStorageSync?.({ key: FORMULA_TOAST_KEY, data: "enabled" });
  } catch {
    /* ignore */
  }
};

export const consumeFormulaToast = (): FormulaToastKind | null => {
  try {
    const res = getTy()?.getStorageSync?.({ key: FORMULA_TOAST_KEY });
    const data =
      res && typeof res === "object" && "data" in res
        ? (res as { data: unknown }).data
        : res;
    if (data === "applied" || data === "saved" || data === "enabled") {
      getTy()?.removeStorageSync?.({ key: FORMULA_TOAST_KEY });
      return data;
    }
  } catch {
    /* ignore */
  }
  return null;
};

/** @deprecated use consumeFormulaToast */
export const consumeFormulaAppliedToast = (): boolean =>
  consumeFormulaToast() === "applied";
