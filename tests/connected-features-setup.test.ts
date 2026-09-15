import test from "node:test";
import assert from "node:assert/strict";

import {
  hasCompletedSmartPrepSetup,
  markSmartPrepSetupComplete,
  shouldShowSmartPrepSetupSnackbar,
} from "../src/utils/connectedFeaturesSetup.ts";

test("shows Smart Prep snackbar when device is known and setup incomplete", () => {
  assert.equal(
    shouldShowSmartPrepSetupSnackbar({
      deviceId: "bottle-maker",
      completed: false,
    }),
    true
  );
  assert.equal(
    shouldShowSmartPrepSetupSnackbar({
      deviceId: "",
      completed: false,
    }),
    false
  );
  assert.equal(
    shouldShowSmartPrepSetupSnackbar({
      deviceId: "bottle-maker",
      completed: true,
    }),
    false
  );
});

test("stores Smart Prep completion per home and device", () => {
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
      hasCompletedSmartPrepSetup("238738635", "bottle-maker"),
      false
    );
    markSmartPrepSetupComplete("238738635", "bottle-maker");
    assert.equal(hasCompletedSmartPrepSetup("238738635", "bottle-maker"), true);
    assert.equal(
      hasCompletedSmartPrepSetup("different-home", "bottle-maker"),
      false
    );
    assert.equal(
      hasCompletedSmartPrepSetup("238738635", "different-device"),
      false
    );
  } finally {
    runtime.ty = originalTy;
  }
});
