import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "@ray-js/panel-sdk";
import {
  View,
  Text,
  Image,
  router,
  showToast,
  usePageEvent,
} from "@ray-js/ray";
import {
  clearBarcodeResultSession,
  navigateBackFromBarcodeResult,
  readBarcodeResult,
  readBarcodeResultSource,
  writeBarcodeResult,
} from "@/constant/barcodeResultStorage";
import {
  markFormulaAppliedToast,
  markFormulaSavedToast,
} from "@/constant/formulaAppliedToastStorage";
import dpCodes from "@/constant/dpCodes";
import { IC_BACK_URI } from "@/res/icBackUri";
import Strings from "@/i18n";
import { formatFormulaSummary } from "@/i18n/formatters";
import type { I18nKey } from "@/i18n/strings";
import { useAppDispatch } from "@/redux";
import {
  addPowderBrandEntry,
  hydratePowderBrandFromStorage,
  markBrandBannerEverClicked,
  selectPowderBrandEntries,
  setEditingBrandId,
  setPowderBrandSelection,
} from "@/redux/modules/powderBrandSlice";
import type { BarcodeFormulaResult } from "@/utils/barcodeLookup";
import { findDuplicateFormulaEntry } from "@/utils/formulaDuplicate";
import { buildFormulaSettingDpPayload } from "@/utils/bottleMaker";
import { createDpSetter, publishDpBatch } from "@/utils/dpControl";
import { useBarcodeScanLauncher } from "@/hooks/useBarcodeScanLauncher";
import FormulaAlreadySavedToast from "@/components/FormulaAlreadySavedToast";
import UseFormulaConfirmModal from "@/components/UseFormulaConfirmModal";
import BarcodeNotFoundModal from "@/components/BarcodeNotFoundModal";
import BarcodeScanCover from "@/components/BarcodeScanCover";
import styles from "./index.module.less";

const BarcodeResultPage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const dispatch = useAppDispatch();
  const actions = useActions();
  const entries = useSelector(selectPowderBrandEntries);
  const setDp = useMemo(
    () =>
      createDpSetter(
        actions as Record<string, { set?: (v: unknown) => unknown }> | undefined
      ),
    [actions]
  );
  const [result, setResult] = useState<BarcodeFormulaResult | null>(null);
  const [fromScan, setFromScan] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const {
    notFoundVisible,
    scanCoverVisible,
    launchScan,
    scanAgain,
    dismissNotFound,
  } = useBarcodeScanLauncher();

  usePageEvent("onShow", () => {
    dispatch(hydratePowderBrandFromStorage());
  });

  useEffect(() => {
    const stored = readBarcodeResult();
    if (!stored) {
      navigateBackFromBarcodeResult();
      return;
    }
    setResult(stored);
    setFromScan(readBarcodeResultSource() === "scan");
  }, []);

  const handleBack = useCallback(() => {
    navigateBackFromBarcodeResult();
  }, []);

  const isDuplicate = useMemo(() => {
    if (!result) return false;
    return findDuplicateFormulaEntry(result.selection, entries) !== null;
  }, [entries, result]);

  const persistSelection = useCallback(
    async (applyToDevice: boolean) => {
      if (!result) return;

      if (applyToDevice) {
        dispatch(setPowderBrandSelection(result.selection));
        dispatch(markBrandBannerEverClicked());
        const ok = await publishDpBatch(setDp, {
          ...buildFormulaSettingDpPayload(
            result.selection.waterMl,
            result.selection.powderG
          ),
          [dpCodes.volumeMl]: result.selection.waterMl,
        });
        if (!ok) {
          showToast({ title: t("dp_command_failed"), icon: "none" });
          return;
        }
        markFormulaAppliedToast();
        clearBarcodeResultSession();
        router.push("/formula");
        return;
      }

      dispatch(addPowderBrandEntry(result.selection));
      markFormulaSavedToast();
      clearBarcodeResultSession();
      router.push("/formula");
    },
    [dispatch, result, setDp, t]
  );

  const handleUseFormulaPress = useCallback(() => {
    setConfirmVisible(true);
  }, []);

  const handleSavePress = useCallback(() => {
    persistSelection(false);
  }, [persistSelection]);

  const handleConfirmUseFormula = useCallback(() => {
    setConfirmVisible(false);
    persistSelection(true);
  }, [persistSelection]);

  const handleGoToBrewing = useCallback(() => {
    clearBarcodeResultSession();
    router.replace("/");
  }, []);

  const handleRescan = useCallback(() => {
    launchScan({
      onMatch: (match) => {
        writeBarcodeResult(match, "scan");
        setResult(match);
        setFromScan(true);
      },
    });
  }, [launchScan]);

  const handleAddFormulaFromScan = useCallback(() => {
    dismissNotFound();
    dispatch(setEditingBrandId(null));
    router.push("/customize-formula-ratio");
  }, [dispatch, dismissNotFound]);

  const handleScanAgain = useCallback(() => {
    scanAgain({
      onMatch: (match) => {
        writeBarcodeResult(match, "scan");
        setResult(match);
        setFromScan(true);
      },
    });
  }, [scanAgain]);

  const handleEnterBarcode = useCallback(() => {
    clearBarcodeResultSession();
    router.replace("/enter-barcode");
  }, []);

  const brandDisplayName = useMemo(() => {
    if (!result) return "";
    const seriesKey = result.seriesKey ?? "";
    const seriesLabel = seriesKey.startsWith("milk_series_")
      ? t(seriesKey as I18nKey)
      : result.brandDisplayName.replace(result.brand, "").trim();
    return [result.brand, seriesLabel].filter(Boolean).join(" ").trim();
  }, [result, t]);

  const formulaConfirmDetail = useMemo(() => {
    if (!result) return "";
    return formatFormulaSummary(
      brandDisplayName,
      result.stageLabel,
      result.powderG,
      result.waterMl
    );
  }, [brandDisplayName, result]);

  if (!result) {
    return null;
  }

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.backBtn} onClick={handleBack}>
          <Image src={IC_BACK_URI} className={styles.backIcon} />
        </View>
        <Text className={styles.headerTitle}>
          {t("barcode_result_page_title")}
        </Text>
        <View className={styles.headerSpacer} />
      </View>

      {isDuplicate ? (
        <View className={styles.savedToastWrap}>
          <FormulaAlreadySavedToast
            inline
            message={t("formula_already_saved_toast")}
          />
        </View>
      ) : null}

      <View className={styles.main}>
        <View className={styles.card}>
          {result.imageUri ? (
            <View className={styles.imageBox}>
              <Image
                src={result.imageUri}
                className={styles.productImage}
                mode="aspectFit"
              />
            </View>
          ) : null}

          <Text className={styles.brandName}>{brandDisplayName}</Text>
          <Text className={styles.stageLabel}>{result.stageLabel}</Text>

          <View className={styles.detailRows}>
            <View className={styles.detailRow}>
              <Text className={styles.detailLabel}>
                {t("barcode_result_formula_ratio")}
              </Text>
              <Text className={styles.detailValueRatio}>
                {result.formulaRatioDisplay}
              </Text>
            </View>
            <View className={styles.detailRow}>
              <Text className={styles.detailLabel}>
                {t("barcode_result_barcode_label")}
              </Text>
              <Text className={styles.detailValueBarcode}>
                {result.barcode}
              </Text>
            </View>
          </View>

          <Text className={styles.sourceNote}>
            {t("barcode_result_source_note")}
          </Text>

          <View className={styles.actions}>
            {isDuplicate ? (
              <>
                <View
                  className={styles.btnPrimary}
                  onClick={handleUseFormulaPress}
                >
                  <Text className={styles.btnPrimaryText}>
                    {t("barcode_use_formula")}
                  </Text>
                </View>
                <View
                  className={styles.btnSecondary}
                  onClick={handleGoToBrewing}
                >
                  <Text className={styles.btnSecondaryText}>
                    {t("barcode_result_go_to_brewing")}
                  </Text>
                </View>
              </>
            ) : (
              <>
                <View
                  className={styles.btnPrimary}
                  onClick={handleUseFormulaPress}
                >
                  <Text className={styles.btnPrimaryText}>
                    {t("barcode_use_formula")}
                  </Text>
                </View>
                <View className={styles.btnSecondary} onClick={handleSavePress}>
                  <Text className={styles.btnSecondaryText}>
                    {t("common_save")}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </View>

      {fromScan && !isDuplicate ? (
        <View className={styles.footer}>
          <Text className={styles.footerHint}>
            {t("barcode_result_incorrect_brand")}
          </Text>
          <View className={styles.footerLinks}>
            <Text className={styles.footerLink} onClick={handleRescan}>
              {t("barcode_rescan_barcode")}
            </Text>
            <Text className={styles.footerLink} onClick={handleEnterBarcode}>
              {t("barcode_enter_barcode")}
            </Text>
          </View>
        </View>
      ) : null}

      <UseFormulaConfirmModal
        visible={confirmVisible}
        formulaDetail={formulaConfirmDetail}
        onCancel={() => setConfirmVisible(false)}
        onConfirm={handleConfirmUseFormula}
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

export default BarcodeResultPage;
