import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Image,
  Text,
  View,
  getSystemInfoSync,
  showToast,
  useAppEvent,
  publishDps,
  onDpDataChange,
  offDpDataChange,
} from "@ray-js/ray";
import { useDevice } from "@ray-js/panel-sdk";
import type { FeedingProfileSelection } from "@/constant/feedingRecordStorage";
import Res from "@/res";
import { POWDER_BRAND_SHEET_ICONS } from "@/components/PowderBrandOptionSheet/icons";
import {
  finalizeFeedingContext,
  prepareFeedingContext,
  type FeedingChild,
  type PreparedContext,
} from "@/services/feedingContext";
import { finalizeProfileSession } from "@/utils/feedingProfileSession";
import { parseFeedingContextValue } from "@/utils/feedingContextValue";
import {
  FeedingContextSaveError,
  feedingContextSaveMessage,
  feedingContextDiagnostic,
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
  const mountedRef = useRef(true);
  const operationVersion = useRef(0);
  const cancelPublish =
    useRef<ReturnType<typeof publishFeedingContext>["cancel"]>();
  const devInfoRef = useRef(devInfo);
  devInfoRef.current = devInfo;
  const onlineRef = useRef(isOnline);
  onlineRef.current = isOnline;
  const busyRef = useRef(false);
  const [isBusy, setIsBusy] = useState(false);
  const startedForOnlinePeriodRef = useRef(false);
  const loadProfilesRef = useRef<(fromBabyDiary?: boolean) => Promise<void>>(
    async () => undefined
  );
  const awaitingBabyDiaryReturnRef = useRef(false);
  const openingBabyDiaryRef = useRef(false);
  const [phase, setPhase] = useState<Phase>("checking");
  const [children, setChildren] = useState<FeedingChild[]>([]);
  const preparedRef = useRef<PreparedContext | null>(null);
  const [errorText, setErrorText] = useState("");
  const [diagnostic, setDiagnostic] = useState("");
  const [failedChild, setFailedChild] = useState<FeedingChild | null>(null);
  const [returnedFromBabyDiary, setReturnedFromBabyDiary] = useState(false);
  const setBusy = useCallback(
    (busy: boolean) => {
      busyRef.current = busy;
      setIsBusy(busy);
      onBusyChange(busy);
    },
    [onBusyChange]
  );

  const loadProfiles = useCallback(
    async (fromBabyDiary = false) => {
      if (busyRef.current || !onlineRef.current) return;
      const version = operationVersion.current;
      setBusy(true);
      setErrorText("");
      setDiagnostic("");
      setFailedChild(null);
      setPhase(fromBabyDiary ? "returning" : "checking");
      if (fromBabyDiary) setReturnedFromBabyDiary(true);
      try {
        const timezoneId = await resolveFeedingProfileTimezone({
          systemTimezone: getSystemInfoSync?.()?.timezoneId,
          deviceTimezone: devInfo?.devTimezoneId,
          requestUserInfo: requestMiniAppUserInfo,
        });
        if (
          !mountedRef.current ||
          !onlineRef.current ||
          version !== operationVersion.current
        )
          return;
        if (!homeId || !deviceId || !timezoneId) {
          throw new Error("Panel context is unavailable");
        }
        const prepared = await prepareFeedingContext({
          assertActive: () => {
            if (
              !mountedRef.current ||
              !onlineRef.current ||
              version !== operationVersion.current
            ) {
              throw new FeedingContextSaveError("cancelled");
            }
          },
          homeId,
          deviceId,
          timezoneId,
        });
        if (
          !mountedRef.current ||
          !onlineRef.current ||
          version !== operationVersion.current
        )
          return;
        if (!prepared.children.length) {
          setChildren([]);
          preparedRef.current = null;
          setPhase("no_profiles");
          return;
        }
        setChildren(prepared.children);
        preparedRef.current = prepared;
        setPhase("choosing");
      } catch (error) {
        if (!mountedRef.current) return;
        setChildren([]);
        preparedRef.current = null;
        setErrorText(profileCheckMessage(error));
        setPhase("check_error");
      } finally {
        if (mountedRef.current) setBusy(false);
      }
    },
    [deviceId, devInfo?.devTimezoneId, homeId, setBusy]
  );

  useEffect(() => {
    loadProfilesRef.current = loadProfiles;
  }, [loadProfiles]);

  useEffect(() => {
    if (!isOnline) {
      operationVersion.current++;
      cancelPublish.current?.("offline");
      startedForOnlinePeriodRef.current = false;
      return;
    }
    if (isBusy) return;
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
  }, [isOnline, isBusy, loadProfiles]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      operationVersion.current++;
      cancelPublish.current?.("cancelled");
      onBusyChange(false);
    };
  }, [onBusyChange]);

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
    setDiagnostic("");
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
      const version = operationVersion.current;
      const assertActive = () => {
        if (!mountedRef.current) throw new FeedingContextSaveError("cancelled");
        if (!onlineRef.current || version !== operationVersion.current) {
          throw new FeedingContextSaveError("offline");
        }
      };
      setBusy(true);
      setErrorText("");
      setDiagnostic("");
      setFailedChild(null);
      setPhase("preparing");
      try {
        const context = await finalizeProfileSession({
          prepared: preparedRef.current,
          childId: child.id,
          refresh: async () => {
            assertActive();
            const timezoneId = await resolveFeedingProfileTimezone({
              systemTimezone: getSystemInfoSync?.()?.timezoneId,
              deviceTimezone: devInfoRef.current?.devTimezoneId,
              requestUserInfo: requestMiniAppUserInfo,
            });
            assertActive();
            if (!homeId || !deviceId || !timezoneId)
              throw new Error("Panel context is unavailable");
            const prepared = await prepareFeedingContext({
              homeId,
              deviceId,
              timezoneId,
              assertActive,
            });
            assertActive();
            preparedRef.current = prepared;
            setChildren(prepared.children);
            return prepared;
          },
          finalize: async (session, childId) => {
            assertActive();
            const value = await finalizeFeedingContext(session, childId);
            assertActive();
            return value;
          },
        });
        assertActive();
        const parsedContext = parseFeedingContextValue(context);
        if (
          !parsedContext ||
          parsedContext.homeID !== homeId ||
          parsedContext.childID !== child.id
        ) {
          throw new Error("Provisioning context is invalid");
        }
        setPhase("sending");
        const tx = publishFeedingContext({
          context,
          deviceId,
          modelDeviceId: devInfoRef.current?.devId,
          isOnline: onlineRef.current,
          publish: (params) => publishDps(params),
          subscribe: (listener) => {
            onDpDataChange(listener);
            return () => offDpDataChange(listener);
          },
          onAccepted: () => {
            if (mountedRef.current) setPhase("confirming");
          },
        });
        cancelPublish.current = tx.cancel;
        await tx.promise;
        assertActive();
        applySelection(child);
        showToast({ title: "Baby profile updated" });
        onClose();
      } catch (error) {
        if (!mountedRef.current) return;
        const stage =
          error instanceof FeedingContextSaveError ? error.stage : "validation";
        // Log only bounded metadata; backend/platform messages may contain credentials.
        // eslint-disable-next-line no-console
        console.error("Feeding profile save failed", {
          stage,
          dpId: 119,
          code:
            error instanceof FeedingContextSaveError ? error.code : undefined,
        });
        const unavailable =
          error instanceof Error && error.message === "profile_unavailable";
        setFailedChild(unavailable ? null : child);
        setErrorText(
          unavailable
            ? "This baby profile is no longer available. Try again to choose a profile."
            : feedingContextSaveMessage(error)
        );
        setDiagnostic(feedingContextDiagnostic(error));
        setPhase("save_error");
      } finally {
        cancelPublish.current = undefined;
        if (mountedRef.current) setBusy(false);
      }
    },
    [applySelection, deviceId, homeId, onClose, setBusy]
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
            {phase === "save_error" && diagnostic ? (
              <Text className={styles.debugText}>
                Support code: {diagnostic}
              </Text>
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
