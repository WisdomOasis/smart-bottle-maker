import React from "react";
import SegmentedRadio from "@/components/SegmentedRadio";
import ControlModal from "@/components/ControlModal";

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
      title="噴霧量設定"
      enabled={mode !== "off"}
      onToggleEnabled={(next) => {
        if (!isPowerOn) return;
        onChangeMode(next ? "single" : "off");
      }}
      onClose={onClose}
    >
      <SegmentedRadio
        options={[
          { key: "off", label: "閉じる" },
          { key: "single", label: "ノズル1" },
          { key: "double", label: "ノズル2" },
        ]}
        value={mode}
        onChange={(key) => onChangeMode(key as MistMode)}
        disabled={!isPowerOn}
      />
    </ControlModal>
  );
};

export default MistModal;
