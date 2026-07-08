import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import type { PowderBrandEntry } from "@/constant/powderBrandListStorage";

export const applyI18nTemplate = (
  template: string,
  values: (string | number)[]
): string => {
  let out = template;
  values.forEach((value, index) => {
    out = out.replace(`{${index}}`, String(value));
  });
  return out;
};

const t = (key: I18nKey) => Strings.getLang(key);

const formatServingGrams = (grams: number): string => {
  const rounded = Math.round(grams * 10) / 10;
  return Number.isInteger(rounded)
    ? String(Math.round(rounded))
    : String(rounded);
};

export const formatFormulaStageLabel = (segment: number): string => {
  const key = `formula_stage_${segment}` as I18nKey;
  const known = t(key);
  if (known !== key) return known;
  return applyI18nTemplate(t("formula_stage_template"), [segment]);
};

export const formatFormulaStageLabelFromId = (stageId: string): string => {
  const match = stageId.match(/stage[_-]?(\d+)/i);
  if (match) return formatFormulaStageLabel(Number(match[1]));
  return stageId;
};

/** Label on packaging: powder grams / water volume (not g per 100 ml). */
export const formatFormulaRatioDisplay = (
  powderG: number,
  waterMl: number
): string => {
  if (waterMl <= 0) return t("common_em_dash");
  return applyI18nTemplate(t("formula_ratio_display"), [
    formatServingGrams(powderG),
    Math.round(waterMl),
  ]);
};

export const formatFormulaStageRatio = (
  stageLabel: string,
  powderG: number,
  waterMl: number
): string =>
  applyI18nTemplate(t("formula_stage_ratio"), [
    stageLabel,
    formatFormulaRatioDisplay(powderG, waterMl),
  ]);

export const formatFormulaSummary = (
  brandLabel: string,
  stageLabel: string,
  powderG: number,
  waterMl: number
): string =>
  applyI18nTemplate(t("formula_summary"), [
    brandLabel,
    stageLabel,
    formatFormulaRatioDisplay(powderG, waterMl),
  ]);

export const formatFormulaEntrySummary = (entry: PowderBrandEntry): string =>
  formatFormulaSummary(
    entry.brandLabel,
    entry.stageLabel,
    entry.powderG,
    entry.waterMl
  );

export const formatBrandSeriesStage = (
  seriesLabel: string,
  stageLabel: string
): string =>
  applyI18nTemplate(t("brand_series_stage"), [seriesLabel, stageLabel]);

export const formatCustomRatioDisplay = (
  waterMl: number,
  powderG: number
): string => applyI18nTemplate(t("custom_ratio_display"), [waterMl, powderG]);

export const formatDefaultFormulaRatioLabel = (
  waterMl: number,
  powderG: number
): string => applyI18nTemplate(t("default_formula_ratio"), [waterMl, powderG]);

export const formatSearchItemLabel = (
  groupLabel: string,
  segment: number
): string =>
  applyI18nTemplate(t("formula_search_item_label"), [
    groupLabel,
    formatFormulaStageLabel(segment),
  ]);

export const formatLabeledValue = (label: string, value: string): string =>
  applyI18nTemplate(t("labeled_value"), [label, value]);

export const formatUnitValueMlUpper = (value: number): string =>
  applyI18nTemplate(t("unit_value_ml_upper"), [value]);

export const formatUnitValueMl = (value: number): string =>
  applyI18nTemplate(t("unit_value_ml"), [value]);

export const formatUnitValueG = (value: number): string =>
  applyI18nTemplate(t("unit_value_g"), [value]);

export const formatUnitValueCelsius = (value: number): string =>
  applyI18nTemplate(t("unit_value_celsius"), [value]);
