/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const HighTempCleanConfirmModal: React.FC<Props> = ({
  visible,
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
          <Text className={styles.title}>
            {t("high_temp_clean_confirm_title")}
          </Text>
          <Text className={styles.message}>
            {t("high_temp_clean_confirm_body")}
          </Text>
        </View>
        <View className={styles.divider} />
        <View className={styles.actions}>
          <View className={styles.btnRow} onClick={onCancel}>
            <Text className={styles.btnCancelText}>{t("common_cancel")}</Text>
          </View>
          <View className={styles.btnDivider} />
          <View className={styles.btnRow} onClick={onConfirm}>
            <Text className={styles.btnConfirmText}>
              {t("high_temp_clean_confirm_action")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HighTempCleanConfirmModal;
