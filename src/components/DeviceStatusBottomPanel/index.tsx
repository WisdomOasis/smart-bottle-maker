/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text, Image, ScrollView } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { IC_DEVICE_STATUS_CLOSE_URI } from "@/res/icDeviceStatusCloseUri";
import { IC_DEVICE_STATUS_ERROR_URI } from "@/res/icDeviceStatusErrorUri";
import { IC_DEVICE_STATUS_SUCCESS_URI } from "@/res/icDeviceStatusSuccessUri";
import type { DeviceAssemblyStatus } from "@/utils/deviceAssemblyStatus";
import styles from "./index.module.less";

interface Props {
  items: DeviceAssemblyStatus[];
  onClose: () => void;
  titleKey?: I18nKey;
  subtitleKey?: I18nKey;
}

const LABEL_KEYS: Record<DeviceAssemblyStatus["key"], I18nKey> = {
  mixing_chamber: "device_status_mixing_chamber",
  mixing_chamber_removed: "device_status_mixing_chamber_removed",
  water_tank: "device_status_water_tank",
  milk_powder: "device_status_milk_powder",
  bottle: "device_status_bottle",
};

const DeviceStatusBottomPanel: React.FC<Props> = ({
  items,
  onClose,
  titleKey = "device_status_panel_title",
  subtitleKey = "device_status_panel_subtitle",
}) => {
  const t = (key: I18nKey) => Strings.getLang(key);

  return (
    <View className={styles.mask}>
      <View className={styles.backdrop} onClick={onClose} />
      <View className={styles.sheet}>
        <View className={styles.header}>
          <Text className={styles.title} style={{ color: "#2D365F" }}>
            {t(titleKey)}
          </Text>
          <View className={styles.closeBtn} onClick={onClose}>
            <Image
              src={IC_DEVICE_STATUS_CLOSE_URI}
              className={styles.closeIcon}
            />
          </View>
        </View>
        <View className={styles.divider} />
        <Text className={styles.subtitle} style={{ color: "#2D365F" }}>
          {t(subtitleKey)}
        </Text>
        <ScrollView scrollY className={styles.list}>
          {items.map((item) => (
            <View key={item.key} className={styles.row}>
              <Text
                className={styles.rowLabel}
                style={{ color: item.ok ? "#2D365F" : "#BA2F2F" }}
              >
                {t(LABEL_KEYS[item.key])}
              </Text>
              <Image
                src={
                  item.ok
                    ? IC_DEVICE_STATUS_SUCCESS_URI
                    : IC_DEVICE_STATUS_ERROR_URI
                }
                className={styles.rowIcon}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default DeviceStatusBottomPanel;
