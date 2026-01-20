import React from "react";
import { View, Text } from "@ray-js/ray";
import clsx from "clsx";
import SegmentedRadio from "@/components/SegmentedRadio";
import styles from "./index.module.less";

interface Props {
  mode: "0" | "1" | "4";
  isPowerOn: boolean;
  isPetPresent: boolean;
  onChangeMode: (mode: "0" | "1" | "4") => void;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

const DisinfectionCard: React.FC<Props> = ({
  mode,
  isPowerOn,
  isPetPresent,
  onChangeMode,
  className,
}) => {
  const disabled = !isPowerOn || isPetPresent;

  return (
    <View className={clsx(styles.card, disabled && styles.disabled, className)}>
      <View className={styles.header}>
        <Text className={styles.title}>オゾン消毒</Text>
      </View>
      <Text className={styles.desc}>
        注意: 動物が検出されない場合にのみ起動可能。
      </Text>
      <Text className={styles.hint}>スライドの設置時間（20〜40分）</Text>

      <SegmentedRadio
        className={styles.SegmentedRadioWrapper}
        value={mode}
        options={[
          { key: "0", label: "閉じる" },
          { key: "1", label: "迅速消毒" },
          { key: "4", label: "徹底消毒" },
        ]}
        onChange={(val) => onChangeMode(val as "0" | "1" | "4")}
        disabled={disabled}
        tone="green"
        showIndicator={false}
      />
    </View>
  );
};

export default DisinfectionCard;
