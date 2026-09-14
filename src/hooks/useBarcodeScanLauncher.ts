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
      setNotFoundVisible(false);
      setScanCoverVisible(true);

      runBarcodeScan({
        onResult: (raw) => {
          clearScanLock();
          const match = lookupBarcodeFormula(raw);
          if (match) {
            const onMatch = launchOptionsRef.current?.onMatch;
            if (onMatch) {
              hideScanCover();
              onMatch(match);
            } else {
              pendingResultNavRef.current = true;
              writeBarcodeResult(match, "scan");
              goToBarcodeResultPage("/formula");
            }
            return;
          }
          hideScanCover();
          setNotFoundVisible(true);
        },
        onDismiss: () => {
          clearScanLock();
          hideScanCover();
        },
        onComplete: () => {
          clearScanLock();
          if (!pendingResultNavRef.current) {
            hideScanCover();
          }
        },
      });
    },
    [armScanLock, clearScanLock, hideScanCover]
  );

  const scanAgain = useCallback(
    (options?: LaunchOptions) => {
      setNotFoundVisible(false);
      clearScanLock();
      launchScan(options);
    },
    [clearScanLock, launchScan]
  );

  const dismissNotFound = useCallback(() => {
    setNotFoundVisible(false);
  }, []);

  return {
    notFoundVisible,
    scanCoverVisible,
    launchScan,
    scanAgain,
    dismissNotFound,
  };
};
