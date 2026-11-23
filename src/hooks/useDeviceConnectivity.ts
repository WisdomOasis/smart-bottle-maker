import { useCallback, useEffect, useState } from "react";
import { useDevice, useProps } from "@ray-js/panel-sdk";
import {
  getDeviceInfo,
  onDeviceOnlineStatusUpdate,
  offDeviceOnlineStatusUpdate,
} from "@ray-js/ray";
import dpCodes from "@/constant/dpCodes";
import { parseSwitchOn, resolveDeviceOnline } from "@/utils/deviceStatus";
import { syncAssemblyStatus } from "@/utils/syncAssemblyStatus";

type DevInfoLike = {
  devId?: string;
  isOnline?: boolean;
} | null;

/**
 * 開關／連網 + 共用裝置 DP（只在此一處呼叫 useDevice / useProps）。
 */
const useDeviceConnectivity = () => {
  // Select primitive/ref-stable slice — avoid returning a fresh object each time.
  const devInfo = useDevice(
    (state) => state.devInfo as DevInfoLike,
    (a, b) => a?.devId === b?.devId && a?.isOnline === b?.isOnline
  );
  const dpState = useProps() as Record<string, unknown>;
  const devId = devInfo?.devId;

  const [platformOnline, setPlatformOnline] = useState<boolean | null>(null);

  const switchOn = parseSwitchOn(dpState[dpCodes.switch]);
  const isOnline = resolveDeviceOnline(platformOnline);

  const handleOnlineUpdate = useCallback(
    (data: { deviceId: string; online: boolean }) => {
      if (devId && data.deviceId === devId) {
        setPlatformOnline(data.online);
      }
    },
    [devId]
  );

  useEffect(() => {
    if (typeof devInfo?.isOnline === "boolean") {
      setPlatformOnline(devInfo.isOnline);
    }
  }, [devInfo?.isOnline]);

  const refreshAssemblyStatus = useCallback(
    (force = false) => {
      if (!devId) return;
      syncAssemblyStatus(devId, { force });
    },
    [devId]
  );

  useEffect(() => {
    if (!devId) return undefined;

    let cancelled = false;

    getDeviceInfo({
      deviceId: devId,
      success: (info) => {
        if (cancelled) return;
        if (typeof info.isOnline === "boolean") {
          setPlatformOnline(info.isOnline);
        }
      },
      fail: () => undefined,
    });

    onDeviceOnlineStatusUpdate(handleOnlineUpdate);
    return () => {
      cancelled = true;
      offDeviceOnlineStatusUpdate(handleOnlineUpdate);
    };
  }, [devId, handleOnlineUpdate]);

  /* 進頁／上線後立刻同步組裝感測器，避免 banner 吃到過期快取 */
  useEffect(() => {
    if (!devId || !isOnline) return;
    syncAssemblyStatus(devId, { force: true });
  }, [devId, isOnline]);

  return {
    devInfo,
    dpState,
    switchOn,
    isOnline,
    panelDisabled: !switchOn,
    refreshAssemblyStatus,
  };
};

export default useDeviceConnectivity;
