import dpCodes from "@/constant/dpCodes";
import type { PowderBrandSelection } from "@/constant/powderBrandStorage";
import {
  clampMl,
  clampOz,
  FORMULA_RATIO_MAX,
  FORMULA_RATIO_MIN,
  mlToOz,
  parseTemp,
  parseUnit,
  type TempSet,
  type UnitSet,
} from "@/utils/bottleMaker";

export interface MilkRecipeParams {
  volumeMl: number;
  volumeOz: number;
  temp: TempSet;
  formulaWater: number;
  formulaRatio: number;
  unitSet: UnitSet;
}

export interface ResolveMilkRecipeInput {
  volumeMl: number;
  temp: TempSet;
  formulaRatio: number;
  unitSet?: UnitSet;
  powderBrandSelection: PowderBrandSelection | null;
}

/** 依目前水量、溫度與奶粉品牌，解析本次泡奶應下發的配方參數 */
export const resolveMilkRecipeParams = (
  input: ResolveMilkRecipeInput
): MilkRecipeParams => {
  let { volumeMl } = input;
  const { temp } = input;
  let { formulaRatio } = input;
  const unitSet = parseUnit(input.unitSet ?? "mL");

  let formulaWater = 100;
  if (input.powderBrandSelection) {
    const { waterMl, powderG } = input.powderBrandSelection;
    volumeMl = waterMl;
    formulaWater = waterMl;
    formulaRatio = powderG * 10;
  }

  const nextMl = clampMl(volumeMl);
  return {
    volumeMl: nextMl,
    volumeOz: clampOz(mlToOz(nextMl)),
    temp: parseTemp(temp),
    formulaWater,
    formulaRatio: Math.min(
      FORMULA_RATIO_MAX,
      Math.max(FORMULA_RATIO_MIN, Math.round(formulaRatio))
    ),
    unitSet,
  };
};

/** 泡奶啟動一次下發：配方 DP + work_mode + working_status=true（同包）。 */
export const buildMilkStartDpPayload = (
  recipe: MilkRecipeParams
): Record<string, unknown> => ({
  [dpCodes.volumeMl]: recipe.volumeMl,
  [dpCodes.volumeOz]: recipe.volumeOz,
  [dpCodes.tempSet]: recipe.temp,
  [dpCodes.formulaWater]: recipe.formulaWater,
  [dpCodes.formulaRatio]: recipe.formulaRatio,
  [dpCodes.unitSet]: recipe.unitSet,
  [dpCodes.workMode]: "milk",
  [dpCodes.workingStatus]: true,
});
