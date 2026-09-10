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
  const candidates = [
    overridePid,
    query.babyDiaryPid,
    query.baby_diary_pid,
    query.diaryPid,
    BABY_DIARY_VIRTUAL_PID,
  ];

  return (
    candidates
      .map((candidate) => (candidate ?? "").toString().trim())
      .find((pid) => Boolean(pid)) || null
  );
};

/**
 * 以 PID 初始化虛擬設備並打開 Baby Diary 面板（ty.device.initVirtualDevice → ty.openPanel）
 */
export const openBabyDiaryPanel = (options?: {
  pid?: string;
  onBeforeOpen?: () => void;
  onOpenFailed?: () => void;
  showErrorToast?: boolean;
}): void => {
  const tyApi = getTy();
  const pid = resolveBabyDiaryPid(options?.pid);
  const showError = (title: string, icon: "none" | "error" = "none") => {
    options?.onOpenFailed?.();
    if (options?.showErrorToast !== false) {
      tyApi?.showToast?.({ title, icon });
    }
  };

  if (!pid) {
    showError(t("baby_diary_pid_missing"));
    return;
  }

  if (!tyApi?.device?.initVirtualDevice || !tyApi.openPanel) {
    showError(t("baby_diary_open_failed"));
    return;
  }

  options?.onBeforeOpen?.();
  tyApi.showLoading?.({ title: "" });

  tyApi.device.initVirtualDevice({
    pid,
    success: (res) => {
      const devId = res?.devId;
      if (!devId) {
        showError(t("baby_diary_open_failed"));
        return;
      }
      tyApi.openPanel?.({
        deviceId: devId,
        fail: (err) => {
          showError(err?.errorMsg || t("baby_diary_open_failed"), "error");
        },
      });
    },
    fail: (err) => {
      showError(err?.errorMsg || t("baby_diary_open_failed"), "error");
    },
    complete: () => {
      tyApi.hideLoading?.();
    },
  });
};
