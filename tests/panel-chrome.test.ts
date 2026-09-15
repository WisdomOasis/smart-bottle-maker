import test from "node:test";
import assert from "node:assert/strict";

import { hidePanelFloatingButtons } from "../src/utils/panelChrome.ts";

test("handles unsupported panel chrome APIs without unhandled rejections", () => {
  const previousTy = (globalThis as { ty?: unknown }).ty;
  let handledRejections = 0;
  let handledFailures = 0;
  const rejectedCall = {
    catch(handler: (error: Error) => void) {
      handledRejections += 1;
      handler(new Error("unsupported in IDE"));
    },
  };

  (globalThis as { ty?: unknown }).ty = {
    getSystemInfoSync: () => ({ brand: "Apple" }),
    hideMenuButton: (options: { fail?: (error: Error) => void }) => {
      options.fail?.(new Error("unsupported in IDE"));
      if (options.fail) handledFailures += 1;
      return rejectedCall;
    },
    hideBoardTitleIcon: (options: { fail?: (error: Error) => void }) => {
      options.fail?.(new Error("unsupported in IDE"));
      if (options.fail) handledFailures += 1;
      return rejectedCall;
    },
  };

  try {
    hidePanelFloatingButtons();
    assert.equal(handledFailures, 2);
    assert.equal(handledRejections, 2);
  } finally {
    (globalThis as { ty?: unknown }).ty = previousTy;
  }
});

test("does not call unsupported panel chrome APIs in the IDE", () => {
  const previousTy = (globalThis as { ty?: unknown }).ty;
  let hideCalls = 0;

  (globalThis as { ty?: unknown }).ty = {
    getSystemInfoSync: () => ({ brand: "devtools" }),
    hideMenuButton: () => {
      hideCalls += 1;
    },
    hideBoardTitleIcon: () => {
      hideCalls += 1;
    },
  };

  try {
    hidePanelFloatingButtons();
    assert.equal(hideCalls, 0);
  } finally {
    (globalThis as { ty?: unknown }).ty = previousTy;
  }
});
