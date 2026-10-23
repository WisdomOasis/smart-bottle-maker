import test from "node:test";
import assert from "node:assert/strict";

import {
  hasCompletedSmartPrepSetup,
  isSmartPrepPreparedFresh,
  markSmartPrepSetupComplete,
  shouldShowSmartPrepSetupSnackbar,
} from "../src/utils/connectedFeaturesSetup.ts";

test("shows Smart Prep snackbar only when a CryAssist device exists and setup is incomplete", () => {
  assert.equal(
    shouldShowSmartPrepSetupSnackbar({
      deviceId: "bottle-maker",
      completed: false,
      hasCryAssistDevice: true,
    }),
    true
  );
  assert.equal(
    shouldShowSmartPrepSetupSnackbar({
      deviceId: "bottle-maker",
      completed: false,
      hasCryAssistDevice: false,
    }),
    false
  );
  assert.equal(
    shouldShowSmartPrepSetupSnackbar({
      deviceId: "",
      completed: false,
      hasCryAssistDevice: true,
    }),
    false
  );
  assert.equal(
    shouldShowSmartPrepSetupSnackbar({
      deviceId: "bottle-maker",
      completed: true,
      hasCryAssistDevice: true,
    }),
    false
  );
});

test("reuses a Smart Prep prepare result only while the session is fresh", () => {
  const prepared = { session: "session-1", expiresAt: 0 };
  const fetchedAt = 1_000_000;
  assert.equal(
    isSmartPrepPreparedFresh(prepared, fetchedAt, fetchedAt + 60_000),
    true
  );
  assert.equal(
    isSmartPrepPreparedFresh(prepared, fetchedAt, fetchedAt + 11 * 60_000),
    false
  );
  assert.equal(
    isSmartPrepPreparedFresh(
      { session: "session-1", expiresAt: 1_700_000_000 },
      fetchedAt,
      1_700_000_000 * 1000 - 1
    ),
    true
  );
  assert.equal(
    isSmartPrepPreparedFresh(
      { session: "session-1", expiresAt: 1_700_000_000 },
      fetchedAt,
      1_700_000_000 * 1000 + 1
    ),
    false
  );
  assert.equal(isSmartPrepPreparedFresh(null, fetchedAt, fetchedAt), false);
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
