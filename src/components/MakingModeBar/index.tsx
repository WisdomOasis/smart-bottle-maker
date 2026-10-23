/* eslint-disable react/require-default-props */
import React, { useMemo } from "react";
import { View, Text, Image } from "@ray-js/ray";
import Strings from "@/i18n";
import { MAKING_LOADING_ICON_URI } from "./icons";
import styles from "./index.module.less";

export type MakingBarVariant = "milk" | "water" | "powder" | "clean";

interface Props {
  variant?: MakingBarVariant;
}

const MakingModeBar: React.FC<Props> = ({ variant = "milk" }) => {
  const text = useMemo(() => {
    if (variant === "water") {
      return Strings.getLang("water_dispensing");
    }
    if (variant === "powder") {
      return Strings.getLang("powder_dispensing");
    }
    return Strings.getLang("making_progress");
  }, [variant]);

  return (
    <View className={styles.bar}>
      <Image src={MAKING_LOADING_ICON_URI} className={styles.spinner} />
      <Text className={styles.text}>{text}</Text>
    </View>
  );
};

export default MakingModeBar;
