import type { PowderBrand } from "@/constant/powderBrands";
import type { OptionItem } from "@/components/PowderBrandOptionSheet";

const normalize = (text: string) =>
  text.trim().toLowerCase().replace(/\s+/g, " ");

/** 品牌搜尋：比對顯示名、id、keywords（支援部分字串） */
export const filterBrandOptions = (
  brands: PowderBrand[],
  query: string
): OptionItem[] => {
  const q = normalize(query);
  const all = brands.map((b) => ({ id: b.id, label: b.label }));

  if (!q) return all;

  return all.filter((_, index) => {
    const brand = brands[index];
    const tokens = [brand.label, brand.id, ...(brand.searchKeywords ?? [])]
      .map(normalize)
      .filter(Boolean);

    return tokens.some((token) => token.includes(q));
  });
};
