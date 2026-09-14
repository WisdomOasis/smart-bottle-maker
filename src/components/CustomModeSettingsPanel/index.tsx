/* eslint-disable react/require-default-props */
import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import Strings from "@/i18n";
import CustomModeSlider from "@/components/CustomModeSlider";
import { ML_MIN, ML_MAX, ML_STEP } from "@/constant/presets";
import {
  calcPowderGrams,
  clampMl,
  FORMULA_RATIO_MAX,
  FORMULA_RATIO_MIN,
  powderGramsToFormulaRatio,
  parseTemp,
  TEMP_MAX,
  TEMP_MIN,
  TEMP_SET_OPTIONS,
  type TempSet,
} from "@/utils/bottleMaker";
import { CUSTOM_MODE_ICONS } from "./icons";
import styles from "./index.module.less";

export interface CustomModeDraft {
  ml: number;
  formulaRatio: number;
  temp: TempSet;
}

interface Props {
  ml: number;
  formulaRatio: number;
  temp: TempSet;
  onSave: (draft: CustomModeDraft) => void;
  onClose: () => void;
  /** 僅禁用「儲存」；滑桿仍可調整預覽 */
  saveDisabled?: boolean;
}

const CustomModeSettingsPanel: React.FC<Props> = ({
  ml,
  formulaRatio,
  temp,
  onSave,
  onClose,
  saveDisabled = false,
}) => {
  const t = (key: Parameters<typeof Strings.getLang>[0]) =>
    Strings.getLang(key);

  const [draftMl, setDraftMl] = useState(ml);
  const [draftRatio, setDraftRatio] = useState(formulaRatio);
  const [draftTemp, setDraftTemp] = useState<TempSet>(temp);

  useEffect(() => {
    setDraftMl(clampMl(ml));
    setDraftRatio(
      Math.min(FORMULA_RATIO_MAX, Math.max(FORMULA_RATIO_MIN, formulaRatio))
    );
    setDraftTemp(parseTemp(temp));
  }, [ml, formulaRatio, temp]);

  const draftPowderG = useMemo(
    () => calcPowderGrams(draftMl, draftRatio),
    [draftMl, draftRatio]
  );

  const powderBounds = useMemo(() => {
    const safeMl = Math.max(ML_MIN, draftMl || ML_MIN);
    const min = calcPowderGrams(safeMl, FORMULA_RATIO_MIN);
    const max = calcPowderGrams(safeMl, FORMULA_RATIO_MAX);
    return { min, max: Math.max(min + 1, max) };
  }, [draftMl]);

  const handlePowderChange = (grams: number) => {
    setDraftRatio(powderGramsToFormulaRatio(draftMl, grams));
  };

  const handleSave = () => {
    onSave({
      ml: clampMl(draftMl),
      formulaRatio: Math.min(
        FORMULA_RATIO_MAX,
        Math.max(FORMULA_RATIO_MIN, draftRatio)
      ),
      temp: parseTemp(draftTemp),
    });
    onClose();
  };

  return (
    <View className={styles.mask}>
      <View className={styles.backdrop} onClick={onClose} />
      <View className={styles.sheet}>
        <View className={styles.intro}>
          <View className={styles.header}>
            <Text className={styles.title}>{t("custom_mode_title")}</Text>
            <View className={styles.closeBtn} onClick={onClose}>
              <Text className={styles.closeIcon}>×</Text>
            </View>
          </View>
          <Text className={styles.note}>{t("custom_mode_note")}</Text>
        </View>

        <View className={styles.cards}>
          <View className={styles.settingCard}>
            <View className={styles.settingHeader}>
              <View className={styles.settingTitleGroup}>
                <Image
                  src={CUSTOM_MODE_ICONS.water}
                  className={styles.settingIcon}
                />
                <Text className={styles.settingLabel}>
                  {t("custom_mode_water")}
                </Text>
              </View>
              <Text className={styles.settingValue}>{draftMl}ML</Text>
            </View>
            <View className={styles.sliderWrap}>
              <CustomModeSlider
                min={ML_MIN}
                max={ML_MAX}
                step={ML_STEP}
                value={draftMl}
                onChange={setDraftMl}
              />
            </View>
          </View>

          <View className={styles.settingCard}>
            <View className={styles.settingHeader}>
              <View className={styles.settingTitleGroup}>
                <Image
                  src={CUSTOM_MODE_ICONS.powder}
                  className={styles.settingIcon}
                />
                <Text className={styles.settingLabel}>
                  {t("custom_mode_powder")}
                </Text>
              </View>
              <Text className={styles.settingValue}>{draftPowderG}g</Text>
            </View>
            <View className={styles.sliderWrap}>
              <CustomModeSlider
                min={powderBounds.min}
                max={powderBounds.max}
                step={1}
                value={draftPowderG}
                onChange={handlePowderChange}
              />
            </View>
          </View>

          <View className={styles.settingCard}>
            <View className={styles.settingHeader}>
              <View className={styles.settingTitleGroup}>
                <Image
                  src={CUSTOM_MODE_ICONS.temp}
                  className={styles.settingIcon}
                />
                <Text className={styles.settingLabel}>
                  {t("custom_mode_temperature")}
                </Text>
              </View>
              <Text className={styles.settingValue}>{draftTemp}°C</Text>
            </View>
            <View className={styles.sliderWrap}>
              <CustomModeSlider
                min={TEMP_MIN}
                max={TEMP_MAX}
                step={1}
                value={draftTemp}
                snapTo={TEMP_SET_OPTIONS}
                onChange={(v) => setDraftTemp(v as TempSet)}
              />
            </View>
          </View>
        </View>

        <View className={styles.actions}>
          <View
            className={clsx(styles.btnSave, saveDisabled && styles.btnDisabled)}
            onClick={saveDisabled ? undefined : handleSave}
          >
            <Text className={styles.btnSaveText}>{t("common_save")}</Text>
          </View>
          <View className={styles.btnCancel} onClick={onClose}>
            <Text className={styles.btnCancelText}>{t("common_cancel")}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomModeSettingsPanel;
