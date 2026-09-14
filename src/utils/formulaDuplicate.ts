import type { PowderBrandEntry } from "@/constant/powderBrandListStorage";
import type { PowderBrandSelection } from "@/constant/powderBrandStorage";

const extractMilkId = (brandId: string): string | null => {
  const match = brandId.match(/^db_(.+)$/);
  return match ? match[1] : null;
};

export const isSameFormulaSelection = (
  a: PowderBrandSelection,
  b: PowderBrandEntry | PowderBrandSelection
): boolean => {
  const aBarcode = a.barcode?.trim();
  const bBarcode = b.barcode?.trim();
  if (aBarcode && bBarcode && aBarcode === bBarcode) {
    return true;
  }

  const aMilkId = extractMilkId(a.brandId);
  const bMilkId = extractMilkId(b.brandId);
  if (aMilkId && bMilkId && aMilkId === bMilkId) {
    return true;
  }

  return (
    a.brandId === b.brandId &&
    a.brandLabel.trim() === b.brandLabel.trim() &&
    a.stageId === b.stageId &&
    a.waterMl === b.waterMl &&
    Math.abs(a.powderG - b.powderG) < 0.05
  );
};

export const findDuplicateFormulaEntry = (
  selection: PowderBrandSelection,
  entries: PowderBrandEntry[],
  excludeEntryId?: string | null
): PowderBrandEntry | null =>
  entries.find(
    (entry) =>
      entry.id !== excludeEntryId && isSameFormulaSelection(selection, entry)
  ) ?? null;
