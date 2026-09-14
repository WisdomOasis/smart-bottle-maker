import dpCodes from "@/constant/dpCodes";
import { ML_MAX, ML_MIN } from "@/constant/presets";

export type WorkMode = "milk" | "water" | "powder" | "clean";
export type UnitSet = "mL" | "oz";
export type TempSet = 20 | 25 | 30 | 35 | 40;

/** 與 devices/schema.ts temp enum 一致 */
export const TEMP_SET_OPTIONS: TempSet[] = [20, 25, 30, 35, 40];
export const TEMP_MIN = TEMP_SET_OPTIONS[0];
export const TEMP_MAX = TEMP_SET_OPTIONS[TEMP_SET_OPTIONS.length - 1];

export const WORK_MODES: WorkMode[] = ["milk", "water", "powder", "clean"];

export const isWorking = (status: unknown): boolean =>
  status === true || status === "true";

export const parseWorkMode = (raw: unknown): WorkMode => {
  if (typeof raw === "string" && WORK_MODES.includes(raw as WorkMode)) {
    return raw as WorkMode;
  }
  return "milk";
};

export const parseTemp = (raw: unknown): TempSet => {
  const n = typeof raw === "number" ? raw : Number(raw);
  if (n === 20 || n === 25 || n === 30 || n === 35 || n === 40) return n;
  return 40;
};

export const parseUnit = (raw: unknown): UnitSet => {
  if (raw === "oz" || raw === "OZ") return "oz";
  return "mL";
};

export const clampMl = (val: number) =>
  Math.min(ML_MAX, Math.max(ML_MIN, Math.round(val / 10) * 10));

export const formulaRatioToDisplay = (raw: number) => raw / 10;

export const calcPowderGrams = (ml: number, formulaRatioRaw: number) => {
  const ratio = formulaRatioToDisplay(formulaRatioRaw);
  return Math.round((ml * ratio) / 100);
};

export const FORMULA_RATIO_MIN = 25;
export const FORMULA_RATIO_MAX = 350;

export const powderGramsToFormulaRatio = (
  ml: number,
  grams: number
): number => {
  if (ml <= 0) return FORMULA_RATIO_MIN;
  const raw = Math.round((grams * 1000) / ml);
  return Math.min(FORMULA_RATIO_MAX, Math.max(FORMULA_RATIO_MIN, raw));
};

export const ozToMl = (oz: number) => Math.round(oz * 29.57);

export const mlToOz = (ml: number) => Math.round(ml / 29.57);

/** formula_water：每勺对应水量 mL */
export const FORMULA_WATER_MIN = 30;
export const FORMULA_WATER_MAX = 300;
export const FORMULA_DENSITY_MIN = 5;
export const FORMULA_DENSITY_MAX = 15;
export const FORMULA_DENSITY_DEFAULT = 10;

export const clampFormulaWater = (ml: number): number =>
  Math.min(FORMULA_WATER_MAX, Math.max(FORMULA_WATER_MIN, Math.round(ml)));

export const clampFormulaDensity = (raw: number): number =>
  Math.min(FORMULA_DENSITY_MAX, Math.max(FORMULA_DENSITY_MIN, Math.round(raw)));

/** Scoop model: powder grams per scoop → formula_ratio raw (×10) */
export const scoopPowderGramsToFormulaRatio = (grams: number): number =>
  Math.min(
    FORMULA_RATIO_MAX,
    Math.max(FORMULA_RATIO_MIN, Math.round(grams * 10))
  );

/** 配方 DP 批次（formula pages / powder brand 使用 scoop 模型） */
export const buildFormulaSettingDpPayload = (
  waterMl: number,
  powderG: number,
  densityRaw: number = FORMULA_DENSITY_DEFAULT
): Record<string, number> => ({
  [dpCodes.formulaWater]: clampFormulaWater(waterMl),
  [dpCodes.formulaRatio]: scoopPowderGramsToFormulaRatio(powderG),
  [dpCodes.formulaDensity]: clampFormulaDensity(densityRaw),
});

export const getVolumeFromDp = (
  dpState: Record<string, unknown>,
  unit: UnitSet
): number => {
  if (unit === "oz") {
    const oz = Number(dpState[dpCodes.volumeOz] ?? 6);
    return ozToMl(Number.isNaN(oz) ? 6 : oz);
  }
  const ml = Number(dpState[dpCodes.volumeMl] ?? 180);
  return clampMl(Number.isNaN(ml) ? 180 : ml);
};
