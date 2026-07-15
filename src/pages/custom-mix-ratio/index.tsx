import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useActions } from "@ray-js/panel-sdk";
import { View, Text, Image, router, showToast } from "@ray-js/ray";
import BrandDeleteConfirmModal from "@/components/BrandDeleteConfirmModal";
import EditableRatioMetricCard from "@/components/EditableRatioMetricCard";
import {
  clampCustomPowderG,
  clampCustomWaterMl,
  CUSTOM_BRAND_ID,
  CUSTOM_MIX_POWDER_MAX,
  CUSTOM_MIX_POWDER_MIN,
  CUSTOM_MIX_WATER_MIN,
  isCustomMixRatioComplete,
  readCustomMixRatioDraft,
  writeCustomMixRatioDraft,
} from "@/constant/customMixRatio";
import dpCodes from "@/constant/dpCodes";
import { IC_BACK_URI } from "@/res/icBackUri";
import { IC_BRAND_DELETE_URI } from "@/res/icBrandDeleteUri";
import Strings from "@/i18n";
import { useAppDispatch } from "@/redux";
import {
  markBrandBannerEverClicked,
  removePowderBrandEntries,
  selectEditingBrandId,
  selectPowderBrandEntries,
  setEditingBrandId,
  setPowderBrandSelection,
} from "@/redux/modules/powderBrandSlice";
import {
  powderGramsToFormulaRatio,
  buildFormulaSettingDpPayload,
} from "@/utils/bottleMaker";
import { createDpSetter, publishDpBatch } from "@/utils/dpControl";
import styles from "./index.module.less";

type ActiveField = "water" | "powder" | null;

const scheduleDeactivate = (
  field: ActiveField,
  setActiveField: Dispatch<SetStateAction<ActiveField>>
) => {
  setTimeout(() => {
    setActiveField((current) => (current === field ? null : current));
  }, 120);
};

const CustomMixRatioPage: React.FC = () => {
  const t = (key: Parameters<typeof Strings.getLang>[0]) =>
    Strings.getLang(key);
  const dispatch = useAppDispatch();
  const actions = useActions();
  const setDp = useMemo(
    () =>
      createDpSetter(
        actions as Record<string, { set?: (v: unknown) => unknown }> | undefined
      ),
    [actions]
  );

  const editingEntryId = useSelector(selectEditingBrandId);
  const entries = useSelector(selectPowderBrandEntries);
  const editingEntry = useMemo(
    () =>
      editingEntryId
        ? entries.find((entry) => entry.id === editingEntryId) ?? null
        : null,
    [editingEntryId, entries]
  );
  const isEditMode = Boolean(
    editingEntry && editingEntry.brandId === CUSTOM_BRAND_ID
  );

  const draft = readCustomMixRatioDraft();
  const [waterMl, setWaterMl] = useState<number | null>(draft.waterMl);
  const [powderG, setPowderG] = useState<number | null>(draft.powderG);
  const [activeField, setActiveField] = useState<ActiveField>(null);
  const [hydrated, setHydrated] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  useEffect(() => {
    if (hydrated) return;
    if (isEditMode && editingEntry) {
      setWaterMl(editingEntry.waterMl);
      setPowderG(editingEntry.powderG);
    }
    setHydrated(true);
  }, [editingEntry, hydrated, isEditMode]);

  const canSave = isCustomMixRatioComplete(waterMl, powderG);

  const handleBack = useCallback(() => {
    dispatch(setEditingBrandId(null));
    router.back();
  }, [dispatch]);

  const handleSave = async () => {
    if (!isCustomMixRatioComplete(waterMl, powderG)) {
      showToast({ title: t("custom_mix_ratio_incomplete"), icon: "none" });
      return;
    }

    const water = clampCustomWaterMl(waterMl as number);
    const powder = clampCustomPowderG(powderG as number);
    const formulaRatio = powderGramsToFormulaRatio(powder);

    const selection = {
      brandId: CUSTOM_BRAND_ID,
      brandLabel: t("powder_brand_custom_label"),
      seriesId: "custom",
      seriesLabel: t("powder_brand_custom_label"),
      stageId: "custom",
      stageLabel: t("powder_brand_custom_label"),
      waterMl: water,
      powderG: powder,
      formulaRatio,
    };

    writeCustomMixRatioDraft({ waterMl: water, powderG: powder });
    dispatch(setPowderBrandSelection(selection));
    dispatch(markBrandBannerEverClicked());

    const ok = await publishDpBatch(setDp, {
      ...buildFormulaSettingDpPayload(water, powder),
      [dpCodes.volumeMl]: water,
    });
    if (!ok) {
      showToast({ title: t("dp_command_failed"), icon: "none" });
      return;
    }

    dispatch(setEditingBrandId(null));
    router.push("/");
  };

  const handleConfirmDelete = useCallback(() => {
    if (!editingEntryId) return;
    dispatch(removePowderBrandEntries([editingEntryId]));
    dispatch(setEditingBrandId(null));
    setDeleteModalVisible(false);
    router.back();
  }, [dispatch, editingEntryId]);

  const deleteRatioLabel = useMemo(() => {
    const water = editingEntry?.waterMl ?? waterMl ?? 0;
    const powder = editingEntry?.powderG ?? powderG ?? 0;
    let out = t("custom_mix_ratio_delete_confirm_message");
    out = out.replace("{0}", String(water));
    out = out.replace("{1}", String(powder));
    return out;
  }, [editingEntry, powderG, t, waterMl]);

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.backBtn} onClick={handleBack}>
          <Image src={IC_BACK_URI} className={styles.backIcon} />
        </View>
        <Text className={styles.headerTitle}>
          {t("custom_mix_ratio_page_title")}
        </Text>
        <View className={styles.headerSpacer} />
      </View>

      <Text className={styles.note}>{t("custom_mix_ratio_note")}</Text>

      <View className={styles.panelCard}>
        <View className={styles.panelTitleRow}>
          <Text className={styles.panelTitle}>
            {t("custom_mix_ratio_panel_title")}
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
        <View className={styles.ratioCards}>
          <EditableRatioMetricCard
            label={t("powder_brand_ratio_water")}
            value={waterMl}
            unit={t("unit_ml_lower")}
            placeholder={t("common_empty_placeholder")}
            active={activeField === "water"}
            min={CUSTOM_MIX_WATER_MIN}
            onActivate={() => setActiveField("water")}
            onDeactivate={() => scheduleDeactivate("water", setActiveField)}
            onChange={setWaterMl}
          />
          <EditableRatioMetricCard
            label={t("powder_brand_ratio_powder")}
            value={powderG}
            unit={t("unit_g")}
            placeholder={t("common_empty_placeholder")}
            active={activeField === "powder"}
            min={CUSTOM_MIX_POWDER_MIN}
            max={CUSTOM_MIX_POWDER_MAX}
            onActivate={() => setActiveField("powder")}
            onDeactivate={() => scheduleDeactivate("powder", setActiveField)}
            onChange={setPowderG}
          />
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

      <BrandDeleteConfirmModal
        visible={deleteModalVisible}
        message={deleteRatioLabel}
        onCancel={() => setDeleteModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
};

export default CustomMixRatioPage;
