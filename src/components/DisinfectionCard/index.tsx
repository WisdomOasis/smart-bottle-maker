import React from "react";
import { View, Text } from "@ray-js/ray";
import clsx from "clsx";
import ToggleSwitch from "@/components/ToggleSwitch";
import SegmentedRadio from "@/components/SegmentedRadio";
import styles from "./index.module.less";

interface Props {
  enabled: boolean;
  mode: "1" | "4";
  isPowerOn: boolean;
  isPetPresent: boolean;
  onToggle: () => void;
  onChangeMode: (mode: "1" | "4") => void;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

const DisinfectionCard: React.FC<Props> = ({
  enabled,
  mode,
  isPowerOn,
  isPetPresent,
  onToggle,
  onChangeMode,
  className,
}) => {
  const disabled = !isPowerOn || isPetPresent;

  return (
    <View className={clsx(styles.card, className)}>
      <View>
        <View className={styles.header}>
          <Text className={styles.title}>オゾン消毒</Text>
          <ToggleSwitch
            checked={enabled}
            onToggle={onToggle}
            disabled={disabled}
            tone="green"
          />
        </View>
        <Text className={styles.desc}>
          注意: 動物が検出されない場合にのみ起動可能。
        </Text>
        <Text className={styles.hint}>スライドの設置時間（20〜40分）</Text>
      </View>

      <SegmentedRadio
        className={styles.SegmentedRadioWrapper}
        value={mode}
        options={[
          { key: "1", label: "迅速消毒" },
          { key: "4", label: "徹底消毒" },
        ]}
        onChange={(val) => onChangeMode(val as "1" | "4")}
        disabled={!enabled || disabled}
        tone="green"
      />
    </View>
  );
};

export default DisinfectionCard;
