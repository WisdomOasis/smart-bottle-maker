import dpCodes from "@/constant/dpCodes";
import { ML_MAX, ML_MIN } from "@/constant/presets";

/** 設備 work_mode 枚舉；idle 為 App 端合成狀態（working_status=false / 未知） */
export type WorkMode = "milk" | "water" | "powder" | "clean" | "idle";
export type UnitSet = "mL" | "oz";
/** temp DP：20–40℃，步进 5 */
export type TempSet = 20 | 25 | 30 | 35 | 40;

export const TEMP_SET_OPTIONS: TempSet[] = [20, 25, 30, 35, 40];
export const TEMP_STEP = 5;
export const TEMP_MIN = TEMP_SET_OPTIONS[0];
export const TEMP_MAX = TEMP_SET_OPTIONS[TEMP_SET_OPTIONS.length - 1];

export const WORK_MODES: WorkMode[] = [
  "milk",
  "water",
  "powder",
  "clean",
  "idle",
];

export const DEVICE_WORK_MODES: Exclude<WorkMode, "idle">[] = [
  "milk",
  "water",
  "powder",
  "clean",
];

export const isWorking = (mode: WorkMode | string | undefined): boolean =>
  Boolean(mode && mode !== "idle");

export const parseWorkingStatus = (raw: unknown): boolean =>
  raw === true || raw === 1 || raw === "true";

/** 設備正在執行：work_mode 非 idle 且 working_status 為 true */
export const isActivelyWorking = (
  mode: WorkMode,
  workingStatus: boolean
): boolean => isWorking(mode) && workingStatus;

export const parseWorkMode = (raw: unknown): WorkMode => {
  if (
    typeof raw === "string" &&
    DEVICE_WORK_MODES.includes(raw as Exclude<WorkMode, "idle">)
  ) {
    return raw as WorkMode;
  }
  return "idle";
};

export const parseTemp = (raw: unknown): TempSet => {
  const n = typeof raw === "number" ? raw : Number(raw);
  if (
    TEMP_SET_OPTIONS.includes(n as TempSet) ||
    (n >= TEMP_MIN && n <= TEMP_MAX && n % TEMP_STEP === 0)
  ) {
    const snapped = Math.round(n / TEMP_STEP) * TEMP_STEP;
    if (TEMP_SET_OPTIONS.includes(snapped as TempSet)) {
      return snapped as TempSet;
    }
  }
  return 40;
};

export const parseUnit = (raw: unknown): UnitSet => {
  if (raw === "oz" || raw === "OZ") return "oz";
  return "mL";
};

export const clampMl = (val: number) =>
  Math.min(ML_MAX, Math.max(ML_MIN, Math.round(val / 10) * 10));

/** formula_ratio：每勺克数，scale 1 → display g = raw / 10 */
export const FORMULA_RATIO_MIN = 25;
export const FORMULA_RATIO_MAX = 350;

/** formula_water：每勺对应水量 mL */
export const FORMULA_WATER_MIN = 30;
export const FORMULA_WATER_MAX = 300;
export const FORMULA_WATER_STEP = 10;

/** formula_density：校准值，scale 1 → 0.5~1.5，默认 1.0 = 10 */
export const FORMULA_DENSITY_MIN = 5;
export const FORMULA_DENSITY_MAX = 15;
export const FORMULA_DENSITY_DEFAULT = 10;

export const formulaRatioToDisplay = (raw: number) => raw / 10;

export const clampFormulaWater = (ml: number): number =>
  Math.min(
    FORMULA_WATER_MAX,
    Math.max(
      FORMULA_WATER_MIN,
      Math.round(ml / FORMULA_WATER_STEP) * FORMULA_WATER_STEP
    )
  );

export const clampFormulaDensity = (raw: number): number =>
  Math.min(FORMULA_DENSITY_MAX, Math.max(FORMULA_DENSITY_MIN, Math.round(raw)));

/** 将粉末克数转为 formula_ratio raw（每勺克数 * 10） */
export const powderGramsToFormulaRatio = (grams: number): number => {
  const raw = Math.round(grams * 10);
  return Math.min(FORMULA_RATIO_MAX, Math.max(FORMULA_RATIO_MIN, raw));
};

/**
 * 依配方 DP 计算本次冲调粉量：
 * (volumeMl / formula_water) * (formula_ratio/10) * (formula_density/10)
 */
export const calcPowderGrams = (
  volumeMl: number,
  formulaRatioRaw: number,
  formulaWaterMl = 100,
  formulaDensityRaw: number = FORMULA_DENSITY_DEFAULT
): number => {
  if (formulaWaterMl <= 0) return 0;
  const scoopG = formulaRatioToDisplay(formulaRatioRaw);
  const density = formulaDensityRaw / 10;
  return Math.round((volumeMl / formulaWaterMl) * scoopG * density);
};

/** 构建奶粉信息页应下发的配方三 DP */
export const buildFormulaSettingDpPayload = (
  waterMl: number,
  powderG: number,
  densityRaw: number = FORMULA_DENSITY_DEFAULT
): Record<string, number> => ({
  [dpCodes.formulaWater]: clampFormulaWater(waterMl),
  [dpCodes.formulaRatio]: powderGramsToFormulaRatio(powderG),
  [dpCodes.formulaDensity]: clampFormulaDensity(densityRaw),
});

export const ozToMl = (oz: number) => Math.round(oz * 29.57);

export const mlToOz = (ml: number) => Math.round(ml / 29.57);

/**
 * 感测器：true/1 = 正常装配；false/0 = 拆除。
 * 未上报 / 关闭功能视为正常装配。
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

/** drink_record_upload（raw）是否有沖調紀錄 payload */
export const hasDrinkRecordUpload = (raw: unknown): boolean => {
  if (raw == null || raw === false) return false;
  if (typeof raw === "string") return raw.trim().length > 0;
  if (typeof raw === "object")
    return Object.keys(raw as Record<string, unknown>).length > 0;
  return true;
};

export type SceneFeedRequest = "none" | "hungry_pending";

export const parseSceneFeedRequest = (raw: unknown): SceneFeedRequest =>
  raw === "hungry_pending" ? "hungry_pending" : "none";
