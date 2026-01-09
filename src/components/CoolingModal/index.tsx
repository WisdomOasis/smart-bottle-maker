import React from "react";
import ControlModal from "@/components/ControlModal";
import SegmentedRadio from "@/components/SegmentedRadio";

type CoolingMode = 1 | 2;

interface Props {
  visible: boolean;
  enabled: boolean;
  mode: CoolingMode;
  onToggleEnabled: (next: boolean) => void;
  onChangeMode: (mode: CoolingMode) => void;
  onClose: () => void;
}

const CoolingModal: React.FC<Props> = ({
  visible,
  enabled,
  mode,
  onToggleEnabled,
  onChangeMode,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <ControlModal
      title="冷房モード"
      enabled={enabled}
      onToggleEnabled={onToggleEnabled}
      onClose={onClose}
    >
      <SegmentedRadio
        options={[
          { key: "1", label: "断続" },
          { key: "2", label: "持続" },
        ]}
        value={String(mode)}
        onChange={(key) => onChangeMode(Number(key) as CoolingMode)}
        disabled={!enabled}
      />
    </ControlModal>
  );
};

export default CoolingModal;
