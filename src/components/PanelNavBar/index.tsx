/* eslint-disable react/require-default-props */
import React from "react";
import { View, Image, exitMiniProgram, router } from "@ray-js/ray";
import { IC_BACK_URI } from "@/res/icBackUri";
import { IC_SETTINGS_URI } from "@/res/icSettingsUri";
import { IC_FEEDING_RECORD_URI } from "@/res/icFeedingRecordUri";
import maxiCosiLogoBlue from "@/res/maxi_cosi_logo_blue.png";
import { openDeviceSettings } from "@/utils/openDeviceSettings";
import styles from "./index.module.less";

export type PanelNavBarMode = "home" | "subpage";

interface Props {
  mode?: PanelNavBarMode;
  deviceId?: string;
  /** Home：餵養紀錄（選寶寶檔案） */
  onFeedingRecordPress?: () => void;
}

const PanelNavBar: React.FC<Props> = ({
  mode = "home",
  deviceId,
  onFeedingRecordPress,
}) => {
  const handleBack = () => {
    if (mode === "subpage") {
      router.push("/");
      return;
    }
    exitMiniProgram({});
  };

  const handleSettings = () => {
    openDeviceSettings(deviceId);
  };

  return (
    <View className={styles.bar}>
      <View className={styles.left}>
        <View className={styles.sideBtn} onClick={handleBack}>
          <Image
            src={IC_BACK_URI}
            className={styles.sideIcon}
            style={{ pointerEvents: "none" }}
          />
        </View>
      </View>

      <View className={styles.center}>
        <Image
          src={maxiCosiLogoBlue}
          className={styles.logo}
          mode="aspectFit"
          style={{ pointerEvents: "none" }}
        />
      </View>

      <View className={styles.right}>
        {onFeedingRecordPress ? (
          <View
            className={`${styles.sideBtn} ${styles.sideBtnFeeding}`}
            onClick={onFeedingRecordPress}
          >
            <Image
              src={IC_FEEDING_RECORD_URI}
              className={styles.sideIcon}
              mode="aspectFit"
              style={{ pointerEvents: "none" }}
            />
          </View>
        ) : null}
        <View className={styles.sideBtn} onClick={handleSettings}>
          <Image
            src={IC_SETTINGS_URI}
            className={styles.sideIcon}
            style={{ pointerEvents: "none" }}
          />
        </View>
      </View>
    </View>
  );
};

export default PanelNavBar;
