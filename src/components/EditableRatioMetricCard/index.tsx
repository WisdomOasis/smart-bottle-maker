/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { View, Text } from "@ray-js/ray";
import { Input } from "@ray-js/components";
import Strings from "@/i18n";
import styles from "./index.module.less";

interface Props {
  label: string;
  value: number | null;
  unit: string;
  placeholder?: string;
  active: boolean;
  min: number;
  max?: number;
  /** 1＝整數；0.1＝允許一位小數（奶粉 g） */
  step?: number;
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

const formatCommitted = (n: number, step: number): string => {
  if (step > 0 && step < 1) {
    const decimals = String(step).includes(".")
      ? String(step).split(".")[1].length
      : 1;
    return n.toFixed(decimals).replace(/\.?0+$/, (m) => (m === "." ? "" : ""));
  }
  return String(Math.round(n));
};

/** 輸入中允許的字串：數字 + 可選一位小數點 */
const sanitizeDraft = (raw: string, allowDecimal: boolean): string => {
  const cleaned = allowDecimal
    ? raw.replace(/[^\d.]/g, "")
    : raw.replace(/[^\d]/g, "");
  if (!allowDecimal) return cleaned;
  const dot = cleaned.indexOf(".");
  if (dot < 0) return cleaned;
  const head = cleaned.slice(0, dot + 1);
  const tail = cleaned
    .slice(dot + 1)
    .replace(/\./g, "")
    .slice(0, 1);
  return `${head}${tail}`;
};

const parseDraft = (draft: string, step: number): number | null => {
  if (draft === "" || draft === ".") return null;
  const n = Number(draft);
  if (!Number.isFinite(n)) return null;
  if (step > 0 && step < 1) {
    const decimals = String(step).includes(".")
      ? String(step).split(".")[1].length
      : 1;
    const factor = 10 ** decimals;
    return Math.round(n * factor) / factor;
  }
  return Math.round(n);
};

const clampValue = (n: number, min: number, max?: number): number => {
  let next = Math.max(min, n);
  if (max != null) next = Math.min(max, next);
  return next;
};

const EditableRatioMetricCard: React.FC<Props> = ({
  label,
  value,
  unit,
  placeholder = Strings.getLang("common_empty_placeholder"),
  active,
  min,
  max,
  step = 1,
  onActivate,
  onDeactivate,
  onChange,
}) => {
  const allowDecimal = step > 0 && step < 1;
  /** 聚焦時用草稿字串，避免邊打邊 clamp／剝小數點（例如 3.5 → 35） */
  const [draft, setDraft] = useState<string | null>(null);

  useEffect(() => {
    if (active) return;
    setDraft(null);
  }, [active, value]);

  const displayValue =
    draft != null ? draft : value == null ? "" : formatCommitted(value, step);

  const commitDraft = (raw: string) => {
    const parsed = parseDraft(raw, step);
    if (parsed == null) {
      onChange(null);
      setDraft(null);
      return;
    }
    const next = clampValue(parsed, min, max);
    onChange(next);
    setDraft(null);
  };

  const handleFocus = () => {
    onActivate();
    setDraft(value == null ? "" : formatCommitted(value, step));
  };

  const handleInput = (event: unknown) => {
    onActivate();
    const next = sanitizeDraft(readInputValue(event), allowDecimal);
    setDraft(next);
    /* 輸入中不 clamp：僅在可解析完整數字時同步父層，保留「3.」等中間態於 draft */
    if (next === "" || next.endsWith(".")) {
      if (next === "") onChange(null);
      return;
    }
    const parsed = parseDraft(next, step);
    if (parsed == null) return;
    /* 未失焦前不強制 min，避免打「2」立刻變 2.5；超過 max 仍暫存 draft 顯示 */
    if (max != null && parsed > max) return;
    if (parsed >= min) onChange(parsed);
  };

  const handleBlur = () => {
    if (draft != null) commitDraft(draft);
    onDeactivate();
  };

  return (
    <View className={clsx(styles.card, active && styles.cardActive)}>
      <View className={styles.valueRow}>
        <View className={styles.valueCluster}>
          <Input
            className={styles.valueInput}
            type={allowDecimal ? "digit" : "number"}
            value={displayValue}
            placeholder={placeholder}
            placeholderStyle="color: #CBDEEF; font-size: 28px; line-height: 40px; text-align: center;"
            // @ts-expect-error Ray Input 需 inline style 才能水平置中（含 placeholder）
            style={{
              textAlign: "center",
              width: "64px",
            }}
            confirmType="done"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInput={handleInput}
          />
          <Text className={styles.valueUnit}>{unit}</Text>
        </View>
      </View>
      <Text className={styles.label}>{label}</Text>
    </View>
  );
};

export default EditableRatioMetricCard;
