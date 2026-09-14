import {
  getLaunchOptionsSync,
  openCreateScene,
  openDevManualAndSmart,
  openGuideScene,
} from "@ray-js/ray";
import {
  CRY_ASSIST_PRODUCT_IDS,
  CRY_TRANSLATION_DP_CODES,
  resolveSmartPrepSceneId,
  SMART_PREP_RECOMMEND_SCENE_SOURCE,
} from "@/constant/smartPrepSetup";

type TyHome = {
  getCurrentHomeInfo?: (params: {
    success?: (info: { homeId?: string }) => void;
    fail?: () => void;
  }) => void;
  getDeviceIdList?: (params: {
    ownerId: string | number;
    success?: (res: { devIds?: string[] }) => void;
    fail?: () => void;
  }) => void;
  openRecommendSceneDetail?: (params: RecommendSceneOpenParams) => void;
  openDeviceExecutionAndAnutomation?: (params: {
    deviceId: string;
    title?: string;
    success?: () => void;
    fail?: () => void;
  }) => void;
};

type DeviceInfoLite = {
  devId?: string;
  productId?: string;
  name?: string;
  category?: string;
  schema?: Array<{ code?: string }> | string;
  dpCodes?: Record<string, unknown>;
};

type TyDevice = {
  getDeviceNumWithDpCode?: (params: {
    groupId: string;
    dpCode: string;
    success?: (res: {
      deviceNum?: number;
      /** Tuya 舊欄位拼寫錯誤，仍需相容 */
      devieNum?: number;
    }) => void;
    fail?: (err?: { errorMsg?: string; errorCode?: string | number }) => void;
  }) => void;
  getDeviceListByDevIds?: (params: {
    deviceIds: string[];
    success?: (res: { deviceInfos?: DeviceInfoLite[] }) => void;
    fail?: () => void;
  }) => void;
  openRecommendSceneDetail?: (params: RecommendSceneOpenParams) => void;
  openDeviceExecutionAndAnutomation?: (params: {
    deviceId: string;
    title?: string;
    success?: () => void;
    fail?: () => void;
  }) => void;
};

type RecommendSceneOpenParams = {
  source: string;
  sceneModel: Record<string, unknown>;
  success?: (res: { status?: boolean }) => void;
  fail?: () => void;
};

const getTy = () =>
  (globalThis as { ty?: { home?: TyHome; device?: TyDevice } }).ty;

const pickFirstNonEmpty = (
  ...values: Array<string | undefined | null>
): string => {
  const matched = values.find((value) =>
    Boolean((value ?? "").toString().trim())
  );
  return (matched ?? "").toString().trim();
};

const CRY_ASSIST_PID_SET = new Set(
  CRY_ASSIST_PRODUCT_IDS.map((id) => id.toLowerCase())
);

const DEVICE_INFO_CHUNK = 20;

/**
 * 取得「家庭」ID，用於搜尋同家庭下的 CryAssist 設備。
 * 注意：不要用單機面板的 device.groupId（那是群組/mesh，不是家庭）。
 */
export const resolveHomeGroupId = (
  preferredHomeId?: string
): Promise<string | null> => {
  const fromPreferred = pickFirstNonEmpty(preferredHomeId);
  if (fromPreferred) return Promise.resolve(fromPreferred);

  const query = getLaunchOptionsSync()?.query ?? {};
  const fromQuery = pickFirstNonEmpty(
    query.homeId as string | undefined,
    query.home_id as string | undefined,
    query.groupId as string | undefined
  );
  if (fromQuery) return Promise.resolve(fromQuery);

  return new Promise((resolve) => {
    const fn = getTy()?.home?.getCurrentHomeInfo;
    if (!fn) {
      resolve(null);
      return;
    }
    fn({
      success: (info) => resolve(pickFirstNonEmpty(info?.homeId) || null),
      fail: () => resolve(null),
    });
  });
};

const parseDeviceCount = (res?: {
  deviceNum?: number;
  devieNum?: number;
}): number => {
  const raw = res?.deviceNum ?? res?.devieNum ?? 0;
  const num = Number(raw);
  return Number.isFinite(num) ? Math.max(0, num) : 0;
};

const countDevicesWithDp = (groupId: string, dpCode: string): Promise<number> =>
  new Promise((resolve) => {
    const fn = getTy()?.device?.getDeviceNumWithDpCode;
    if (!fn) {
      resolve(0);
      return;
    }
    fn({
      groupId,
      dpCode,
      success: (res) => resolve(parseDeviceCount(res)),
      fail: () => resolve(0),
    });
  });

const getHomeDeviceIds = (homeId: string): Promise<string[]> =>
  new Promise((resolve) => {
    const fn = getTy()?.home?.getDeviceIdList;
    if (!fn) {
      resolve([]);
      return;
    }
    const ownerIdNum = Number(homeId);
    fn({
      ownerId: Number.isFinite(ownerIdNum) ? ownerIdNum : homeId,
      success: (res) => {
        const ids = Array.isArray(res?.devIds)
          ? res.devIds.map((id) => String(id).trim()).filter(Boolean)
          : [];
        resolve(ids);
      },
      fail: () => resolve([]),
    });
  });

const getDeviceInfosByIds = (deviceIds: string[]): Promise<DeviceInfoLite[]> =>
  new Promise((resolve) => {
    const fn = getTy()?.device?.getDeviceListByDevIds;
    if (!fn || deviceIds.length === 0) {
      resolve([]);
      return;
    }
    fn({
      deviceIds,
      success: (res) =>
        resolve(Array.isArray(res?.deviceInfos) ? res.deviceInfos : []),
      fail: () => resolve([]),
    });
  });

const chunkArray = <T>(items: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
};

const deviceHasCryDp = (info: DeviceInfoLite): boolean => {
  const { dpCodes } = info;
  if (dpCodes && typeof dpCodes === "object") {
    return CRY_TRANSLATION_DP_CODES.some((code) => code in dpCodes);
  }
  if (Array.isArray(info.schema)) {
    const codes = new Set(
      info.schema.map((item) => (item?.code ?? "").toString())
    );
    return CRY_TRANSLATION_DP_CODES.some((code) => codes.has(code));
  }
  if (typeof info.schema === "string" && info.schema) {
    return CRY_TRANSLATION_DP_CODES.some((code) => info.schema!.includes(code));
  }
  return false;
};

const isCryAssistDevice = (info: DeviceInfoLite): boolean => {
  const pid = (info.productId ?? "").toString().trim().toLowerCase();
  if (pid && CRY_ASSIST_PID_SET.has(pid)) return true;

  const name = (info.name ?? "").toString().toLowerCase();
  if (
    name.includes("see pro") ||
    name.includes("seepro") ||
    name.includes("cryassist") ||
    name.includes("cry assist")
  ) {
    return true;
  }

  return deviceHasCryDp(info);
};

export type CryDeviceSearchResult = {
  homeId: string | null;
  count: number;
  method: "productId" | "dpCode" | "none";
  homeDeviceTotal: number;
  matchedProductIds: string[];
  /** 家庭中匹配到的 CryAssist 設備 ID（供建立場景時綁定 trigger） */
  matchedDeviceIds: string[];
  perDp: Record<string, number>;
  apiAvailable: boolean;
};

/**
 * 搜尋家庭中 CryAssist / See Pro 設備。
 * 優先：家庭設備列表比對 productId（較可靠）
 * 備援：getDeviceNumWithDpCode（對部分家庭可能無效）
 */
export const searchCryTranslationDevices = async (
  preferredHomeId?: string
): Promise<CryDeviceSearchResult> => {
  const homeId = await resolveHomeGroupId(preferredHomeId);
  const ty = getTy();
  const listApiAvailable =
    !!ty?.home?.getDeviceIdList && !!ty?.device?.getDeviceListByDevIds;
  const dpApiAvailable = !!ty?.device?.getDeviceNumWithDpCode;

  if (!homeId) {
    return {
      homeId: null,
      count: 0,
      method: "none",
      homeDeviceTotal: 0,
      matchedProductIds: [],
      matchedDeviceIds: [],
      perDp: {},
      apiAvailable: listApiAvailable || dpApiAvailable,
    };
  }

  // 1) 更保險：列家庭設備 → 比 PID / 名稱 / schema
  if (listApiAvailable) {
    const deviceIds = await getHomeDeviceIds(homeId);
    const chunks = chunkArray(deviceIds, DEVICE_INFO_CHUNK);
    const infos = (
      await Promise.all(chunks.map((chunk) => getDeviceInfosByIds(chunk)))
    ).flat();

    const matched = infos.filter(isCryAssistDevice);
    if (matched.length > 0 || deviceIds.length > 0) {
      // 若列表 API 可用且家庭有設備，以列表結果為準（即使 matched=0）
      return {
        homeId,
        count: matched.length,
        method: "productId",
        homeDeviceTotal: deviceIds.length,
        matchedProductIds: matched
          .map((d) => (d.productId ?? "").toString())
          .filter(Boolean),
        matchedDeviceIds: matched
          .map((d) => (d.devId ?? "").toString())
          .filter(Boolean),
        perDp: {},
        apiAvailable: true,
      };
    }
  }

  // 2) 備援：依 DP 計數（群組語意，對家庭常回 0）
  if (dpApiAvailable) {
    const perDp: Record<string, number> = {};
    await Promise.all(
      CRY_TRANSLATION_DP_CODES.map(async (dpCode) => {
        perDp[dpCode] = await countDevicesWithDp(homeId, dpCode);
      })
    );
    const count = Math.max(0, ...Object.values(perDp), 0);
    return {
      homeId,
      count,
      method: "dpCode",
      homeDeviceTotal: 0,
      matchedProductIds: [],
      matchedDeviceIds: [],
      perDp,
      apiAvailable: true,
    };
  }

  return {
    homeId,
    count: 0,
    method: "none",
    homeDeviceTotal: 0,
    matchedProductIds: [],
    matchedDeviceIds: [],
    perDp: {},
    apiAvailable: false,
  };
};

/** 搜尋家庭中支援哭聲翻譯的設備數量 */
export const countCryTranslationDevices = async (
  groupId: string
): Promise<number> => {
  const result = await searchCryTranslationDevices(groupId);
  return result.count;
};

export type SmartPrepRoutineOpenPath =
  | "recommendScene"
  | "guideScene"
  | "createScene"
  | "devManualAndSmart"
  | "deviceAutomation"
  | "none";

/** Smart Prep 場景轉導結果（含實際走到的路徑，方便測試診斷） */
export type OpenRecommendSceneResult = {
  ok: boolean;
  path: SmartPrepRoutineOpenPath;
  sceneId: string;
  reason?: string;
};

const logRoutineOpenFailure = (
  path: SmartPrepRoutineOpenPath,
  err: unknown
): void => {
  console.warn(`[SmartPrep] open routine via ${path} failed`, err);
};

const tryRayNativeRoute = async (
  path: Exclude<
    SmartPrepRoutineOpenPath,
    "recommendScene" | "deviceAutomation" | "none"
  >,
  open: () => Promise<void>,
  sceneId = ""
): Promise<OpenRecommendSceneResult> => {
  try {
    await open();
    return { ok: true, path, sceneId };
  } catch (err) {
    logRoutineOpenFailure(path, err);
    return { ok: false, path, sceneId, reason: `${path}_fail` };
  }
};

const tryOpenRecommendSceneDetail = (
  sceneId: string
): Promise<OpenRecommendSceneResult> =>
  new Promise((resolve) => {
    const openScene =
      getTy()?.device?.openRecommendSceneDetail ??
      getTy()?.home?.openRecommendSceneDetail;
    if (!openScene) {
      resolve({
        ok: false,
        path: "recommendScene",
        sceneId,
        reason: "no_recommend_api",
      });
      return;
    }
    openScene({
      source: SMART_PREP_RECOMMEND_SCENE_SOURCE,
      sceneModel: {
        sceneId,
        recommendId: sceneId,
      },
      success: (res) =>
        resolve({
          ok: res?.status === true,
          path: "recommendScene",
          sceneId,
          reason: res?.status === true ? undefined : "status_false",
        }),
      fail: () =>
        resolve({
          ok: false,
          path: "recommendScene",
          sceneId,
          reason: "api_fail",
        }),
    });
  });

const tryOpenDeviceAutomationPage = (
  deviceId: string
): Promise<OpenRecommendSceneResult> =>
  new Promise((resolve) => {
    const openFn =
      getTy()?.device?.openDeviceExecutionAndAnutomation ??
      getTy()?.home?.openDeviceExecutionAndAnutomation;
    if (!openFn) {
      resolve({
        ok: false,
        path: "deviceAutomation",
        sceneId: "",
        reason: "no_automation_api",
      });
      return;
    }
    openFn({
      deviceId,
      title: "Automation",
      success: () =>
        resolve({ ok: true, path: "deviceAutomation", sceneId: "" }),
      fail: () =>
        resolve({
          ok: false,
          path: "deviceAutomation",
          sceneId: "",
          reason: "automation_fail",
        }),
    });
  });

/**
 * 開啟 Smart Prep Routine 設定流程。
 *
 * 業界／Tuya Ray 建議順序：
 * 1. 雲端推薦模板（需 recommendId）
 * 2. App 場景引導頁 openGuideScene({ action: "add" }) — motorized-stroller 實證
 * 3. 空白建立場景（綁 CryAssist 作 trigger）
 * 4. 設備「一鍵執行 + 自動化」入口
 * 5. 舊版 ty 設備 Automation 頁（最後備援）
 */
export const openSmartPrepRoutineSetup = async (options: {
  sceneId?: string;
  /** 本 Panel 設備（Bottle Maker） */
  deviceId?: string;
  /** CryAssist / See Pro 設備，建立場景時作為 trigger */
  cryAssistDeviceId?: string;
}): Promise<OpenRecommendSceneResult> => {
  const sceneId = resolveSmartPrepSceneId(options.sceneId);
  const createSceneDevId =
    options.cryAssistDeviceId?.trim() || options.deviceId?.trim() || "";

  if (sceneId) {
    const recommend = await tryOpenRecommendSceneDetail(sceneId);
    if (recommend.ok) return recommend;
  }

  const guide = await tryRayNativeRoute("guideScene", () =>
    openGuideScene({ action: "add" })
  );
  if (guide.ok) return guide;

  if (createSceneDevId) {
    const create = await tryRayNativeRoute("createScene", () =>
      openCreateScene({ devId: createSceneDevId })
    );
    if (create.ok) return create;
  }

  if (options.deviceId) {
    const manual = await tryRayNativeRoute("devManualAndSmart", () =>
      openDevManualAndSmart({ devId: options.deviceId })
    );
    if (manual.ok) return manual;

    const automation = await tryOpenDeviceAutomationPage(options.deviceId);
    if (automation.ok) return automation;
  }

  return {
    ok: false,
    path: "none",
    sceneId: sceneId || "",
    reason: sceneId ? "all_fallbacks_failed" : "missing_scene_id_and_fallback",
  };
};

/** @deprecated 使用 openSmartPrepRoutineSetup */
export const addSmartPrepRecommendScene = openSmartPrepRoutineSetup;
