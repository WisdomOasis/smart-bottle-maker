import React from "react";
import ControlModal from "@/components/ControlModal";
import SegmentedRadio from "@/components/SegmentedRadio";
import Strings from "@/i18n";

type CoolingMode = 0 | 1 | 2;

interface Props {
  visible: boolean;
  mode: CoolingMode;
  onChangeMode: (mode: CoolingMode) => void;
  onClose: () => void;
  isPowerOn: boolean;
}

const CoolingModal: React.FC<Props> = ({
  visible,
  mode,
  onChangeMode,
  onClose,
  isPowerOn,
}) => {
  if (!visible) return null;

  return (
    <ControlModal
      title={Strings.getLang("cooling_title")}
      enabled={mode !== 0}
      onToggleEnabled={(next) => onChangeMode(next ? 1 : 0)}
      onClose={onClose}
    >
      <SegmentedRadio
        options={[
          { key: "0", label: Strings.getLang("common_close") },
          { key: "1", label: Strings.getLang("cooling_mode_intermittent") },
          { key: "2", label: Strings.getLang("cooling_mode_continuous") },
        ]}
        value={String(mode)}
        onChange={(key) => onChangeMode(Number(key) as CoolingMode)}
        disabled={!isPowerOn}
      />
    </ControlModal>
  );
};

export default CoolingModal;
