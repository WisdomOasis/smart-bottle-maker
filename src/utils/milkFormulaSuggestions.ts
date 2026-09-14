import type { PowderBrandEntry } from "@/constant/powderBrandListStorage";
import { lookupFormulaByMilkId } from "@/utils/barcodeLookup";
import { findDuplicateFormulaEntry } from "@/utils/formulaDuplicate";
import {
  searchMilkFormulas,
  type MilkFormulaSearchItem,
} from "@/utils/milkFormulaSearch";

export interface MilkFormulaSearchSuggestion extends MilkFormulaSearchItem {
  saved: boolean;
}

export const isMilkFormulaSaved = (
  milkId: string,
  entries: PowderBrandEntry[]
): boolean => {
  const result = lookupFormulaByMilkId(milkId);
  if (!result) return false;
  return findDuplicateFormulaEntry(result.selection, entries) !== null;
};

export const prepareMilkFormulaSuggestions = (
  query: string,
  entries: PowderBrandEntry[]
): MilkFormulaSearchSuggestion[] => {
  const items = searchMilkFormulas(query);
  const saved: MilkFormulaSearchSuggestion[] = [];
  const unsaved: MilkFormulaSearchSuggestion[] = [];

  items.forEach((item) => {
    const suggestion = {
      ...item,
      saved: isMilkFormulaSaved(item.milkId, entries),
    };
    if (suggestion.saved) {
      saved.push(suggestion);
    } else {
      unsaved.push(suggestion);
    }
  });

  return [...saved, ...unsaved];
};
