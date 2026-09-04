/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  onOk: () => void;
}

const SmartPrepNoCryDeviceModal: React.FC<Props> = ({ visible, onOk }) => {
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
          <Text className={styles.title}>
            {t("smart_prep_no_cry_device_title")}
          </Text>
          <Text className={styles.message}>
            {t("smart_prep_no_cry_device")}
          </Text>
        </View>
        <View className={styles.divider} />
        <View className={styles.actions}>
          <View className={styles.btnRow} onClick={onOk}>
            <Text className={styles.btnOkText}>{t("common_ok")}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SmartPrepNoCryDeviceModal;
