import React from "react";
import { View, Text, Image } from "@ray-js/ray";
import clsx from "clsx";
import ToggleSwitch from "@/components/ToggleSwitch";
import Strings from "@/i18n";
import Res from "@/res";
import styles from "./index.module.less";

interface Props {
  enabled: boolean;
  isPowerOn: boolean;
  onSelect: () => void;
  onToggle: () => void;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

const SceneCard: React.FC<Props> = ({
  enabled,
  isPowerOn,
  onSelect,
  onToggle,
  className,
}) => {
  return (
    <View className={clsx(styles.card, className)}>
      <View className={styles.header}>
        <Text className={styles.title}>{Strings.getLang("scene_title")}</Text>
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
        <View
          className={clsx(styles.item, enabled && styles.itemActive)}
          onClick={() => {
            if (!isPowerOn) return;
            onSelect();
          }}
        >
          <View className={clsx(styles.bubble, enabled && styles.bubbleActive)}>
            <Image
              src={enabled ? Res.icAutoActive : Res.icAuto}
              className={clsx(styles.icon, enabled && styles.iconActive)}
            />
          </View>
          <Text className={clsx(styles.label, enabled && styles.labelActive)}>
            {Strings.getLang("scene_action_auto")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SceneCard;
