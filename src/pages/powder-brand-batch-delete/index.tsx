import React, { useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { View, Text, Image, router } from "@ray-js/ray";
import BatchDeleteSelectRow from "@/components/BatchDeleteSelectRow";
import BrandDeleteConfirmModal from "@/components/BrandDeleteConfirmModal";
import { CUSTOM_BRAND_ID } from "@/constant/customMixRatio";
import { IC_BACK_URI } from "@/res/icBackUri";
import Strings from "@/i18n";
import { formatLabeledValue } from "@/i18n/formatters";
import type { I18nKey } from "@/i18n/strings";
import { useAppDispatch } from "@/redux";
import {
  removePowderBrandEntries,
  selectPowderBrandEntries,
} from "@/redux/modules/powderBrandSlice";
import { formatFormulaStageRatio } from "@/utils/formulaEntrySearch";
import { formatFormulaRatioDisplay } from "@/utils/barcodeLookup";
import styles from "./index.module.less";

const applyTemplate = (template: string, values: string[]) => {
  let out = template;
  values.forEach((v, i) => {
    out = out.replace(`{${i}}`, v);
  });
  return out;
};

const PowderBrandBatchDeletePage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const dispatch = useAppDispatch();
  const entries = useSelector(selectPowderBrandEntries);

  const brandEntries = useMemo(
    () => entries.filter((e) => e.brandId !== CUSTOM_BRAND_ID),
    [entries]
  );
  const customEntries = useMemo(
    () => entries.filter((e) => e.brandId === CUSTOM_BRAND_ID),
    [entries]
  );

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleBack = useCallback(() => {
    router.back();
  }, []);

  const toggleId = useCallback((id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const handleDeletePress = useCallback(() => {
    if (selectedIds.length === 0) return;
    setDeleteModalVisible(true);
  }, [selectedIds.length]);

  const handleConfirmDelete = useCallback(() => {
    dispatch(removePowderBrandEntries(selectedIds));
    setDeleteModalVisible(false);
    router.back();
  }, [dispatch, selectedIds]);

  const selectedCount = selectedIds.length;

  const deleteConfirmMessage = useMemo(() => {
    const templateKey =
      selectedCount === 1
        ? "powder_brand_batch_confirm_message_one"
        : "powder_brand_batch_confirm_message_many";
    return selectedCount === 1
      ? t(templateKey)
      : applyTemplate(t(templateKey), [String(selectedCount)]);
  }, [selectedCount, t]);

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.backBtn} onClick={handleBack}>
          <Image src={IC_BACK_URI} className={styles.backIcon} />
        </View>
        <Text className={styles.headerTitle}>
          {t("powder_brand_batch_delete")}
        </Text>
        <View className={styles.headerSpacer} />
      </View>

      <View className={styles.sections}>
        {brandEntries.length > 0 ? (
          <View className={styles.list}>
            {brandEntries.map((entry) => (
              <BatchDeleteSelectRow
                key={entry.id}
                primary={entry.brandLabel}
                secondary={formatFormulaStageRatio(
                  entry.stageLabel,
                  entry.powderG,
                  entry.waterMl
                )}
                tertiary={
                  entry.barcode
                    ? formatLabeledValue(
                        t("barcode_result_barcode_label"),
                        entry.barcode
                      )
                    : undefined
                }
                checked={selectedIds.includes(entry.id)}
                onToggle={() => toggleId(entry.id)}
              />
            ))}
          </View>
        ) : null}

        {customEntries.length > 0 ? (
          <View className={styles.list}>
            {customEntries.map((entry) => (
              <BatchDeleteSelectRow
                key={entry.id}
                primary={entry.brandLabel}
                secondary={formatFormulaRatioDisplay(
                  entry.powderG,
                  entry.waterMl
                )}
                checked={selectedIds.includes(entry.id)}
                onToggle={() => toggleId(entry.id)}
              />
            ))}
          </View>
        ) : null}
      </View>

      <View className={styles.footer}>
        <View className={styles.btnCancel} onClick={handleBack}>
          <Text className={styles.btnCancelText}>{t("common_cancel")}</Text>
        </View>
        <View
          className={clsx(
            styles.btnDelete,
            selectedCount === 0 && styles.btnDeleteDisabled
          )}
          onClick={handleDeletePress}
        >
          <Text
            className={clsx(
              styles.btnDeleteText,
              selectedCount === 0 && styles.btnDeleteTextDisabled
            )}
          >
            {applyTemplate(t("powder_brand_batch_footer_delete"), [
              String(selectedCount),
            ])}
          </Text>
        </View>
      </View>

      <BrandDeleteConfirmModal
        visible={deleteModalVisible}
        message={deleteConfirmMessage}
        confirmLabel="common_delete"
        onCancel={() => setDeleteModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
};

export default PowderBrandBatchDeletePage;
