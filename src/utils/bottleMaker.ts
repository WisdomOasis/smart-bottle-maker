import dpCodes from "@/constant/dpCodes";
import { ML_MAX, ML_MIN } from "@/constant/presets";

export type WorkMode = "milk" | "water" | "powder" | "clean" | "idle";
export type UnitSet = "mL" | "oz";
export type TempSet = 37 | 40 | 45 | 70;

/** 與 devices/schema.ts temp enum 一致 */
export const TEMP_SET_OPTIONS: TempSet[] = [37, 40, 45];
export const HIGH_TEMP_CLEAN_TEMP_SET = 70 as TempSet;
export const TEMP_MIN = TEMP_SET_OPTIONS[0];
export const TEMP_MAX = TEMP_SET_OPTIONS[TEMP_SET_OPTIONS.length - 1];

export const WORK_MODES: WorkMode[] = [
  "milk",
  "water",
  "powder",
  "clean",
  "idle",
];

export const isWorking = (mode: WorkMode | string | undefined): boolean =>
  Boolean(mode && mode !== "idle");

export const parseWorkMode = (raw: unknown): WorkMode => {
  if (typeof raw === "string" && WORK_MODES.includes(raw as WorkMode)) {
    return raw as WorkMode;
  }
  return "idle";
};

export const parseTemp = (raw: unknown): TempSet => {
  const n = typeof raw === "number" ? raw : Number(raw);
  if (n === 37 || n === 40 || n === 45 || n === 70) return n;
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

export const FORMULA_RATIO_MIN = 36;
export const FORMULA_RATIO_MAX = 660;

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

export type StartBlockReason =
  | "none"
  | "water_tank_missing"
  | "low_water"
  | "powder_box_missing"
  | "funnel_missing"
  | "bottle_missing"
  | "hot_alert";

export const parseBlockReason = (raw: unknown): StartBlockReason => {
  const reasons: StartBlockReason[] = [
    "none",
    "water_tank_missing",
    "low_water",
    "powder_box_missing",
    "funnel_missing",
    "bottle_missing",
    "hot_alert",
  ];
  if (typeof raw === "string" && reasons.includes(raw as StartBlockReason)) {
    return raw as StartBlockReason;
  }
  return "none";
};

/** @deprecated 請改用 dpControl.pulseBoolDp */
export const pulseStartDp = (
  setDp: (code: string, val: unknown) => boolean,
  code: string
) => {
  const ok = setDp(code, true);
  if (ok) {
    setTimeout(() => setDp(code, false), 400);
  }
  return ok;
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
