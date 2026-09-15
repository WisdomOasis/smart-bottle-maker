import test from "node:test";
import assert from "node:assert/strict";

import {
  getEuropeanCloudFeatureStatusText,
  resolveEuropeanCloudAvailability,
  type GetAccountUserInfo,
} from "../src/utils/europeanCloudAvailability.ts";

const getUserInfoWith =
  (regionCode?: string): GetAccountUserInfo =>
  ({ success }) =>
    success?.({ regionCode });

test("enables European cloud features only for an EU account", async () => {
  assert.equal(
    await resolveEuropeanCloudAvailability(getUserInfoWith("EU"), 50),
    "eu"
  );
  assert.equal(
    await resolveEuropeanCloudAvailability(getUserInfoWith(" eu "), 50),
    "eu"
  );
  assert.equal(
    await resolveEuropeanCloudAvailability(getUserInfoWith("AY"), 50),
    "unsupported"
  );
  assert.equal(
    await resolveEuropeanCloudAvailability(getUserInfoWith("AZ"), 50),
    "unsupported"
  );
});

test("treats missing account context and native failures as unavailable", async () => {
  assert.equal(
    await resolveEuropeanCloudAvailability(getUserInfoWith(), 50),
    "unavailable"
  );
  assert.equal(
    await resolveEuropeanCloudAvailability(({ failure }) => failure?.({}), 50),
    "unavailable"
  );
  assert.equal(
    await resolveEuropeanCloudAvailability(undefined, 50),
    "unavailable"
  );
});

test("times out when the native account lookup never responds", async () => {
  const stalled: GetAccountUserInfo = () => undefined;
  const startedAt = Date.now();

  assert.equal(
    await resolveEuropeanCloudAvailability(stalled, 5),
    "unavailable"
  );
  assert.ok(Date.now() - startedAt < 100);
});

test("presents a stable disabled status outside the EU", () => {
  assert.equal(
    getEuropeanCloudFeatureStatusText("eu", "Choose baby profile"),
    "Choose baby profile"
  );
  assert.equal(
    getEuropeanCloudFeatureStatusText("loading", "Choose baby profile"),
    "Checking availability"
  );
  assert.equal(
    getEuropeanCloudFeatureStatusText("unsupported", "Choose baby profile"),
    "Available in Europe only"
  );
  assert.equal(
    getEuropeanCloudFeatureStatusText("unavailable", "Choose baby profile"),
    "Currently unavailable"
  );
});
