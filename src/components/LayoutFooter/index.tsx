/* eslint-disable react/require-default-props */
import React from "react";
import { Image, View, exitMiniProgram } from "@ray-js/ray";
import { IC_NAV_HOUSE_URI } from "@/res/icNavHouseUri";
import { IC_NAV_SETTINGS_URI } from "@/res/icNavSettingsUri";
import { openDeviceSettings } from "@/utils/openDeviceSettings";
import styles from "./index.module.less";

interface Props {
  deviceId?: string;
}

/**
 * Bottom nav aligned with safety1st-baby-monitor LayoutFooter:
 * Home (exit panel) · Settings (device settings)
 */
const LayoutFooter: React.FC<Props> = ({ deviceId }) => {
  const openHome = () => {
    exitMiniProgram({});
  };

  const openSettings = () => {
    openDeviceSettings(deviceId);
  };

  return (
    <View className={styles.tabBar}>
      <View className={styles.tabRow}>
        <View className={styles.tabBtn} onClick={openHome}>
          <View className={styles.tabHit}>
            <Image
              src={IC_NAV_HOUSE_URI}
              className={styles.tabIcon}
              mode="aspectFit"
              style={{ pointerEvents: "none" }}
            />
          </View>
        </View>
        <View className={styles.tabBtn} onClick={openSettings}>
          <View className={styles.tabHit}>
            <Image
              src={IC_NAV_SETTINGS_URI}
              className={styles.tabIcon}
              mode="aspectFit"
              style={{ pointerEvents: "none" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LayoutFooter;
