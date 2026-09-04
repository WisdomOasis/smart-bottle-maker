/* eslint-disable react/require-default-props */
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Image } from "@ray-js/ray";
import CustomModeSlider from "@/components/CustomModeSlider";
import { CUSTOM_MODE_ICONS } from "@/components/CustomModeSettingsPanel/icons";
import { ML_MAX, ML_MIN, ML_STEP } from "@/constant/presets";
import Strings from "@/i18n";
import {
  formatUnitValueCelsius,
  formatUnitValueG,
  formatUnitValueMlUpper,
} from "@/i18n/formatters";
import type { I18nKey } from "@/i18n/strings";
import {
  calcPowderGrams,
  clampMl,
  FORMULA_RATIO_MAX,
  FORMULA_RATIO_MIN,
  parseTemp,
  powderGramsToFormulaRatio,
  TEMP_MAX,
  TEMP_MIN,
  TEMP_SET_OPTIONS,
  TEMP_STEP,
  type TempSet,
} from "@/utils/bottleMaker";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  ml: number;
  formulaWaterMl: number;
  formulaRatio: number;
  temp: TempSet;
  onCancel: () => void;
  onStart: (draft: {
    ml: number;
    formulaWaterMl: number;
    formulaRatio: number;
    temp: TempSet;
  }) => void;
}

const FeedRequestModal: React.FC<Props> = ({
  visible,
  ml,
  formulaWaterMl,
  formulaRatio,
  temp,
  onCancel,
  onStart,
}) => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const [draftMl, setDraftMl] = useState(ml);
  const [draftWater, setDraftWater] = useState(formulaWaterMl);
  const [draftRatio, setDraftRatio] = useState(formulaRatio);
  const [draftTemp, setDraftTemp] = useState<TempSet>(temp);

  useEffect(() => {
    if (!visible) return;
    setDraftMl(clampMl(ml));
    setDraftWater(formulaWaterMl);
    setDraftRatio(
      Math.min(FORMULA_RATIO_MAX, Math.max(FORMULA_RATIO_MIN, formulaRatio))
    );
    setDraftTemp(parseTemp(temp));
  }, [visible, ml, formulaWaterMl, formulaRatio, temp]);

  const draftPowderG = useMemo(
    () => calcPowderGrams(draftMl, draftRatio, draftWater),
    [draftMl, draftRatio, draftWater]
  );

  const powderBounds = useMemo(() => {
    const safeMl = Math.max(ML_MIN, draftMl || ML_MIN);
    const min = calcPowderGrams(safeMl, FORMULA_RATIO_MIN, draftWater);
    const max = calcPowderGrams(safeMl, FORMULA_RATIO_MAX, draftWater);
    return { min, max: Math.max(min + 1, max) };
  }, [draftMl, draftWater]);

  const handlePowderChange = (grams: number) => {
    setDraftWater(clampMl(draftMl));
    setDraftRatio(powderGramsToFormulaRatio(grams));
  };

  if (!visible) return null;

  return (
    <View className={styles.overlay}>
      <View
        className={styles.sheet}
        onClick={(e: { stopPropagation?: () => void }) =>
          e?.stopPropagation?.()
        }
      >
        <View className={styles.content}>
          <Text className={styles.title}>{t("feed_request_title")}</Text>
          <Text className={styles.subtitle}>{t("feed_request_subtitle")}</Text>

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
                  {formatUnitValueMlUpper(draftMl)}
                </Text>
              </View>
              <CustomModeSlider
                min={ML_MIN}
                max={ML_MAX}
                step={ML_STEP}
                value={draftMl}
                onChange={setDraftMl}
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
                  {formatUnitValueG(Math.round(draftPowderG))}
                </Text>
              </View>
              <CustomModeSlider
                min={powderBounds.min}
                max={powderBounds.max}
                value={draftPowderG}
                onChange={handlePowderChange}
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
                  {formatUnitValueCelsius(draftTemp)}
                </Text>
              </View>
              <CustomModeSlider
                min={TEMP_MIN}
                max={TEMP_MAX}
                step={TEMP_STEP}
                value={draftTemp}
                onChange={(val) => setDraftTemp(parseTemp(val))}
                snapTo={TEMP_SET_OPTIONS}
              />
            </View>
          </View>
        </View>

        <View className={styles.divider} />
        <View className={styles.actions}>
          <View className={styles.btnRow} onClick={onCancel}>
            <Text className={styles.btnCancelText}>{t("common_cancel")}</Text>
          </View>
          <View className={styles.btnDivider} />
          <View
            className={styles.btnRow}
            onClick={() =>
              onStart({
                ml: draftMl,
                formulaWaterMl: draftWater,
                formulaRatio: draftRatio,
                temp: draftTemp,
              })
            }
          >
            <Text className={styles.btnStartText}>
              {t("feed_request_start")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedRequestModal;
