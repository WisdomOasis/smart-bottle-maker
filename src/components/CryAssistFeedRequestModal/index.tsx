import React, { useMemo, useState } from "react";
import { Image, Text, View } from "@ray-js/ray";
import clsx from "clsx";
import CustomModeSlider from "@/components/CustomModeSlider";
import { CUSTOM_MODE_ICONS } from "@/components/CustomModeSettingsPanel/icons";
import Strings from "@/i18n";
import {
  formatUnitValueCelsius,
  formatUnitValueG,
  formatUnitValueMl,
} from "@/i18n/formatters";
import {
  CRYASSIST_ML_MAX,
  CRYASSIST_ML_MIN,
  CRYASSIST_ML_STEP,
  CRYASSIST_TEMP_OPTIONS,
  getCryAssistPowderBounds,
  overrideCryAssistPowder,
  updateCryAssistTemp,
  updateCryAssistVolume,
  type CryAssistMilkDraft,
} from "@/utils/cryassistMilkDraft";
import styles from "./index.module.less";

interface Props {
  initialDraft: CryAssistMilkDraft;
  busy: boolean;
  startDisabled: boolean;
  onCancel: () => void;
  onStart: (draft: CryAssistMilkDraft) => void;
}

const CryAssistFeedRequestModal: React.FC<Props> = ({
  initialDraft,
  busy,
  startDisabled,
  onCancel,
  onStart,
}) => {
  const t = (key: Parameters<typeof Strings.getLang>[0]) =>
    Strings.getLang(key);
  const [draft, setDraft] = useState(initialDraft);
  const powderBounds = useMemo(
    () => getCryAssistPowderBounds(draft.volumeMl),
    [draft.volumeMl]
  );

  return (
    <View className={styles.overlay}>
      <View className={styles.dialog}>
        <View className={styles.content}>
          <Text className={styles.title}>{t("cryassist_feed_title")}</Text>
          <Text className={styles.subtitle}>
            {t("cryassist_feed_subtitle")}
          </Text>

          <View className={styles.metricsPanel}>
            <View className={styles.metricRow}>
              <View className={styles.metricHeader}>
                <View className={styles.metricLabelGroup}>
                  <Image
                    src={CUSTOM_MODE_ICONS.water}
                    className={styles.metricIcon}
                  />
                  <Text className={styles.metricLabel}>
                    {t("custom_mode_water")}
                  </Text>
                </View>
                <Text className={styles.metricValue}>
                  {formatUnitValueMl(draft.volumeMl)}
                </Text>
              </View>
              <CustomModeSlider
                min={CRYASSIST_ML_MIN}
                max={CRYASSIST_ML_MAX}
                step={CRYASSIST_ML_STEP}
                value={draft.volumeMl}
                disabled={busy}
                onChange={(value) =>
                  setDraft((current) => updateCryAssistVolume(current, value))
                }
              />
            </View>

            <View className={styles.metricDivider} />

            <View className={styles.metricRow}>
              <View className={styles.metricHeader}>
                <View className={styles.metricLabelGroup}>
                  <Image
                    src={CUSTOM_MODE_ICONS.powder}
                    className={styles.metricIcon}
                  />
                  <Text className={styles.metricLabel}>
                    {t("custom_mode_powder")}
                  </Text>
                </View>
                <Text className={styles.metricValue}>
                  {formatUnitValueG(draft.powderGrams)}
                </Text>
              </View>
              <CustomModeSlider
                min={powderBounds.min}
                max={powderBounds.max}
                step={0.1}
                value={draft.powderGrams}
                disabled={busy}
                onChange={(value) =>
                  setDraft((current) => overrideCryAssistPowder(current, value))
                }
              />
            </View>

            <View className={styles.metricDivider} />

            <View className={styles.metricRow}>
              <View className={styles.metricHeader}>
                <View className={styles.metricLabelGroup}>
                  <Image
                    src={CUSTOM_MODE_ICONS.temp}
                    className={styles.metricIcon}
                  />
                  <Text className={styles.metricLabel}>
                    {t("custom_mode_temperature")}
                  </Text>
                </View>
                <Text className={styles.metricValue}>
                  {formatUnitValueCelsius(draft.temp)}
                </Text>
              </View>
              <CustomModeSlider
                min={CRYASSIST_TEMP_OPTIONS[0]}
                max={CRYASSIST_TEMP_OPTIONS[CRYASSIST_TEMP_OPTIONS.length - 1]}
                step={5}
                value={draft.temp}
                snapTo={CRYASSIST_TEMP_OPTIONS}
                disabled={busy}
                onChange={(value) =>
                  setDraft((current) => updateCryAssistTemp(current, value))
                }
              />
            </View>
          </View>
        </View>

        <View className={styles.divider} />
        <View className={styles.actions}>
          <View
            className={clsx(styles.action, busy && styles.actionDisabled)}
            onClick={busy ? undefined : onCancel}
          >
            <Text className={styles.cancelText}>{t("common_cancel")}</Text>
          </View>
          <View className={styles.actionDivider} />
          <View
            className={clsx(
              styles.action,
              (busy || startDisabled) && styles.actionDisabled
            )}
            onClick={busy || startDisabled ? undefined : () => onStart(draft)}
          >
            <Text className={styles.startText}>
              {busy ? t("cryassist_feed_starting") : t("cryassist_feed_start")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CryAssistFeedRequestModal;
