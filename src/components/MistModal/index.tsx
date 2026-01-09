import React from "react";
import { View } from "@ray-js/ray";
import ControlModal from "@/components/ControlModal";
import SegmentedRadio from "@/components/SegmentedRadio";

type MistMode = "single" | "double";

interface Props {
  visible: boolean;
  enabled: boolean;
  mode: MistMode;
  onToggleEnabled: (next: boolean) => void;
  onChangeMode: (mode: MistMode) => void;
  onClose: () => void;
}

const MistModal: React.FC<Props> = ({
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
      title="噴霧量設定"
      enabled={enabled}
      onToggleEnabled={onToggleEnabled}
      onClose={onClose}
    >
      <View>
        <SegmentedRadio
          options={[
            { key: "single", label: "ノズル1" },
            { key: "double", label: "ノズル2" },
          ]}
          value={mode}
          onChange={(key) => onChangeMode(key as MistMode)}
          disabled={!enabled}
        />
      </View>
    </ControlModal>
  );
};

export default MistModal;
