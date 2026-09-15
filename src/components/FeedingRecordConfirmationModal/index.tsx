import React, { useCallback, useEffect, useState } from "react";
import { Text, View, showToast } from "@ray-js/ray";
import CustomModeSlider from "@/components/CustomModeSlider";
import Strings from "@/i18n";
import type { FeedingContextValue } from "@/utils/feedingContextValue";
import {
  settleConfirmationClear,
  type FeedingRecordConfirmation,
} from "@/utils/feedingRecordConfirmation";
import { updateFeedingRecord } from "@/services/feedingRecordConfirmation";
import styles from "./index.module.less";

type Props = {
  context: FeedingContextValue | null;
  record: FeedingRecordConfirmation | null;
  isOnline: boolean;
  clearConfirmation: () => Promise<boolean>;
};

type Phase =
  | "editing"
  | "updating"
  | "clearing"
  | "clear_error"
  | "update_error";

const FeedingRecordConfirmationModal: React.FC<Props> = ({
  context,
  record,
  isOnline,
  clearConfirmation,
}) => {
  const [remainingAmount, setRemainingAmount] = useState(
    record?.preparedAmount ?? 0
  );
  const [phase, setPhase] = useState<Phase>("editing");
  const [dismissed, setDismissed] = useState(false);
  const [recordUpdated, setRecordUpdated] = useState(false);
  const busy = phase === "updating" || phase === "clearing";

  useEffect(() => {
    setRemainingAmount(record?.preparedAmount ?? 0);
    setPhase("editing");
    setDismissed(false);
    setRecordUpdated(false);
  }, [record?.feedingRecordID]);

  const clearAndDismiss = useCallback(async () => {
    if (!isOnline) {
      setDismissed(true);
      return;
    }
    setPhase("clearing");
    const cleared = await settleConfirmationClear(clearConfirmation);
    if (cleared) {
      setDismissed(true);
      return;
    }
    setPhase("clear_error");
  }, [clearConfirmation, isOnline]);

  const save = useCallback(async () => {
    if (!context || !record || !isOnline || busy) return;
    if (recordUpdated) {
      await clearAndDismiss();
      return;
    }
    setPhase("updating");
    try {
      await updateFeedingRecord({ context, record, remainingAmount });
      setRecordUpdated(true);
      showToast({
        title: Strings.getLang("feeding_confirmation_updated"),
        icon: "success",
      });
      setPhase("clearing");
      const cleared = await settleConfirmationClear(clearConfirmation);
      if (!cleared) {
        setPhase("clear_error");
        return;
      }
      setDismissed(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Feeding record confirmation update failed", error);
      setPhase("update_error");
      showToast({
        title: Strings.getLang("feeding_confirmation_update_failed"),
        icon: "none",
      });
    }
  }, [
    busy,
    clearAndDismiss,
    clearConfirmation,
    context,
    isOnline,
    record,
    recordUpdated,
    remainingAmount,
  ]);

  if (dismissed) return null;

  if (!context || !record) {
    return (
      <View className={styles.mask}>
        <View className={styles.card}>
          <Text className={styles.title}>
            {Strings.getLang("feeding_confirmation_title")}
          </Text>
          <Text className={styles.body}>
            {Strings.getLang("feeding_confirmation_unavailable")}
          </Text>
          <View
            className={styles.singleAction}
            onClick={() => clearAndDismiss()}
          >
            <Text className={styles.primaryText}>
              {Strings.getLang("common_close")}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  const unitLabel = record.unit === "ml" ? "mL" : "oz";
  const errorText =
    phase === "update_error"
      ? Strings.getLang("feeding_confirmation_update_failed")
      : phase === "clear_error"
      ? Strings.getLang("feeding_confirmation_clear_failed")
      : "";

  return (
    <View className={styles.mask}>
      <View className={styles.card}>
        <Text className={styles.title}>
          {Strings.getLang("feeding_confirmation_title")}
        </Text>
        <Text className={styles.body}>
          {Strings.getLang("feeding_confirmation_body")}
        </Text>
        <View className={styles.amountPanel}>
          <View className={styles.amountHeader}>
            <Text className={styles.amountLabel}>
              {Strings.getLang("feeding_confirmation_remaining")}
            </Text>
            <Text className={styles.amountValue}>
              {remainingAmount} {unitLabel}
            </Text>
          </View>
          <CustomModeSlider
            min={0}
            max={record.preparedAmount}
            step={1}
            value={remainingAmount}
            disabled={busy || !isOnline}
            onChange={setRemainingAmount}
          />
          <View className={styles.rangeLabels}>
            <Text className={styles.rangeText}>0 {unitLabel}</Text>
            <Text className={styles.rangeText}>
              {record.preparedAmount} {unitLabel}
            </Text>
          </View>
        </View>
        {!isOnline ? (
          <Text className={styles.errorText}>
            {Strings.getLang("feeding_confirmation_offline")}
          </Text>
        ) : errorText ? (
          <Text className={styles.errorText}>{errorText}</Text>
        ) : null}
        <View className={styles.actions}>
          <View
            className={styles.action}
            onClick={busy ? undefined : () => clearAndDismiss()}
          >
            <Text className={styles.ghostText}>
              {Strings.getLang("common_cancel")}
            </Text>
          </View>
          <View
            className={styles.action}
            onClick={!isOnline || busy ? undefined : () => save()}
          >
            <Text className={styles.primaryText}>
              {busy
                ? Strings.getLang("feeding_confirmation_saving")
                : phase === "clear_error" && recordUpdated
                ? Strings.getLang("common_confirm")
                : Strings.getLang("common_save")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedingRecordConfirmationModal;
