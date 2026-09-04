import { getLaunchOptionsSync } from "@ray-js/ray";

/** TEMP: 測試用。true = 每次進 Panel 都顯示 Smart Prep 引導；測完改回 false 再發版。 */
export const SMART_PREP_GUIDE_TEST_MODE = false;

/**
 * TEMP: 設 true 後重載一次 Panel，會清掉本地首次引導／snackbar 紀錄。
 * 清完請改回 false，否則每次進 Panel 都會重置。
 */
export const SMART_PREP_FORCE_RESET_STORAGE = false;

/**
 * 原始螢幕錄影（備份）。Ray Video 僅穩定支援網路 URL，IDE 改用本地逐幀預覽。
 * 路徑：/public/smartPrep/routine_guide.mp4
 */
export const SMART_PREP_GUIDE_FRAME_INTERVAL_MS = 900;
/**
 * 支援 CryAssist / 哭聲翻譯聯動的產品 PID。
 * Panel 只判斷「家庭內是否有兼容設備」即可轉導；訂閱狀態由 CryAssist 服務端驗證。
 */
export const CRY_ASSIST_PRODUCT_IDS = [
  "jf9puiqnvfsm77tx", // See Pro Baby Monitor
  "ghs8omaw0xnupe3o", // has cry_translation_switch
  "xxnwx5bcqvhl4bkv", // has cry_translation_switch
  "tpfgkgaxtfqayfcn", // has cry_translation_switch
  "90i6glitjntsddja", // CryAssist™ Audio Monitor (DP250 CryAssist Result)
] as const;

/** @deprecated 使用 CRY_ASSIST_PRODUCT_IDS */
export const SEE_PRO_PRODUCT_IDS = CRY_ASSIST_PRODUCT_IDS;

/** 哭聲翻譯相關 DP（次要備援；不同產品標識符可能略有差異） */
export const CRY_TRANSLATION_DP_CODES = [
  "crying_trans_result",
  "cry_translation_switch",
  "crying_trans_phase",
  "cry_detection_switch",
  "baby_cry_upload",
] as const;

/** 推薦場景來源標識，傳給 openRecommendSceneDetail */
export const SMART_PREP_RECOMMEND_SCENE_SOURCE = "smart_bottle_maker_panel";

/**
 * 雲端推薦場景 ID（recommendId）。
 * 可由啟動參數 smartPrepSceneId / smart_prep_scene_id 覆寫。
 */
export const SMART_PREP_RECOMMEND_SCENE_ID = "";

const pickQueryValue = (...keys: string[]): string => {
  const query = getLaunchOptionsSync()?.query ?? {};
  const matched = keys.find((key) => {
    const value = (query[key] ?? "").toString().trim();
    return Boolean(value);
  });
  return matched ? (query[matched] ?? "").toString().trim() : "";
};

const pickFirstNonEmpty = (
  ...values: Array<string | undefined | null>
): string => {
  const matched = values.find((value) =>
    Boolean((value ?? "").toString().trim())
  );
  return (matched ?? "").toString().trim();
};

export const resolveSmartPrepSceneId = (override?: string): string =>
  pickFirstNonEmpty(
    override,
    pickQueryValue("smartPrepSceneId", "smart_prep_scene_id")
  ) || SMART_PREP_RECOMMEND_SCENE_ID;
