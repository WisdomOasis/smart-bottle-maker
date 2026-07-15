import type { PowderStage } from "@/constant/powderBrands";
import { formatFormulaStageLabelFromId } from "@/i18n/formatters";
import {
  entryToSelection,
  getActivePowderBrandEntry,
  upsertPowderBrandEntry,
} from "@/constant/powderBrandListStorage";
import { powderGramsToFormulaRatio } from "@/utils/bottleMaker";

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
  barcode?: string;
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
  stageLabel: formatFormulaStageLabelFromId(stage.id),
  waterMl: stage.waterMl,
  powderG: stage.powderG,
  formulaRatio: powderGramsToFormulaRatio(stage.powderG),
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
