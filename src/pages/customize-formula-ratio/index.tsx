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
import { Input } from "@ray-js/components";
import EditableRatioMetricCard from "@/components/EditableRatioMetricCard";
import FormulaDeleteConfirmModal from "@/components/FormulaDeleteConfirmModal";
import FormulaDuplicateModal from "@/components/FormulaDuplicateModal";
import PowderBrandOptionSheet from "@/components/PowderBrandOptionSheet";
import PowderBrandSelectField from "@/components/PowderBrandSelectField";
import UseFormulaConfirmModal from "@/components/UseFormulaConfirmModal";
import { POWDER_BRAND_SHEET_ICONS } from "@/components/PowderBrandOptionSheet/icons";
import {
  clampCustomPowderG,
  clampCustomWaterMl,
  CUSTOM_BRAND_ID,
  CUSTOM_MIX_POWDER_MAX,
  CUSTOM_MIX_POWDER_MIN,
  CUSTOM_MIX_WATER_MIN,
  isCustomMixRatioComplete,
} from "@/constant/customMixRatio";
import dpCodes from "@/constant/dpCodes";
import {
  markFormulaAppliedToast,
  markFormulaSavedToast,
} from "@/constant/formulaAppliedToastStorage";
import { FORMULA_STAGE_OPTIONS } from "@/constant/formulaStages";
import { IC_BACK_URI } from "@/res/icBackUri";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { useAppDispatch } from "@/redux";
import {
  addPowderBrandEntry,
  markBrandBannerEverClicked,
  removePowderBrandEntries,
  selectEditingBrandId,
  selectPowderBrandEntries,
  setEditingBrandId,
  setPowderBrandSelection,
} from "@/redux/modules/powderBrandSlice";
import { formatFormulaSummary } from "@/i18n/formatters";
import { formatFormulaEntrySummary } from "@/utils/formulaEntrySearch";
import { powderGramsToFormulaRatio } from "@/utils/bottleMaker";
import { createDpSetter } from "@/utils/dpControl";
import { findDuplicateFormulaEntry } from "@/utils/formulaDuplicate";
import styles from "./index.module.less";

type ActiveField = "water" | "powder" | null;

const readInputValue = (event: unknown): string => {
  if (event == null) return "";
  const e = event as {
    value?: string;
    detail?: { value?: string };
    target?: { value?: string };
  };
  return String(e.value ?? e.detail?.value ?? e.target?.value ?? "");
};

const scheduleDeactivate = (
  field: ActiveField,
  setActiveField: Dispatch<SetStateAction<ActiveField>>
) => {
  setTimeout(() => {
    setActiveField((current) => (current === field ? null : current));
  }, 120);
};

const isFormulaComplete = (
  name: string,
  stageId: string | null,
  waterMl: number | null,
  powderG: number | null
): boolean =>
  name.trim().length > 0 &&
  Boolean(stageId) &&
  isCustomMixRatioComplete(waterMl, powderG);

const CustomizeFormulaRatioPage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const dispatch = useAppDispatch();
  const actions = useActions();
  const entries = useSelector(selectPowderBrandEntries);
  const editingEntryId = useSelector(selectEditingBrandId);
  const editingEntry = useMemo(
    () =>
      editingEntryId
        ? entries.find((entry) => entry.id === editingEntryId) ?? null
        : null,
    [editingEntryId, entries]
  );
  const isEditMode = Boolean(
    editingEntryId && editingEntry?.brandId === CUSTOM_BRAND_ID
  );
  const setDp = useMemo(
    () =>
      createDpSetter(
        actions as Record<string, { set?: (v: unknown) => unknown }> | undefined
      ),
    [actions]
  );

  const [formulaName, setFormulaName] = useState("");
  const [stageId, setStageId] = useState<string | null>(null);
  const [waterMl, setWaterMl] = useState<number | null>(null);
  const [powderG, setPowderG] = useState<number | null>(null);
  const [activeField, setActiveField] = useState<ActiveField>(null);
  const [stagePickerOpen, setStagePickerOpen] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [duplicateVisible, setDuplicateVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (hydrated) return;
    if (isEditMode && editingEntry) {
      setFormulaName(editingEntry.brandLabel);
      setStageId(editingEntry.stageId);
      setWaterMl(editingEntry.waterMl);
      setPowderG(editingEntry.powderG);
    }
    setHydrated(true);
  }, [editingEntry, hydrated, isEditMode]);

  const stageOptions = useMemo(
    () =>
      FORMULA_STAGE_OPTIONS.map((stage) => ({
        id: stage.id,
        label: t(stage.labelKey),
      })),
    [t]
  );

  const stageLabel = useMemo(() => {
    const stage = FORMULA_STAGE_OPTIONS.find((item) => item.id === stageId);
    return stage ? t(stage.labelKey) : null;
  }, [stageId, t]);

  const canSubmit = isFormulaComplete(formulaName, stageId, waterMl, powderG);

  const buildSelection = useCallback(() => {
    if (!canSubmit || !stageId || !isCustomMixRatioComplete(waterMl, powderG)) {
      return null;
    }
    const water = clampCustomWaterMl(waterMl as number);
    const powder = clampCustomPowderG(powderG as number);
    const name = formulaName.trim();
    const stage = stageOptions.find((item) => item.id === stageId);
    return {
      brandId: CUSTOM_BRAND_ID,
      brandLabel: name,
      seriesId: "custom",
      seriesLabel: name,
      stageId,
      stageLabel: stage?.label ?? stageId,
      waterMl: water,
      powderG: powder,
      formulaRatio: powderGramsToFormulaRatio(water, powder),
    };
  }, [canSubmit, formulaName, powderG, stageId, stageOptions, waterMl]);

  const selection = useMemo(() => buildSelection(), [buildSelection]);

  const isDuplicate = useMemo(() => {
    if (!selection) return false;
    return (
      findDuplicateFormulaEntry(selection, entries, editingEntryId) !== null
    );
  }, [editingEntryId, entries, selection]);

  const formulaConfirmDetail = useMemo(() => {
    if (!selection) return "";
    return formatFormulaSummary(
      selection.brandLabel,
      selection.stageLabel,
      selection.powderG,
      selection.waterMl
    );
  }, [selection]);

  const showDuplicateModal = useCallback(() => {
    setConfirmVisible(false);
    setDuplicateVisible(true);
  }, []);

  const persistSelection = useCallback(
    async (applyToDevice: boolean) => {
      if (!selection) {
        showToast({
          title: t("customize_formula_ratio_incomplete"),
          icon: "none",
        });
        return;
      }

      if (findDuplicateFormulaEntry(selection, entries, editingEntryId)) {
        showDuplicateModal();
        return;
      }

      if (applyToDevice || isEditMode) {
        dispatch(setPowderBrandSelection(selection));
        dispatch(markBrandBannerEverClicked());
        const ratioOk = await setDp(
          dpCodes.formulaRatio,
          selection.formulaRatio
        );
        const mlOk = await setDp(dpCodes.volumeMl, selection.waterMl);
        if (!ratioOk && !mlOk) {
          showToast({ title: t("dp_command_failed"), icon: "none" });
          return;
        }
        dispatch(setEditingBrandId(null));
        markFormulaAppliedToast();
        router.push("/formula");
        return;
      }

      dispatch(addPowderBrandEntry(selection));
      markFormulaSavedToast();
      router.push("/formula");
    },
    [
      dispatch,
      editingEntryId,
      entries,
      isEditMode,
      selection,
      setDp,
      showDuplicateModal,
      t,
    ]
  );

  const handleBack = useCallback(() => {
    dispatch(setEditingBrandId(null));
    router.back();
  }, [dispatch]);

  const handleClearName = useCallback(() => {
    setFormulaName("");
  }, []);

  const handleUseFormulaPress = useCallback(() => {
    if (!canSubmit) return;
    if (isDuplicate) {
      showDuplicateModal();
      return;
    }
    setConfirmVisible(true);
  }, [canSubmit, isDuplicate, showDuplicateModal]);

  const handleSavePress = useCallback(() => {
    if (!canSubmit) return;
    if (isDuplicate) {
      showDuplicateModal();
      return;
    }
    persistSelection(false);
  }, [canSubmit, isDuplicate, persistSelection, showDuplicateModal]);

  const handleConfirmUseFormula = useCallback(() => {
    if (isDuplicate) {
      showDuplicateModal();
      return;
    }
    setConfirmVisible(false);
    persistSelection(true);
  }, [isDuplicate, persistSelection, showDuplicateModal]);

  const handleSaveAndUsePress = useCallback(() => {
    if (!canSubmit) return;
    if (isDuplicate) {
      showDuplicateModal();
      return;
    }
    persistSelection(true);
  }, [canSubmit, isDuplicate, persistSelection, showDuplicateModal]);

  const handleConfirmDelete = useCallback(() => {
    if (!editingEntryId) return;
    dispatch(removePowderBrandEntries([editingEntryId]));
    dispatch(setEditingBrandId(null));
    setDeleteModalVisible(false);
    router.back();
  }, [dispatch, editingEntryId]);

  const deleteFormulaSummary = useMemo(() => {
    if (!editingEntry) return "";
    return formatFormulaEntrySummary(editingEntry);
  }, [editingEntry]);

  useEffect(() => {
    if (!hydrated) return;
    if (editingEntryId && !editingEntry) {
      dispatch(setEditingBrandId(null));
      router.back();
    }
  }, [dispatch, editingEntry, editingEntryId, hydrated]);

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.backBtn} onClick={handleBack}>
          <Image src={IC_BACK_URI} className={styles.backIcon} />
        </View>
        <Text className={styles.headerTitle}>
          {t(
            isEditMode
              ? "customize_formula_page_title"
              : "customize_formula_ratio_page_title"
          )}
        </Text>
        <View className={styles.headerSpacer} />
      </View>

      <Text className={styles.note}>{t("customize_formula_ratio_note")}</Text>

      <View className={styles.panelCard}>
        <Text className={styles.panelTitle}>
          {t("customize_formula_ratio_name_title")}
        </Text>
        <View className={styles.selectStack}>
          <View className={styles.nameRow}>
            <Input
              className={styles.nameInput}
              style={{ background: "transparent", border: "none" }}
              type="text"
              value={formulaName}
              placeholder={t("customize_formula_ratio_name_placeholder")}
              placeholderStyle="color: #4D7294; font-size: 14px;"
              confirmType="done"
              onInput={(e) => setFormulaName(readInputValue(e))}
            />
            {formulaName.length > 0 ? (
              <View className={styles.clearBtn} onClick={handleClearName}>
                <Image
                  src={POWDER_BRAND_SHEET_ICONS.clear}
                  className={styles.clearIcon}
                />
              </View>
            ) : null}
          </View>
          <PowderBrandSelectField
            label={t("customize_formula_ratio_stage_label")}
            value={stageLabel}
            onPress={() => setStagePickerOpen(true)}
          />
        </View>
      </View>

      <View className={clsx(styles.panelCard, styles.ratioPanel)}>
        <Text className={styles.panelTitle}>
          {t(
            isEditMode
              ? "custom_mix_ratio_panel_title"
              : "customize_formula_ratio_panel_title"
          )}
        </Text>
        <View className={styles.ratioCards}>
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
        </View>
      </View>

      <View className={styles.bottomSection}>
        <View
          className={clsx(styles.actions, isEditMode && styles.actionsEdit)}
        >
          <View
            className={clsx(
              styles.btnPrimary,
              !canSubmit && styles.btnPrimaryDisabled
            )}
            onClick={
              canSubmit
                ? isEditMode
                  ? handleSaveAndUsePress
                  : handleUseFormulaPress
                : undefined
            }
          >
            <Text className={styles.btnPrimaryText}>
              {t(
                isEditMode
                  ? "customize_formula_save_and_use"
                  : "customize_formula_use_formula"
              )}
            </Text>
          </View>
          {!isEditMode ? (
            <View
              className={clsx(
                styles.btnSecondary,
                !canSubmit && styles.btnSecondaryDisabled
              )}
              onClick={canSubmit ? handleSavePress : undefined}
            >
              <Text className={styles.btnSecondaryText}>
                {t("common_save")}
              </Text>
            </View>
          ) : null}
        </View>

        {isEditMode ? (
          <Text
            className={styles.deleteLink}
            onClick={() => setDeleteModalVisible(true)}
          >
            {t("formula_delete")}
          </Text>
        ) : null}
      </View>

      {stagePickerOpen ? (
        <PowderBrandOptionSheet
          title={t("customize_formula_ratio_stage_sheet_title")}
          options={stageOptions}
          selectedId={stageId}
          onSelect={(id) => {
            setStageId(id);
            setStagePickerOpen(false);
          }}
          onClose={() => setStagePickerOpen(false)}
          sheetMode="stage"
        />
      ) : null}

      <UseFormulaConfirmModal
        visible={confirmVisible}
        formulaDetail={formulaConfirmDetail}
        onCancel={() => setConfirmVisible(false)}
        onConfirm={handleConfirmUseFormula}
      />

      <FormulaDuplicateModal
        visible={duplicateVisible}
        onConfirm={() => setDuplicateVisible(false)}
      />

      <FormulaDeleteConfirmModal
        visible={deleteModalVisible}
        formulaSummary={deleteFormulaSummary}
        onCancel={() => setDeleteModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
};

export default CustomizeFormulaRatioPage;
