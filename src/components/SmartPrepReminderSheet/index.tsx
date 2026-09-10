import React, { useCallback, useEffect, useState } from "react";
import { Image, Text, View } from "@ray-js/ray";
import Res from "@/res";
import {
  prepareSmartPrep,
  updateSmartPrep,
  type SmartPrepDevice,
} from "@/services/smartPrep";
import { POWDER_BRAND_SHEET_ICONS } from "@/components/PowderBrandOptionSheet/icons";
import styles from "./index.module.less";

type Props = {
  homeId: string;
  deviceId: string;
  onClose: () => void;
};

const SmartPrepReminderSheet: React.FC<Props> = ({
  homeId,
  deviceId,
  onClose,
}) => {
  const [devices, setDevices] = useState<SmartPrepDevice[]>([]);
  const [session, setSession] = useState("");
  const [phase, setPhase] = useState<"loading" | "ready" | "saving" | "error">(
    "loading"
  );
  const [errorText, setErrorText] = useState("");

  const load = useCallback(async () => {
    setPhase("loading");
    setErrorText("");
    try {
      const prepared = await prepareSmartPrep({ homeId, deviceId });
      setDevices(prepared.devices);
      setSession(prepared.session);
      setPhase("ready");
    } catch {
      setPhase("error");
      setErrorText("Couldn’t load available CryAssist devices. Try again.");
    }
  }, [deviceId, homeId]);

  useEffect(() => {
    load().catch(() => undefined);
  }, [load]);

  const toggle = (id: string) => {
    if (phase !== "ready") return;
    setDevices((current) =>
      current.map((device) =>
        device.id === id
          ? { ...device, selected: !device.selected, error: undefined }
          : device
      )
    );
  };

  const save = async () => {
    if (phase !== "ready" || !session) return;
    setPhase("saving");
    setErrorText("");
    try {
      const result = await updateSmartPrep(
        session,
        devices.filter((device) => device.selected).map((device) => device.id)
      );
      setDevices(result.devices);
      if (result.devices.some((device) => device.error)) {
        setErrorText(
          "Some reminders could not be updated. Review the affected devices and try again."
        );
        setPhase("ready");
        return;
      }
      onClose();
    } catch {
      setErrorText("Couldn’t save Smart Prep Reminder. Try again.");
      setPhase("ready");
    }
  };

  const busy = phase === "loading" || phase === "saving";
  return (
    <View className={styles.mask}>
      <View className={styles.backdrop} onClick={busy ? undefined : onClose} />
      <View className={styles.sheet}>
        <View className={styles.header}>
          <View className={styles.headerCopy}>
            <Text className={styles.title}>Smart Prep Reminder</Text>
            <Text className={styles.subtitle}>
              Choose the CryAssist devices that can ask you to prepare a bottle.
            </Text>
          </View>
          <View
            className={styles.closeButton}
            onClick={busy ? undefined : onClose}
          >
            <Image
              src={POWDER_BRAND_SHEET_ICONS.close}
              className={styles.closeIcon}
            />
          </View>
        </View>

        {phase === "loading" ? (
          <View className={styles.stateBlock}>
            <View className={styles.spinner} />
            <Text className={styles.stateTitle}>
              Checking CryAssist devices…
            </Text>
          </View>
        ) : null}

        {phase === "error" ? (
          <View className={styles.stateBlock}>
            <Text className={styles.stateTitle}>
              Couldn’t load Smart Prep Reminder
            </Text>
            <Text className={styles.errorText}>{errorText}</Text>
            <View
              className={styles.primaryButton}
              onClick={() => load().catch(() => undefined)}
            >
              <Text className={styles.primaryButtonText}>Try again</Text>
            </View>
          </View>
        ) : null}

        {(phase === "ready" || phase === "saving") && devices.length === 0 ? (
          <View className={styles.stateBlock}>
            <Text className={styles.stateTitle}>
              No compatible CryAssist devices found
            </Text>
            <Text className={styles.stateText}>
              Add a compatible CryAssist device to this home to use Smart Prep
              Reminder.
            </Text>
          </View>
        ) : null}

        {(phase === "ready" || phase === "saving") && devices.length > 0 ? (
          <View className={styles.list}>
            {devices.map((device) => (
              <View
                className={styles.deviceRow}
                key={device.id}
                onClick={() => toggle(device.id)}
              >
                <View
                  className={
                    device.selected ? styles.checkSelected : styles.check
                  }
                >
                  {device.selected ? (
                    <Image src={Res.icCheck} className={styles.checkIcon} />
                  ) : null}
                </View>
                <View className={styles.deviceCopy}>
                  <Text className={styles.deviceName}>{device.name}</Text>
                  <Text className={styles.deviceStatus}>
                    {device.online ? "Online" : "Offline"}
                  </Text>
                  {device.error ? (
                    <Text className={styles.deviceError}>{device.error}</Text>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
        ) : null}

        {phase === "ready" || phase === "saving" ? (
          <View className={styles.footer}>
            {errorText ? (
              <Text className={styles.errorText}>{errorText}</Text>
            ) : null}
            <View
              className={styles.primaryButton}
              onClick={busy ? undefined : () => save().catch(() => undefined)}
            >
              <Text className={styles.primaryButtonText}>
                {busy ? "Saving…" : "Save"}
              </Text>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default SmartPrepReminderSheet;
