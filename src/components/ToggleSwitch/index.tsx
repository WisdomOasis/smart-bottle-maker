import React from "react";
import { View } from "@ray-js/ray";
import clsx from "clsx";
import styles from "./index.module.less";

interface Props {
  checked: boolean;
  onToggle: (next: boolean) => void;
  // eslint-disable-next-line react/require-default-props
  className?: string;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  // eslint-disable-next-line react/require-default-props
  tone?: "blue" | "green";
}

const ToggleSwitch: React.FC<Props> = ({
  checked,
  onToggle,
  className,
  disabled = false,
  tone = "blue",
}) => {
  return (
    <View
      className={clsx(
        styles.switch,
        checked && styles.switchOn,
        tone === "green" && styles.switchGreen,
        checked && tone === "green" && styles.switchOnGreen,
        disabled && styles.switchDisabled,
        className
      )}
      onClick={() => {
        if (disabled) return;
        onToggle(!checked);
      }}
    >
      <View className={clsx(styles.thumb, checked && styles.thumbOn)} />
    </View>
  );
};

export default ToggleSwitch;
