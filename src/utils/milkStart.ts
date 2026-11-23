export interface StartableMilkRecipe {
  volumeMl: number;
  volumeOz?: number;
  temp: number;
  formulaWater: number;
  formulaRatio: number;
  unitSet: "mL" | "oz";
}

export const isMilkStartConfirmed = (
  working: boolean,
  workMode: unknown
): boolean => working && workMode === "milk";

/** 沖奶啟動：呼叫方一次 publish 整包（含 working_status），不再分兩步。 */
export const executeMilkStart = async <T extends StartableMilkRecipe>(
  recipe: T,
  publishStart: (recipe: T) => Promise<boolean>
): Promise<boolean> => publishStart(recipe);
