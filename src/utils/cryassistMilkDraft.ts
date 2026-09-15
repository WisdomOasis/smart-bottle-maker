export type CryAssistTemp = 20 | 25 | 30 | 35 | 40;

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
  temp: CryAssistTemp;
  formulaWater: number;
  formulaRatio: number;
  unitSet: "mL";
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
export const CRYASSIST_TEMP_OPTIONS: CryAssistTemp[] = [20, 25, 30, 35, 40];

const FORMULA_WATER_MIN = 30;
const FORMULA_WATER_MAX = 300;
const FORMULA_RATIO_MIN = 25;
const FORMULA_RATIO_MAX = 350;

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

const roundToTenth = (value: number): number => Math.round(value * 10) / 10;

const normalizeVolume = (value: number): number =>
  clamp(
    Math.round(value / CRYASSIST_ML_STEP) * CRYASSIST_ML_STEP,
    CRYASSIST_ML_MIN,
    CRYASSIST_ML_MAX
  );

const normalizeTemp = (value: number): CryAssistTemp => {
  const numeric = Number(value);
  return CRYASSIST_TEMP_OPTIONS.reduce((closest, option) =>
    Math.abs(option - numeric) < Math.abs(closest - numeric) ? option : closest
  );
};

const normalizeFormulaWater = (value: number): number => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 100;
  return clamp(Math.round(numeric), FORMULA_WATER_MIN, FORMULA_WATER_MAX);
};

const normalizeFormulaRatio = (value: number): number => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 130;
  return clamp(Math.round(numeric), FORMULA_RATIO_MIN, FORMULA_RATIO_MAX);
};

export const calculateCryAssistPowderGrams = (
  volumeMl: number,
  formulaWater: number,
  formulaRatio: number
): number => {
  const safeWater = normalizeFormulaWater(formulaWater);
  const safeRatio = normalizeFormulaRatio(formulaRatio);
  return roundToTenth(
    (normalizeVolume(volumeMl) * safeRatio) / (safeWater * 10)
  );
};

export const getCryAssistPowderBounds = (
  volumeMl: number
): { min: number; max: number } => {
  const safeVolume = normalizeVolume(volumeMl);
  const min = Math.ceil((safeVolume * FORMULA_RATIO_MIN) / 100) / 10;
  const max = Math.floor((safeVolume * FORMULA_RATIO_MAX) / 100) / 10;
  return { min, max: Math.max(min + 0.1, max) };
};

const clampPowder = (volumeMl: number, powderGrams: number): number => {
  const bounds = getCryAssistPowderBounds(volumeMl);
  return roundToTenth(clamp(powderGrams, bounds.min, bounds.max));
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
    powderGrams: draft.powderOverridden
      ? clampPowder(nextVolume, draft.powderGrams)
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
  powderGrams: clampPowder(draft.volumeMl, powderGrams),
  powderOverridden: true,
});

export const updateCryAssistTemp = (
  draft: CryAssistMilkDraft,
  temp: number
): CryAssistMilkDraft => ({ ...draft, temp: normalizeTemp(temp) });

export const buildCryAssistMilkRecipe = (
  draft: CryAssistMilkDraft
): CryAssistMilkRecipe => {
  if (!draft.powderOverridden) {
    return {
      volumeMl: draft.volumeMl,
      temp: draft.temp,
      formulaWater: draft.sourceFormulaWater,
      formulaRatio: draft.sourceFormulaRatio,
      unitSet: "mL",
    };
  }

  return {
    volumeMl: draft.volumeMl,
    temp: draft.temp,
    formulaWater: 100,
    formulaRatio: normalizeFormulaRatio(
      (draft.powderGrams * 1000) / draft.volumeMl
    ),
    unitSet: "mL",
  };
};

export const isCryAssistDraftChanged = (
  initial: CryAssistMilkDraft,
  current: CryAssistMilkDraft
): boolean =>
  initial.volumeMl !== current.volumeMl ||
  initial.temp !== current.temp ||
  initial.powderGrams !== current.powderGrams;
