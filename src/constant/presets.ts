export type ScenePresetKey =
  | "standard"
  | "nighttime"
  | "goOut"
  | "doubleFeeding"
  | "custom";

export interface ScenePreset {
  key: ScenePresetKey;
  ml: number;
  temp: 20 | 25 | 30 | 35 | 40;
  /** formula_water：每勺对应水量 mL */
  formulaWaterMl: number;
  /** formula_ratio raw（每勺克数 * 10，scale 1） */
  formulaRatio: number;
  /** When true, gauge highlights powder amount instead of water */
  powderPrimary?: boolean;
}

export const SCENE_PRESETS: Record<
  Exclude<ScenePresetKey, "custom">,
  ScenePreset
> = {
  standard: {
    key: "standard",
    ml: 180,
    temp: 40,
    formulaWaterMl: 100,
    formulaRatio: 130,
  },
  nighttime: {
    key: "nighttime",
    ml: 120,
    temp: 35,
    formulaWaterMl: 100,
    formulaRatio: 130,
    powderPrimary: true,
  },
  goOut: {
    key: "goOut",
    ml: 240,
    temp: 40,
    formulaWaterMl: 100,
    formulaRatio: 130,
  },
  doubleFeeding: {
    key: "doubleFeeding",
    ml: 300,
    temp: 40,
    formulaWaterMl: 100,
    formulaRatio: 130,
  },
};

export const ML_MIN = 60;
export const ML_MAX = 300;
export const ML_STEP = 10;
export const OZ_MIN = 2;
export const OZ_MAX = 10;
export const OZ_STEP = 1;
export const GAUGE_ML_MAX = 420;
