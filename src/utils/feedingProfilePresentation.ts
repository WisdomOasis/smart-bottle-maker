import type { FeedingProfileSelection } from "@/constant/feedingRecordStorage";

type ContextIdentity = { homeID: string; childID: number } | null;

export const resolveFeedingProfileAvatar = ({
  isOnline,
  homeId,
  context,
  selection,
}: {
  isOnline: boolean;
  homeId: string;
  context: ContextIdentity;
  selection: FeedingProfileSelection | null;
}) => {
  if (!homeId || !selection || selection.homeId !== homeId) {
    return null;
  }
  if (
    isOnline &&
    (!context ||
      context.homeID !== homeId ||
      selection.childId !== context.childID)
  ) {
    return null;
  }
  return selection.imageUrl || null;
};

export const shouldStartFeedingProfileCheck = ({
  isOnline,
  startedForOnlinePeriod,
}: {
  isOnline: boolean;
  startedForOnlinePeriod: boolean;
}) => isOnline && !startedForOnlinePeriod;
