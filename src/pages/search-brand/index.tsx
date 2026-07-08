import React, { useCallback, useMemo, useState } from "react";
import { View, Text, Image, Input, router, usePageEvent } from "@ray-js/ray";
import BarcodeNotFoundModal from "@/components/BarcodeNotFoundModal";
import BarcodeScanCover from "@/components/BarcodeScanCover";
import MilkFormulaSuggestionList from "@/components/MilkFormulaSuggestionList";
import { POWDER_BRAND_SHEET_ICONS } from "@/components/PowderBrandOptionSheet/icons";
import {
  pushBrandSearchHistory,
  readBrandSearchHistory,
} from "@/constant/brandSearchHistoryStorage";
import { writeBarcodeResult } from "@/constant/barcodeResultStorage";
import { IC_BACK_URI } from "@/res/icBackUri";
import { IC_FORMULA_EMPTY_URI } from "@/res/icFormulaEmptyUri";
import { IC_FORMULA_SCAN_URI } from "@/res/icFormulaScanUri";
import { IC_FORMULA_SEARCH_URI } from "@/res/icFormulaSearchUri";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { useAppDispatch } from "@/redux";
import { useSelector } from "react-redux";
import {
  selectPowderBrandEntries,
  setEditingBrandId,
} from "@/redux/modules/powderBrandSlice";
import { lookupFormulaByMilkId } from "@/utils/barcodeLookup";
import {
  goToBarcodeResultPage,
  useBarcodeScanLauncher,
} from "@/hooks/useBarcodeScanLauncher";
import {
  getDiscoveryBrands,
  type MilkFormulaSearchItem,
} from "@/utils/milkFormulaSearch";
import { prepareMilkFormulaSuggestions } from "@/utils/milkFormulaSuggestions";
import { readInputValue } from "@/utils/readInputValue";
import styles from "./index.module.less";

const SearchBrandPage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const dispatch = useAppDispatch();
  const entries = useSelector(selectPowderBrandEntries);
  const [searchQuery, setSearchQuery] = useState("");
  const [historyTags, setHistoryTags] = useState<string[]>([]);
  const {
    notFoundVisible,
    scanCoverVisible,
    launchScan,
    scanAgain,
    dismissNotFound,
  } = useBarcodeScanLauncher();

  const discoveryBrands = useMemo(() => getDiscoveryBrands(), []);
  const trimmedQuery = searchQuery.trim();
  const hasQuery = trimmedQuery.length > 0;
  const suggestions = useMemo(
    () => prepareMilkFormulaSuggestions(trimmedQuery, entries),
    [trimmedQuery, entries]
  );
  const showNotFound = hasQuery && suggestions.length === 0;
  const showBrowse = !hasQuery;

  const refreshHistory = useCallback(() => {
    setHistoryTags(readBrandSearchHistory());
  }, []);

  usePageEvent("onShow", () => {
    refreshHistory();
  });

  const handleBack = useCallback(() => {
    router.back();
  }, []);

  const handleScan = useCallback(() => {
    launchScan();
  }, [launchScan]);

  const handleClear = useCallback(() => {
    setSearchQuery("");
  }, []);

  const handleTagPress = useCallback((label: string) => {
    setSearchQuery(label);
  }, []);

  const handleSelectSuggestion = useCallback(
    (item: MilkFormulaSearchItem) => {
      const result = lookupFormulaByMilkId(item.milkId);
      if (!result) return;
      pushBrandSearchHistory(item.groupLabel);
      refreshHistory();
      writeBarcodeResult(result);
      goToBarcodeResultPage("/search-brand");
    },
    [refreshHistory]
  );

  const handleCustomizeFormula = useCallback(() => {
    dispatch(setEditingBrandId(null));
    router.push("/customize-formula-ratio");
  }, [dispatch]);

  const handleAddFormulaFromScan = useCallback(() => {
    dismissNotFound();
    dispatch(setEditingBrandId(null));
    router.push("/customize-formula-ratio");
  }, [dispatch, dismissNotFound]);

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.backBtn} onClick={handleBack}>
          <Image src={IC_BACK_URI} className={styles.backIcon} />
        </View>
        <Text className={styles.headerTitle}>
          {t("search_brand_page_title")}
        </Text>
        <View className={styles.headerSpacer} />
      </View>

      <View className={styles.main}>
        <View className={styles.searchRow}>
          <View className={styles.searchInputWrap}>
            <Image src={IC_FORMULA_SEARCH_URI} className={styles.searchIcon} />
            <Input
              className={styles.searchInput}
              type="text"
              confirmType="search"
              value={searchQuery}
              placeholder={t("search_brand_placeholder")}
              placeholderStyle="color: #868EAA; font-size: 14px; line-height: 20px;"
              onInput={(e) => setSearchQuery(readInputValue(e))}
            />
            {searchQuery.length > 0 ? (
              <View className={styles.clearBtn} onClick={handleClear}>
                <Image
                  src={POWDER_BRAND_SHEET_ICONS.clear}
                  className={styles.clearIcon}
                />
              </View>
            ) : null}
          </View>
          <View className={styles.scanBtn} onClick={handleScan}>
            <Image src={IC_FORMULA_SCAN_URI} className={styles.scanIcon} />
          </View>
        </View>

        <View className={styles.divider} />

        {showBrowse ? (
          <>
            {historyTags.length > 0 ? (
              <View className={styles.section}>
                <Text className={styles.sectionLabel}>
                  {t("search_brand_history")}
                </Text>
                <View className={styles.tagWrap}>
                  {historyTags.map((tag) => (
                    <View
                      key={tag}
                      className={styles.tag}
                      onClick={() => handleTagPress(tag)}
                    >
                      <Text className={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ) : null}

            <View className={styles.section}>
              <Text className={styles.sectionLabel}>
                {t("search_brand_discovery")}
              </Text>
              <View className={styles.tagWrap}>
                {discoveryBrands.map((brand) => (
                  <View
                    key={brand}
                    className={styles.tag}
                    onClick={() => handleTagPress(brand)}
                  >
                    <Text className={styles.tagText}>{brand}</Text>
                  </View>
                ))}
              </View>
            </View>
          </>
        ) : null}

        {!showBrowse && !showNotFound ? (
          <MilkFormulaSuggestionList
            suggestions={suggestions}
            onSelect={handleSelectSuggestion}
          />
        ) : null}

        {showNotFound ? (
          <View className={styles.notFoundWrap}>
            <Image src={IC_FORMULA_EMPTY_URI} className={styles.notFoundIcon} />
            <Text className={styles.notFoundTitle}>
              {t("search_brand_not_found_title")}
            </Text>
            <Text className={styles.notFoundSubtitle}>
              {t("search_brand_not_found_subtitle")}
            </Text>
            <View
              className={styles.btnCustomize}
              onClick={handleCustomizeFormula}
            >
              <Text className={styles.btnCustomizeText}>
                {t("customize_formula_ratio_page_title")}
              </Text>
            </View>
          </View>
        ) : null}
      </View>

      <BarcodeNotFoundModal
        visible={notFoundVisible}
        onAddFormula={handleAddFormulaFromScan}
        onScanAgain={scanAgain}
      />

      <BarcodeScanCover visible={scanCoverVisible} />
    </View>
  );
};

export default SearchBrandPage;
