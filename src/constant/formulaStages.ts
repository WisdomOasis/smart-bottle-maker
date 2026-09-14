import type { I18nKey } from "@/i18n/strings";

export interface FormulaStageOption {
  id: string;
  labelKey: I18nKey;
}

export const FORMULA_STAGE_OPTIONS: FormulaStageOption[] = [
  { id: "stage_1", labelKey: "formula_stage_1" },
  { id: "stage_2", labelKey: "formula_stage_2" },
  { id: "stage_3", labelKey: "formula_stage_3" },
  { id: "stage_4", labelKey: "formula_stage_4" },
];
