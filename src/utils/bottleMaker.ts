import dpCodes from "@/constant/dpCodes";
import { ML_MAX, ML_MIN, OZ_MAX, OZ_MIN } from "@/constant/presets";

export type WorkMode = "milk" | "water" | "powder" | "clean";
export type UnitSet = "mL" | "oz";
export type TempSet = 20 | 25 | 30 | 35 | 40 | 45;

/** 與 devices/schema.ts temp 範圍一致 */
export const TEMP_SET_OPTIONS: TempSet[] = [20, 25, 30, 35, 40, 45];
export const TEMP_MIN = TEMP_SET_OPTIONS[0];
export const TEMP_MAX = TEMP_SET_OPTIONS[TEMP_SET_OPTIONS.length - 1];

export const WORK_MODES: WorkMode[] = ["milk", "water", "powder", "clean"];

/** 布林 DP（working_status / child_lock 等）：塗鴉常回報 true / 1 / "true" */
export const isWorking = (status: unknown): boolean =>
  status === true || status === 1 || status === "true" || status === "1";

export const parseWorkMode = (raw: unknown): WorkMode => {
  if (typeof raw === "string" && WORK_MODES.includes(raw as WorkMode)) {
    return raw as WorkMode;
  }
  return "milk";
};

export const parseTemp = (raw: unknown): TempSet => {
  const n = typeof raw === "number" ? raw : Number(raw);
  if (n === 20 || n === 25 || n === 30 || n === 35 || n === 40 || n === 45)
    return n;
  return 40;
};

export const parseUnit = (raw: unknown): UnitSet => {
  if (raw === "oz" || raw === "OZ") return "oz";
  return "mL";
};

export const clampMl = (val: number) =>
  Math.min(ML_MAX, Math.max(ML_MIN, Math.round(val / 10) * 10));

export const clampOz = (val: number) =>
  Math.min(OZ_MAX, Math.max(OZ_MIN, Math.round(Number(val) || OZ_MIN)));

/** DP / 产品约定：1 oz ≈ 29.57 mL */
export const OZ_TO_ML = 29.57;

export const ozToMl = (oz: number) => Math.round(Number(oz) * OZ_TO_ML);

export const mlToOz = (ml: number) => Math.round(Number(ml) / OZ_TO_ML);

/**
 * 感測器：true/1 = 正常裝配；false/0 = 拆除。
 * 未上報 / 關閉功能視為正常裝配。
 */
export const parseSensorInstalled = (raw: unknown): boolean => {
  if (raw === undefined || raw === null) return true;
  if (raw === false || raw === 0 || raw === "false" || raw === "0")
    return false;
  return true;
};

export type ErrorCode =
  | "none"
  | "Hot"
  | "E01"
  | "E02"
  | "E03"
  | "C01"
  | "C02"
  | "C03"
  | "C04";

export const parseErrorCode = (raw: unknown): ErrorCode => {
  const codes: ErrorCode[] = [
    "none",
    "Hot",
    "E01",
    "E02",
    "E03",
    "C01",
    "C02",
    "C03",
    "C04",
  ];
  if (typeof raw === "string" && codes.includes(raw as ErrorCode)) {
    return raw as ErrorCode;
  }
  return "none";
};

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

/** DP112 formula_ratio：raw 25–350、scale 1 → 每勺粉量 2.5–35.0g */
export const FORMULA_RATIO_MIN = 25;
export const FORMULA_RATIO_MAX = 350;
export const SCOOP_POWDER_MIN_G = 2.5;
export const SCOOP_POWDER_MAX_G = 35;
export const SCOOP_POWDER_STEP_G = 0.1;

export const roundToTenth = (value: number): number =>
  Math.round(value * 10) / 10;

/** Scoop model: powder grams per scoop → formula_ratio raw (×10) */
export const scoopPowderGramsToFormulaRatio = (grams: number): number =>
  Math.min(
    FORMULA_RATIO_MAX,
    Math.max(FORMULA_RATIO_MIN, Math.round(Number(grams) * 10))
  );

export const formulaRatioToScoopGrams = (raw: number): number => {
  const clamped = Math.min(
    FORMULA_RATIO_MAX,
    Math.max(FORMULA_RATIO_MIN, Number(raw) || FORMULA_RATIO_MIN)
  );
  return roundToTenth(clamped / 10);
};

/** @deprecated 使用 formulaRatioToScoopGrams */
export const formulaRatioToDisplay = (raw: number) =>
  formulaRatioToScoopGrams(raw);

/**
 * PRD：单次粉量 = 目标水量 / 每勺水量 × 每勺粉量
 * formula_ratio raw 为每勺克数 ×10
 */
export const calcBrewPowderGrams = (
  volumeMl: number,
  formulaWaterMl: number,
  formulaRatioRaw: number
): number => {
  const scoopG = formulaRatioToScoopGrams(formulaRatioRaw);
  const scoopWater = clampFormulaWater(formulaWaterMl);
  const ml = Math.max(1, Number(volumeMl) || 0);
  return roundToTenth((ml / scoopWater) * scoopG);
};

/** 由单次粉量反推 formula_ratio raw（保持每勺水量） */
export const brewPowderGramsToFormulaRatio = (
  volumeMl: number,
  formulaWaterMl: number,
  brewPowderG: number
): number => {
  const scoopWater = clampFormulaWater(formulaWaterMl);
  const ml = Math.max(1, Number(volumeMl) || 0);
  const scoopG = (Number(brewPowderG) * scoopWater) / ml;
  return scoopPowderGramsToFormulaRatio(scoopG);
};

export const getBrewPowderBounds = (
  volumeMl: number,
  formulaWaterMl: number
): { min: number; max: number } => {
  const min = calcBrewPowderGrams(volumeMl, formulaWaterMl, FORMULA_RATIO_MIN);
  const max = calcBrewPowderGrams(volumeMl, formulaWaterMl, FORMULA_RATIO_MAX);
  return { min, max: Math.max(roundToTenth(min + SCOOP_POWDER_STEP_G), max) };
};

/**
 * @deprecated 请改用 calcBrewPowderGrams(ml, formulaWater, raw)
 */
export const calcPowderGrams = (
  ml: number,
  formulaRatioRaw: number,
  formulaWaterMl = 100
) => calcBrewPowderGrams(ml, formulaWaterMl, formulaRatioRaw);

/**
 * @deprecated 请改用 brewPowderGramsToFormulaRatio
 */
export const powderGramsToFormulaRatio = (
  ml: number,
  grams: number,
  formulaWaterMl = 100
): number => brewPowderGramsToFormulaRatio(ml, formulaWaterMl, grams);

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
