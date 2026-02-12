import React, { useMemo } from "react";
import { View, Text } from "@ray-js/ray";
import clsx from "clsx";
import ToggleSwitch from "@/components/ToggleSwitch";
import Strings from "@/i18n";
import styles from "./index.module.less";

type LightKey = "red" | "blue" | "green";

interface Props {
  // eslint-disable-next-line react/require-default-props
  value?: number;
  enabled: boolean;
  isPowerOn: boolean;
  onSelect: (key: LightKey) => void;
  onToggle: () => void;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

const LIGHT_MAP: Record<LightKey, number> = {
  red: 0xfd5454,
  blue: 0x61aeff,
  green: 0x88d069,
};

const LightCard: React.FC<Props> = ({
  value,
  enabled,
  isPowerOn,
  onSelect,
  onToggle,
  className,
}) => {
  const activeKey = useMemo<LightKey | null>(() => {
    if (value === LIGHT_MAP.red) return "red";
    if (value === LIGHT_MAP.blue) return "blue";
    if (value === LIGHT_MAP.green) return "green";
    return null;
  }, [value]);

  const items: { key: LightKey; label: string }[] = [
    { key: "red", label: Strings.getLang("home_action_light_red") },
    { key: "blue", label: Strings.getLang("home_action_light_blue") },
    { key: "green", label: Strings.getLang("home_action_light_green") },
  ];

  return (
    <View className={clsx(styles.card, className)}>
      <View className={styles.header}>
        <Text className={styles.title}>{Strings.getLang("light_title")}</Text>
        <ToggleSwitch
          checked={enabled}
          onToggle={onToggle}
          disabled={!isPowerOn}
          tone="green"
        />
      </View>
      <View
        className={clsx(
          styles.wrapper,
          (!isPowerOn || !enabled) && styles.disabled
        )}
      >
        {items.map((item) => {
          const isActive = activeKey === item.key && enabled;
          return (
            <View
              key={item.key}
              className={clsx(styles.item, isActive && styles.itemActive)}
              onClick={() => {
                if (!isPowerOn) return;
                onSelect(item.key);
              }}
            >
              <View
                className={clsx(styles.bubble, isActive && styles.bubbleActive)}
              >
                <View
                  className={clsx(
                    styles.dot,
                    styles[`dot_${item.key}`],
                    isActive && styles.dotActive
                  )}
                />
              </View>
              <Text
                className={clsx(styles.label, isActive && styles.labelActive)}
              >
                {item.label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export { LIGHT_MAP };
export type { LightKey };
export default LightCard;
