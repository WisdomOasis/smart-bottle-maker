import dpCodes from "@/constant/dpCodes";
import type { PowderBrandSelection } from "@/constant/powderBrandStorage";
import { SCENE_PRESETS, type ScenePresetKey } from "@/constant/presets";
import {
  clampMl,
  FORMULA_RATIO_MAX,
  FORMULA_RATIO_MIN,
  parseTemp,
  type TempSet,
} from "@/utils/bottleMaker";

export interface MilkRecipeParams {
  volumeMl: number;
  temp: TempSet;
  formulaRatio: number;
  unitSet: "mL";
}

export interface ResolveMilkRecipeInput {
  sceneKey: ScenePresetKey;
  volumeMl: number;
  temp: TempSet;
  formulaRatio: number;
  powderBrandSelection: PowderBrandSelection | null;
}

/** 依目前場景／自訂模式／奶粉品牌，解析本次泡奶應下發的配方參數 */
export const resolveMilkRecipeParams = (
  input: ResolveMilkRecipeInput
): MilkRecipeParams => {
  let { volumeMl } = input;
  let { temp } = input;
  let { formulaRatio } = input;

  if (input.sceneKey !== "custom") {
    const {
      ml,
      temp: presetTemp,
      formulaRatio: presetFormulaRatio,
    } = SCENE_PRESETS[input.sceneKey];
    volumeMl = ml;
    temp = presetTemp;
    formulaRatio = presetFormulaRatio;
  }

  if (input.powderBrandSelection) {
    const { waterMl, formulaRatio: brandFormulaRatio } =
      input.powderBrandSelection;
    volumeMl = waterMl;
    formulaRatio = brandFormulaRatio;
  }

  return {
    volumeMl: clampMl(volumeMl),
    temp: parseTemp(temp),
    formulaRatio: Math.min(
      FORMULA_RATIO_MAX,
      Math.max(FORMULA_RATIO_MIN, Math.round(formulaRatio))
    ),
    unitSet: "mL",
  };
};

/** 泡奶啟動前一次下發：配方 DP + start_milk（配方欄位在前） */
export const buildMilkStartDpPayload = (
  recipe: MilkRecipeParams
): Record<string, unknown> => ({
  [dpCodes.volumeMl]: recipe.volumeMl,
  [dpCodes.tempSet]: String(recipe.temp),
  [dpCodes.formulaRatio]: recipe.formulaRatio,
  [dpCodes.unitSet]: recipe.unitSet,
  [dpCodes.startMilk]: true,
});
