/* eslint-disable react/require-default-props */
import React, { useMemo } from "react";
import { View, Text, Image } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import type { ScenePresetKey } from "@/constant/presets";
import { MAKING_LOADING_ICON_URI } from "./icons";
import styles from "./index.module.less";

export type MakingBarVariant = "milk" | "water" | "powder" | "clean";

interface Props {
  variant?: MakingBarVariant;
  modeKey?: ScenePresetKey;
  modeLabelKey?: I18nKey;
}

const MakingModeBar: React.FC<Props> = ({
  variant = "milk",
  modeKey = "standard",
  modeLabelKey,
}) => {
  const label = useMemo(() => {
    const key: I18nKey =
      modeKey === "custom" ? "mode_custom" : modeLabelKey ?? "mode_standard";
    return Strings.getLang(key);
  }, [modeKey, modeLabelKey]);

  const text = useMemo(() => {
    if (variant === "water") {
      return Strings.getLang("water_dispensing");
    }
    if (variant === "powder") {
      return Strings.getLang("powder_dispensing");
    }
    const template = Strings.getLang("making_progress");
    return template.replace("{0}", label);
  }, [label, variant]);

  return (
    <View className={styles.bar}>
      <Image src={MAKING_LOADING_ICON_URI} className={styles.spinner} />
      <Text className={styles.text}>{text}</Text>
    </View>
  );
};

export default MakingModeBar;
