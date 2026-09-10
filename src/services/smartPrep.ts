import { login, request } from "@ray-js/ray";
import { FEEDING_CONTEXT_URL } from "@/services/feedingContext";

export type SmartPrepDevice = {
  id: string;
  name: string;
  online: boolean;
  selected: boolean;
  status?: string;
  error?: string;
};

type SmartPrepPrepareResponse = {
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
  const response = await callback<{ data: unknown }>((params) =>
    request({
      ...params,
      url: FEEDING_CONTEXT_URL,
      method: "POST",
      timeout: 15000,
      header: { "content-type": "application/json" },
      data: JSON.stringify(payload),
    })
  );
  const body = responseObject(response.data);
  if (typeof body.error === "string" && body.error) throw new Error(body.error);
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
}): Promise<SmartPrepPrepareResponse> => {
  const loggedIn = await callback<{ code: string }>((params) => login(params));
  if (!loggedIn.code) throw new Error("Could not verify the current account");
  const body = await post({
    action: "prepare_cryassist_automations",
    code: loggedIn.code,
    home_id: input.homeId,
    device_id: input.deviceId,
  });
  if (typeof body.session !== "string" || !body.session) {
    throw new Error("Smart Prep Reminder response is invalid");
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
