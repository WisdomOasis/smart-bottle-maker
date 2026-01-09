import React from "react";
import ControlModal from "@/components/ControlModal";
import StepSlider from "@/components/StepSlider";

interface Props {
  visible: boolean;
  enabled: boolean;
  value: number;
  onToggleEnabled: (next: boolean) => void;
  onChange: (val: number) => void;
  onClose: () => void;
}

const FanModal: React.FC<Props> = ({
  visible,
  enabled,
  value,
  onToggleEnabled,
  onChange,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <ControlModal
      title="風量設定"
      enabled={enabled}
      onToggleEnabled={onToggleEnabled}
      onClose={onClose}
    >
      <StepSlider
        min={1}
        max={5}
        value={value}
        onChange={onChange}
        disabled={!enabled}
      />
    </ControlModal>
  );
};

export default FanModal;
