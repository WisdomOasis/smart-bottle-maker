/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text } from "@ray-js/ray";
import { Input } from "@ray-js/components";
import styles from "./index.module.less";

interface Props {
  label: string;
  value: number | null;
  unit: string;
  placeholder?: string;
  active: boolean;
  min: number;
  max?: number;
  onActivate: () => void;
  onDeactivate: () => void;
  onChange: (value: number | null) => void;
}

const readInputValue = (event: unknown): string => {
  if (event == null) return "";
  const e = event as {
    value?: string;
    detail?: { value?: string };
    target?: { value?: string };
  };
  return String(e.value ?? e.detail?.value ?? e.target?.value ?? "");
};

const EditableRatioMetricCard: React.FC<Props> = ({
  label,
  value,
  unit,
  placeholder = "--",
  active,
  min,
  max,
  onActivate,
  onDeactivate,
  onChange,
}) => {
  const handleInput = (event: unknown) => {
    onActivate();
    const raw = readInputValue(event).replace(/[^\d]/g, "");
    if (raw === "") {
      onChange(null);
      return;
    }
    const n = Math.round(Number(raw));
    if (!Number.isFinite(n)) return;
    const clamped = Math.max(min, n);
    onChange(max == null ? clamped : Math.min(max, clamped));
  };

  return (
    <View className={clsx(styles.card, active && styles.cardActive)}>
      <View className={styles.valueRow}>
        <Input
          className={styles.valueInput}
          type="digit"
          value={value == null ? "" : String(value)}
          placeholder={placeholder}
          placeholderStyle="color: #CBDEEF; font-size: 28px;"
          confirmType="done"
          onFocus={onActivate}
          onBlur={onDeactivate}
          onInput={handleInput}
        />
        <Text className={styles.valueUnit}>{unit}</Text>
      </View>
      <Text className={styles.label}>{label}</Text>
    </View>
  );
};

export default EditableRatioMetricCard;
