import {
  getLaunchOptionsSync,
  getProductInfo,
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

type ProductPanelInfo = {
  productId?: string;
  uiId?: string;
  uiVersion?: string;
  uiPhase?: string;
  uiType?: string;
  i18nTime?: number;
  rnFind?: boolean;
};

type PanelExtraInfo = {
  productId: string;
  productVersion: string;
  i18nTime: string;
  bizClientId: string;
  uiType: string;
  uiPhase: string;
};

const pickFirstNonEmptyPid = (
  ...values: Array<string | undefined | null>
): string => {
  const matched = values.find((value) =>
    Boolean((value ?? "").toString().trim())
  );
  return (matched ?? "").toString().trim();
};

/** 解析 Baby Diary 虛擬設備 PID：參數 > 啟動 query > 常量配置 */
export const resolveBabyDiaryPid = (overridePid?: string): string | null => {
  const query = getLaunchOptionsSync()?.query ?? {};
  const pid = pickFirstNonEmptyPid(
    overridePid,
    query.babyDiaryPid,
    query.baby_diary_pid,
    query.diaryPid,
    BABY_DIARY_VIRTUAL_PID
  );
  return pid || null;
};

const resolveUiType = (product: ProductPanelInfo): string => {
  const raw = (product.uiType ?? "").trim().toUpperCase();
  if (raw === "SMART_MINIPG") return "SMART_MINIPG";
  if (raw === "RN") return "RN";
  // Baby Diary 為 RN 面板；平台未回 uiType 時預設 RN。
  return product.rnFind === false ? "SMART_MINIPG" : "RN";
};

const buildPanelExtraInfo = (
  pid: string,
  product: ProductPanelInfo
): PanelExtraInfo => ({
  productId: pid,
  productVersion: product.uiVersion ?? "",
  i18nTime: String(product.i18nTime ?? ""),
  bizClientId: product.uiId ?? "",
  uiType: resolveUiType(product),
  uiPhase: product.uiPhase ?? "",
});

const fallbackPanelExtraInfo = (pid: string): PanelExtraInfo => ({
  productId: pid,
  productVersion: "",
  i18nTime: "",
  bizClientId: "",
  uiType: "RN",
  uiPhase: "",
});

const openPanelWithExtraInfo = (
  devId: string,
  extraInfo: PanelExtraInfo,
  initialProps?: Record<string, Record<string, unknown>>
): void => {
  openPanel({
    deviceId: devId,
    extraInfo,
    initialProps,
    fail: (err) => {
      showToast({
        title: err?.errorMsg || t("baby_diary_open_failed"),
        icon: "error",
      });
    },
  });
};

const openBabyDiaryPanelForDevice = (
  devId: string,
  pid: string,
  initialProps?: Record<string, Record<string, unknown>>
): void => {
  getProductInfo({
    productId: pid,
    success: (product) => {
      openPanelWithExtraInfo(
        devId,
        buildPanelExtraInfo(pid, product as ProductPanelInfo),
        initialProps
      );
    },
    fail: () => {
      openPanelWithExtraInfo(devId, fallbackPanelExtraInfo(pid), initialProps);
    },
  });
};

/**
 * 以 PID 初始化虛擬設備並打開 Baby Diary RN 面板。
 * initVirtualDevice → getProductInfo → openPanel（uiType: RN）
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

      openBabyDiaryPanelForDevice(devId, pid, options?.initialProps);
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
