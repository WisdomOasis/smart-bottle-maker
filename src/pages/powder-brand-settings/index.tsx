import React, { useCallback, useMemo } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { View, Text, Image, router } from "@ray-js/ray";
import { useActions } from "@ray-js/panel-sdk";
import BrandListCard from "@/components/BrandListCard";
import CustomRatioListCard from "@/components/CustomRatioListCard";
import { CUSTOM_BRAND_ID } from "@/constant/customMixRatio";
import dpCodes from "@/constant/dpCodes";
import { entryToSelection } from "@/constant/powderBrandListStorage";
import { writeFormulaDetailEntryId } from "@/constant/formulaDetailStorage";
import { IC_BACK_URI } from "@/res/icBackUri";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { useAppDispatch } from "@/redux";
import {
  selectActiveBrandId,
  selectPowderBrandEntries,
  setActiveBrandId,
  setEditingBrandId,
} from "@/redux/modules/powderBrandSlice";
import { createDpSetter } from "@/utils/dpControl";
import styles from "./index.module.less";

const PowderBrandSettingsPage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const dispatch = useAppDispatch();
  const actions = useActions();
  const entries = useSelector(selectPowderBrandEntries);
  const activeId = useSelector(selectActiveBrandId);

  const brandEntries = useMemo(
    () => entries.filter((e) => e.brandId !== CUSTOM_BRAND_ID),
    [entries]
  );
  const customEntries = useMemo(
    () => entries.filter((e) => e.brandId === CUSTOM_BRAND_ID),
    [entries]
  );

  const setDp = useMemo(
    () =>
      createDpSetter(
        actions as Record<string, { set?: (v: unknown) => unknown }> | undefined
      ),
    [actions]
  );

  const handleBack = useCallback(() => {
    router.back();
  }, []);

  const applyActiveBrandDps = useCallback(
    async (id: string | null) => {
      dispatch(setActiveBrandId(id));
      if (!id) return;
      const entry = entries.find((e) => e.id === id);
      if (!entry) return;
      const selection = entryToSelection(entry);
      await setDp(dpCodes.formulaRatio, selection.formulaRatio);
      await setDp(dpCodes.volumeMl, selection.waterMl);
    },
    [dispatch, entries, setDp]
  );

  const handleSelectActive = useCallback(
    (id: string) => {
      const nextId = activeId === id ? null : id;
      applyActiveBrandDps(nextId);
    },
    [activeId, applyActiveBrandDps]
  );

  const handleEditBrand = useCallback(
    (id: string) => {
      dispatch(setEditingBrandId(id));
      writeFormulaDetailEntryId(id);
      router.push("/formula-details");
    },
    [dispatch]
  );

  const handleEditCustom = useCallback(
    (id: string) => {
      dispatch(setEditingBrandId(id));
      router.push("/custom-mix-ratio");
    },
    [dispatch]
  );

  const handleAdd = useCallback(() => {
    dispatch(setEditingBrandId(null));
    router.push("/search-brand");
  }, [dispatch]);

  const handleBatchDelete = useCallback(() => {
    router.push("/powder-brand-batch-delete");
  }, []);

  const showBatchDelete = entries.length > 1;
  const showBrandEmpty = brandEntries.length === 0;
  const hideFooter = showBrandEmpty && entries.length <= 1;

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.backBtn} onClick={handleBack}>
          <Image src={IC_BACK_URI} className={styles.backIcon} />
        </View>
        <Text className={styles.headerTitle}>
          {t("powder_brand_settings_title")}
        </Text>
        <View className={styles.headerSpacer} />
      </View>

      <View className={styles.sections}>
        <View className={styles.sectionBlock}>
          <Text className={styles.sectionLabel}>
            {t("powder_brand_select_brand")}
          </Text>
          {showBrandEmpty ? (
            <View className={styles.emptyCard}>
              <Text className={styles.emptyText}>
                {t("powder_brand_empty_message")}
              </Text>
              <View className={styles.emptyAddBtn} onClick={handleAdd}>
                <Text className={styles.emptyAddBtnText}>
                  {t("powder_brand_add_brand")}
                </Text>
              </View>
            </View>
          ) : (
            <View className={styles.list}>
              {brandEntries.map((entry) => (
                <BrandListCard
                  key={entry.id}
                  entry={entry}
                  selected={activeId === entry.id}
                  onSelect={() => handleSelectActive(entry.id)}
                  onEdit={() => handleEditBrand(entry.id)}
                />
              ))}
            </View>
          )}
        </View>

        {customEntries.length > 0 ? (
          <View className={styles.sectionBlock}>
            <Text className={styles.sectionLabel}>
              {t("powder_brand_custom_ratio_section")}
            </Text>
            <View className={styles.list}>
              {customEntries.map((entry) => (
                <CustomRatioListCard
                  key={entry.id}
                  entry={entry}
                  selected={activeId === entry.id}
                  onSelect={() => handleSelectActive(entry.id)}
                  onEdit={() => handleEditCustom(entry.id)}
                />
              ))}
            </View>
          </View>
        ) : null}
      </View>

      {!hideFooter ? (
        <View
          className={clsx(
            styles.footer,
            !showBatchDelete && styles.footerSingle
          )}
        >
          {showBatchDelete ? (
            <View className={styles.btnBatchDelete} onClick={handleBatchDelete}>
              <Text className={styles.btnBatchDeleteText}>
                {t("powder_brand_batch_delete")}
              </Text>
            </View>
          ) : null}
          <View
            className={clsx(
              styles.btnAdd,
              !showBatchDelete && styles.btnAddFull
            )}
            onClick={handleAdd}
          >
            <Text className={styles.btnAddText}>
              {t("powder_brand_add_brand")}
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default PowderBrandSettingsPage;
