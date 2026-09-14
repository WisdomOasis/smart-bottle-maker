import type { BarcodeFormulaResult } from "@/utils/barcodeLookup";
import { router } from "@ray-js/ray";

export const BARCODE_RESULT_STORAGE_KEY = "smart_bottle_barcode_result";
export const BARCODE_RESULT_RETURN_ROUTE_KEY =
  "smart_bottle_barcode_result_return";

export type BarcodeResultReturnRoute =
  | "/formula"
  | "/enter-barcode"
  | "/search-brand";

export type BarcodeResultSource = "scan" | "manual";

export const DEFAULT_BARCODE_RESULT_RETURN_ROUTE: BarcodeResultReturnRoute =
  "/formula";

export const BARCODE_RESULT_SOURCE_KEY = "smart_bottle_barcode_result_source";

type TyStorage = {
  setStorageSync?: (o: { key: string; data: unknown }) => void;
  getStorageSync?: (o: { key: string }) => unknown;
  removeStorageSync?: (o: { key: string }) => void;
};

const getTy = (): TyStorage | undefined =>
  (globalThis as { ty?: TyStorage }).ty;

const readRaw = (): unknown => {
  try {
    const res = getTy()?.getStorageSync?.({ key: BARCODE_RESULT_STORAGE_KEY });
    if (res && typeof res === "object" && "data" in res) {
      return (res as { data: unknown }).data;
    }
    return res ?? null;
  } catch {
    return null;
  }
};

export const writeBarcodeResult = (
  result: BarcodeFormulaResult,
  source: BarcodeResultSource = "manual"
): void => {
  try {
    getTy()?.setStorageSync?.({
      key: BARCODE_RESULT_STORAGE_KEY,
      data: result,
    });
    writeBarcodeResultSource(source);
  } catch {
    /* ignore */
  }
};

export const writeBarcodeResultSource = (source: BarcodeResultSource): void => {
  try {
    getTy()?.setStorageSync?.({
      key: BARCODE_RESULT_SOURCE_KEY,
      data: source,
    });
  } catch {
    /* ignore */
  }
};

export const readBarcodeResultSource = (): BarcodeResultSource => {
  try {
    const res = getTy()?.getStorageSync?.({ key: BARCODE_RESULT_SOURCE_KEY });
    const data =
      res && typeof res === "object" && "data" in res
        ? (res as { data: unknown }).data
        : res;
    return data === "scan" ? "scan" : "manual";
  } catch {
    return "manual";
  }
};

export const readBarcodeResult = (): BarcodeFormulaResult | null => {
  const data = readRaw();
  if (!data || typeof data !== "object") return null;
  const r = data as BarcodeFormulaResult;
  if (!r.barcode || !r.selection) return null;
  return r;
};

export const clearBarcodeResult = (): void => {
  try {
    getTy()?.removeStorageSync?.({ key: BARCODE_RESULT_STORAGE_KEY });
    getTy()?.removeStorageSync?.({ key: BARCODE_RESULT_SOURCE_KEY });
  } catch {
    /* ignore */
  }
};

const readReturnRouteRaw = (): unknown => {
  try {
    const res = getTy()?.getStorageSync?.({
      key: BARCODE_RESULT_RETURN_ROUTE_KEY,
    });
    if (res && typeof res === "object" && "data" in res) {
      return (res as { data: unknown }).data;
    }
    return res ?? null;
  } catch {
    return null;
  }
};

export const writeBarcodeResultReturnRoute = (
  route: BarcodeResultReturnRoute
): void => {
  try {
    getTy()?.setStorageSync?.({
      key: BARCODE_RESULT_RETURN_ROUTE_KEY,
      data: route,
    });
  } catch {
    /* ignore */
  }
};

export const readBarcodeResultReturnRoute = (): BarcodeResultReturnRoute => {
  const route = readReturnRouteRaw();
  if (route === "/enter-barcode") return "/enter-barcode";
  if (route === "/search-brand") return "/search-brand";
  return DEFAULT_BARCODE_RESULT_RETURN_ROUTE;
};

export const clearBarcodeResultReturnRoute = (): void => {
  try {
    getTy()?.removeStorageSync?.({ key: BARCODE_RESULT_RETURN_ROUTE_KEY });
  } catch {
    /* ignore */
  }
};

export const clearBarcodeResultSession = (): void => {
  clearBarcodeResult();
  clearBarcodeResultReturnRoute();
};

/** replace 到 Result 後 Formula 不在堆疊中，返回需走記錄的來源頁 */
export const navigateBackFromBarcodeResult = (): void => {
  const returnRoute = readBarcodeResultReturnRoute();
  clearBarcodeResultSession();
  router.replace(returnRoute);
};
