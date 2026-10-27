import {
  encodeFeedingContextRaw,
  decodeFeedingContextRaw,
} from "./feedingContextRaw.js";

export type FeedingContextValue = {
  bdUserCiphertext: string;
  userIdentity: string;
  homeID: string;
  childID: number;
  timezoneID: string;
};

const isRSA2048Ciphertext = (value: string) =>
  value.length === 344 && /^[A-Za-z0-9+/]{342}==$/.test(value);

export const parseFeedingContextValue = (
  value: unknown
): FeedingContextValue | null => {
  if (typeof value !== "string" || encodeFeedingContextRaw(value) === null)
    return null;
  const fields = value.split(",");
  if (
    fields.length !== 5 ||
    fields.some((field) => !field || field.trim() !== field)
  )
    return null;

  const [bdUserCiphertext, userIdentity, homeID, childIDText, timezoneID] =
    fields;
  if (!isRSA2048Ciphertext(bdUserCiphertext)) return null;
  if (!/^\d+$/.test(childIDText)) return null;
  const childID = Number(childIDText);
  if (!Number.isSafeInteger(childID) || childID <= 0) return null;

  return { bdUserCiphertext, userIdentity, homeID, childID, timezoneID };
};

// Device state is Raw hex; finalize responses use parseFeedingContextValue directly.
export const parseFeedingContextRaw = (
  value: unknown
): FeedingContextValue | null =>
  parseFeedingContextValue(decodeFeedingContextRaw(value));
