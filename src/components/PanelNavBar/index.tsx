/* eslint-disable react/require-default-props */
import React from "react";
import { View, Image, exitMiniProgram, router } from "@ray-js/ray";
import { IC_BACK_URI } from "@/res/icBackUri";
import { IC_SETTINGS_URI } from "@/res/icSettingsUri";
import maxiCosiLogoBlue from "@/res/maxi_cosi_logo_blue.png";
import { openDeviceSettings } from "@/utils/openDeviceSettings";
import styles from "./index.module.less";

export type PanelNavBarMode = "home" | "subpage";

interface Props {
  mode?: PanelNavBarMode;
  deviceId?: string;
}

const PanelNavBar: React.FC<Props> = ({ mode = "home", deviceId }) => {
  const handleBack = () => {
    if (mode === "subpage") {
      router.push("/");
      return;
    }
    exitMiniProgram({});
  };

  return (
    <View className={styles.bar}>
      <View className={styles.sideBtn} onClick={handleBack}>
        <Image src={IC_BACK_URI} className={styles.sideIcon} />
      </View>
      <View className={styles.logoWrap}>
        <Image
          src={maxiCosiLogoBlue}
          className={styles.logo}
          mode="aspectFit"
        />
      </View>
      <View
        className={styles.sideBtn}
        onClick={() => openDeviceSettings(deviceId)}
      >
        <Image src={IC_SETTINGS_URI} className={styles.sideIcon} />
      </View>
    </View>
  );
};

export default PanelNavBar;
