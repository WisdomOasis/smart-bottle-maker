import React from "react";
import { View, Text } from "@ray-js/ray";
import clsx from "clsx";
import styles from "./index.module.less";

export interface SegmentedOption {
  key: string;
  label: string;
}

interface Props {
  options: SegmentedOption[];
  value: string;
  onChange: (key: string) => void;
  // eslint-disable-next-line react/require-default-props
  className?: string;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  // eslint-disable-next-line react/require-default-props
  tone?: "blue" | "green";
}

const SegmentedRadio: React.FC<Props> = ({
  options,
  value,
  onChange,
  className,
  disabled = false,
  tone = "blue",
}) => {
  return (
    <View
      className={clsx(
        styles.track,
        tone === "green" && styles.trackGreen,
        className,
        disabled && styles.trackDisabled
      )}
      onClick={(e: any) => {
        if (disabled) e?.stopPropagation?.();
      }}
    >
      {options.map((option) => {
        const active = option.key === value;
        return (
          <View
            key={option.key}
            className={clsx(
              styles.option,
              active && styles.optionActive,
              active && tone === "green" && styles.optionActiveGreen
            )}
            onClick={() => {
              if (disabled) return;
              onChange(option.key);
            }}
          >
            <View
              className={clsx(
                styles.optionIndicator,
                active && styles.optionIndicatorActive,
                active && tone === "green" && styles.optionIndicatorActiveGreen
              )}
            >
              {active && (
                <View
                  className={clsx(
                    styles.optionCheck,
                    tone === "green" && styles.optionCheckGreen
                  )}
                />
              )}
            </View>
            <Text
              className={clsx(
                styles.optionLabel,
                active && styles.optionLabelActive
              )}
            >
              {option.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default SegmentedRadio;
