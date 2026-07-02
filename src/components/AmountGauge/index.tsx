/* eslint-disable react/require-default-props */
import React, { useMemo } from "react";
import { View, Text, Image } from "@ray-js/ray";
import clsx from "clsx";
import { buildGaugeArcImageUri } from "./arcImage";
import { getArcGeometry, mapKnobToDisplay } from "./arcGeometry";
import styles from "./index.module.less";

interface Props {
  value: number;
  unit: string;
  label: string;
  min?: number;
  max?: number;
  /** 離線或童鎖時禁用點擊；線上弧線與數字均保持不透明 */
  dimmed?: boolean;
  onClick?: () => void;
}

const formatRangeUnit = (unit: string) => unit.toLowerCase();

const AmountGauge: React.FC<Props> = ({
  value,
  unit,
  label,
  min = 0,
  max = 420,
  dimmed = false,
  onClick,
}) => {
  const ratio =
    max > min ? Math.min(1, Math.max(0, (value - min) / (max - min))) : 0;
  const unitLabel = formatRangeUnit(unit);
  const arc = useMemo(() => getArcGeometry(ratio), [ratio]);
  const arcImageSrc = useMemo(() => buildGaugeArcImageUri(ratio), [ratio]);

  const knobStyle = useMemo(() => {
    const { x, y } = mapKnobToDisplay(
      arc.knobX,
      arc.knobY,
      arc.height,
      arc.stroke
    );
    return {
      left: `${x}px`,
      top: `${y}px`,
    } as React.CSSProperties;
  }, [arc.knobX, arc.knobY, arc.height, arc.stroke]);

  return (
    <View
      className={clsx(styles.wrap, dimmed && styles.dimmed)}
      onClick={dimmed ? undefined : onClick}
    >
      <View className={styles.card}>
        <View className={styles.arcTrack}>
          <View className={styles.arcRing}>
            <Image src={arcImageSrc} className={styles.arcImage} />
            <View className={styles.arcKnob} style={knobStyle} />
          </View>

          <View className={styles.arcInner}>
            <View className={styles.gaugeContent}>
              <Text className={styles.label}>{label}</Text>
              <View className={styles.valueRow}>
                <Text className={styles.unitMirror}>{unitLabel}</Text>
                <Text className={styles.value}>{value}</Text>
                <Text className={styles.unit}>{unitLabel}</Text>
              </View>
            </View>
            <View className={styles.rangeBar}>
              <Text className={styles.rangeText}>
                {min}
                {unitLabel}
              </Text>
              <Text className={styles.rangeText}>
                {max}
                {unitLabel}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AmountGauge;
