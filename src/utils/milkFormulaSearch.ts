import milkFormulaDatabase from "@/data/milkFormulaDatabase.json";
import { toMilkSeriesI18nKey } from "@/constant/milkFormulaSeriesKeys";
import {
  formatFormulaStageLabel,
  formatSearchItemLabel,
} from "@/i18n/formatters";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import type { MilkFormulaRecord } from "@/utils/barcodeLookup";
import { formatMilkBrandLabel } from "@/utils/barcodeLookup";

export interface MilkFormulaSearchItem {
  milkId: string;
  barcode: string;
  /** e.g. Gallia Classic Imported - Stage 1 */
  label: string;
  /** e.g. Gallia Classic Imported — used for History tags */
  groupLabel: string;
}

const DATABASE = milkFormulaDatabase as MilkFormulaRecord[];

const normalize = (text: string): string =>
  text.trim().toLowerCase().replace(/\s+/g, " ");

const resolveSeriesLabel = (seriesKey: string): string => {
  if (seriesKey.startsWith("milk_series_")) {
    return Strings.getLang(seriesKey as I18nKey);
  }
  return seriesKey;
};

const buildGroupLabel = (record: MilkFormulaRecord): string => {
  const seriesKey = toMilkSeriesI18nKey(record.series);
  const seriesLabel = resolveSeriesLabel(seriesKey);
  return [formatMilkBrandLabel(record.brand), seriesLabel]
    .filter(Boolean)
    .join(" ")
    .trim();
};

const buildSearchItem = (record: MilkFormulaRecord): MilkFormulaSearchItem => {
  const groupLabel = buildGroupLabel(record);
  return {
    milkId: record.milkId,
    barcode: record.barcode,
    label: formatSearchItemLabel(groupLabel, record.segment),
    groupLabel,
  };
};

const buildRecordHaystack = (record: MilkFormulaRecord): string[] => {
  const item = buildSearchItem(record);
  const seriesKey = toMilkSeriesI18nKey(record.series);
  const seriesLabel = resolveSeriesLabel(seriesKey);
  const stageLabel = formatFormulaStageLabel(record.segment);
  return [
    item.label,
    item.groupLabel,
    item.barcode,
    record.brand,
    record.series,
    seriesKey,
    seriesLabel,
    record.milkId,
    String(record.segment),
    stageLabel,
  ]
    .map(normalize)
    .filter(Boolean);
};

export const getDiscoveryBrands = (): string[] => {
  const brands = new Set<string>();
  DATABASE.forEach((record) => {
    const label = formatMilkBrandLabel(record.brand);
    if (label) brands.add(label);
  });
  return Array.from(brands).sort((a, b) => a.localeCompare(b));
};

export const searchMilkFormulas = (query: string): MilkFormulaSearchItem[] => {
  const q = normalize(query);
  if (!q) return [];

  const seen = new Set<string>();
  const results: MilkFormulaSearchItem[] = [];

  DATABASE.forEach((record) => {
    const haystack = buildRecordHaystack(record);
    if (!haystack.some((token) => token.includes(q))) return;
    if (seen.has(record.milkId)) return;
    seen.add(record.milkId);
    results.push(buildSearchItem(record));
  });

  return results;
};

export const findSearchItemByMilkId = (
  milkId: string
): MilkFormulaSearchItem | null => {
  const record = DATABASE.find((item) => item.milkId === milkId);
  return record ? buildSearchItem(record) : null;
};
