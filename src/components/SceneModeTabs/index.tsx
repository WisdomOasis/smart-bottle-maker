/* eslint-disable react/require-default-props */
import React, { useCallback, useRef } from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import type { ScenePresetKey } from "@/constant/presets";
import styles from "./index.module.less";

export type SceneTabKey = Exclude<ScenePresetKey, "custom">;

export type SceneTabItem = {
  key: SceneTabKey;
  labelKey: I18nKey;
  iconUri: string;
};

interface Props {
  tabs: SceneTabItem[];
  activeKey: ScenePresetKey;
  onChange: (key: SceneTabKey) => void;
  disabled?: boolean;
}

const SceneModeTabs: React.FC<Props> = ({
  tabs,
  activeKey,
  onChange,
  disabled = false,
}) => {
  const t = (key: I18nKey) => Strings.getLang(key);

  const lastTapRef = useRef(0);

  const handleSelect = useCallback(
    (key: SceneTabKey) => {
      if (disabled) return;
      const now = Date.now();
      if (now - lastTapRef.current < 280) return;
      lastTapRef.current = now;
      onChange(key);
    },
    [disabled, onChange]
  );

  return (
    <View className={clsx(styles.track, disabled && styles.trackDisabled)}>
      {tabs.map((tab) => {
        const active = activeKey === tab.key;
        return (
          <View
            key={tab.key}
            className={clsx(styles.tab, active && styles.tabActive)}
            onClick={() => handleSelect(tab.key)}
            onTouchEnd={() => handleSelect(tab.key)}
          >
            {active ? (
              <Text className={clsx(styles.tabLabel, styles.tabLabelActive)}>
                {t(tab.labelKey)}
              </Text>
            ) : (
              <Image src={tab.iconUri} className={styles.tabIcon} />
            )}
          </View>
        );
      })}
    </View>
  );
};

export default SceneModeTabs;
