import { request } from "@ray-js/ray";
import {
  buildFeedingRecordUpdate,
  type FeedingRecordConfirmation,
} from "@/utils/feedingRecordConfirmation";
import type { FeedingContextValue } from "@/utils/feedingContextValue";

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
  throw new Error("Baby Diary returned an empty response");
};

export const updateFeedingRecord = async (input: {
  context: FeedingContextValue;
  record: FeedingRecordConfirmation;
  remainingAmount: number;
}): Promise<void> => {
  const update = buildFeedingRecordUpdate(input);
  const response = await callback<{ data: unknown }>((params) =>
    request({
      ...params,
      url: update.url,
      method: "PUT",
      timeout: 15000,
      header: update.headers,
      data: JSON.stringify(update.body),
    })
  );
  const body = responseObject(response.data);
  if (body.success !== true) {
    const message =
      typeof body.message === "string" && body.message
        ? body.message
        : "Baby Diary could not update the feeding record";
    throw new Error(message);
  }
};
