/* eslint-disable react/require-default-props */
import React from "react";
import { View, Text } from "@ray-js/ray";
import { Slider } from "@ray-js/components";
import ControlModal from "@/components/ControlModal";
import Strings from "@/i18n";
import { formatUnitValueMl } from "@/i18n/formatters";
import { ML_MIN, ML_MAX, ML_STEP } from "@/constant/presets";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  value: number;
  onChange: (val: number) => void;
  onClose: () => void;
  disabled?: boolean;
}

const VolumeModal: React.FC<Props> = ({
  visible,
  value,
  onChange,
  onClose,
  disabled = false,
}) => {
  if (!visible) return null;

  const steps = (ML_MAX - ML_MIN) / ML_STEP;

  return (
    <ControlModal
      title={Strings.getLang("volume_modal_title")}
      onClose={onClose}
      hideToggle
    >
      <View className={styles.body}>
        <Text className={styles.value}>{formatUnitValueMl(value)}</Text>
        <Slider
          min={0}
          max={steps}
          step={1}
          value={(value - ML_MIN) / ML_STEP}
          disabled={disabled}
          onChange={(e: { value?: number }) => {
            const idx = Number(e?.value ?? 0);
            onChange(ML_MIN + idx * ML_STEP);
          }}
        />
        <View className={styles.range}>
          <Text>{formatUnitValueMl(ML_MIN)}</Text>
          <Text>{formatUnitValueMl(ML_MAX)}</Text>
        </View>
      </View>
    </ControlModal>
  );
};

export default VolumeModal;
