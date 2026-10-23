import type { I18nKey } from "@/i18n/strings";

export type FirstTimeGuideCardPlace = "top" | "bottom" | "center";

export type FirstTimeGuideStep = {
  title: I18nKey;
  body: I18nKey;
  targetId: string | null;
  cardPlace: FirstTimeGuideCardPlace;
};

const CORE_STEPS: FirstTimeGuideStep[] = [
  {
    title: "first_guide_water_title",
    body: "first_guide_water_body",
    targetId: "guide-gauge",
    cardPlace: "bottom",
  },
  {
    title: "first_guide_formula_title",
    body: "first_guide_formula_body",
    targetId: "guide-formula",
    cardPlace: "bottom",
  },
  {
    title: "first_guide_make_title",
    body: "first_guide_make_body",
    targetId: "guide-actions",
    cardPlace: "top",
  },
  {
    title: "first_guide_care_title",
    body: "first_guide_care_body",
    targetId: "guide-care",
    cardPlace: "center",
  },
  {
    title: "first_guide_record_title",
    body: "first_guide_record_body",
    targetId: "guide-feeding",
    cardPlace: "center",
  },
];

const SMART_PREP_STEP: FirstTimeGuideStep = {
  title: "first_guide_smart_prep_title",
  body: "first_guide_smart_prep_body",
  targetId: "guide-smart-prep",
  cardPlace: "center",
};

const CRYASSIST_PROMO_STEP: FirstTimeGuideStep = {
  title: "first_guide_cryassist_title",
  body: "first_guide_cryassist_body",
  targetId: null,
  cardPlace: "center",
};

export const buildFirstTimeGuideSteps = (
  includeSmartPrep: boolean
): FirstTimeGuideStep[] =>
  includeSmartPrep
    ? [...CORE_STEPS, SMART_PREP_STEP]
    : [...CORE_STEPS, CRYASSIST_PROMO_STEP];
