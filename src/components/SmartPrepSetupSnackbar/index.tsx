/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text, Image } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { SMART_PREP_SETUP_SNACKBAR_ICONS } from "./icons";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  onPress: () => void;
}

const SmartPrepSetupSnackbar: React.FC<Props> = ({ visible, onPress }) => {
  const t = (key: I18nKey) => Strings.getLang(key);

  if (!visible) return null;

  return (
    <View className={styles.wrap}>
      <View className={styles.bar} onClick={onPress}>
        <Image
          src={SMART_PREP_SETUP_SNACKBAR_ICONS.warning}
          className={styles.warningIcon}
        />
        <Text className={styles.message}>{t("smart_prep_snackbar_setup")}</Text>
        <View className={styles.navBtn}>
          <Image
            src={SMART_PREP_SETUP_SNACKBAR_ICONS.chevron}
            className={styles.chevronIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default SmartPrepSetupSnackbar;
