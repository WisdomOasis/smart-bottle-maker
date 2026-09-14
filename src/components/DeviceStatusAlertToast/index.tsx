/* eslint-disable react/require-default-props */
import React from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import { IC_DEVICE_STATUS_CHEVRON_URI } from "@/res/icDeviceStatusChevronUri";
import { IC_DEVICE_STATUS_ERROR_URI } from "@/res/icDeviceStatusErrorUri";
import styles from "./index.module.less";

interface Props {
  message: string;
  /** 省略時為純提示：無右箭頭、不可點擊 */
  onPress?: () => void;
}

const DeviceStatusAlertToast: React.FC<Props> = ({ message, onPress }) => (
  <View
    className={clsx(styles.toast, !onPress && styles.toastStatic)}
    onClick={onPress}
  >
    <Image src={IC_DEVICE_STATUS_ERROR_URI} className={styles.icon} />
    <Text className={styles.text} style={{ color: "#BA2F2F" }}>
      {message}
    </Text>
    {onPress ? (
      <View className={styles.chevronBtn}>
        <Image src={IC_DEVICE_STATUS_CHEVRON_URI} className={styles.chevron} />
      </View>
    ) : null}
  </View>
);

export default DeviceStatusAlertToast;
