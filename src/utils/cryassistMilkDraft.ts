import {
  brewPowderGramsToFormulaRatio,
  calcBrewPowderGrams,
  clampFormulaWater,
  clampMl,
  clampOz,
  FORMULA_RATIO_MAX,
  FORMULA_RATIO_MIN,
  getBrewPowderBounds,
  mlToOz,
  parseTemp,
  roundToTenth,
  SCOOP_POWDER_STEP_G,
  type TempSet,
  type UnitSet,
} from "@/utils/bottleMaker";

export type CryAssistTemp = TempSet;

export interface CryAssistMilkDraft {
  volumeMl: number;
  powderGrams: number;
  temp: CryAssistTemp;
  sourceFormulaWater: number;
  sourceFormulaRatio: number;
  powderOverridden: boolean;
}

export interface CryAssistMilkRecipe {
  volumeMl: number;
  volumeOz: number;
  temp: CryAssistTemp;
  formulaWater: number;
  formulaRatio: number;
  unitSet: UnitSet;
}

interface CreateDraftInput {
  volumeMl: number;
  temp: number;
  formulaWater: number;
  formulaRatio: number;
}

export const CRYASSIST_ML_MIN = 60;
export const CRYASSIST_ML_MAX = 300;
export const CRYASSIST_ML_STEP = 10;
export const CRYASSIST_TEMP_OPTIONS: CryAssistTemp[] = [20, 25, 30, 35, 40, 45];
export const CRYASSIST_POWDER_STEP = SCOOP_POWDER_STEP_G;

const normalizeVolume = (value: number): number => clampMl(value);

const normalizeTemp = (value: number): CryAssistTemp => parseTemp(value);

const normalizeFormulaWater = (value: number): number =>
  clampFormulaWater(Number.isFinite(Number(value)) ? Number(value) : 100);

const normalizeFormulaRatio = (value: number): number => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 90;
  return Math.min(
    FORMULA_RATIO_MAX,
    Math.max(FORMULA_RATIO_MIN, Math.round(numeric))
  );
};

export const calculateCryAssistPowderGrams = (
  volumeMl: number,
  formulaWater: number,
  formulaRatio: number
): number =>
  calcBrewPowderGrams(
    normalizeVolume(volumeMl),
    normalizeFormulaWater(formulaWater),
    normalizeFormulaRatio(formulaRatio)
  );

export const getCryAssistPowderBounds = (
  volumeMl: number,
  formulaWater = 100
): { min: number; max: number } =>
  getBrewPowderBounds(
    normalizeVolume(volumeMl),
    normalizeFormulaWater(formulaWater)
  );

const clampPowder = (
  volumeMl: number,
  formulaWater: number,
  powderGrams: number
): number => {
  const bounds = getCryAssistPowderBounds(volumeMl, formulaWater);
  return roundToTenth(Math.min(bounds.max, Math.max(bounds.min, powderGrams)));
};

export const createCryAssistMilkDraft = (
  input: CreateDraftInput
): CryAssistMilkDraft => {
  const volumeMl = normalizeVolume(input.volumeMl);
  const sourceFormulaWater = normalizeFormulaWater(input.formulaWater);
  const sourceFormulaRatio = normalizeFormulaRatio(input.formulaRatio);

  return {
    volumeMl,
    powderGrams: calculateCryAssistPowderGrams(
      volumeMl,
      sourceFormulaWater,
      sourceFormulaRatio
    ),
    temp: normalizeTemp(input.temp),
    sourceFormulaWater,
    sourceFormulaRatio,
    powderOverridden: false,
  };
};

export const updateCryAssistVolume = (
  draft: CryAssistMilkDraft,
  volumeMl: number
): CryAssistMilkDraft => {
  const nextVolume = normalizeVolume(volumeMl);
  return {
    ...draft,
    volumeMl: nextVolume,
    // 未手动改粉时：水量变 → 同比例更新粉量（保持每勺配方）
    powderGrams: draft.powderOverridden
      ? clampPowder(nextVolume, draft.sourceFormulaWater, draft.powderGrams)
      : calculateCryAssistPowderGrams(
          nextVolume,
          draft.sourceFormulaWater,
          draft.sourceFormulaRatio
        ),
  };
};

export const overrideCryAssistPowder = (
  draft: CryAssistMilkDraft,
  powderGrams: number
): CryAssistMilkDraft => ({
  ...draft,
  powderGrams: clampPowder(
    draft.volumeMl,
    draft.sourceFormulaWater,
    powderGrams
  ),
  powderOverridden: true,
});

export const updateCryAssistTemp = (
  draft: CryAssistMilkDraft,
  temp: number
): CryAssistMilkDraft => ({ ...draft, temp: normalizeTemp(temp) });

export const buildCryAssistMilkRecipe = (
  draft: CryAssistMilkDraft,
  unitSet: UnitSet = "mL"
): CryAssistMilkRecipe => {
  const { volumeMl } = draft;
  const volumeOz = clampOz(mlToOz(volumeMl));
  if (!draft.powderOverridden) {
    return {
      volumeMl,
      volumeOz,
      temp: draft.temp,
      formulaWater: draft.sourceFormulaWater,
      formulaRatio: draft.sourceFormulaRatio,
      unitSet,
    };
  }

  return {
    volumeMl,
    volumeOz,
    temp: draft.temp,
    formulaWater: draft.sourceFormulaWater,
    formulaRatio: brewPowderGramsToFormulaRatio(
      draft.volumeMl,
      draft.sourceFormulaWater,
      draft.powderGrams
    ),
    unitSet,
  };
};

export const isCryAssistDraftChanged = (
  initial: CryAssistMilkDraft,
  current: CryAssistMilkDraft
): boolean =>
  initial.volumeMl !== current.volumeMl ||
  initial.temp !== current.temp ||
  initial.powderGrams !== current.powderGrams;
