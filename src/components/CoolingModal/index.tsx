import React from "react";
import ControlModal from "@/components/ControlModal";
import SegmentedRadio from "@/components/SegmentedRadio";

type CoolingMode = 0 | 1 | 2;

interface Props {
  visible: boolean;
  mode: CoolingMode;
  onChangeMode: (mode: CoolingMode) => void;
  onClose: () => void;
}

const CoolingModal: React.FC<Props> = ({
  visible,
  mode,
  onChangeMode,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <ControlModal
      title="冷房モード"
      enabled={mode !== 0}
      onToggleEnabled={(next) => onChangeMode(next ? 1 : 0)}
      onClose={onClose}
    >
      <SegmentedRadio
        options={[
          { key: "0", label: "閉じる" },
          { key: "1", label: "断続" },
          { key: "2", label: "持続" },
        ]}
        value={String(mode)}
        onChange={(key) => onChangeMode(Number(key) as CoolingMode)}
        disabled={false}
      />
    </ControlModal>
  );
};

export default CoolingModal;
