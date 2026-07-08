import { getFileSystemManager } from "@ray-js/ray";
import jpeg from "jpeg-js";
import {
  BarcodeFormat,
  BinaryBitmap,
  DecodeHintType,
  HybridBinarizer,
  MultiFormatReader,
  RGBLuminanceSource,
} from "@zxing/library";

const BARCODE_HINTS = new Map<DecodeHintType, BarcodeFormat[] | boolean>([
  [DecodeHintType.TRY_HARDER, true],
  [
    DecodeHintType.POSSIBLE_FORMATS,
    [
      BarcodeFormat.EAN_13,
      BarcodeFormat.EAN_8,
      BarcodeFormat.UPC_A,
      BarcodeFormat.UPC_E,
      BarcodeFormat.CODE_128,
      BarcodeFormat.QR_CODE,
    ],
  ],
]);

const reader = new MultiFormatReader();
reader.setHints(BARCODE_HINTS);

const toByteArray = (data: string | ArrayBuffer): Uint8Array => {
  if (typeof data === "string") {
    const bytes = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i += 1) {
      bytes[i] = data.charCodeAt(i) % 256;
    }
    return bytes;
  }
  return new Uint8Array(data);
};

const decodeJpegBytes = (bytes: Uint8Array): string | null => {
  try {
    const decoded = jpeg.decode(bytes, { useTArray: true });
    const { width, height, data: rgba } = decoded;
    const luminances = new Uint8ClampedArray(width * height);
    for (let i = 0; i < width * height; i += 1) {
      const offset = i * 4;
      luminances[i] = Math.floor(
        (rgba[offset] +
          rgba[offset + 1] +
          rgba[offset + 1] +
          rgba[offset + 2]) /
          4
      );
    }
    const source = new RGBLuminanceSource(luminances, width, height);
    const bitmap = new BinaryBitmap(new HybridBinarizer(source));
    return reader.decode(bitmap).getText();
  } catch {
    return null;
  }
};

export const decodeBarcodeFromPhoto = (
  filePath: string
): Promise<string | null> =>
  new Promise((resolve) => {
    getFileSystemManager().readFile({
      filePath,
      success: (res) => {
        try {
          const bytes = toByteArray(res.data as string | ArrayBuffer);
          resolve(decodeJpegBytes(bytes));
        } catch {
          resolve(null);
        }
      },
      fail: () => resolve(null),
    });
  });
