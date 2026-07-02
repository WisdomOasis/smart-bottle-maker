import { getLaunchOptionsSync } from "@ray-js/ray";
import { BABY_DIARY_VIRTUAL_PID } from "@/constant/babyDiary";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";

type TyApi = {
  showLoading?: (params: { title?: string }) => void;
  hideLoading?: () => void;
  showToast?: (params: { title: string; icon?: string }) => void;
  openPanel?: (params: {
    deviceId: string;
    fail?: (res: { errorMsg?: string }) => void;
  }) => void;
  device?: {
    initVirtualDevice?: (params: {
      pid: string;
      success?: (res: { devId: string }) => void;
      fail?: (res: { errorMsg?: string }) => void;
      complete?: () => void;
    }) => void;
  };
};

const t = (key: I18nKey) => Strings.getLang(key);

const getTy = (): TyApi | undefined => (globalThis as { ty?: TyApi }).ty;

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
 * 以 PID 初始化虛擬設備並打開 Baby Diary 面板（ty.device.initVirtualDevice → ty.openPanel）
 */
export const openBabyDiaryPanel = (options?: {
  pid?: string;
  onBeforeOpen?: () => void;
}): void => {
  const tyApi = getTy();
  const pid = resolveBabyDiaryPid(options?.pid);

  if (!pid) {
    tyApi?.showToast?.({
      title: t("baby_diary_pid_missing"),
      icon: "none",
    });
    return;
  }

  if (!tyApi?.device?.initVirtualDevice || !tyApi.openPanel) {
    tyApi?.showToast?.({
      title: t("baby_diary_open_failed"),
      icon: "none",
    });
    return;
  }

  options?.onBeforeOpen?.();
  tyApi.showLoading?.({ title: "" });

  tyApi.device.initVirtualDevice({
    pid,
    success: (res) => {
      const devId = res?.devId;
      if (!devId) {
        tyApi.showToast?.({
          title: t("baby_diary_open_failed"),
          icon: "none",
        });
        return;
      }
      tyApi.openPanel?.({
        deviceId: devId,
        fail: (err) => {
          tyApi.showToast?.({
            title: err?.errorMsg || t("baby_diary_open_failed"),
            icon: "error",
          });
        },
      });
    },
    fail: (err) => {
      tyApi.showToast?.({
        title: err?.errorMsg || t("baby_diary_open_failed"),
        icon: "error",
      });
    },
    complete: () => {
      tyApi.hideLoading?.();
    },
  });
};
