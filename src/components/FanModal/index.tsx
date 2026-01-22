import React from "react";
import ControlModal from "@/components/ControlModal";
import StepSlider from "@/components/StepSlider";

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
      title="風量設定"
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
