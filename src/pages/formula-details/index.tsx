import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "@ray-js/panel-sdk";
import { View, Text, Image, router, showToast } from "@ray-js/ray";
import clsx from "clsx";
import FormulaDeleteConfirmModal from "@/components/FormulaDeleteConfirmModal";
import { getMilkFormulaImageUri } from "@/constant/milkFormulaImages";
import {
  clearFormulaDetailEntryId,
  readFormulaDetailEntryId,
} from "@/constant/formulaDetailStorage";
import { markFormulaEnabledToast } from "@/constant/formulaAppliedToastStorage";
import dpCodes from "@/constant/dpCodes";
import { entryToSelection } from "@/constant/powderBrandListStorage";
import { IC_BACK_URI } from "@/res/icBackUri";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { useAppDispatch } from "@/redux";
import {
  markBrandBannerEverClicked,
  removePowderBrandEntries,
  selectActiveBrandId,
  selectPowderBrandEntries,
  setActiveBrandId,
} from "@/redux/modules/powderBrandSlice";
import { formatFormulaRatioDisplay } from "@/utils/barcodeLookup";
import { formatFormulaSummary } from "@/utils/formulaEntrySearch";
import { createDpSetter } from "@/utils/dpControl";
import styles from "./index.module.less";

const resolveEntryImageUri = (brandId: string): string | undefined => {
  if (!brandId.startsWith("db_")) return undefined;
  return getMilkFormulaImageUri(brandId.slice(3));
};

const FormulaDetailsPage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const dispatch = useAppDispatch();
  const actions = useActions();
  const entries = useSelector(selectPowderBrandEntries);
  const activeId = useSelector(selectActiveBrandId);
  const [entryId, setEntryId] = useState<string | null>(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const setDp = useMemo(
    () =>
      createDpSetter(
        actions as Record<string, { set?: (v: unknown) => unknown }> | undefined
      ),
    [actions]
  );

  useEffect(() => {
    const id = readFormulaDetailEntryId();
    if (!id) {
      router.back();
      return;
    }
    setEntryId(id);
  }, []);

  const entry = useMemo(
    () => entries.find((item) => item.id === entryId) ?? null,
    [entries, entryId]
  );

  useEffect(() => {
    if (entryId && !entry) {
      clearFormulaDetailEntryId();
      router.back();
    }
  }, [entry, entryId]);

  const imageUri = entry ? resolveEntryImageUri(entry.brandId) : undefined;
  const isEnabled = Boolean(entry && activeId === entry.id);
  const formulaRatioDisplay = entry
    ? formatFormulaRatioDisplay(entry.powderG, entry.waterMl)
    : "";

  const handleBack = useCallback(() => {
    clearFormulaDetailEntryId();
    router.back();
  }, []);

  const enableFormula = useCallback(async () => {
    if (!entry) return;
    dispatch(setActiveBrandId(entry.id));
    dispatch(markBrandBannerEverClicked());
    const selection = entryToSelection(entry);
    const ratioOk = await setDp(dpCodes.formulaRatio, selection.formulaRatio);
    const mlOk = await setDp(dpCodes.volumeMl, selection.waterMl);
    if (!ratioOk && !mlOk) {
      showToast({ title: t("dp_command_failed"), icon: "none" });
      return;
    }
    markFormulaEnabledToast();
    clearFormulaDetailEntryId();
    router.back();
  }, [dispatch, entry, setDp, t]);

  const handleDeletePress = useCallback(() => {
    setDeleteModalVisible(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (!entry) return;
    dispatch(removePowderBrandEntries([entry.id]));
    setDeleteModalVisible(false);
    clearFormulaDetailEntryId();
    router.back();
  }, [dispatch, entry]);

  if (!entry) {
    return null;
  }

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.backBtn} onClick={handleBack}>
          <Image src={IC_BACK_URI} className={styles.backIcon} />
        </View>
        <Text className={styles.headerTitle}>
          {t("formula_details_page_title")}
        </Text>
        <View className={styles.headerSpacer} />
      </View>

      <View className={styles.main}>
        <View className={styles.card}>
          {imageUri ? (
            <View className={styles.imageBox}>
              <Image
                src={imageUri}
                className={styles.productImage}
                mode="aspectFit"
              />
            </View>
          ) : null}

          <Text className={styles.brandName}>{entry.brandLabel}</Text>
          <Text className={styles.stageLabel}>{entry.stageLabel}</Text>

          <View className={styles.detailRows}>
            <View className={styles.detailRow}>
              <Text className={styles.detailLabel}>
                {t("barcode_result_formula_ratio")}
              </Text>
              <Text className={styles.detailValueRatio}>
                {formulaRatioDisplay}
              </Text>
            </View>
            {entry.barcode ? (
              <View className={styles.detailRow}>
                <Text className={styles.detailLabel}>
                  {t("barcode_result_barcode_label")}
                </Text>
                <Text className={styles.detailValueBarcode}>
                  {entry.barcode}
                </Text>
              </View>
            ) : null}
          </View>

          {entry.barcode ? (
            <Text className={styles.sourceNote}>
              {t("barcode_result_source_note")}
            </Text>
          ) : null}

          <View
            className={clsx(
              styles.btnPrimary,
              isEnabled && styles.btnPrimaryDisabled
            )}
            onClick={isEnabled ? undefined : enableFormula}
          >
            <Text
              className={clsx(
                styles.btnPrimaryText,
                isEnabled && styles.btnPrimaryTextDisabled
              )}
            >
              {t("barcode_use_formula")}
            </Text>
          </View>
        </View>
      </View>

      <View className={styles.footer}>
        <Text className={styles.deleteLink} onClick={handleDeletePress}>
          {t("formula_delete")}
        </Text>
      </View>

      <FormulaDeleteConfirmModal
        visible={deleteModalVisible}
        formulaSummary={formatFormulaSummary(entry)}
        onCancel={() => setDeleteModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
};

export default FormulaDetailsPage;
