import React from "react";
import SegmentedRadio from "@/components/SegmentedRadio";
import ControlModal from "@/components/ControlModal";
import Strings from "@/i18n";

type MistMode = "off" | "single" | "double";

interface Props {
  visible: boolean;
  mode: MistMode;
  onChangeMode: (mode: MistMode) => void;
  onClose: () => void;
  isPowerOn: boolean;
}

const MistModal: React.FC<Props> = ({
  visible,
  mode,
  onChangeMode,
  onClose,
  isPowerOn,
}) => {
  if (!visible) return null;

  return (
    <ControlModal
      title={Strings.getLang("mist_title")}
      enabled={mode !== "off"}
      onToggleEnabled={(next) => {
        if (!isPowerOn) return;
        onChangeMode(next ? "single" : "off");
      }}
      onClose={onClose}
    >
      <SegmentedRadio
        options={[
          { key: "off", label: Strings.getLang("common_close") },
          { key: "single", label: Strings.getLang("mist_nozzle_1") },
          { key: "double", label: Strings.getLang("mist_nozzle_2") },
        ]}
        value={mode}
        onChange={(key) => onChangeMode(key as MistMode)}
        disabled={!isPowerOn}
      />
    </ControlModal>
  );
};

export default MistModal;
