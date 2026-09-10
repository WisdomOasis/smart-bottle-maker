import { request } from "@ray-js/ray";
import { FEEDING_CONTEXT_URL } from "@/services/feedingContext";
import { runWithMiniAppAuthorization } from "@/services/miniAppLogin";
import { isPanelDeviceContextReady } from "@/utils/panelDeviceContext";
import { SmartPrepError, asSmartPrepError } from "@/utils/smartPrepError";

export type SmartPrepDevice = {
  id: string;
  name: string;
  online: boolean;
  selected: boolean;
  status?: string;
  error?: string;
};

export type SmartPrepPreparedContext = {
  session: string;
  expiresAt: number;
  devices: SmartPrepDevice[];
};

type SmartPrepUpdateResponse = {
  devices: SmartPrepDevice[];
};

const callback = <T>(
  call: (params: {
    success?: (result: T) => void;
    fail?: (error: unknown) => void;
  }) => void
) =>
  new Promise<T>((resolve, reject) => call({ success: resolve, fail: reject }));

const responseObject = (value: unknown): Record<string, unknown> => {
  if (typeof value === "string")
    return JSON.parse(value) as Record<string, unknown>;
  if (value && typeof value === "object")
    return value as Record<string, unknown>;
  throw new Error("Smart Prep Reminder returned an empty response");
};

const post = async (payload: Record<string, unknown>) => {
  let response: { data: unknown };
  try {
    response = await callback<{ data: unknown }>((params) =>
      request({
        ...params,
        url: FEEDING_CONTEXT_URL,
        method: "POST",
        timeout: 15000,
        header: { "content-type": "application/json" },
        data: JSON.stringify(payload),
      })
    );
  } catch (error) {
    throw asSmartPrepError("request", error);
  }

  let body: Record<string, unknown>;
  try {
    body = responseObject(response.data);
  } catch (error) {
    throw asSmartPrepError("response", error);
  }
  if (typeof body.error === "string" && body.error) {
    throw new SmartPrepError("response", { errorMsg: body.error });
  }
  return body;
};

const parseDevices = (value: unknown): SmartPrepDevice[] => {
  if (!Array.isArray(value)) return [];
  return value.reduce<SmartPrepDevice[]>((devices, item) => {
    if (!item || typeof item !== "object") return devices;
    const device = item as Record<string, unknown>;
    if (
      typeof device.id !== "string" ||
      !device.id ||
      typeof device.name !== "string"
    )
      return devices;
    devices.push({
      id: device.id,
      name: device.name,
      online: device.online === true,
      selected: device.selected === true,
      status: typeof device.status === "string" ? device.status : undefined,
      error: typeof device.error === "string" ? device.error : undefined,
    });
    return devices;
  }, []);
};

export const prepareSmartPrep = async (input: {
  homeId: string;
  deviceId: string;
}): Promise<SmartPrepPreparedContext> => {
  if (!isPanelDeviceContextReady(input.homeId, input.deviceId)) {
    throw new SmartPrepError("response", {
      errorMsg: "Device information is still loading. Try again in a moment.",
    });
  }
  let body: Record<string, unknown>;
  try {
    body = await runWithMiniAppAuthorization((code) =>
      post({
        action: "prepare_cryassist_automations",
        code,
        home_id: input.homeId,
        device_id: input.deviceId,
      })
    );
  } catch (error) {
    throw asSmartPrepError("login", error);
  }
  if (typeof body.session !== "string" || !body.session) {
    throw new SmartPrepError("response", {
      errorMsg: "Smart Prep Reminder response is invalid",
    });
  }
  return {
    session: body.session,
    expiresAt: typeof body.expires_at === "number" ? body.expires_at : 0,
    devices: parseDevices(body.devices),
  };
};

export const updateSmartPrep = async (
  session: string,
  selectedDeviceIds: string[]
): Promise<SmartPrepUpdateResponse> => {
  const body = await post({
    action: "update_cryassist_automations",
    session,
    selected_device_ids: selectedDeviceIds,
  });
  return { devices: parseDevices(body.devices) };
};
