// Raw DP API values are hex; the device payload remains UTF-8 text.
// URI primitives are available in MiniApp without Buffer or TextEncoder.
export const MAX_FEEDING_CONTEXT_BYTES = 512;

export const encodeFeedingContextRaw = (text) => {
  if (
    typeof text !== "string" ||
    !text ||
    text.length > MAX_FEEDING_CONTEXT_BYTES
  )
    return null;
  try {
    const hex = encodeURIComponent(text)
      .replace(
        /%([0-9a-f]{2})|([^%])/gi,
        (_, byte, character) =>
          byte || character.charCodeAt(0).toString(16).padStart(2, "0")
      )
      .toLowerCase();
    return hex.length <= MAX_FEEDING_CONTEXT_BYTES * 2 ? hex : null;
  } catch (_) {
    return null;
  }
};

export const decodeFeedingContextRaw = (hex) => {
  if (
    typeof hex !== "string" ||
    !hex ||
    hex.length > MAX_FEEDING_CONTEXT_BYTES * 2 ||
    hex.length % 2 !== 0 ||
    !/^[0-9a-f]+$/i.test(hex)
  )
    return null;
  try {
    return decodeURIComponent(hex.replace(/../g, (byte) => `%${byte}`));
  } catch (_) {
    return null;
  }
};
