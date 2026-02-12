import React from "react";
import { View, Text } from "@ray-js/ray";
import clsx from "clsx";
import SegmentedRadio from "@/components/SegmentedRadio";
import Strings from "@/i18n";
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
      ? Strings.getLang("disinfection_status_paused")
      : hasRemaining
      ? Strings.formatValue("disinfection_remaining_minutes", remainingMinutes)
      : undefined
    : undefined;
  const mergedStatusLabel = statusLabelOverride ?? statusLabel;

  const noteText = !running
    ? Strings.getLang("disinfection_note_stopped")
    : paused
    ? Strings.getLang("disinfection_note_paused")
    : Strings.getLang("disinfection_note_running");

  const statusText = isPetPresent
    ? Strings.getLang("disinfection_detected")
    : Strings.getLang("disinfection_not_detected");

  const options = [
    { key: "0", label: Strings.getLang("common_close"), disabled: false },
    {
      key: "1",
      label: Strings.getLang("home_action_disinfection_quick"),
      disabled: running && mode !== "1",
    },
    {
      key: "2",
      label: Strings.getLang("home_action_disinfection_deep"),
      disabled: running && mode !== "2",
    },
  ];

  return (
    <View className={clsx(styles.card, disabled && styles.disabled, className)}>
      <View className={styles.header}>
        <Text className={styles.title}>
          {Strings.getLang("disinfection_title")}
        </Text>
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
