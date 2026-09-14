/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  onCancel: () => void;
  onEnable: () => void;
}

const SmartPrepActivateModal: React.FC<Props> = ({
  visible,
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
          <Text className={styles.title}>{t("smart_prep_activate_title")}</Text>
          <Text className={styles.message}>
            {t("smart_prep_activate_body")}
          </Text>
        </View>
        <View className={styles.divider} />
        <View className={styles.actions}>
          <View className={styles.btnRow} onClick={onCancel}>
            <Text className={styles.btnCancelText}>{t("common_cancel")}</Text>
          </View>
          <View className={styles.btnDivider} />
          <View className={styles.btnRow} onClick={onEnable}>
            <Text className={styles.btnEnableText}>
              {t("smart_prep_enable_reminder")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SmartPrepActivateModal;
