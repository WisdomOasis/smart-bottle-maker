import { useCallback, useEffect, useMemo, useState } from "react";
import { useDevice, useProps } from "@ray-js/panel-sdk";
import {
  getDeviceInfo,
  onDeviceOnlineStatusUpdate,
  offDeviceOnlineStatusUpdate,
} from "@ray-js/ray";
import dpCodes from "@/constant/dpCodes";
import { parseSwitchOn, resolveDeviceOnline } from "@/utils/deviceStatus";

/**
 * 開關／連網：未知時預設關機、離線；隨 DP 與平台在線事件即時更新。
 */
const useDeviceConnectivity = () => {
  const { devInfo } = useDevice((state) => ({
    devInfo: state.devInfo,
  }));
  const dpState = useProps() as Record<string, unknown>;
  const devId = devInfo?.devId;

  const [platformOnline, setPlatformOnline] = useState<boolean | null>(null);

  const switchRaw = dpState[dpCodes.switch];
  const switchOn = parseSwitchOn(switchRaw);

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

  useEffect(() => {
    if (!devId) return undefined;

    getDeviceInfo({
      deviceId: devId,
      success: (info) => {
        if (typeof info.isOnline === "boolean") {
          setPlatformOnline(info.isOnline);
        }
      },
    });

    onDeviceOnlineStatusUpdate(handleOnlineUpdate);
    return () => {
      offDeviceOnlineStatusUpdate(handleOnlineUpdate);
    };
  }, [devId, handleOnlineUpdate]);

  const isOnline = useMemo(
    () => resolveDeviceOnline(platformOnline),
    [platformOnline]
  );

  return {
    switchOn,
    isOnline,
    panelDisabled: !switchOn,
  };
};

export default useDeviceConnectivity;
