/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  previousSummary: string;
  nextSummary: string;
  onCancel: () => void;
  onEnable: () => void;
}

const applyTemplate = (template: string, value: string) =>
  template.replace("{0}", value);

const EnableFormulaConfirmModal: React.FC<Props> = ({
  visible,
  previousSummary,
  nextSummary,
  onCancel,
  onEnable,
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
          <Text className={styles.message}>
            {applyTemplate(t("enable_formula_previous"), previousSummary)}
          </Text>
          <Text className={styles.message}>
            {t("enable_formula_question_prefix")}
            <Text className={styles.formulaHighlight}>
              {`'${nextSummary}'`}
            </Text>
            {t("enable_formula_question_suffix")}
          </Text>
        </View>
        <View className={styles.divider} />
        <View className={styles.actions}>
          <View className={styles.btnRow} onClick={onCancel}>
            <Text className={styles.btnNoText}>{t("enable_formula_no")}</Text>
          </View>
          <View className={styles.btnDivider} />
          <View className={styles.btnRow} onClick={onEnable}>
            <Text className={styles.btnEnableText}>
              {t("enable_formula_enable")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EnableFormulaConfirmModal;
