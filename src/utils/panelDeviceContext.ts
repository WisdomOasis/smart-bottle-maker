type LaunchQuery = {
  deviceId?: unknown;
};

const nonEmptyString = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

/** Uses the reactive panel state first, then the device that opened this panel. */
export const resolvePanelDeviceId = (
  devId: unknown,
  launchQuery?: LaunchQuery
): string => nonEmptyString(devId) || nonEmptyString(launchQuery?.deviceId);

export const isPanelDeviceContextReady = (
  homeId: unknown,
  deviceId: unknown
): boolean => Boolean(nonEmptyString(homeId) && nonEmptyString(deviceId));
