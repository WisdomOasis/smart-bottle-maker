/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import CustomModeSlider from "@/components/CustomModeSlider";
import Strings from "@/i18n";
import { formatUnitValueCelsius } from "@/i18n/formatters";
import {
  TEMP_MAX,
  TEMP_MIN,
  TEMP_SET_OPTIONS,
  type TempSet,
} from "@/utils/bottleMaker";
import { WATER_TEMP_ICON_URI } from "./icons";
import styles from "./index.module.less";

interface Props {
  temp: TempSet;
  disabled?: boolean;
  onChange: (temp: TempSet) => void;
  /** 高溫清潔等固定溫度：滑桿鎖在單一值（可超出 temp DP 範圍，僅 UI） */
  fixedTemp?: number;
}

const WaterTemperaturePanel: React.FC<Props> = ({
  temp,
  disabled = false,
  onChange,
  fixedTemp,
}) => {
  const t = (key: Parameters<typeof Strings.getLang>[0]) =>
    Strings.getLang(key);
  const displayTemp = fixedTemp ?? temp;
  const sliderMin = fixedTemp ?? TEMP_MIN;
  const sliderMax = fixedTemp ?? TEMP_MAX;
  const sliderSnap = fixedTemp ? [fixedTemp] : TEMP_SET_OPTIONS;

  return (
    <View className={clsx(styles.panel, disabled && styles.panelDisabled)}>
      <View className={styles.headerRow}>
        <View className={styles.titleGroup}>
          <Image src={WATER_TEMP_ICON_URI} className={styles.icon} />
          <Text className={styles.label}>{t("water_temperature_label")}</Text>
        </View>
        <Text className={styles.value}>
          {formatUnitValueCelsius(displayTemp)}
        </Text>
      </View>
      <View className={styles.sliderWrap}>
        <CustomModeSlider
          min={sliderMin}
          max={sliderMax}
          step={1}
          value={displayTemp}
          snapTo={sliderSnap}
          disabled={disabled}
          onChange={(v) => onChange(v as TempSet)}
        />
      </View>
    </View>
  );
};

export default WaterTemperaturePanel;
