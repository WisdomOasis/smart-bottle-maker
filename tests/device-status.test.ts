import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import {
  formatConnectionStatus,
  resolveDeviceOnline,
} from "../src/utils/deviceStatus.ts";

test("uses the platform online state after wifi_status was removed", () => {
  assert.equal(resolveDeviceOnline(true), true);
  assert.equal(resolveDeviceOnline(false), false);
  assert.equal(resolveDeviceOnline(null), false);
});

test("formats online and offline labels without a wifi status argument", () => {
  const labels = {
    online: "Online",
    offline: "Offline",
    connecting: "Connecting",
  };

  assert.equal(formatConnectionStatus(true, labels), "Online");
  assert.equal(formatConnectionStatus(false, labels), "Offline");
});

test("home connectivity call sites use the current device status contract", () => {
  const hook = readFileSync(
    new URL("../src/hooks/useDeviceConnectivity.ts", import.meta.url),
    "utf8"
  );
  const home = readFileSync(
    new URL("../src/pages/home/index.tsx", import.meta.url),
    "utf8"
  );

  assert.match(hook, /resolveDeviceOnline\(platformOnline\)/);
  assert.doesNotMatch(hook, /wifiStatus/);
  assert.match(home, /formatConnectionStatus\(isOnline,\s*\{/);
  assert.doesNotMatch(home, /\[isOnline, wifiStatus, t\]/);
});
