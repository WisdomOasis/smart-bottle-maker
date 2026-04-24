import React from "react";
import { View, Text } from "@ray-js/ray";
import clsx from "clsx";
import ToggleSwitch from "@/components/ToggleSwitch";
import SegmentedRadio from "@/components/SegmentedRadio";
import Strings from "@/i18n";
import styles from "./index.module.less";

type DisinfectionMode = "quick" | "deep";

interface Props {
  enabled: boolean;
  isPowerOn: boolean;
  isPetPresent: boolean;
  onToggle: () => void;
  mode: DisinfectionMode;
  onModeChange: (mode: DisinfectionMode) => void;
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
  enabled,
  isPowerOn,
  isPetPresent,
  onToggle,
  mode,
  onModeChange,
  remainingMinutes,
  isRunning,
  isPaused,
  statusLabelOverride,
  className,
}) => {
  const running = isRunning ?? enabled;
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

  return (
    <View className={clsx(styles.card, disabled && styles.disabled, className)}>
      <View className={styles.header}>
        <Text className={styles.title}>
          {Strings.getLang("disinfection_title")}
        </Text>
        <ToggleSwitch
          checked={enabled}
          onToggle={onToggle}
          disabled={!isPowerOn}
          tone="green"
        />
      </View>
      <SegmentedRadio
        className={styles.SegmentedRadioWrapper}
        tone="green"
        value={mode}
        disabled={!isPowerOn}
        options={[
          {
            key: "quick",
            label: Strings.getLang("home_action_disinfection_quick"),
          },
          {
            key: "deep",
            label: Strings.getLang("home_action_disinfection_deep"),
          },
        ]}
        onChange={(key) => {
          if (key === "quick" || key === "deep") {
            onModeChange(key);
          }
        }}
      />
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
    </View>
  );
};

export default DisinfectionCard;
