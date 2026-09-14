/** Source spreadsheet series label → i18n key (stored in milkFormulaDatabase.json). */
export const MILK_FORMULA_SERIES_SOURCE_TO_KEY: Record<string, string> = {
  经典系列进口奶粉: "milk_series_classic_imported",
  "Calisma 婴儿奶粉": "milk_series_calisma_infant",
  HA深度水解蛋白防过敏奶粉: "milk_series_ha_hydrolyzed",
  母乳型奶粉: "milk_series_breast_milk_style",
  近母乳系列: "milk_series_near_breast_milk",
  婴幼儿奶粉有机: "milk_series_organic_infant",
  有机奶粉: "milk_series_organic",
  有机婴幼儿奶粉: "milk_series_organic_infant",
  有机幼儿配方奶粉: "milk_series_organic_growing_up",
  伴宝乐: "milk_series_babybio",
  羊奶粉: "milk_series_goat_milk",
  "CAPREA CROISSANCE ": "milk_series_caprea_croissance",
  croissance: "milk_series_croissance",
  pelargon: "milk_series_pelargon",
  guigoz: "milk_series_guigoz",
  BIO: "milk_series_bio",
  CAPREA: "milk_series_caprea",
  OPTIMA: "milk_series_optima",
  Optipro: "milk_series_optipro",
  PRIMEA: "milk_series_primea",
  Relia: "milk_series_relia",
};

/** Legacy English labels in JSON → i18n key (one-time migration). */
export const MILK_FORMULA_SERIES_LEGACY_EN_TO_KEY: Record<string, string> = {
  "Classic Imported": "milk_series_classic_imported",
  "Calisma Infant": "milk_series_calisma_infant",
  "HA Hydrolyzed": "milk_series_ha_hydrolyzed",
  "Breast Milk Style": "milk_series_breast_milk_style",
  "Near Breast Milk": "milk_series_near_breast_milk",
  "Organic Infant": "milk_series_organic_infant",
  Organic: "milk_series_organic",
  "Organic Growing-Up": "milk_series_organic_growing_up",
  Babybio: "milk_series_babybio",
  "Goat Milk": "milk_series_goat_milk",
  "Caprea Croissance": "milk_series_caprea_croissance",
  Croissance: "milk_series_croissance",
  Pelargon: "milk_series_pelargon",
  Guigoz: "milk_series_guigoz",
  Bio: "milk_series_bio",
  Caprea: "milk_series_caprea",
  Optima: "milk_series_optima",
  Optipro: "milk_series_optipro",
  Primea: "milk_series_primea",
  Relia: "milk_series_relia",
};

export const toMilkSeriesI18nKey = (series: string): string => {
  const trimmed = series.trim();
  if (trimmed.startsWith("milk_series_")) return trimmed;
  return (
    MILK_FORMULA_SERIES_SOURCE_TO_KEY[series] ??
    MILK_FORMULA_SERIES_SOURCE_TO_KEY[trimmed] ??
    MILK_FORMULA_SERIES_LEGACY_EN_TO_KEY[series] ??
    MILK_FORMULA_SERIES_LEGACY_EN_TO_KEY[trimmed] ??
    trimmed
  );
};

export const MILK_SERIES_I18N_KEYS = [
  "milk_series_classic_imported",
  "milk_series_calisma_infant",
  "milk_series_ha_hydrolyzed",
  "milk_series_breast_milk_style",
  "milk_series_near_breast_milk",
  "milk_series_organic_infant",
  "milk_series_organic",
  "milk_series_organic_growing_up",
  "milk_series_babybio",
  "milk_series_goat_milk",
  "milk_series_caprea_croissance",
  "milk_series_croissance",
  "milk_series_pelargon",
  "milk_series_guigoz",
  "milk_series_bio",
  "milk_series_caprea",
  "milk_series_optima",
  "milk_series_optipro",
  "milk_series_primea",
  "milk_series_relia",
] as const;

export type MilkSeriesI18nKey = (typeof MILK_SERIES_I18N_KEYS)[number];
