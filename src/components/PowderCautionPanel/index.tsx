import React from "react";
import { View, Text } from "@ray-js/ray";
import Strings from "@/i18n";
import styles from "./index.module.less";

const PowderCautionPanel: React.FC = () => {
  const t = (key: Parameters<typeof Strings.getLang>[0]) =>
    Strings.getLang(key);

  return (
    <View className={styles.panel}>
      <Text className={styles.text}>{t("powder_dispense_caution")}</Text>
    </View>
  );
};

export default PowderCautionPanel;
