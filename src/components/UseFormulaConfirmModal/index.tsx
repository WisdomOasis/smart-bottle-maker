/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  formulaDetail: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const UseFormulaConfirmModal: React.FC<Props> = ({
  visible,
  formulaDetail,
  onCancel,
  onConfirm,
}) => {
  const t = (key: I18nKey) => Strings.getLang(key);

  if (!visible) return null;

  return (
    <View className={styles.overlay}>
      <View
        className={styles.sheet}
        onClick={(e: { stopPropagation?: () => void }) =>
          e?.stopPropagation?.()
        }
      >
        <View className={styles.content}>
          <Text className={styles.title}>{t("use_formula_confirm_title")}</Text>
          <Text className={styles.message}>
            {t("use_formula_confirm_body")}
          </Text>
          <Text className={styles.formulaDetail}>{formulaDetail}</Text>
        </View>
        <View className={styles.divider} />
        <View className={styles.actions}>
          <View className={styles.btnRow} onClick={onCancel}>
            <Text className={styles.btnCancelText}>{t("common_cancel")}</Text>
          </View>
          <View className={styles.btnDivider} />
          <View className={styles.btnRow} onClick={onConfirm}>
            <Text className={styles.btnConfirmText}>{t("common_confirm")}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UseFormulaConfirmModal;
