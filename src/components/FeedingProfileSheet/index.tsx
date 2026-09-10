import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Image,
  Text,
  View,
  getSystemInfoSync,
  showToast,
  useAppEvent,
} from "@ray-js/ray";
import { useDevice, useProps } from "@ray-js/panel-sdk";
import { devices } from "@/devices";
import dpCodes from "@/constant/dpCodes";
import type { FeedingProfileSelection } from "@/constant/feedingRecordStorage";
import Res from "@/res";
import { POWDER_BRAND_SHEET_ICONS } from "@/components/PowderBrandOptionSheet/icons";
import {
  finalizeFeedingContext,
  prepareFeedingContext,
  type FeedingChild,
} from "@/services/feedingContext";
import { parseFeedingContextValue } from "@/utils/feedingContextValue";
import {
  FeedingContextSaveError,
  feedingContextSaveMessage,
  publishFeedingContext,
} from "@/utils/feedingContextPublish";
import { openBabyDiaryPanel } from "@/utils/openBabyDiaryPanel";
import { resolveFeedingProfileTimezone } from "@/utils/feedingProfileTimezone";
import { shouldStartFeedingProfileCheck } from "@/utils/feedingProfilePresentation";
import styles from "./index.module.less";

type Phase =
  | "checking"
  | "returning"
  | "choosing"
  | "no_profiles"
  | "opening_diary"
  | "open_error"
  | "preparing"
  | "sending"
  | "confirming"
  | "check_error"
  | "save_error";

interface Props {
  deviceId: string;
  homeId: string;
  isOnline: boolean;
  currentChildId: number | undefined;
  onClose: () => void;
  onDismiss: () => void;
  showBackButton: boolean;
  onSelectionChange: (selection: FeedingProfileSelection) => void;
  onBusyChange: (busy: boolean) => void;
}

const errorMessage = (error: unknown, fallback: string) => {
  if (error instanceof Error && error.message) return error.message;
  if (error && typeof error === "object") {
    const value = error as Record<string, unknown>;
    const message = ["errorMsg", "message", "error"]
      .map((key) => value[key])
      .find(
        (item): item is string => typeof item === "string" && Boolean(item)
      );
    if (message) return message;
  }
  return fallback;
};

const profileCheckMessage = (error: unknown) => {
  const message = errorMessage(error, "").toLowerCase();
  if (message.includes("network") || message.includes("timeout")) {
    return "Couldn’t connect to Baby Diary. Try again when you’re online.";
  }
  return "Couldn’t check Baby Diary profiles. Try again.";
};

const requestMiniAppUserInfo = () =>
  new Promise<{
    timezoneId?: string;
    timeZoneId?: string;
    [key: string]: unknown;
  }>((resolve, reject) => {
    ty.getUserInfo({ success: resolve, failure: reject });
  });

const FeedingProfileSheet: React.FC<Props> = ({
  deviceId,
  homeId,
  isOnline,
  currentChildId,
  onClose,
  onDismiss,
  showBackButton,
  onSelectionChange,
  onBusyChange,
}) => {
  const { devInfo } = useDevice((state) => ({ devInfo: state.devInfo }));
  const props = useProps() as Record<string, unknown>;
  const propsRef = useRef(props);
  propsRef.current = props;
  const onlineRef = useRef(isOnline);
  onlineRef.current = isOnline;
  const busyRef = useRef(false);
  const startedForOnlinePeriodRef = useRef(false);
  const loadProfilesRef = useRef<(fromBabyDiary?: boolean) => Promise<void>>(
    async () => undefined
  );
  const awaitingBabyDiaryReturnRef = useRef(false);
  const openingBabyDiaryRef = useRef(false);
  const [phase, setPhase] = useState<Phase>("checking");
  const [children, setChildren] = useState<FeedingChild[]>([]);
  const [session, setSession] = useState("");
  const [errorText, setErrorText] = useState("");
  const [debugText, setDebugText] = useState("");
  const [failedChild, setFailedChild] = useState<FeedingChild | null>(null);
  const [returnedFromBabyDiary, setReturnedFromBabyDiary] = useState(false);
  const setBusy = useCallback(
    (busy: boolean) => {
      busyRef.current = busy;
      onBusyChange(busy);
    },
    [onBusyChange]
  );

  const loadProfiles = useCallback(
    async (fromBabyDiary = false) => {
      if (busyRef.current || !onlineRef.current) return;
      setBusy(true);
      setErrorText("");
      setDebugText("");
      setFailedChild(null);
      setPhase(fromBabyDiary ? "returning" : "checking");
      if (fromBabyDiary) setReturnedFromBabyDiary(true);
      try {
        const timezoneId = await resolveFeedingProfileTimezone({
          systemTimezone: getSystemInfoSync?.()?.timezoneId,
          deviceTimezone: devInfo?.devTimezoneId,
          requestUserInfo: requestMiniAppUserInfo,
        });
        if (!homeId || !deviceId || !timezoneId) {
          throw new Error("Panel context is unavailable");
        }
        const prepared = await prepareFeedingContext({
          homeId,
          deviceId,
          timezoneId,
        });
        if (!onlineRef.current) return;
        if (!prepared.children.length) {
          setChildren([]);
          setSession("");
          setPhase("no_profiles");
          return;
        }
        setChildren(prepared.children);
        setSession(prepared.session);
        setPhase("choosing");
      } catch (error) {
        setChildren([]);
        setSession("");
        setErrorText(profileCheckMessage(error));
        setPhase("check_error");
      } finally {
        setBusy(false);
      }
    },
    [deviceId, devInfo?.devTimezoneId, homeId, setBusy]
  );

  useEffect(() => {
    loadProfilesRef.current = loadProfiles;
  }, [loadProfiles]);

  useEffect(() => {
    if (!isOnline) {
      startedForOnlinePeriodRef.current = false;
      return;
    }
    if (
      !shouldStartFeedingProfileCheck({
        isOnline,
        startedForOnlinePeriod: startedForOnlinePeriodRef.current,
      })
    ) {
      return;
    }
    startedForOnlinePeriodRef.current = true;
    loadProfiles().catch(() => undefined);
  }, [isOnline, loadProfiles]);

  useEffect(
    () => () => {
      onBusyChange(false);
    },
    [onBusyChange]
  );

  useAppEvent("onShow", () => {
    if (
      !awaitingBabyDiaryReturnRef.current ||
      busyRef.current ||
      !onlineRef.current
    ) {
      return;
    }
    awaitingBabyDiaryReturnRef.current = false;
    openingBabyDiaryRef.current = false;
    loadProfilesRef.current(true).catch(() => undefined);
  });

  const openBabyDiary = useCallback(() => {
    if (busyRef.current || openingBabyDiaryRef.current) return;
    openingBabyDiaryRef.current = true;
    setErrorText("");
    setReturnedFromBabyDiary(false);
    setPhase("opening_diary");
    openBabyDiaryPanel({
      showErrorToast: false,
      onBeforeOpen: () => {
        awaitingBabyDiaryReturnRef.current = true;
      },
      onOpenFailed: () => {
        awaitingBabyDiaryReturnRef.current = false;
        openingBabyDiaryRef.current = false;
        setErrorText("Couldn’t open Baby Diary. Try again.");
        setPhase("open_error");
      },
    });
  }, []);

  const applySelection = useCallback(
    (child: FeedingChild) => {
      onSelectionChange({
        childId: child.id,
        childName: child.name,
        homeId,
        imageUrl: child.imageUrl,
      });
    },
    [homeId, onSelectionChange]
  );

  const saveChild = useCallback(
    async (child: FeedingChild) => {
      if (busyRef.current || !onlineRef.current) return;
      if (child.id === currentChildId) {
        applySelection(child);
        onClose();
        return;
      }
      if (!session) return;
      setBusy(true);
      setErrorText("");
      setDebugText("");
      setFailedChild(null);
      setPhase("preparing");
      try {
        const context = await finalizeFeedingContext(session, child.id);
        const parsedContext = parseFeedingContextValue(context);
        if (
          !parsedContext ||
          parsedContext.homeID !== homeId ||
          parsedContext.childID !== child.id
        ) {
          throw new Error("Provisioning context is invalid");
        }
        if (!onlineRef.current) throw new Error("Device is offline");
        setPhase("sending");
        // eslint-disable-next-line no-console
        console.info("Feeding profile DP publish started", {
          dpCode: dpCodes.feedingContext,
          contextLength: context.length,
          publisher: "devices.common.publishDps",
        });
        const publishResult = await publishFeedingContext({
          context,
          isOnline: onlineRef.current,
          publish: async (payload) => {
            if (!devices.common?.initialized) {
              throw new Error("Panel device model is unavailable");
            }
            return devices.common.publishDps(payload);
          },
        });
        // eslint-disable-next-line no-console
        console.info("Feeding profile DP publish accepted", {
          dpCode: dpCodes.feedingContext,
          contextLength: publishResult.contextLength,
          accepted: publishResult.result !== false,
        });
        setPhase("confirming");
        const didReadBack = await new Promise<boolean>((resolve) => {
          const deadline = Date.now() + 8000;
          const check = () => {
            if (propsRef.current[dpCodes.feedingContext] === context) {
              resolve(true);
              return;
            }
            if (Date.now() >= deadline) {
              resolve(false);
              return;
            }
            setTimeout(check, 400);
          };
          check();
        });
        if (!didReadBack) {
          throw new FeedingContextSaveError("readback");
        }
        applySelection(child);
        showToast({ title: "Baby profile updated" });
        onClose();
      } catch (error) {
        const stage =
          error instanceof FeedingContextSaveError ? error.stage : "validation";
        const detail =
          error instanceof FeedingContextSaveError ? error.detail : error;
        const detailMessage =
          detail instanceof Error
            ? detail.message
            : typeof detail === "string"
            ? detail
            : "unknown error";
        const diagnostic = `${stage} · ${detailMessage}`;
        // eslint-disable-next-line no-console
        console.error("Feeding profile save failed", diagnostic);
        setFailedChild(child);
        setErrorText(feedingContextSaveMessage(error));
        setDebugText(`Debug: ${diagnostic}`);
        setPhase("save_error");
      } finally {
        setBusy(false);
      }
    },
    [applySelection, currentChildId, homeId, onClose, session, setBusy]
  );

  const retry = useCallback(() => {
    if (phase === "open_error") {
      openBabyDiary();
      return;
    }
    if (phase === "save_error" && failedChild) {
      saveChild(failedChild).catch(() => undefined);
      return;
    }
    loadProfiles().catch(() => undefined);
  }, [failedChild, loadProfiles, openBabyDiary, phase, saveChild]);

  const saving =
    phase === "preparing" || phase === "sending" || phase === "confirming";
  const canClose = !saving;

  return (
    <View className={styles.mask}>
      <View
        className={styles.backdrop}
        onClick={canClose ? onDismiss : undefined}
      />
      <View className={styles.sheet}>
        <View className={styles.header}>
          <View className={styles.headerCopy}>
            <Text className={styles.title}>Choose baby profile</Text>
            <Text className={styles.subtitle}>
              Completed bottles will be added to this profile.
            </Text>
          </View>
          <View
            className={styles.closeButton}
            onClick={canClose ? onClose : undefined}
          >
            <Image
              src={
                showBackButton
                  ? Res.icArrowRight
                  : POWDER_BRAND_SHEET_ICONS.close
              }
              className={showBackButton ? styles.backIcon : styles.closeIcon}
            />
          </View>
        </View>

        {!isOnline ? (
          <View className={styles.stateBlock}>
            <Text className={styles.stateTitle}>Device offline</Text>
            <Text className={styles.stateText}>
              Connect your device before choosing a baby profile.
            </Text>
          </View>
        ) : null}

        {isOnline && (phase === "checking" || phase === "returning") ? (
          <View className={styles.stateBlock}>
            <View className={styles.spinner} />
            <Text className={styles.stateTitle}>
              {phase === "returning"
                ? "Checking for your new profile…"
                : "Checking Baby Diary profiles…"}
            </Text>
          </View>
        ) : null}

        {isOnline && phase === "choosing" ? (
          <View className={styles.list}>
            {children.map((child) => {
              const selected = child.id === currentChildId;
              return (
                <View
                  key={child.id}
                  className={styles.childRow}
                  onClick={() => saveChild(child).catch(() => undefined)}
                >
                  <View className={styles.avatarFrame}>
                    <Image
                      src={child.imageUrl || Res.actionButtonIcons.baby}
                      className={
                        child.imageUrl ? styles.avatar : styles.avatarFallback
                      }
                      mode="aspectFill"
                    />
                  </View>
                  <Text className={styles.childName}>{child.name}</Text>
                  <View
                    className={selected ? styles.radioSelected : styles.radio}
                  >
                    {selected ? (
                      <Image src={Res.icCheck} className={styles.checkIcon} />
                    ) : null}
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}

        {isOnline &&
        (phase === "no_profiles" ||
          phase === "opening_diary" ||
          phase === "open_error") ? (
          <View className={styles.stateBlock}>
            <Image
              src={Res.actionButtonIcons.baby}
              className={styles.emptyIcon}
            />
            <Text className={styles.stateTitle}>Create a baby profile</Text>
            <Text className={styles.stateText}>
              Create a profile in Baby Diary, then return here to select it.
            </Text>
            {phase === "open_error" ? (
              <Text className={styles.errorText}>{errorText}</Text>
            ) : null}
            <View
              className={styles.primaryButton}
              onClick={phase === "opening_diary" ? undefined : openBabyDiary}
            >
              <Text className={styles.primaryButtonText}>
                {phase === "opening_diary"
                  ? "Opening Baby Diary…"
                  : "Create baby profile"}
              </Text>
            </View>
            {phase === "no_profiles" && returnedFromBabyDiary ? (
              <Text className={styles.hint}>No profile found yet.</Text>
            ) : null}
          </View>
        ) : null}

        {isOnline && (phase === "check_error" || phase === "save_error") ? (
          <View className={styles.stateBlock}>
            <Text className={styles.errorText}>{errorText}</Text>
            {phase === "save_error" && debugText ? (
              <Text className={styles.debugText}>{debugText}</Text>
            ) : null}
            <View className={styles.primaryButton} onClick={retry}>
              <Text className={styles.primaryButtonText}>Try again</Text>
            </View>
          </View>
        ) : null}

        {isOnline && saving ? (
          <View className={styles.stateBlock}>
            <View className={styles.spinner} />
            <Text className={styles.stateTitle}>
              {phase === "preparing"
                ? "Preparing profile…"
                : phase === "sending"
                ? "Sending to device…"
                : "Waiting for device confirmation…"}
            </Text>
            <Text className={styles.stateText}>
              {phase === "confirming"
                ? "Keep this panel open while the device confirms the setting."
                : "Keep this panel open while the setting is prepared."}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default FeedingProfileSheet;
