import { useCallback, useEffect, useRef, useState } from "react";
import { useAppEvent } from "@ray-js/ray";
import {
  resolveEuropeanCloudAvailability,
  type EuropeanCloudAvailability,
} from "@/utils/europeanCloudAvailability";

const ACCOUNT_REGION_TIMEOUT_MS = 5000;

export const useEuropeanCloudAvailability = (): EuropeanCloudAvailability => {
  const [availability, setAvailability] =
    useState<EuropeanCloudAvailability>("loading");
  const availabilityRef = useRef(availability);
  const mountedRef = useRef(true);
  const inFlightRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    availabilityRef.current = availability;
  }, [availability]);

  const refresh = useCallback(() => {
    if (inFlightRef.current) return inFlightRef.current;
    if (mountedRef.current) setAvailability("loading");

    const task = resolveEuropeanCloudAvailability(
      undefined,
      ACCOUNT_REGION_TIMEOUT_MS
    )
      .then((result) => {
        if (mountedRef.current) setAvailability(result);
      })
      .finally(() => {
        if (inFlightRef.current === task) inFlightRef.current = null;
      });
    inFlightRef.current = task;
    return task;
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    refresh();
    return () => {
      mountedRef.current = false;
    };
  }, [refresh]);

  useAppEvent("onShow", () => {
    if (availabilityRef.current === "unavailable") refresh();
  });

  return availability;
};
