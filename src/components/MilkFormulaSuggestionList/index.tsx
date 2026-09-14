import React from "react";
import clsx from "clsx";
import { View, Text } from "@ray-js/ray";
import Strings from "@/i18n";
import type { MilkFormulaSearchSuggestion } from "@/utils/milkFormulaSuggestions";
import type { MilkFormulaSearchItem } from "@/utils/milkFormulaSearch";
import styles from "./index.module.less";

interface Props {
  suggestions: MilkFormulaSearchSuggestion[];
  onSelect: (item: MilkFormulaSearchItem) => void;
}

const MilkFormulaSuggestionList: React.FC<Props> = ({
  suggestions,
  onSelect,
}) => (
  <View className={styles.suggestionList}>
    {suggestions.map((item, index) => (
      <View
        key={item.milkId}
        className={clsx(
          styles.suggestionItem,
          index === 0 && styles.suggestionItemFirst
        )}
        onClick={() => onSelect(item)}
      >
        <Text className={styles.suggestionText}>{item.label}</Text>
        {item.saved ? (
          <Text className={styles.savedBadge} style={{ color: "#868EAA" }}>
            {Strings.getLang("formula_saved_badge")}
          </Text>
        ) : null}
      </View>
    ))}
  </View>
);

export default MilkFormulaSuggestionList;
