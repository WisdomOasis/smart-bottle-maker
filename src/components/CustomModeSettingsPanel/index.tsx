/* eslint-disable react/require-default-props */
import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { View, Text, Image } from "@ray-js/ray";
import Strings from "@/i18n";
import CustomModeSlider from "@/components/CustomModeSlider";
import {
  ML_MIN,
  ML_MAX,
  ML_STEP,
  OZ_MIN,
  OZ_MAX,
  OZ_STEP,
} from "@/constant/presets";
import {
  brewPowderGramsToFormulaRatio,
  calcBrewPowderGrams,
  clampMl,
  clampOz,
  FORMULA_RATIO_MAX,
  FORMULA_RATIO_MIN,
  getBrewPowderBounds,
  mlToOz,
  ozToMl,
  parseTemp,
  parseUnit,
  roundToTenth,
  SCOOP_POWDER_STEP_G,
  TEMP_MAX,
  TEMP_MIN,
  TEMP_SET_OPTIONS,
  type TempSet,
  type UnitSet,
} from "@/utils/bottleMaker";
import { CUSTOM_MODE_ICONS } from "./icons";
import styles from "./index.module.less";

export interface CustomModeDraft {
  ml: number;
  unit: UnitSet;
  formulaRatio: number;
  temp: TempSet;
}

interface Props {
  ml: number;
  unit: UnitSet;
  formulaRatio: number;
  /** 每勺水量 formula_water，用于 PRD 单次粉量换算 */
  formulaWater: number;
  temp: TempSet;
  onSave: (draft: CustomModeDraft) => void;
  onClose: () => void;
  /** 僅禁用「儲存」；滑桿仍可調整預覽 */
  saveDisabled?: boolean;
}

const formatPowderLabel = (grams: number): string => {
  const rounded = roundToTenth(grams);
  return Number.isInteger(rounded) ? `${rounded}g` : `${rounded.toFixed(1)}g`;
};

const CustomModeSettingsPanel: React.FC<Props> = ({
  ml,
  unit,
  formulaRatio,
  formulaWater,
  temp,
  onSave,
  onClose,
  saveDisabled = false,
}) => {
  const t = (key: Parameters<typeof Strings.getLang>[0]) =>
    Strings.getLang(key);

  const [draftMl, setDraftMl] = useState(ml);
  const [draftUnit, setDraftUnit] = useState<UnitSet>(unit);
  const [draftRatio, setDraftRatio] = useState(formulaRatio);
  const [draftTemp, setDraftTemp] = useState<TempSet>(temp);

  useEffect(() => {
    setDraftMl(clampMl(ml));
    setDraftUnit(parseUnit(unit));
    setDraftRatio(
      Math.min(FORMULA_RATIO_MAX, Math.max(FORMULA_RATIO_MIN, formulaRatio))
    );
    setDraftTemp(parseTemp(temp));
  }, [ml, unit, formulaRatio, temp]);

  const isOz = draftUnit === "oz";
  const displayVolume = isOz ? clampOz(mlToOz(draftMl)) : draftMl;
  const volumeMin = isOz ? OZ_MIN : ML_MIN;
  const volumeMax = isOz ? OZ_MAX : ML_MAX;
  const volumeStep = isOz ? OZ_STEP : ML_STEP;

  // 水量变时保持每勺粉量（draftRatio）不变 → 单次粉量同比例变化
  const draftPowderG = useMemo(
    () => calcBrewPowderGrams(draftMl, formulaWater, draftRatio),
    [draftMl, draftRatio, formulaWater]
  );

  const powderBounds = useMemo(
    () => getBrewPowderBounds(draftMl, formulaWater),
    [draftMl, formulaWater]
  );

  const handleVolumeChange = (raw: number) => {
    if (isOz) {
      setDraftMl(clampMl(ozToMl(clampOz(raw))));
      return;
    }
    setDraftMl(clampMl(raw));
  };

  const handleUnitChange = (next: UnitSet) => {
    if (next === draftUnit) return;
    setDraftUnit(next);
  };

  const handlePowderChange = (grams: number) => {
    setDraftRatio(brewPowderGramsToFormulaRatio(draftMl, formulaWater, grams));
  };

  const handleSave = () => {
    onSave({
      ml: clampMl(draftMl),
      unit: draftUnit,
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
          <Text className={styles.note}>
            {t("custom_mode_unit_conversion")}
          </Text>
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
              <View className={styles.waterHeaderEnd}>
                <Text className={styles.settingValue}>
                  {isOz ? `${displayVolume} oz` : `${displayVolume}ML`}
                </Text>
                <View className={styles.unitToggle}>
                  <View
                    className={clsx(
                      styles.unitOption,
                      !isOz && styles.unitOptionActive
                    )}
                    onClick={() => handleUnitChange("mL")}
                  >
                    <Text
                      className={clsx(
                        styles.unitOptionText,
                        !isOz && styles.unitOptionTextActive
                      )}
                    >
                      {t("unit_ml")}
                    </Text>
                  </View>
                  <View
                    className={clsx(
                      styles.unitOption,
                      isOz && styles.unitOptionActive
                    )}
                    onClick={() => handleUnitChange("oz")}
                  >
                    <Text
                      className={clsx(
                        styles.unitOptionText,
                        isOz && styles.unitOptionTextActive
                      )}
                    >
                      {t("unit_oz")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className={styles.sliderWrap}>
              <CustomModeSlider
                min={volumeMin}
                max={volumeMax}
                step={volumeStep}
                value={displayVolume}
                onChange={handleVolumeChange}
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
              <Text className={styles.settingValue}>
                {formatPowderLabel(draftPowderG)}
              </Text>
            </View>
            <View className={styles.sliderWrap}>
              <CustomModeSlider
                min={powderBounds.min}
                max={powderBounds.max}
                step={SCOOP_POWDER_STEP_G}
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
                step={5}
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
