import type { PowderBrandEntry } from "@/constant/powderBrandListStorage";
import {
  formatFormulaEntrySummary,
  formatFormulaRatioDisplay,
  formatFormulaStageRatio,
} from "@/i18n/formatters";

export {
  formatFormulaEntrySummary,
  formatFormulaEntrySummary as formatFormulaSummary,
  formatFormulaRatioDisplay,
  formatFormulaStageRatio,
} from "@/i18n/formatters";

const normalize = (text: string) =>
  text.trim().toLowerCase().replace(/\s+/g, " ");

export const filterFormulaEntries = (
  entries: PowderBrandEntry[],
  query: string
): PowderBrandEntry[] => {
  const q = normalize(query);
  if (!q) return entries;

  return entries.filter((entry) => {
    const ratio = formatFormulaRatioDisplay(entry.powderG, entry.waterMl);
    const summary = formatFormulaEntrySummary(entry);
    const tokens = [
      entry.brandLabel,
      entry.seriesLabel,
      entry.stageLabel,
      entry.barcode ?? "",
      ratio,
      summary,
    ]
      .map(normalize)
      .filter(Boolean);

    return tokens.some((token) => token.includes(q));
  });
};
