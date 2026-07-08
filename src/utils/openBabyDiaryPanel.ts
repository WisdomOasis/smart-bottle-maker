import {
  getLaunchOptionsSync,
  hideLoading,
  initVirtualDevice,
  openPanel,
  showLoading,
  showToast,
} from "@ray-js/ray";
import { BABY_DIARY_VIRTUAL_PID } from "@/constant/babyDiary";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";

const t = (key: I18nKey) => Strings.getLang(key);

/** 解析 Baby Diary 虛擬設備 PID：參數 > 啟動 query > 常量配置 */
export const resolveBabyDiaryPid = (overridePid?: string): string | null => {
  const query = getLaunchOptionsSync()?.query ?? {};
  const fromQuery =
    query.babyDiaryPid ?? query.baby_diary_pid ?? query.diaryPid ?? "";
  const pid = (overridePid ?? fromQuery ?? BABY_DIARY_VIRTUAL_PID ?? "")
    .toString()
    .trim();
  return pid || null;
};

/**
 * 以 PID 初始化虛擬設備並打開 Baby Diary 面板（initVirtualDevice → openPanel）
 */
export const openBabyDiaryPanel = (options?: {
  pid?: string;
  onBeforeOpen?: () => void;
  initialProps?: Record<string, Record<string, unknown>>;
}): void => {
  const pid = resolveBabyDiaryPid(options?.pid);

  if (!pid) {
    showToast({ title: t("baby_diary_pid_missing"), icon: "none" });
    return;
  }

  options?.onBeforeOpen?.();
  showLoading({ title: "" });

  initVirtualDevice({
    pid,
    success: (res) => {
      const devId = res?.devId;
      if (!devId) {
        showToast({ title: t("baby_diary_open_failed"), icon: "none" });
        return;
      }

      openPanel({
        deviceId: devId,
        extraInfo: { productId: pid },
        initialProps: options?.initialProps,
        fail: (err) => {
          showToast({
            title: err?.errorMsg || t("baby_diary_open_failed"),
            icon: "error",
          });
        },
      });
    },
    fail: (err) => {
      showToast({
        title: err?.errorMsg || t("baby_diary_open_failed"),
        icon: "error",
      });
    },
    complete: () => {
      hideLoading();
    },
  });
};
