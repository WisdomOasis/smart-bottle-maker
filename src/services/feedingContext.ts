import { request } from "@ray-js/ray";
import {
  parsePreparedChildren,
  type FeedingChild,
} from "@/utils/feedingProfileChildren";
import { runWithMiniAppAuthorization } from "@/services/miniAppLogin";

export type { FeedingChild } from "@/utils/feedingProfileChildren";

export const FEEDING_CONTEXT_URL =
  "https://rndolencb2xsndk3bactgbakda0hwlmu.lambda-url.eu-central-1.on.aws/";

export type PreparedContext = {
  session: string;
  expiresAt: number;
  children: FeedingChild[];
};

const callback = <T>(
  call: (params: {
    success?: (result: T) => void;
    fail?: (error: unknown) => void;
  }) => void
) =>
  new Promise<T>((resolve, reject) => {
    call({ success: resolve, fail: reject });
  });

const responseObject = (value: unknown): Record<string, unknown> => {
  if (typeof value === "string")
    return JSON.parse(value) as Record<string, unknown>;
  if (value && typeof value === "object")
    return value as Record<string, unknown>;
  throw new Error("Provisioning returned an empty response");
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

export const prepareFeedingContext = async (input: {
  homeId: string;
  deviceId: string;
  timezoneId: string;
}): Promise<PreparedContext> => {
  const body = await runWithMiniAppAuthorization((code) =>
    post({
      action: "prepare_feeding_context",
      code,
      home_id: input.homeId,
      device_id: input.deviceId,
      timezone_id: input.timezoneId,
    })
  );
  if (typeof body.session !== "string" || !Array.isArray(body.children)) {
    throw new Error("Provisioning response is invalid");
  }
  return {
    session: body.session,
    expiresAt: typeof body.expires_at === "number" ? body.expires_at : 0,
    children: parsePreparedChildren(body.children),
  };
};

export const finalizeFeedingContext = async (
  session: string,
  childId: number
): Promise<string> => {
  const body = await post({
    action: "finalize_feeding_context",
    session,
    child_id: childId,
  });
  if (typeof body.context !== "string" || body.context.length === 0) {
    throw new Error("Provisioning response is invalid");
  }
  return body.context;
};
