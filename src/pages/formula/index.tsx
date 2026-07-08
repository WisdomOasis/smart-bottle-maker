import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "@ray-js/panel-sdk";
import { View, Text, Image, Input, router, usePageEvent } from "@ray-js/ray";
import EnableFormulaConfirmModal from "@/components/EnableFormulaConfirmModal";
import DisableFormulaConfirmModal from "@/components/DisableFormulaConfirmModal";
import BarcodeNotFoundModal from "@/components/BarcodeNotFoundModal";
import BarcodeScanCover from "@/components/BarcodeScanCover";
import FormulaBrandCard from "@/components/FormulaBrandCard";
import FormulaCustomCard from "@/components/FormulaCustomCard";
import FormulaSavedToast from "@/components/FormulaSavedToast";
import MilkFormulaSuggestionList from "@/components/MilkFormulaSuggestionList";
import { CUSTOM_BRAND_ID } from "@/constant/customMixRatio";
import {
  DEFAULT_FORMULA_RATIO_RAW,
  DEFAULT_FORMULA_WATER_ML,
  formatDefaultFormulaRatioLabel,
} from "@/constant/defaultFormula";
import { writeFormulaDetailEntryId } from "@/constant/formulaDetailStorage";
import { consumeFormulaToast } from "@/constant/formulaAppliedToastStorage";
import { writeBarcodeResult } from "@/constant/barcodeResultStorage";
import { entryToSelection } from "@/constant/powderBrandListStorage";
import dpCodes from "@/constant/dpCodes";
import { IC_BACK_URI } from "@/res/icBackUri";
import { IC_FORMULA_EMPTY_URI } from "@/res/icFormulaEmptyUri";
import { IC_FORMULA_SCAN_URI } from "@/res/icFormulaScanUri";
import { IC_FORMULA_SEARCH_URI } from "@/res/icFormulaSearchUri";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { useAppDispatch } from "@/redux";
import {
  markBrandBannerEverClicked,
  selectActiveBrandId,
  selectPowderBrandEntries,
  setActiveBrandId,
  setEditingBrandId,
} from "@/redux/modules/powderBrandSlice";
import { createDpSetter } from "@/utils/dpControl";
import {
  filterFormulaEntries,
  formatFormulaSummary,
} from "@/utils/formulaEntrySearch";
import { lookupFormulaByMilkId } from "@/utils/barcodeLookup";
import {
  goToBarcodeResultPage,
  useBarcodeScanLauncher,
} from "@/hooks/useBarcodeScanLauncher";
import { prepareMilkFormulaSuggestions } from "@/utils/milkFormulaSuggestions";
import type { MilkFormulaSearchItem } from "@/utils/milkFormulaSearch";
import { readInputValue } from "@/utils/readInputValue";
import { POWDER_BRAND_SHEET_ICONS } from "@/components/PowderBrandOptionSheet/icons";
import styles from "./index.module.less";

const FormulaPage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const dispatch = useAppDispatch();
  const actions = useActions();
  const entries = useSelector(selectPowderBrandEntries);
  const activeId = useSelector(selectActiveBrandId);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedToastVisible, setSavedToastVisible] = useState(false);
  const [savedToastMessage, setSavedToastMessage] = useState("");
  const [enableModalVisible, setEnableModalVisible] = useState(false);
  const [disableModalVisible, setDisableModalVisible] = useState(false);
  const [pendingEnableId, setPendingEnableId] = useState<string | null>(null);
  const {
    notFoundVisible,
    scanCoverVisible,
    launchScan,
    scanAgain,
    dismissNotFound,
  } = useBarcodeScanLauncher();

  const setDp = useMemo(
    () =>
      createDpSetter(
        actions as Record<string, { set?: (v: unknown) => unknown }> | undefined
      ),
    [actions]
  );

  const brandEntries = useMemo(
    () => entries.filter((e) => e.brandId !== CUSTOM_BRAND_ID),
    [entries]
  );
  const customEntries = useMemo(
    () => entries.filter((e) => e.brandId === CUSTOM_BRAND_ID),
    [entries]
  );

  const filteredBrandEntries = useMemo(
    () => filterFormulaEntries(brandEntries, searchQuery),
    [brandEntries, searchQuery]
  );
  const filteredCustomEntries = useMemo(
    () => filterFormulaEntries(customEntries, searchQuery),
    [customEntries, searchQuery]
  );

  const trimmedQuery = searchQuery.trim();
  const hasSearchQuery = trimmedQuery.length > 0;
  const librarySuggestions = useMemo(
    () => prepareMilkFormulaSuggestions(trimmedQuery, entries),
    [trimmedQuery, entries]
  );
  const showLibrarySuggestions =
    hasSearchQuery && librarySuggestions.length > 0;

  const activeEntry = useMemo(
    () => entries.find((entry) => entry.id === activeId) ?? null,
    [entries, activeId]
  );

  const pendingEntry = useMemo(
    () => entries.find((entry) => entry.id === pendingEnableId) ?? null,
    [entries, pendingEnableId]
  );

  usePageEvent("onShow", () => {
    const kind = consumeFormulaToast();
    if (kind === "applied") {
      setSavedToastMessage(t("formula_ratio_saved_enabled"));
      setSavedToastVisible(true);
      return;
    }
    if (kind === "saved") {
      setSavedToastMessage(t("formula_ratio_saved"));
      setSavedToastVisible(true);
      return;
    }
    if (kind === "enabled") {
      setSavedToastMessage(t("formula_enabled"));
      setSavedToastVisible(true);
    }
  });

  const handleDismissSavedToast = useCallback(() => {
    setSavedToastVisible(false);
  }, []);

  const handleBack = useCallback(() => {
    router.back();
  }, []);

  const handleSearchManually = useCallback(() => {
    router.push("/search-brand");
  }, []);

  const handleScanBarcode = useCallback(() => {
    launchScan();
  }, [launchScan]);

  const handleAddFormulaFromScan = useCallback(() => {
    dismissNotFound();
    dispatch(setEditingBrandId(null));
    router.push("/customize-formula-ratio");
  }, [dispatch, dismissNotFound]);

  const handleScanAgain = useCallback(() => {
    scanAgain();
  }, [scanAgain]);

  const handleBatchDelete = useCallback(() => {
    router.push("/powder-brand-batch-delete");
  }, []);

  const confirmDisable = useCallback(async () => {
    dispatch(setActiveBrandId(null));
    await setDp(dpCodes.formulaRatio, DEFAULT_FORMULA_RATIO_RAW);
    await setDp(dpCodes.volumeMl, DEFAULT_FORMULA_WATER_ML);
  }, [dispatch, setDp]);

  const confirmEnable = useCallback(
    async (id: string) => {
      dispatch(setActiveBrandId(id));
      dispatch(markBrandBannerEverClicked());
      const entry = entries.find((e) => e.id === id);
      if (!entry) return;
      const selection = entryToSelection(entry);
      await setDp(dpCodes.formulaRatio, selection.formulaRatio);
      await setDp(dpCodes.volumeMl, selection.waterMl);
      setSavedToastMessage(t("formula_enabled"));
      setSavedToastVisible(true);
    },
    [dispatch, entries, setDp, t]
  );

  const handleRadioSelect = useCallback(
    (id: string) => {
      if (activeId === id) {
        setDisableModalVisible(true);
        return;
      }

      if (activeId) {
        setPendingEnableId(id);
        setEnableModalVisible(true);
        return;
      }

      confirmEnable(id);
    },
    [activeId, confirmEnable]
  );

  const handleDisableConfirm = useCallback(() => {
    confirmDisable();
    setDisableModalVisible(false);
  }, [confirmDisable]);

  const handleDisableCancel = useCallback(() => {
    setDisableModalVisible(false);
  }, []);

  const handleEnableConfirm = useCallback(() => {
    if (!pendingEnableId) return;
    confirmEnable(pendingEnableId);
    setEnableModalVisible(false);
    setPendingEnableId(null);
  }, [confirmEnable, pendingEnableId]);

  const handleEnableCancel = useCallback(() => {
    setEnableModalVisible(false);
    setPendingEnableId(null);
  }, []);

  const handleOpenBrandDetails = useCallback((id: string) => {
    writeFormulaDetailEntryId(id);
    router.push("/formula-details");
  }, []);

  const handleOpenCustomFormula = useCallback(
    (id: string) => {
      dispatch(setEditingBrandId(id));
      router.push("/customize-formula-ratio");
    },
    [dispatch]
  );

  const handleCustomizeFormulaRatio = useCallback(() => {
    dispatch(setEditingBrandId(null));
    router.push("/customize-formula-ratio");
  }, [dispatch]);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  const handleSelectLibrarySuggestion = useCallback(
    (item: MilkFormulaSearchItem) => {
      const result = lookupFormulaByMilkId(item.milkId);
      if (!result) return;
      writeBarcodeResult(result);
      goToBarcodeResultPage("/formula");
    },
    []
  );

  const hasEntries = entries.length > 0;

  if (!hasEntries) {
    return (
      <View className={styles.page}>
        <View className={styles.header}>
          <View className={styles.backBtn} onClick={handleBack}>
            <Image src={IC_BACK_URI} className={styles.backIcon} />
          </View>
          <Text className={styles.headerTitle}>{t("formula_page_title")}</Text>
          <View className={styles.headerSpacer} />
        </View>

        <View className={styles.content}>
          <View className={styles.emptyCard}>
            <Image src={IC_FORMULA_EMPTY_URI} className={styles.emptyIcon} />
            <View className={styles.emptyTextGroup}>
              <Text className={styles.emptyTitle}>
                {t("formula_empty_title")}
              </Text>
              <Text className={styles.emptySubtitle}>
                {t("formula_empty_subtitle")}
              </Text>
            </View>

            <View className={styles.emptyCardActions}>
              <View className={styles.btnScan} onClick={handleScanBarcode}>
                <Text className={styles.btnScanText}>
                  {t("formula_scan_barcode")}
                </Text>
              </View>
              <View className={styles.btnManual} onClick={handleSearchManually}>
                <Text className={styles.btnManualText}>
                  {t("formula_search_manually")}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className={styles.emptyPageFooter}>
          <View className={styles.emptyPageFooterRow}>
            <Text className={styles.emptyPageFooterMuted}>
              {t("formula_empty_no_barcode_prompt")}
            </Text>
            <Text
              className={styles.emptyPageFooterLink}
              onClick={handleCustomizeFormulaRatio}
            >
              {` ${t("formula_custom_ratio_link")}`}
            </Text>
          </View>
        </View>

        <BarcodeNotFoundModal
          visible={notFoundVisible}
          onAddFormula={handleAddFormulaFromScan}
          onScanAgain={handleScanAgain}
        />

        <BarcodeScanCover visible={scanCoverVisible} />
      </View>
    );
  }

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.backBtn} onClick={handleBack}>
          <Image src={IC_BACK_URI} className={styles.backIcon} />
        </View>
        <Text className={styles.headerTitle}>{t("formula_page_title")}</Text>
        <View className={styles.headerSpacer} />
      </View>

      <View className={styles.listContent}>
        <View className={styles.searchRow}>
          <View className={styles.searchInputWrap}>
            <Image src={IC_FORMULA_SEARCH_URI} className={styles.searchIcon} />
            <Input
              className={styles.searchInput}
              type="text"
              confirmType="search"
              value={searchQuery}
              placeholder={t("formula_search_placeholder")}
              placeholderStyle="color: #868EAA; font-size: 14px; line-height: 20px;"
              onInput={(e) => setSearchQuery(readInputValue(e))}
            />
            {searchQuery.length > 0 ? (
              <View className={styles.clearBtn} onClick={handleClearSearch}>
                <Image
                  src={POWDER_BRAND_SHEET_ICONS.clear}
                  className={styles.clearIcon}
                />
              </View>
            ) : null}
          </View>
          <View className={styles.scanBtn} onClick={handleScanBarcode}>
            <Image src={IC_FORMULA_SCAN_URI} className={styles.scanIcon} />
          </View>
        </View>

        {showLibrarySuggestions ? (
          <>
            <View className={styles.searchDivider} />
            <MilkFormulaSuggestionList
              suggestions={librarySuggestions}
              onSelect={handleSelectLibrarySuggestion}
            />
          </>
        ) : null}

        {!showLibrarySuggestions ? (
          <>
            <View className={styles.sectionHeader}>
              <Text className={styles.sectionLabel}>
                {t("powder_brand_select_brand")}
              </Text>
              <Text
                className={styles.batchDeleteLink}
                onClick={handleBatchDelete}
              >
                {t("powder_brand_batch_delete")}
              </Text>
            </View>

            <View className={styles.list}>
              {filteredBrandEntries.map((entry) => (
                <FormulaBrandCard
                  key={entry.id}
                  entry={entry}
                  selected={activeId === entry.id}
                  onOpenDetails={() => handleOpenBrandDetails(entry.id)}
                  onSelect={() => handleRadioSelect(entry.id)}
                />
              ))}
              {filteredCustomEntries.map((entry) => (
                <FormulaCustomCard
                  key={entry.id}
                  entry={entry}
                  selected={activeId === entry.id}
                  onOpenDetails={() => handleOpenCustomFormula(entry.id)}
                  onSelect={() => handleRadioSelect(entry.id)}
                />
              ))}
            </View>
          </>
        ) : null}
      </View>

      <View className={styles.listPageFooter}>
        <Text
          className={styles.listPageFooterLink}
          onClick={handleCustomizeFormulaRatio}
        >
          {t("formula_custom_ratio_link")}
        </Text>
      </View>

      <FormulaSavedToast
        visible={savedToastVisible}
        message={savedToastMessage}
        onDismiss={handleDismissSavedToast}
      />

      <EnableFormulaConfirmModal
        visible={enableModalVisible}
        previousSummary={activeEntry ? formatFormulaSummary(activeEntry) : ""}
        nextSummary={pendingEntry ? formatFormulaSummary(pendingEntry) : ""}
        onCancel={handleEnableCancel}
        onEnable={handleEnableConfirm}
      />

      <DisableFormulaConfirmModal
        visible={disableModalVisible}
        ratioLabel={formatDefaultFormulaRatioLabel()}
        onCancel={handleDisableCancel}
        onConfirm={handleDisableConfirm}
      />

      <BarcodeNotFoundModal
        visible={notFoundVisible}
        onAddFormula={handleAddFormulaFromScan}
        onScanAgain={handleScanAgain}
      />

      <BarcodeScanCover visible={scanCoverVisible} />
    </View>
  );
};

export default FormulaPage;
