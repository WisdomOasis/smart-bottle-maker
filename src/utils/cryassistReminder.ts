const HUNGRY_PENDING = "hungry_pending";

/**
 * DP 117 is reserved for CryAssist scene requests. Other device notifications
 * must not affect the bottle-preparation confirmation.
 */
export const shouldOpenCryAssistReminder = (
  sceneFeedRequest: unknown,
  shownThisSession: boolean
): boolean => !shownThisSession && sceneFeedRequest === HUNGRY_PENDING;

export const shouldResetCryAssistReminder = (
  sceneFeedRequest: unknown
): boolean => sceneFeedRequest !== HUNGRY_PENDING;
