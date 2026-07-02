/** Background On — 主題綠（啟用/數值強調） */
export const BACKGROUND_ON = "#55A074";

/** Background Off — 次要文字/標籤 */
export const BACKGROUND_OFF = "#868EAA";

/** Deep Blue — 主操作、列表標題、Chevron */
export const DEEP_BLUE = "#4D7294";

/** Black — 面板標題、數值正文 */
export const BLACK = "#2D365F";

/** Body — 與 Black 同色，面板數值強調 */
export const BODY = BLACK;

/** List Item Chevron（與 Deep Blue 同色） */
export const LIST_ITEM_CHEVRON = DEEP_BLUE;

/** @deprecated 請改用 BACKGROUND_ON */
export const BRAND_COLOR = BACKGROUND_ON;

/** 儀表主數字字型（需將字體檔置於 src/res/fonts/） */
export const FONT_GAUGE = "D-DIN-PRO";

/** 儀表半圓軌道（設計稿） */
export const GAUGE_ARC = {
  width: 263.99871826171875,
  height: 131.99935913085938,
  stroke: 6.77,
  trackColor: "#E5F2E7",
  top: 4,
  knob: {
    size: 20,
    border: 3,
    borderColor: "#FFFFFF",
    shadow: "0px 2.1px 8.38px 0px #55A07466",
  },
} as const;
