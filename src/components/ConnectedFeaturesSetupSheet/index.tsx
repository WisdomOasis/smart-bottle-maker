import React, { useCallback, useEffect, useState } from "react";
import { Image, Text, View } from "@ray-js/ray";
import Res from "@/res";
import type { FeedingProfileSelection } from "@/constant/feedingRecordStorage";
import FeedingProfileSheet from "@/components/FeedingProfileSheet";
import SmartPrepReminderSheet from "@/components/SmartPrepReminderSheet";
import {
  prepareSmartPrep,
  type SmartPrepPreparedContext,
} from "@/services/smartPrep";
import { POWDER_BRAND_SHEET_ICONS } from "@/components/PowderBrandOptionSheet/icons";
import styles from "./index.module.less";

export type ConnectedFeaturesSetupView = "hub" | "feeding" | "smartPrep";

type Props = {
  initialView: ConnectedFeaturesSetupView;
  deviceId: string;
  homeId: string;
  isOnline: boolean;
  currentChildId: number | undefined;
  feedingProfile: FeedingProfileSelection | null;
  hasValidFeedingContext: boolean;
  onClose: () => void;
  onFeedingSelectionChange: (selection: FeedingProfileSelection) => void;
  onFeedingBusyChange: (busy: boolean) => void;
  onSmartPrepBusyChange: (busy: boolean) => void;
};

const ConnectedFeaturesSetupSheet: React.FC<Props> = ({
  initialView,
  deviceId,
  homeId,
  isOnline,
  currentChildId,
  feedingProfile,
  hasValidFeedingContext,
  onClose,
  onFeedingSelectionChange,
  onFeedingBusyChange,
  onSmartPrepBusyChange,
}) => {
  const [view, setView] = useState<ConnectedFeaturesSetupView>(initialView);
  const [smartPrep, setSmartPrep] = useState<SmartPrepPreparedContext | null>(
    null
  );
  const [smartPrepStatus, setSmartPrepStatus] = useState<
    "idle" | "loading" | "ready" | "error"
  >("idle");

  const loadSmartPrepStatus = useCallback(async () => {
    if (!isOnline || !homeId || !deviceId || smartPrepStatus === "loading") {
      return;
    }
    setSmartPrepStatus("loading");
    onSmartPrepBusyChange(true);
    try {
      const prepared = await prepareSmartPrep({ homeId, deviceId });
      setSmartPrep(prepared);
      setSmartPrepStatus("ready");
    } catch {
      setSmartPrepStatus("error");
    } finally {
      onSmartPrepBusyChange(false);
    }
  }, [deviceId, homeId, isOnline, onSmartPrepBusyChange, smartPrepStatus]);

  useEffect(() => {
    if (view !== "hub" || smartPrepStatus !== "idle") return;
    loadSmartPrepStatus().catch(() => undefined);
  }, [loadSmartPrepStatus, smartPrepStatus, view]);

  if (view === "feeding") {
    return (
      <FeedingProfileSheet
        deviceId={deviceId}
        homeId={homeId}
        isOnline={isOnline}
        currentChildId={currentChildId}
        onClose={() => setView("hub")}
        onDismiss={onClose}
        showBackButton
        onSelectionChange={onFeedingSelectionChange}
        onBusyChange={onFeedingBusyChange}
      />
    );
  }

  if (view === "smartPrep") {
    return (
      <SmartPrepReminderSheet
        homeId={homeId}
        deviceId={deviceId}
        initialPrepared={smartPrep}
        onPreparedChange={(prepared) => {
          setSmartPrep(prepared);
          setSmartPrepStatus("ready");
        }}
        onBusyChange={onSmartPrepBusyChange}
        onClose={() => setView("hub")}
        onDismiss={onClose}
        showBackButton
      />
    );
  }

  const selectedSmartPrepCount =
    smartPrep?.devices.filter((device) => device.selected).length ?? 0;
  const feedingStatus = hasValidFeedingContext
    ? feedingProfile?.childName || "Configured"
    : "Not set up";
  const smartPrepLabel =
    smartPrepStatus === "loading"
      ? "Checking…"
      : smartPrepStatus === "error"
      ? "Couldn’t check"
      : selectedSmartPrepCount > 0
      ? `${selectedSmartPrepCount} CryAssist ${
          selectedSmartPrepCount === 1 ? "device" : "devices"
        }`
      : "Not set up";

  return (
    <View className={styles.mask}>
      <View className={styles.backdrop} onClick={onClose} />
      <View className={styles.sheet}>
        <View className={styles.header}>
          <View className={styles.headerCopy}>
            <Text className={styles.title}>Finish setup</Text>
            <Text className={styles.subtitle}>
              Connect feeding records and hunger reminders. You can change these
              anytime.
            </Text>
          </View>
          <View className={styles.closeButton} onClick={onClose}>
            <Image
              src={POWDER_BRAND_SHEET_ICONS.close}
              className={styles.closeIcon}
            />
          </View>
        </View>

        <View className={styles.options}>
          <View className={styles.optionRow} onClick={() => setView("feeding")}>
            <View className={styles.optionIconFrame}>
              <Image
                src={feedingProfile?.imageUrl || Res.actionButtonIcons.baby}
                className={
                  feedingProfile?.imageUrl
                    ? styles.profileAvatar
                    : styles.optionIcon
                }
                mode="aspectFill"
              />
            </View>
            <View className={styles.optionCopy}>
              <Text className={styles.optionTitle}>Baby profile</Text>
              <Text className={styles.optionStatus}>{feedingStatus}</Text>
            </View>
            <Image src={Res.icArrowRight} className={styles.arrow} />
          </View>

          <View
            className={styles.optionRow}
            onClick={
              smartPrepStatus === "loading"
                ? undefined
                : () => setView("smartPrep")
            }
          >
            <View className={styles.optionIconFrame}>
              {smartPrepStatus === "loading" ? (
                <View className={styles.spinner} />
              ) : (
                <Image src={Res.icNotification} className={styles.optionIcon} />
              )}
            </View>
            <View className={styles.optionCopy}>
              <Text className={styles.optionTitle}>Smart Prep Reminder</Text>
              <Text className={styles.optionStatus}>{smartPrepLabel}</Text>
            </View>
            <Image src={Res.icArrowRight} className={styles.arrow} />
          </View>
        </View>

        <View className={styles.doneButton} onClick={onClose}>
          <Text className={styles.doneButtonText}>Done</Text>
        </View>
      </View>
    </View>
  );
};

export default ConnectedFeaturesSetupSheet;
