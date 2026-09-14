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
}

const LABEL_KEYS: Record<DeviceAssemblyStatus["key"], I18nKey> = {
  mixing_chamber: "device_status_mixing_chamber",
  water_tank: "device_status_water_tank",
  water_level: "device_status_water_level",
  milk_powder: "device_status_milk_powder",
  bottle: "device_status_bottle",
  no_blockage: "device_status_no_blockage",
};

const DeviceStatusBottomPanel: React.FC<Props> = ({ items, onClose }) => {
  const t = (key: I18nKey) => Strings.getLang(key);

  return (
    <View className={styles.mask}>
      <View className={styles.backdrop} onClick={onClose} />
      <View className={styles.sheet}>
        <View className={styles.header}>
          <Text className={styles.title} style={{ color: "#2D365F" }}>
            {t("device_status_panel_title")}
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
          {t("device_status_panel_subtitle")}
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
