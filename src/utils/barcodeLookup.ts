import milkFormulaDatabase from "@/data/milkFormulaDatabase.json";
import { getMilkFormulaImageUri } from "@/constant/milkFormulaImages";
import { toMilkSeriesI18nKey } from "@/constant/milkFormulaSeriesKeys";
import {
  formatFormulaRatioDisplay,
  formatFormulaStageLabel,
} from "@/i18n/formatters";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import type { PowderBrandSelection } from "@/constant/powderBrandStorage";
import { powderGramsToFormulaRatio } from "@/utils/bottleMaker";

export { formatFormulaRatioDisplay } from "@/i18n/formatters";

export interface MilkFormulaRecord {
  barcode: string;
  brand: string;
  series: string;
  segment: number;
  powderG: number;
  waterMl: number;
  milkId: string;
}

export interface BarcodeFormulaResult {
  barcode: string;
  brand: string;
  seriesKey: string;
  brandDisplayName: string;
  stageLabel: string;
  formulaRatioDisplay: string;
  powderG: number;
  waterMl: number;
  imageUri?: string;
  selection: PowderBrandSelection;
}

const DATABASE = milkFormulaDatabase as MilkFormulaRecord[];

export const formatMilkBrandLabel = (brand: string): string => {
  const trimmed = brand.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

const slug = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "") || "item";

const resolveSeriesLabel = (seriesKey: string): string => {
  if (seriesKey.startsWith("milk_series_")) {
    return Strings.getLang(seriesKey as I18nKey);
  }
  return Strings.getLang(toMilkSeriesI18nKey(seriesKey) as I18nKey);
};

const recordToResult = (record: MilkFormulaRecord): BarcodeFormulaResult => {
  const waterMl = Math.round(record.waterMl);
  const powderG = Math.round(record.powderG * 10) / 10;
  const formulaRatio = powderGramsToFormulaRatio(powderG);
  const seriesKey = toMilkSeriesI18nKey(record.series);
  const seriesLabel = resolveSeriesLabel(seriesKey);
  const brandLabel = formatMilkBrandLabel(record.brand);
  const brandDisplayName = [brandLabel, seriesLabel]
    .filter(Boolean)
    .join(" ")
    .trim();
  const stageLabel = formatFormulaStageLabel(record.segment);
  const selection: PowderBrandSelection = {
    brandId: `db_${record.milkId || slug(record.brand)}`,
    brandLabel: brandDisplayName,
    seriesId: slug(seriesKey.replace(/^milk_series_/, "")),
    seriesLabel,
    stageId: `stage_${record.segment}`,
    stageLabel,
    waterMl,
    powderG,
    formulaRatio,
    barcode: record.barcode,
  };

  return {
    barcode: record.barcode,
    brand: brandLabel,
    seriesKey,
    brandDisplayName,
    stageLabel,
    formulaRatioDisplay: formatFormulaRatioDisplay(powderG, waterMl),
    powderG,
    waterMl,
    imageUri: getMilkFormulaImageUri(record.milkId),
    selection,
  };
};

export const lookupBarcodeFormula = (
  barcode: string
): BarcodeFormulaResult | null => {
  const key = barcode.trim();
  if (!key) return null;
  const record = DATABASE.find((item) => item.barcode === key);
  if (!record) return null;
  return recordToResult(record);
};

export const lookupFormulaByMilkId = (
  milkId: string
): BarcodeFormulaResult | null => {
  const key = milkId.trim();
  if (!key) return null;
  const record = DATABASE.find((item) => item.milkId === key);
  if (!record) return null;
  return recordToResult(record);
};
