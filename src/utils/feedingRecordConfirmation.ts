/* eslint-disable camelcase, no-bitwise */
type FeedingContextValue = {
  bdUserCiphertext: string;
  userIdentity: string;
  homeID: string;
  childID: number;
  timezoneID: string;
};

const ROTATE_RIGHT = (value: number, bits: number) =>
  (value >>> bits) | (value << (32 - bits));

const SHA256_CONSTANTS = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
  0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
  0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
  0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
  0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
  0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

export const sha256Hex = (value: string): string => {
  const encoded = unescape(encodeURIComponent(value));
  const bytes = Array.from(encoded, (character) => character.charCodeAt(0));
  const bitLength = bytes.length * 8;
  bytes.push(0x80);
  while (bytes.length % 64 !== 56) bytes.push(0);
  const high = Math.floor(bitLength / 0x100000000);
  const low = bitLength >>> 0;
  for (let shift = 24; shift >= 0; shift -= 8)
    bytes.push((high >>> shift) & 0xff);
  for (let shift = 24; shift >= 0; shift -= 8)
    bytes.push((low >>> shift) & 0xff);
  const hash = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
    0x1f83d9ab, 0x5be0cd19,
  ];
  for (let offset = 0; offset < bytes.length; offset += 64) {
    const words = new Array<number>(64).fill(0);
    for (let index = 0; index < 16; index += 1) {
      const start = offset + index * 4;
      words[index] =
        ((bytes[start] << 24) |
          (bytes[start + 1] << 16) |
          (bytes[start + 2] << 8) |
          bytes[start + 3]) >>>
        0;
    }
    for (let index = 16; index < 64; index += 1) {
      const previous = words[index - 15];
      const earlier = words[index - 2];
      const sigma0 =
        ROTATE_RIGHT(previous, 7) ^
        ROTATE_RIGHT(previous, 18) ^
        (previous >>> 3);
      const sigma1 =
        ROTATE_RIGHT(earlier, 17) ^
        ROTATE_RIGHT(earlier, 19) ^
        (earlier >>> 10);
      words[index] =
        (words[index - 16] + sigma0 + words[index - 7] + sigma1) >>> 0;
    }
    let [a, b, c, d, e, f, g, h] = hash;
    for (let index = 0; index < 64; index += 1) {
      const sum1 =
        ROTATE_RIGHT(e, 6) ^ ROTATE_RIGHT(e, 11) ^ ROTATE_RIGHT(e, 25);
      const choice = (e & f) ^ (~e & g);
      const temp1 =
        (h + sum1 + choice + SHA256_CONSTANTS[index] + words[index]) >>> 0;
      const sum0 =
        ROTATE_RIGHT(a, 2) ^ ROTATE_RIGHT(a, 13) ^ ROTATE_RIGHT(a, 22);
      const majority = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (sum0 + majority) >>> 0;
      h = g;
      g = f;
      f = e;
      e = (d + temp1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) >>> 0;
    }
    hash[0] = (hash[0] + a) >>> 0;
    hash[1] = (hash[1] + b) >>> 0;
    hash[2] = (hash[2] + c) >>> 0;
    hash[3] = (hash[3] + d) >>> 0;
    hash[4] = (hash[4] + e) >>> 0;
    hash[5] = (hash[5] + f) >>> 0;
    hash[6] = (hash[6] + g) >>> 0;
    hash[7] = (hash[7] + h) >>> 0;
  }
  return hash.map((word) => word.toString(16).padStart(8, "0")).join("");
};

export const BABY_DIARY_API_BASE_URL =
  "https://bd.prod-eu.connected.maxicosi.com/api";

export type FeedingRecordConfirmation = {
  version: 1;
  feedingRecordID: string;
  homeID: string;
  childID: number;
  bottleType: "formula";
  preparedAmount: number;
  unit: "ml" | "oz";
  completedAt: number;
};

type UpdateInput = {
  context: FeedingContextValue;
  record: FeedingRecordConfirmation;
  remainingAmount: number;
  timestamp?: number;
};

export type FeedingRecordUpdateRequest = {
  url: string;
  headers: Record<string, string>;
  body: {
    child_id: number;
    type: "bottle";
    started_at: number;
    bottle_type: "formula";
    bottle_amount: number;
    unit: "ml" | "oz";
    save_type: "save";
  };
};

const bytesToUtf8 = (bytes: number[]) => {
  const escaped = bytes
    .map((byte) => `%${byte.toString(16).padStart(2, "0")}`)
    .join("");
  return decodeURIComponent(escaped);
};

const rawToText = (raw: unknown): string | null => {
  try {
    if (typeof raw === "string") {
      const value = raw.trim();
      if (value.startsWith("{")) return value;
      if (/^(?:[0-9a-fA-F]{2})+$/.test(value)) {
        const bytes: number[] = [];
        for (let index = 0; index < value.length; index += 2) {
          bytes.push(Number.parseInt(value.slice(index, index + 2), 16));
        }
        return bytesToUtf8(bytes);
      }
      return null;
    }
    if (Array.isArray(raw) && raw.every((byte) => Number.isInteger(byte))) {
      return bytesToUtf8(raw as number[]);
    }
    if (raw instanceof Uint8Array) return bytesToUtf8(Array.from(raw));
    if (raw instanceof ArrayBuffer)
      return bytesToUtf8(Array.from(new Uint8Array(raw)));
  } catch {
    return null;
  }
  return null;
};

export const parseFeedingRecordConfirmation = (
  raw: unknown,
  context: Pick<FeedingContextValue, "homeID" | "childID">
): FeedingRecordConfirmation | null => {
  const text = rawToText(raw);
  if (!text || text.length > 1024) return null;

  try {
    const value = JSON.parse(text) as Record<string, unknown>;
    const childID = Number(value.child_id);
    const preparedAmount = Number(value.prepared_amount);
    const completedAt = Number(value.completed_at);
    const homeID = String(value.home_id ?? "");
    const unit = String(value.unit ?? "").toLowerCase();

    if (
      value.version !== 1 ||
      typeof value.feeding_record_id !== "string" ||
      !/^\d+$/.test(value.feeding_record_id) ||
      homeID !== context.homeID ||
      !Number.isSafeInteger(childID) ||
      childID <= 0 ||
      childID !== context.childID ||
      value.bottle_type !== "formula" ||
      !Number.isSafeInteger(preparedAmount) ||
      preparedAmount <= 0 ||
      (unit !== "ml" && unit !== "oz") ||
      !Number.isSafeInteger(completedAt) ||
      completedAt <= 0
    ) {
      return null;
    }

    return {
      version: 1,
      feedingRecordID: value.feeding_record_id,
      homeID,
      childID,
      bottleType: "formula",
      preparedAmount,
      unit,
      completedAt,
    };
  } catch {
    return null;
  }
};

export const buildFeedingRecordUpdate = ({
  context,
  record,
  remainingAmount,
  timestamp = Math.floor(Date.now() / 1000),
}: UpdateInput): FeedingRecordUpdateRequest => {
  if (
    !Number.isSafeInteger(remainingAmount) ||
    remainingAmount < 0 ||
    remainingAmount > record.preparedAmount
  ) {
    throw new Error("Remaining amount is invalid");
  }
  const timestampText = String(timestamp);
  return {
    url: `${BABY_DIARY_API_BASE_URL}/feeding/${record.feedingRecordID}/`,
    headers: {
      "content-type": "application/json",
      "bd-uid": `${timestampText}${context.userIdentity}`,
      "bd-timestamp": timestampText,
      "bd-hash": sha256Hex(context.userIdentity),
      "bd-user": context.bdUserCiphertext,
      "bd-homeid": context.homeID,
      "bd-timezone": context.timezoneID,
      "bd-units": `volume:${record.unit}`,
    },
    body: {
      child_id: context.childID,
      type: "bottle",
      started_at: record.completedAt,
      bottle_type: "formula",
      bottle_amount: record.preparedAmount - remainingAmount,
      unit: record.unit,
      save_type: "save",
    },
  };
};
