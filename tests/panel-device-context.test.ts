import test from "node:test";
import assert from "node:assert/strict";

import {
  isPanelDeviceContextReady,
  resolvePanelDeviceId,
} from "../src/utils/panelDeviceContext.ts";

test("uses the reactive panel device ID when it is available", () => {
  assert.equal(
    resolvePanelDeviceId("  bf837f8b7da46a53724wev  ", {
      deviceId: "launch-device-id",
    }),
    "bf837f8b7da46a53724wev"
  );
});

test("falls back to the launched panel device ID before device state hydrates", () => {
  assert.equal(
    resolvePanelDeviceId(undefined, { deviceId: "bf837f8b7da46a53724wev" }),
    "bf837f8b7da46a53724wev"
  );
});

test("does not treat an empty device or home ID as ready", () => {
  assert.equal(isPanelDeviceContextReady("238738635", ""), false);
  assert.equal(isPanelDeviceContextReady("", "bf837f8b7da46a53724wev"), false);
  assert.equal(
    isPanelDeviceContextReady("238738635", "bf837f8b7da46a53724wev"),
    true
  );
});
