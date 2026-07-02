/* eslint-disable react/require-default-props */
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Image, router } from "@ray-js/ray";
import { Input } from "@ray-js/components";
import clsx from "clsx";
import Strings from "@/i18n";
import { POWDER_BRANDS } from "@/constant/powderBrands";
import { writeCustomMixRatioDraft } from "@/constant/customMixRatio";
import { filterBrandOptions } from "@/utils/powderBrandSearch";
import { POWDER_BRAND_SHEET_ICONS } from "./icons";
import styles from "./index.module.less";

export interface OptionItem {
  id: string;
  label: string;
}

export type PowderBrandSheetMode = "brand" | "series" | "stage";

export interface CustomRatioPayload {
  waterMl: number;
  powderG: number;
  formulaRatio: number;
}

interface Props {
  title: string;
  options: OptionItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onClose: () => void;
  sheetMode?: PowderBrandSheetMode;
  initialCustomWaterMl?: number | null;
  initialCustomPowderG?: number | null;
}

const readInputValue = (event: unknown): string => {
  if (event == null) return "";
  const e = event as {
    value?: string;
    detail?: { value?: string };
    target?: { value?: string };
  };
  const raw = e.value ?? e.detail?.value ?? e.target?.value ?? "";
  return String(raw);
};

const PowderBrandOptionSheet: React.FC<Props> = ({
  title,
  options,
  selectedId,
  onSelect,
  onClose,
  sheetMode = "stage",
  initialCustomWaterMl = null,
  initialCustomPowderG = null,
}) => {
  const t = (key: Parameters<typeof Strings.getLang>[0]) =>
    Strings.getLang(key);
  const [searchQuery, setSearchQuery] = useState("");
  const isBrandMode = sheetMode === "brand";
  const isHeaderMode =
    sheetMode === "brand" || sheetMode === "series" || sheetMode === "stage";

  useEffect(() => {
    if (isBrandMode) {
      setSearchQuery("");
    }
  }, [isBrandMode]);

  const filteredOptions = useMemo(() => {
    if (!isBrandMode) return options;
    return filterBrandOptions(POWDER_BRANDS, searchQuery);
  }, [options, searchQuery, isBrandMode]);

  const sheetTitle = useMemo(() => {
    if (sheetMode === "brand") return t("powder_brand_sheet_select_brand");
    if (sheetMode === "series") return t("powder_brand_sheet_select_series");
    if (sheetMode === "stage") return t("powder_brand_sheet_select_stage");
    return title;
  }, [sheetMode, title, t]);

  const showEmpty =
    isBrandMode &&
    searchQuery.trim().length > 0 &&
    filteredOptions.length === 0;

  const handleCustomizeRatio = () => {
    writeCustomMixRatioDraft({
      waterMl: initialCustomWaterMl ?? null,
      powderG: initialCustomPowderG ?? null,
    });
    onClose();
    router.push("/custom-mix-ratio");
  };

  return (
    <View className={styles.mask}>
      <View className={styles.backdrop} onClick={onClose} />
      <View className={styles.sheet}>
        {isHeaderMode ? (
          <View className={styles.headerBlock}>
            <View className={styles.sheetHeader}>
              <Text className={styles.sheetTitleLeft}>{sheetTitle}</Text>
              <View className={styles.closeBtn} onClick={onClose}>
                <Image
                  src={POWDER_BRAND_SHEET_ICONS.close}
                  className={styles.closeIcon}
                />
              </View>
            </View>
            {!isBrandMode ? <View className={styles.sheetDivider} /> : null}
          </View>
        ) : null}

        {isBrandMode ? (
          <>
            <View className={styles.searchRow}>
              <Image
                src={POWDER_BRAND_SHEET_ICONS.search}
                className={styles.searchIcon}
              />
              <Input
                className={styles.searchInput}
                type="text"
                confirmType="search"
                value={searchQuery}
                placeholder={t("powder_brand_search_placeholder")}
                placeholderStyle="color: #868EAA; font-size: 14px;"
                onInput={(e) => setSearchQuery(readInputValue(e))}
              />
              {searchQuery.length > 0 ? (
                <View
                  className={styles.clearBtn}
                  onClick={() => setSearchQuery("")}
                >
                  <Image
                    src={POWDER_BRAND_SHEET_ICONS.clear}
                    className={styles.clearIcon}
                  />
                </View>
              ) : null}
            </View>

            <View className={styles.customizeHintRow}>
              <Text className={styles.customizeHintMuted}>
                {t("powder_brand_not_listed")}
              </Text>
              <Text
                className={styles.customizeHintLink}
                onClick={handleCustomizeRatio}
              >
                {t("powder_brand_customize_ratio")}
              </Text>
            </View>

            <View className={styles.sheetDivider} />
          </>
        ) : null}

        <View className={styles.list}>
          {showEmpty ? (
            <Text className={styles.emptyText}>
              {t("powder_brand_search_empty")}
            </Text>
          ) : (
            filteredOptions.map((opt) => (
              <View
                key={opt.id}
                className={styles.option}
                onClick={() => onSelect(opt.id)}
              >
                <Text
                  className={clsx(
                    styles.optionText,
                    selectedId === opt.id && styles.optionTextSelected
                  )}
                >
                  {opt.label}
                </Text>
              </View>
            ))
          )}
        </View>
      </View>
    </View>
  );
};

export default PowderBrandOptionSheet;
