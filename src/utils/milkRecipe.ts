import dpCodes from "@/constant/dpCodes";
import type { PowderBrandSelection } from "@/constant/powderBrandStorage";
import { SCENE_PRESETS, type ScenePresetKey } from "@/constant/presets";
import {
  buildFormulaSettingDpPayload,
  clampMl,
  FORMULA_DENSITY_DEFAULT,
  parseTemp,
  powderGramsToFormulaRatio,
  type TempSet,
} from "@/utils/bottleMaker";

export interface MilkRecipeParams {
  volumeMl: number;
  temp: TempSet;
  formulaWaterMl: number;
  formulaRatio: number;
  formulaDensity: number;
  unitSet: "mL";
}

export interface ResolveMilkRecipeInput {
  sceneKey: ScenePresetKey;
  volumeMl: number;
  temp: TempSet;
  formulaWaterMl: number;
  formulaRatio: number;
  formulaDensity?: number;
  powderBrandSelection: PowderBrandSelection | null;
}

/** 依目前場景／自訂模式／奶粉品牌，解析本次泡奶應下發的配方參數 */
export const resolveMilkRecipeParams = (
  input: ResolveMilkRecipeInput
): MilkRecipeParams => {
  let { volumeMl } = input;
  let { temp } = input;
  let { formulaWaterMl } = input;
  let { formulaRatio } = input;
  const formulaDensity = input.formulaDensity ?? FORMULA_DENSITY_DEFAULT;

  if (input.sceneKey !== "custom") {
    const {
      ml,
      temp: presetTemp,
      formulaWaterMl: presetWater,
      formulaRatio: presetFormulaRatio,
    } = SCENE_PRESETS[input.sceneKey];
    volumeMl = ml;
    temp = presetTemp;
    formulaWaterMl = presetWater;
    formulaRatio = presetFormulaRatio;
  }

  if (input.powderBrandSelection) {
    const { waterMl, powderG } = input.powderBrandSelection;
    volumeMl = waterMl;
    formulaWaterMl = waterMl;
    formulaRatio = powderGramsToFormulaRatio(powderG);
  }

  return {
    volumeMl: clampMl(volumeMl),
    temp: parseTemp(temp),
    formulaWaterMl,
    formulaRatio,
    formulaDensity,
    unitSet: "mL",
  };
};

/** 泡奶啟動：配方 DP + work_mode=milk（已移除獨立 milk bool DP） */
export const buildMilkStartDpPayload = (
  recipe: MilkRecipeParams
): Record<string, unknown> => ({
  [dpCodes.volumeMl]: recipe.volumeMl,
  [dpCodes.tempSet]: recipe.temp,
  ...buildFormulaSettingDpPayload(
    recipe.formulaWaterMl,
    recipe.formulaRatio / 10,
    recipe.formulaDensity
  ),
  [dpCodes.unitSet]: recipe.unitSet,
  [dpCodes.workMode]: "milk",
});
