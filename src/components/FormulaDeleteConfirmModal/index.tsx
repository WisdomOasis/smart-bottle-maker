/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  formulaSummary: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const FormulaDeleteConfirmModal: React.FC<Props> = ({
  visible,
  formulaSummary,
  onCancel,
  onConfirm,
}) => {
  const t = (key: I18nKey) => Strings.getLang(key);

  if (!visible) return null;

  return (
    <View className={styles.overlay} onClick={onCancel}>
      <View
        className={styles.sheet}
        onClick={(e: { stopPropagation?: () => void }) =>
          e?.stopPropagation?.()
        }
      >
        <View className={styles.content}>
          <Text className={styles.message}>
            {t("formula_delete_confirm_prefix")}
            <Text className={styles.formulaHighlight}>
              {`'${formulaSummary}'`}
            </Text>
            {t("formula_delete_confirm_suffix")}
          </Text>
        </View>
        <View className={styles.divider} />
        <View className={styles.actions}>
          <View className={styles.btnRow} onClick={onCancel}>
            <Text className={styles.btnCancelText}>{t("common_cancel")}</Text>
          </View>
          <View className={styles.btnDivider} />
          <View className={styles.btnRow} onClick={onConfirm}>
            <Text className={styles.btnConfirmText}>{t("common_delete")}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FormulaDeleteConfirmModal;
