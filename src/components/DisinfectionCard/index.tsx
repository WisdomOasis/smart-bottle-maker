import React from "react";
import { View, Text } from "@ray-js/ray";
import clsx from "clsx";
import SegmentedRadio from "@/components/SegmentedRadio";
import styles from "./index.module.less";

interface Props {
  mode: "0" | "1" | "2";
  isPowerOn: boolean;
  isPetPresent: boolean;
  onChangeMode: (mode: "0" | "1" | "2") => void;
  // eslint-disable-next-line react/require-default-props
  remainingMinutes?: number | null;
  // 是否正在消毒（用於 UI 提示）
  // eslint-disable-next-line react/require-default-props
  isRunning?: boolean;
  // 是否偵測到人/寵物而暫停
  // eslint-disable-next-line react/require-default-props
  isPaused?: boolean;
  // 狀態標籤覆寫，例如「緊急停止後の回復フェーズ」
  // eslint-disable-next-line react/require-default-props
  statusLabelOverride?: string;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

const DisinfectionCard: React.FC<Props> = ({
  mode,
  isPowerOn,
  isPetPresent,
  onChangeMode,
  remainingMinutes,
  isRunning,
  isPaused,
  statusLabelOverride,
  className,
}) => {
  const running = isRunning ?? (mode === "1" || mode === "2");
  const paused = isPaused ?? (running && isPetPresent);
  const disabled = !isPowerOn;
  const hasRemaining =
    remainingMinutes !== null && remainingMinutes !== undefined;

  const statusLabel = running
    ? paused
      ? "停止"
      : hasRemaining
      ? `残り${remainingMinutes}分`
      : undefined
    : undefined;
  const mergedStatusLabel = statusLabelOverride ?? statusLabel;

  const noteText = !running
    ? "人や動物を検知したため、消毒機能を停止します。"
    : paused
    ? "注意: 人・動物検知、消毒停止。解除後、再開。"
    : "注意: 安全のため、消毒中は人やペットを設備から離してください。";

  const statusText = isPetPresent
    ? "● 人や動物を検出しました。"
    : "● 人やペットが検出されません。";

  const options = [
    { key: "0", label: "閉じる", disabled: false },
    {
      key: "1",
      label: "迅速消毒",
      disabled: running && mode !== "1",
    },
    {
      key: "2",
      label: "徹底消毒",
      disabled: running && mode !== "2",
    },
  ];

  return (
    <View className={clsx(styles.card, disabled && styles.disabled, className)}>
      <View className={styles.header}>
        <Text className={styles.title}>オゾン消毒</Text>
        {mergedStatusLabel && (
          <Text
            className={clsx(
              styles.statusLabel,
              paused && styles.statusLabelPaused
            )}
          >
            {mergedStatusLabel}
          </Text>
        )}
      </View>
      <Text className={styles.desc}>{noteText}</Text>
      <View className={styles.statusRow}>
        <Text
          className={clsx(
            styles.statusText,
            isPetPresent ? styles.statusTextRed : styles.statusTextGreen
          )}
        >
          {statusText}
        </Text>
      </View>

      <SegmentedRadio
        className={styles.SegmentedRadioWrapper}
        value={mode}
        options={options}
        onChange={(val) => onChangeMode(val as "0" | "1" | "2")}
        disabled={disabled}
        tone="green"
        showIndicator={false}
      />
    </View>
  );
};

export default DisinfectionCard;
