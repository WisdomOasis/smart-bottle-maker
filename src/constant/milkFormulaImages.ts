/** Optional product image URI keyed by milk_id from the formula database. */
export const MILK_FORMULA_IMAGE_BY_ID: Record<string, string> = {};

export const getMilkFormulaImageUri = (
  milkId: string | undefined
): string | undefined => {
  if (!milkId) return undefined;
  const uri = MILK_FORMULA_IMAGE_BY_ID[milkId];
  return uri || undefined;
};
