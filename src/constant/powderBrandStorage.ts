import type { PowderStage } from "@/constant/powderBrands";
import {
  entryToSelection,
  getActivePowderBrandEntry,
  upsertPowderBrandEntry,
} from "@/constant/powderBrandListStorage";

export const POWDER_BRAND_STORAGE_KEY = "smart_bottle_powder_brand";

export interface PowderBrandSelection {
  brandId: string;
  brandLabel: string;
  seriesId: string;
  seriesLabel: string;
  stageId: string;
  stageLabel: string;
  waterMl: number;
  powderG: number;
  formulaRatio: number;
}

export const selectionFromStage = (
  brandLabel: string,
  brandId: string,
  seriesLabel: string,
  seriesId: string,
  stage: PowderStage
): PowderBrandSelection => ({
  brandId,
  brandLabel,
  seriesId,
  seriesLabel,
  stageId: stage.id,
  stageLabel: stage.label,
  waterMl: stage.waterMl,
  powderG: stage.powderG,
  formulaRatio: stage.formulaRatio,
});

export const readPowderBrandSelection = (): PowderBrandSelection | null => {
  const active = getActivePowderBrandEntry();
  return active ? entryToSelection(active) : null;
};

export const writePowderBrandSelection = (
  selection: PowderBrandSelection,
  entryId?: string | null
): void => {
  upsertPowderBrandEntry(selection, entryId);
};
