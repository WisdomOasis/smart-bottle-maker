import assert from "node:assert/strict";
import test from "node:test";
import { resolveFeedingProfileTimezone } from "../src/utils/feedingProfileTimezone.ts";

test("uses the system timezone without requesting MiniApp user info", async () => {
  let requestedUserInfo = false;

  const timezone = await resolveFeedingProfileTimezone({
    systemTimezone: "Europe/Paris",
    deviceTimezone: "Asia/Shanghai",
    requestUserInfo: async () => {
      requestedUserInfo = true;
      return { timezoneId: "America/New_York" };
    },
  });

  assert.equal(timezone, "Europe/Paris");
  assert.equal(requestedUserInfo, false);
});
