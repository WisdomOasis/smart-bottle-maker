import { formatDefaultFormulaRatioLabel as formatDefaultRatio } from "@/i18n/formatters";

/** Default device formula when no saved formula is enabled. */
export const DEFAULT_FORMULA_WATER_ML = 60;
export const DEFAULT_FORMULA_POWDER_G = 9;
/** formula_ratio raw：每勺 9g → 90（scale 1） */
export const DEFAULT_FORMULA_RATIO_RAW = 90;

export const formatDefaultFormulaRatioLabel = (): string =>
  formatDefaultRatio(DEFAULT_FORMULA_WATER_ML, DEFAULT_FORMULA_POWDER_G);
