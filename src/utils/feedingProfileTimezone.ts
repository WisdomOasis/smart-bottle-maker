type MiniAppUserInfo = {
  timezoneId?: string;
  timeZoneId?: string;
  [key: string]: unknown;
};

const readTimezone = (value: unknown) =>
  typeof value === "string" && value.trim() ? value.trim() : "";

export const resolveFeedingProfileTimezone = async ({
  systemTimezone,
  deviceTimezone,
  requestUserInfo,
}: {
  systemTimezone: unknown;
  deviceTimezone: unknown;
  requestUserInfo: () => Promise<MiniAppUserInfo>;
}) => {
  const systemTimezoneId = readTimezone(systemTimezone);
  if (systemTimezoneId) return systemTimezoneId;

  try {
    const user = await requestUserInfo();
    const userTimezoneId = readTimezone(
      user.timezoneId || user.timeZoneId || Reflect.get(user, "time_zone_id")
    );
    if (userTimezoneId) return userTimezoneId;
  } catch {
    // The device timezone remains a valid fallback when BizKit is unavailable.
  }

  return readTimezone(deviceTimezone);
};
