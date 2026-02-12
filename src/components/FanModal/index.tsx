import React from "react";
import ControlModal from "@/components/ControlModal";
import StepSlider from "@/components/StepSlider";
import Strings from "@/i18n";

interface Props {
  visible: boolean;
  value: number;
  onChange: (val: number) => void;
  onClose: () => void;
  isPowerOn: boolean;
}

const FanModal: React.FC<Props> = ({
  visible,
  value,
  onChange,
  onClose,
  isPowerOn,
}) => {
  if (!visible) return null;

  return (
    <ControlModal
      title={Strings.getLang("fan_title")}
      enabled={value > 0}
      onToggleEnabled={(next) => onChange(next ? Math.max(1, value || 1) : 0)}
      onClose={onClose}
      hideToggle
    >
      <StepSlider
        min={0}
        max={5}
        value={value}
        onChange={onChange}
        disabled={!isPowerOn}
      />
    </ControlModal>
  );
};

export default FanModal;
