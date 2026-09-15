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
    // Present but must never be called — IDE stubs throw loudly.
    hideMenuButtonSync: () => {
      throw new Error("hideMenuButtonSync should not be called");
    },
    hideBoardTitleIconSync: () => {
      throw new Error("hideBoardTitleIconSync should not be called");
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

test("ignores missing chrome APIs", () => {
  const previousTy = (globalThis as { ty?: unknown }).ty;
  (globalThis as { ty?: unknown }).ty = {};

  try {
    assert.doesNotThrow(() => hidePanelFloatingButtons());
  } finally {
    (globalThis as { ty?: unknown }).ty = previousTy;
  }
});
