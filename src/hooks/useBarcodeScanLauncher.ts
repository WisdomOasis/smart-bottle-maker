import { useCallback, useRef, useState } from "react";
import { router, usePageEvent } from "@ray-js/ray";
import {
  writeBarcodeResult,
  writeBarcodeResultReturnRoute,
} from "@/constant/barcodeResultStorage";
import type { BarcodeResultReturnRoute } from "@/constant/barcodeResultStorage";
import type { BarcodeFormulaResult } from "@/utils/barcodeLookup";
import { lookupBarcodeFormula } from "@/utils/barcodeLookup";
import { runBarcodeScan } from "@/utils/runBarcodeScan";

type LaunchOptions = {
  /** 已在結果頁時就地更新，不另開路由 */
  onMatch?: (match: BarcodeFormulaResult) => void;
};

const SCAN_LOCK_SAFETY_MS = 8000;
/** Hold cover before showing not-found after a failed scan (QA: failure felt too fast) */
const SCAN_NOT_FOUND_DELAY_MS = 1000;

export const goToBarcodeResultPage = (
  returnRoute: BarcodeResultReturnRoute = "/formula"
): void => {
  writeBarcodeResultReturnRoute(returnRoute);
  router.replace("/barcode-result");
};

export const useBarcodeScanLauncher = () => {
  const [notFoundVisible, setNotFoundVisible] = useState(false);
  const [scanCoverVisible, setScanCoverVisible] = useState(false);
  const scanningRef = useRef(false);
  const pendingResultNavRef = useRef(false);
  const launchOptionsRef = useRef<LaunchOptions | undefined>();
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const notFoundDelayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const clearNotFoundDelay = useCallback(() => {
    if (notFoundDelayTimerRef.current) {
      clearTimeout(notFoundDelayTimerRef.current);
      notFoundDelayTimerRef.current = null;
    }
  }, []);

  const clearScanLock = useCallback(() => {
    scanningRef.current = false;
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  }, []);

  const hideScanCover = useCallback(() => {
    pendingResultNavRef.current = false;
    setScanCoverVisible(false);
  }, []);

  const armScanLock = useCallback(() => {
    scanningRef.current = true;
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
    }
    safetyTimerRef.current = setTimeout(() => {
      scanningRef.current = false;
      safetyTimerRef.current = null;
      pendingResultNavRef.current = false;
      setScanCoverVisible(false);
    }, SCAN_LOCK_SAFETY_MS);
  }, []);

  usePageEvent("onShow", () => {
    if (pendingResultNavRef.current) return;
    clearScanLock();
  });

  const launchScan = useCallback(
    (options?: LaunchOptions) => {
      if (scanningRef.current) return;

      launchOptionsRef.current = options;
      pendingResultNavRef.current = false;
      armScanLock();
      // Call scanCode in the same tap turn. An opaque cover here matches the
      // formula page colour and can swallow the native scanner in OEM apps.
      runBarcodeScan({
        onResult: (raw) => {
          clearScanLock();
          const match = lookupBarcodeFormula(raw);
          if (match) {
            clearNotFoundDelay();
            const onMatch = launchOptionsRef.current?.onMatch;
            if (onMatch) {
              hideScanCover();
              onMatch(match);
            } else {
              pendingResultNavRef.current = true;
              setScanCoverVisible(true);
              writeBarcodeResult(match, "scan");
              goToBarcodeResultPage("/formula");
            }
            return;
          }
          clearNotFoundDelay();
          setScanCoverVisible(true);
          notFoundDelayTimerRef.current = setTimeout(() => {
            notFoundDelayTimerRef.current = null;
            hideScanCover();
            setNotFoundVisible(true);
          }, SCAN_NOT_FOUND_DELAY_MS);
        },
        onDismiss: () => {
          clearNotFoundDelay();
          clearScanLock();
          hideScanCover();
        },
        onComplete: () => {
          clearScanLock();
          if (!pendingResultNavRef.current && !notFoundDelayTimerRef.current) {
            hideScanCover();
          }
        },
        onUnavailable: () => {
          clearNotFoundDelay();
          clearScanLock();
          hideScanCover();
          router.push("/enter-barcode");
        },
      });
      clearNotFoundDelay();
      setNotFoundVisible(false);
    },
    [armScanLock, clearNotFoundDelay, clearScanLock, hideScanCover]
  );

  const scanAgain = useCallback(
    (options?: LaunchOptions) => {
      clearNotFoundDelay();
      setNotFoundVisible(false);
      clearScanLock();
      launchScan(options);
    },
    [clearNotFoundDelay, clearScanLock, launchScan]
  );

  const dismissNotFound = useCallback(() => {
    clearNotFoundDelay();
    setNotFoundVisible(false);
  }, [clearNotFoundDelay]);

  return {
    notFoundVisible,
    scanCoverVisible,
    launchScan,
    scanAgain,
    dismissNotFound,
  };
};
