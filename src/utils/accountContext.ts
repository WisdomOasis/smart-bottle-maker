import { getLaunchOptionsSync } from "@ray-js/ray";
import { resolveHomeGroupId } from "@/utils/smartPrepSetup";

type TyUserInfo = {
  uid?: string;
  userId?: string;
  nickName?: string;
  avatarUrl?: string;
  [key: string]: unknown;
};

type TyGlobal = {
  getUserInfo?: (params: {
    success?: (info: TyUserInfo) => void;
    fail?: () => void;
    failure?: () => void;
  }) => void;
};

const getTy = () => (globalThis as { ty?: TyGlobal }).ty;

const pickFirstNonEmpty = (
  ...values: Array<string | undefined | null>
): string => {
  const matched = values.find((value) =>
    Boolean((value ?? "").toString().trim())
  );
  return (matched ?? "").toString().trim();
};

const readUidFromLaunchQuery = (): string => {
  const query = getLaunchOptionsSync()?.query ?? {};
  return pickFirstNonEmpty(
    query.uid as string | undefined,
    query.userId as string | undefined,
    query.user_id as string | undefined
  );
};

const readUidFromUserInfo = (): Promise<string> =>
  new Promise((resolve) => {
    const fn = getTy()?.getUserInfo;
    if (!fn) {
      resolve("");
      return;
    }
    fn({
      success: (info) =>
        resolve(
          pickFirstNonEmpty(
            info?.uid,
            info?.userId,
            typeof info?.id === "string" ? (info.id as string) : ""
          )
        ),
      fail: () => resolve(""),
      failure: () => resolve(""),
    });
  });

export type AccountContext = {
  /** 塗鴉用戶 ID（user_id / uid） */
  userId: string | null;
  /** 家庭 ID（home_id；內部也常叫 owner_id） */
  homeId: string | null;
  /** homeId 別名，方便韌體對齊命名 */
  ownerId: string | null;
};

/**
 * 取得韌體／後端可能需要的 userId + homeId。
 * - homeId：ty.home.getCurrentHomeInfo / 啟動參數（較穩定）
 * - userId：啟動參數或 getUserInfo 額外欄位（官方文件未保證一定有 uid）
 */
export const resolveAccountContext = async (): Promise<AccountContext> => {
  const [homeId, uidFromUser] = await Promise.all([
    resolveHomeGroupId(),
    readUidFromUserInfo(),
  ]);
  const userId =
    pickFirstNonEmpty(readUidFromLaunchQuery(), uidFromUser) || null;

  return {
    userId,
    homeId,
    ownerId: homeId,
  };
};
