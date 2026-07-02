import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, router } from "@ray-js/ray";
import BatchDeleteSelectRow from "@/components/BatchDeleteSelectRow";
import BrandDeleteConfirmModal from "@/components/BrandDeleteConfirmModal";
import { CUSTOM_BRAND_ID } from "@/constant/customMixRatio";
import { IC_BACK_URI } from "@/res/icBackUri";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { useAppDispatch } from "@/redux";
import {
  removePowderBrandEntries,
  selectPowderBrandEntries,
} from "@/redux/modules/powderBrandSlice";
import { countToEnglishWord } from "@/utils/englishCount";
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
    const countWord = countToEnglishWord(selectedCount);
    const templateKey =
      selectedCount === 1
        ? "powder_brand_batch_confirm_message_one"
        : "powder_brand_batch_confirm_message_many";
    return applyTemplate(t(templateKey), [countWord]);
  }, [selectedCount, t]);

  const customLabel = t("powder_brand_custom_label");

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
          <View className={styles.sectionBlock}>
            <Text className={styles.sectionLabel}>
              {t("powder_brand_select_brand")}
            </Text>
            <View className={styles.list}>
              {brandEntries.map((entry) => (
                <BatchDeleteSelectRow
                  key={entry.id}
                  primary={entry.brandLabel}
                  secondary={`${entry.seriesLabel} / ${entry.stageLabel}`}
                  checked={selectedIds.includes(entry.id)}
                  onToggle={() => toggleId(entry.id)}
                />
              ))}
            </View>
          </View>
        ) : null}

        {customEntries.length > 0 ? (
          <View className={styles.sectionBlock}>
            <Text className={styles.sectionLabel}>
              {t("powder_brand_custom_ratio_section")}
            </Text>
            <View className={styles.list}>
              {customEntries.map((entry) => (
                <BatchDeleteSelectRow
                  key={entry.id}
                  primary={`${entry.waterMl}ml / ${entry.powderG}g`}
                  secondary={customLabel}
                  checked={selectedIds.includes(entry.id)}
                  onToggle={() => toggleId(entry.id)}
                />
              ))}
            </View>
          </View>
        ) : null}
      </View>

      <View className={styles.footer}>
        <View className={styles.btnCancel} onClick={handleBack}>
          <Text className={styles.btnCancelText}>{t("common_cancel")}</Text>
        </View>
        <View className={styles.btnDelete} onClick={handleDeletePress}>
          <Text className={styles.btnDeleteText}>
            {applyTemplate(t("powder_brand_batch_footer_delete"), [
              String(selectedCount),
            ])}
          </Text>
        </View>
      </View>

      <BrandDeleteConfirmModal
        visible={deleteModalVisible}
        message={deleteConfirmMessage}
        onCancel={() => setDeleteModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
};

export default PowderBrandBatchDeletePage;
