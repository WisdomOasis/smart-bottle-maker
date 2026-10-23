import dpCodes from "@/constant/dpCodes";
import type { PowderBrandSelection } from "@/constant/powderBrandStorage";
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
  formulaWater: number;
  formulaRatio: number;
  unitSet: "mL";
}

export interface ResolveMilkRecipeInput {
  volumeMl: number;
  temp: TempSet;
  formulaRatio: number;
  powderBrandSelection: PowderBrandSelection | null;
}

/** 依目前水量、溫度與奶粉品牌，解析本次泡奶應下發的配方參數 */
export const resolveMilkRecipeParams = (
  input: ResolveMilkRecipeInput
): MilkRecipeParams => {
  let { volumeMl } = input;
  const { temp } = input;
  let { formulaRatio } = input;

  let formulaWater = 100;
  if (input.powderBrandSelection) {
    const { waterMl, powderG } = input.powderBrandSelection;
    volumeMl = waterMl;
    formulaWater = waterMl;
    formulaRatio = powderG * 10;
  }

  return {
    volumeMl: clampMl(volumeMl),
    temp: parseTemp(temp),
    formulaWater,
    formulaRatio: Math.min(
      FORMULA_RATIO_MAX,
      Math.max(FORMULA_RATIO_MIN, Math.round(formulaRatio))
    ),
    unitSet: "mL",
  };
};

/** 泡奶啟動前一次下發：配方 DP + work_mode；呼叫方再下發 working_status=true。 */
export const buildMilkStartDpPayload = (
  recipe: MilkRecipeParams
): Record<string, unknown> => ({
  [dpCodes.volumeMl]: recipe.volumeMl,
  [dpCodes.tempSet]: recipe.temp,
  [dpCodes.formulaWater]: recipe.formulaWater,
  [dpCodes.formulaRatio]: recipe.formulaRatio,
  [dpCodes.unitSet]: recipe.unitSet,
  [dpCodes.workMode]: "milk",
});
