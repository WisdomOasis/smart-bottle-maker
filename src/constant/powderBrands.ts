export interface PowderStage {
  id: string;
  label: string;
  waterMl: number;
  powderG: number;
  formulaRatio: number;
}

export interface PowderSeries {
  id: string;
  label: string;
  stages: PowderStage[];
}

export interface PowderBrand {
  id: string;
  label: string;
  /** 搜尋用別名（中英文、簡稱等） */
  searchKeywords?: string[];
  series: PowderSeries[];
}

export const POWDER_BRANDS: PowderBrand[] = [
  {
    id: "a2",
    label: "a2 Platinum",
    searchKeywords: ["a2", "platinum", "白金", "澳洲"],
    series: [
      {
        id: "platinum",
        label: "Platinum",
        stages: [
          {
            id: "stage1",
            label: "Stage 1",
            waterMl: 180,
            powderG: 12,
            formulaRatio: 67,
          },
          {
            id: "stage2",
            label: "Stage 2",
            waterMl: 180,
            powderG: 13,
            formulaRatio: 72,
          },
        ],
      },
    ],
  },
  {
    id: "aptamil",
    label: "Aptamil",
    searchKeywords: ["aptamil", "爱他美", "愛他美", "nutricia"],
    series: [
      {
        id: "pro",
        label: "Profutura",
        stages: [
          {
            id: "stage1",
            label: "Stage 1",
            waterMl: 180,
            powderG: 11,
            formulaRatio: 61,
          },
          {
            id: "stage2",
            label: "Stage 2",
            waterMl: 180,
            powderG: 12,
            formulaRatio: 67,
          },
        ],
      },
      {
        id: "classic",
        label: "Classic",
        stages: [
          {
            id: "stage1",
            label: "Stage 1",
            waterMl: 180,
            powderG: 10,
            formulaRatio: 56,
          },
        ],
      },
    ],
  },
  {
    id: "enfamil",
    label: "Enfamil",
    searchKeywords: ["enfamil", "美赞臣", "美贊臣", "mead johnson"],
    series: [
      {
        id: "neuro",
        label: "NeuroPro",
        stages: [
          {
            id: "stage1",
            label: "Stage 1",
            waterMl: 180,
            powderG: 12,
            formulaRatio: 67,
          },
          {
            id: "stage3",
            label: "Stage 3",
            waterMl: 180,
            powderG: 14,
            formulaRatio: 78,
          },
        ],
      },
    ],
  },
  {
    id: "friso",
    label: "Friso",
    searchKeywords: ["friso", "美素", "美素佳儿", "美素佳兒", "friesland"],
    series: [
      {
        id: "gold",
        label: "Gold",
        stages: [
          {
            id: "stage1",
            label: "Stage 1",
            waterMl: 180,
            powderG: 12,
            formulaRatio: 67,
          },
        ],
      },
    ],
  },
  {
    id: "similac",
    label: "Similac",
    searchKeywords: ["similac", "雅培", "abbott"],
    series: [
      {
        id: "advance",
        label: "Advance",
        stages: [
          {
            id: "stage1",
            label: "Stage 1",
            waterMl: 180,
            powderG: 12,
            formulaRatio: 67,
          },
        ],
      },
    ],
  },
  {
    id: "nan",
    label: "NAN",
    searchKeywords: ["nan", "雀巢", "nestle", "能恩"],
    series: [
      {
        id: "supreme",
        label: "Supreme Pro",
        stages: [
          {
            id: "stage1",
            label: "Stage 1",
            waterMl: 180,
            powderG: 11,
            formulaRatio: 61,
          },
        ],
      },
    ],
  },
  {
    id: "bellamy",
    label: "Bellamy's Organic",
    searchKeywords: ["bellamy", "贝拉米", "貝拉米", "organic"],
    series: [
      {
        id: "organic",
        label: "Organic",
        stages: [
          {
            id: "stage1",
            label: "Stage 1",
            waterMl: 180,
            powderG: 12,
            formulaRatio: 67,
          },
        ],
      },
    ],
  },
];

export const findBrand = (brandId: string | null) =>
  POWDER_BRANDS.find((b) => b.id === brandId) ?? null;

export const findSeries = (
  brand: PowderBrand | null,
  seriesId: string | null
) => brand?.series.find((s) => s.id === seriesId) ?? null;

export const findStage = (
  series: PowderSeries | null,
  stageId: string | null
) => series?.stages.find((s) => s.id === stageId) ?? null;
