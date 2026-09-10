import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Image,
  Text,
  View,
  getSystemInfoSync,
  showToast,
  useAppEvent,
} from "@ray-js/ray";
import { useActions, useDevice, useProps } from "@ray-js/panel-sdk";
import dpCodes from "@/constant/dpCodes";
import type { FeedingProfileSelection } from "@/constant/feedingRecordStorage";
import useDeviceConnectivity from "@/hooks/useDeviceConnectivity";
import Res from "@/res";
import { POWDER_BRAND_SHEET_ICONS } from "@/components/PowderBrandOptionSheet/icons";
import {
  finalizeFeedingContext,
  prepareFeedingContext,
  type FeedingChild,
} from "@/services/feedingContext";
import { createDpSetter } from "@/utils/dpControl";
import { parseFeedingContextValue } from "@/utils/feedingContextValue";
import { openBabyDiaryPanel } from "@/utils/openBabyDiaryPanel";
import styles from "./index.module.less";

type Phase =
  | "checking"
  | "returning"
  | "choosing"
  | "no_profiles"
  | "opening_diary"
  | "open_error"
  | "saving"
  | "check_error"
  | "save_error";

interface Props {
  deviceId: string;
  homeId: string;
  currentChildId: number | undefined;
  onClose: () => void;
  onSelectionChange: (selection: FeedingProfileSelection) => void;
  onBusyChange: (busy: boolean) => void;
}

const callback = <T,>(
  caller: (params: {
    success?: (result: T) => void;
    fail?: (error: unknown) => void;
  }) => void
) =>
  new Promise<T>((resolve, reject) =>
    caller({ success: resolve, fail: reject })
  );

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

const resolveTimezone = (
  systemTimezone: unknown,
  user: { timezoneId?: string; timeZoneId?: string; [key: string]: unknown },
  deviceTimezone: unknown
) => {
  const candidates = [
    systemTimezone,
    user.timezoneId || user.timeZoneId || Reflect.get(user, "time_zone_id"),
    deviceTimezone,
  ];
  const timezone = candidates.find(
    (value) => typeof value === "string" && value.trim()
  );
  return typeof timezone === "string" ? timezone.trim() : "";
};

const FeedingProfileSheet: React.FC<Props> = ({
  deviceId,
  homeId,
  currentChildId,
  onClose,
  onSelectionChange,
  onBusyChange,
}) => {
  const actions = useActions();
  const { devInfo } = useDevice((state) => ({ devInfo: state.devInfo }));
  const props = useProps() as Record<string, unknown>;
  const propsRef = useRef(props);
  propsRef.current = props;
  const { isOnline } = useDeviceConnectivity();
  const onlineRef = useRef(isOnline);
  onlineRef.current = isOnline;
  const busyRef = useRef(false);
  const loadProfilesRef = useRef<(fromBabyDiary?: boolean) => Promise<void>>(
    async () => undefined
  );
  const awaitingBabyDiaryReturnRef = useRef(false);
  const openingBabyDiaryRef = useRef(false);
  const [phase, setPhase] = useState<Phase>("checking");
  const [children, setChildren] = useState<FeedingChild[]>([]);
  const [session, setSession] = useState("");
  const [errorText, setErrorText] = useState("");
  const [failedChild, setFailedChild] = useState<FeedingChild | null>(null);
  const [returnedFromBabyDiary, setReturnedFromBabyDiary] = useState(false);
  const setDp = useMemo(
    () =>
      createDpSetter(
        actions as Record<string, { set?: (value: unknown) => unknown }>
      ),
    [actions]
  );

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
      setFailedChild(null);
      setPhase(fromBabyDiary ? "returning" : "checking");
      if (fromBabyDiary) setReturnedFromBabyDiary(true);
      try {
        const user = await callback<{
          timezoneId?: string;
          timeZoneId?: string;
          [key: string]: unknown;
        }>((params) => ty.getUserInfo(params)).catch(() => ({}));
        const timezoneId = resolveTimezone(
          getSystemInfoSync?.()?.timezoneId,
          user,
          devInfo?.devTimezoneId
        );
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
    loadProfiles().catch(() => undefined);
  }, [loadProfiles]);

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
      setFailedChild(null);
      setPhase("saving");
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
        if (!(await setDp(dpCodes.feedingContext, context))) {
          throw new Error("DP publish failed");
        }
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
        if (!didReadBack) throw new Error("DP readback timed out");
        applySelection(child);
        showToast({ title: "Baby profile updated" });
        onClose();
      } catch (error) {
        setFailedChild(child);
        setErrorText("Couldn’t save this baby profile. Try again.");
        setPhase("save_error");
      } finally {
        setBusy(false);
      }
    },
    [applySelection, currentChildId, homeId, onClose, session, setBusy, setDp]
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

  const canClose = phase !== "saving";

  return (
    <View className={styles.mask}>
      <View
        className={styles.backdrop}
        onClick={canClose ? onClose : undefined}
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
              src={POWDER_BRAND_SHEET_ICONS.close}
              className={styles.closeIcon}
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
            <View className={styles.primaryButton} onClick={retry}>
              <Text className={styles.primaryButtonText}>Try again</Text>
            </View>
          </View>
        ) : null}

        {isOnline && phase === "saving" ? (
          <View className={styles.stateBlock}>
            <View className={styles.spinner} />
            <Text className={styles.stateTitle}>Saving baby profile…</Text>
            <Text className={styles.stateText}>
              Keep this panel open while the device confirms the setting.
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default FeedingProfileSheet;
