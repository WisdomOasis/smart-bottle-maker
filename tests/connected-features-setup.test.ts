import test from "node:test";
import assert from "node:assert/strict";

import {
  hasSeenConnectedFeaturesSetup,
  markConnectedFeaturesSetupSeen,
  shouldAutoOpenConnectedFeaturesSetup,
} from "../src/utils/connectedFeaturesSetup.ts";

test("auto-opens setup only when the panel context is ready and unseen", () => {
  assert.equal(
    shouldAutoOpenConnectedFeaturesSetup({
      cloudFeaturesAvailable: true,
      isOnline: true,
      homeId: "238738635",
      deviceId: "bottle-maker",
      hasSeen: false,
    }),
    true
  );
  assert.equal(
    shouldAutoOpenConnectedFeaturesSetup({
      cloudFeaturesAvailable: true,
      isOnline: false,
      homeId: "238738635",
      deviceId: "bottle-maker",
      hasSeen: false,
    }),
    false
  );
  assert.equal(
    shouldAutoOpenConnectedFeaturesSetup({
      cloudFeaturesAvailable: true,
      isOnline: true,
      homeId: "",
      deviceId: "bottle-maker",
      hasSeen: false,
    }),
    false
  );
  assert.equal(
    shouldAutoOpenConnectedFeaturesSetup({
      cloudFeaturesAvailable: true,
      isOnline: true,
      homeId: "238738635",
      deviceId: "bottle-maker",
      hasSeen: true,
    }),
    false
  );
  assert.equal(
    shouldAutoOpenConnectedFeaturesSetup({
      cloudFeaturesAvailable: false,
      isOnline: true,
      homeId: "238738635",
      deviceId: "bottle-maker",
      hasSeen: false,
    }),
    false
  );
});

test("stores the one-time setup prompt per home and device", () => {
  const storage = new Map<string, unknown>();
  const runtime = globalThis as typeof globalThis & {
    ty?: {
      getStorageSync?: (input: { key: string }) => unknown;
      setStorageSync?: (input: { key: string; data: unknown }) => void;
    };
  };
  const originalTy = runtime.ty;
  runtime.ty = {
    getStorageSync: ({ key }) => ({ data: storage.get(key) }),
    setStorageSync: ({ key, data }) => storage.set(key, data),
  };

  try {
    assert.equal(
      hasSeenConnectedFeaturesSetup("238738635", "bottle-maker"),
      false
    );
    markConnectedFeaturesSetupSeen("238738635", "bottle-maker");
    assert.equal(
      hasSeenConnectedFeaturesSetup("238738635", "bottle-maker"),
      true
    );
    assert.equal(
      hasSeenConnectedFeaturesSetup("different-home", "bottle-maker"),
      false
    );
    assert.equal(
      hasSeenConnectedFeaturesSetup("238738635", "different-device"),
      false
    );
  } finally {
    runtime.ty = originalTy;
  }
});
