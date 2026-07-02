import React, { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { View, Text, Image, router, showToast } from "@ray-js/ray";
import { useActions } from "@ray-js/panel-sdk";
import BrandDeleteConfirmModal from "@/components/BrandDeleteConfirmModal";
import dpCodes from "@/constant/dpCodes";
import {
  findBrand,
  findSeries,
  findStage,
  POWDER_BRANDS,
} from "@/constant/powderBrands";
import { CUSTOM_BRAND_ID } from "@/constant/customMixRatio";
import { selectionFromStage } from "@/constant/powderBrandStorage";
import PowderBrandSelectField from "@/components/PowderBrandSelectField";
import PowderBrandOptionSheet, {
  type CustomRatioPayload,
} from "@/components/PowderBrandOptionSheet";
import { IC_BACK_URI } from "@/res/icBackUri";
import { IC_BRAND_DELETE_URI } from "@/res/icBrandDeleteUri";
import Strings from "@/i18n";
import { useAppDispatch } from "@/redux";
import {
  removePowderBrandEntries,
  selectEditingBrandId,
  selectPowderBrandEntries,
  selectPendingCustomRatio,
  setEditingBrandId,
  setPendingCustomRatio,
  setPowderBrandSelection,
} from "@/redux/modules/powderBrandSlice";
import { createDpSetter } from "@/utils/dpControl";
import styles from "./index.module.less";

type PickerKind = "brand" | "series" | "stage";

const PowderBrandPage: React.FC = () => {
  const t = (key: Parameters<typeof Strings.getLang>[0]) =>
    Strings.getLang(key);
  const dispatch = useAppDispatch();
  const actions = useActions();
  const editingEntryId = useSelector(selectEditingBrandId);
  const entries = useSelector(selectPowderBrandEntries);
  const editingEntry = useMemo(
    () =>
      editingEntryId
        ? entries.find((entry) => entry.id === editingEntryId) ?? null
        : null,
    [editingEntryId, entries]
  );
  const isEditMode = Boolean(editingEntryId && editingEntry);

  const setDp = useMemo(
    () =>
      createDpSetter(
        actions as Record<string, { set?: (v: unknown) => unknown }> | undefined
      ),
    [actions]
  );

  const [brandId, setBrandId] = useState<string | null>(null);
  const [seriesId, setSeriesId] = useState<string | null>(null);
  const [stageId, setStageId] = useState<string | null>(null);
  const [picker, setPicker] = useState<PickerKind | null>(null);
  const [customRatio, setCustomRatio] = useState<CustomRatioPayload | null>(
    null
  );
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (hydrated) return;
    if (editingEntry) {
      setBrandId(editingEntry.brandId);
      setSeriesId(editingEntry.seriesId);
      setStageId(editingEntry.stageId);
      if (editingEntry.brandId === CUSTOM_BRAND_ID) {
        setCustomRatio({
          waterMl: editingEntry.waterMl,
          powderG: editingEntry.powderG,
          formulaRatio: editingEntry.formulaRatio,
        });
      }
    }
    setHydrated(true);
  }, [editingEntry, hydrated]);

  const brand = useMemo(() => findBrand(brandId), [brandId]);
  const isCustomBrand = brandId === CUSTOM_BRAND_ID;
  const brandDisplayLabel = isCustomBrand
    ? t("powder_brand_custom_label")
    : brand?.label ?? null;
  const series = useMemo(() => findSeries(brand, seriesId), [brand, seriesId]);
  const stage = useMemo(() => findStage(series, stageId), [series, stageId]);

  const handleBack = useCallback(() => {
    dispatch(setEditingBrandId(null));
    router.back();
  }, [dispatch]);

  const handleBrandSelect = (id: string) => {
    setBrandId(id);
    setSeriesId(null);
    setStageId(null);
    setCustomRatio(null);
    setPicker(null);
  };

  const handleApplyCustomRatio = useCallback((payload: CustomRatioPayload) => {
    setCustomRatio(payload);
    setBrandId(CUSTOM_BRAND_ID);
    setSeriesId(null);
    setStageId(null);
    setPicker(null);
  }, []);

  const pendingCustomRatio = useSelector(selectPendingCustomRatio);
  useEffect(() => {
    if (!pendingCustomRatio) return;
    handleApplyCustomRatio(pendingCustomRatio);
    dispatch(setPendingCustomRatio(null));
  }, [pendingCustomRatio, handleApplyCustomRatio, dispatch]);

  const handleSeriesSelect = (id: string) => {
    setSeriesId(id);
    setStageId(null);
    setPicker(null);
  };

  const handleStageSelect = (id: string) => {
    setStageId(id);
    setPicker(null);
  };

  const canSave =
    Boolean(brand && series && stage) || Boolean(isCustomBrand && customRatio);

  const handleSave = async () => {
    if (isCustomBrand && customRatio) {
      const selection = {
        brandId: CUSTOM_BRAND_ID,
        brandLabel: t("powder_brand_custom_label"),
        seriesId: "custom",
        seriesLabel: t("powder_brand_custom_label"),
        stageId: "custom",
        stageLabel: t("powder_brand_custom_label"),
        waterMl: customRatio.waterMl,
        powderG: customRatio.powderG,
        formulaRatio: customRatio.formulaRatio,
      };
      dispatch(setPowderBrandSelection(selection));
      const ratioOk = await setDp(dpCodes.formulaRatio, selection.formulaRatio);
      const mlOk = await setDp(dpCodes.volumeMl, selection.waterMl);
      if (!ratioOk && !mlOk) {
        showToast({ title: t("dp_command_failed"), icon: "none" });
        return;
      }
      dispatch(setEditingBrandId(null));
      router.back();
      return;
    }
    if (!brand || !series || !stage) return;
    const selection = selectionFromStage(
      brand.label,
      brand.id,
      series.label,
      series.id,
      stage
    );
    dispatch(setPowderBrandSelection(selection));
    const ratioOk = await setDp(dpCodes.formulaRatio, selection.formulaRatio);
    const mlOk = await setDp(dpCodes.volumeMl, selection.waterMl);
    if (!ratioOk && !mlOk) {
      showToast({ title: t("dp_command_failed"), icon: "none" });
      return;
    }
    dispatch(setEditingBrandId(null));
    router.back();
  };

  const handleConfirmDelete = useCallback(() => {
    if (!editingEntryId) return;
    dispatch(removePowderBrandEntries([editingEntryId]));
    dispatch(setEditingBrandId(null));
    setDeleteModalVisible(false);
    router.back();
  }, [dispatch, editingEntryId]);

  const pickerConfig = useMemo(() => {
    if (picker === "brand") {
      return {
        title: t("powder_brand_select_brand"),
        options: POWDER_BRANDS.map((b) => ({ id: b.id, label: b.label })),
        selectedId: brandId,
        onSelect: handleBrandSelect,
      };
    }
    if (picker === "series" && brand) {
      return {
        title: t("powder_brand_select_series"),
        options: brand.series.map((s) => ({ id: s.id, label: s.label })),
        selectedId: seriesId,
        onSelect: handleSeriesSelect,
      };
    }
    if (picker === "stage" && series) {
      return {
        title: t("powder_brand_select_stage"),
        options: series.stages.map((s) => ({ id: s.id, label: s.label })),
        selectedId: stageId,
        onSelect: handleStageSelect,
      };
    }
    return null;
  }, [picker, brand, series, brandId, seriesId, stageId, t]);

  const waterDisplay = stage
    ? String(stage.waterMl)
    : customRatio
    ? String(customRatio.waterMl)
    : "—";
  const powderDisplay = stage
    ? String(stage.powderG)
    : customRatio
    ? String(customRatio.powderG)
    : "—";

  const deleteBrandLabel = brandDisplayLabel ?? editingEntry?.brandLabel ?? "";
  const deleteSeriesLabel = series?.label ?? editingEntry?.seriesLabel ?? "";
  const deleteStageLabel = stage?.label ?? editingEntry?.stageLabel ?? "";

  const deleteConfirmMessage = useMemo(() => {
    let out = t("powder_brand_delete_confirm_message");
    [deleteBrandLabel, deleteSeriesLabel, deleteStageLabel].forEach((v, i) => {
      out = out.replace(`{${i}}`, v);
    });
    return out;
  }, [deleteBrandLabel, deleteSeriesLabel, deleteStageLabel, t]);

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.backBtn} onClick={handleBack}>
          <Image src={IC_BACK_URI} className={styles.backIcon} />
        </View>
        <Text className={styles.headerTitle}>
          {isEditMode
            ? t("powder_brand_edit_page_title")
            : t("powder_brand_page_title")}
        </Text>
        <View className={styles.headerSpacer} />
      </View>

      <Text className={styles.note}>{t("powder_brand_page_note")}</Text>

      <View className={styles.panelCard}>
        <View className={styles.panelTitleRow}>
          <Text className={styles.panelTitle}>
            {t("powder_brand_info_title")}
          </Text>
          {isEditMode ? (
            <View
              className={styles.panelDeleteBtn}
              onClick={() => setDeleteModalVisible(true)}
            >
              <Image
                src={IC_BRAND_DELETE_URI}
                className={styles.panelDeleteIcon}
              />
            </View>
          ) : null}
        </View>
        <View className={styles.selectStack}>
          <PowderBrandSelectField
            label={t("powder_brand_select_brand")}
            value={brandDisplayLabel}
            onPress={() => setPicker("brand")}
          />
          <PowderBrandSelectField
            label={t("powder_brand_select_series")}
            value={series?.label ?? null}
            disabled={!brandId || isCustomBrand}
            onPress={() => setPicker("series")}
          />
          <PowderBrandSelectField
            label={t("powder_brand_select_stage")}
            value={stage?.label ?? null}
            disabled={!seriesId || isCustomBrand}
            onPress={() => setPicker("stage")}
          />
        </View>
      </View>

      <View className={clsx(styles.panelCard, styles.ratioPanel)}>
        <Text className={styles.panelTitle}>
          {t("powder_brand_ratio_title")}
        </Text>
        <View className={styles.ratioCards}>
          <View className={styles.ratioMetricCard}>
            <View className={styles.ratioValueRow}>
              <Text className={styles.ratioNum}>{waterDisplay}</Text>
              <Text className={styles.ratioUnit}>ml</Text>
            </View>
            <Text className={styles.ratioLabel}>
              {t("powder_brand_ratio_water")}
            </Text>
          </View>
          <View className={styles.ratioMetricCard}>
            <View className={styles.ratioValueRow}>
              <Text className={styles.ratioNum}>{powderDisplay}</Text>
              <Text className={styles.ratioUnit}>g</Text>
            </View>
            <Text className={styles.ratioLabel}>
              {t("powder_brand_ratio_powder")}
            </Text>
          </View>
        </View>
      </View>

      <View className={styles.actions}>
        <View
          className={clsx(styles.btnSave, !canSave && styles.btnSaveDisabled)}
          onClick={
            canSave
              ? () => {
                  handleSave();
                }
              : undefined
          }
        >
          <Text className={styles.btnSaveText}>{t("common_save")}</Text>
        </View>
        <View className={styles.btnCancel} onClick={handleBack}>
          <Text className={styles.btnCancelText}>{t("common_cancel")}</Text>
        </View>
      </View>

      {pickerConfig ? (
        <PowderBrandOptionSheet
          key={picker}
          title={pickerConfig.title}
          options={pickerConfig.options}
          selectedId={pickerConfig.selectedId}
          onSelect={pickerConfig.onSelect}
          onClose={() => setPicker(null)}
          sheetMode={picker}
          initialCustomWaterMl={customRatio?.waterMl ?? null}
          initialCustomPowderG={customRatio?.powderG ?? null}
        />
      ) : null}

      <BrandDeleteConfirmModal
        visible={deleteModalVisible}
        message={deleteConfirmMessage}
        onCancel={() => setDeleteModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
};

export default PowderBrandPage;
