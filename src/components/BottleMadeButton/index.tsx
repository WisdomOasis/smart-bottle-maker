/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text, Image } from "@ray-js/ray";
import Res from "@/res";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import styles from "./index.module.less";

interface Props {
  labelKey?: I18nKey;
}

const BottleMadeButton: React.FC<Props> = ({ labelKey = "bottle_made" }) => {
  const t = (key: Parameters<typeof Strings.getLang>[0]) =>
    Strings.getLang(key);

  return (
    <View className={styles.btn}>
      <Image src={Res.actionButtonIcons.bottleMade} className={styles.icon} />
      <Text className={styles.label}>{t(labelKey)}</Text>
    </View>
  );
};

export default BottleMadeButton;
