import { navigateTo, showToast } from "@ray-js/ray";
import Strings from "@/i18n";

/** 開啟 Tuya 原生設備設定頁（functionalPages.settings） */
export const openDeviceSettings = (deviceId?: string): void => {
  const id = (deviceId ?? "").trim();
  if (!id) {
    showToast({
      title: Strings.getLang("device_settings_unavailable"),
      icon: "none",
    });
    return;
  }

  navigateTo({
    url: `functional://settings/detail?deviceId=${encodeURIComponent(id)}`,
    fail: () => {
      showToast({
        title: Strings.getLang("device_settings_open_failed"),
        icon: "none",
      });
    },
  });
};
