export interface StartableMilkRecipe {
  volumeMl: number;
  temp: number;
  formulaWater: number;
  formulaRatio: number;
  unitSet: "mL";
}

export const isMilkStartConfirmed = (
  working: boolean,
  workMode: unknown
): boolean => working && workMode === "milk";

export const executeMilkStart = async <T extends StartableMilkRecipe>(
  recipe: T,
  publishRecipe: (recipe: T) => Promise<boolean>,
  startWorking: () => Promise<boolean>
): Promise<boolean> => {
  if (!(await publishRecipe(recipe))) return false;
  return startWorking();
};
