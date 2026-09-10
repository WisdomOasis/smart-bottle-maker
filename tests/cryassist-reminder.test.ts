import test from "node:test";
import assert from "node:assert/strict";

import {
  shouldOpenCryAssistReminder,
  shouldResetCryAssistReminder,
} from "../src/utils/cryassistReminder.ts";

test("opens only for a new CryAssist hungry request", () => {
  assert.equal(shouldOpenCryAssistReminder("hungry_pending", false), true);
  assert.equal(shouldOpenCryAssistReminder("hungry_pending", true), false);
});

test("does not open when the CryAssist request is absent or cleared", () => {
  assert.equal(shouldOpenCryAssistReminder(undefined, false), false);
  assert.equal(shouldOpenCryAssistReminder("none", false), false);
  assert.equal(shouldResetCryAssistReminder("none"), true);
});

test("other notification values cannot trigger the CryAssist reminder", () => {
  assert.equal(shouldOpenCryAssistReminder("E01", false), false);
  assert.equal(shouldOpenCryAssistReminder(true, false), false);
  assert.equal(shouldResetCryAssistReminder("E01"), true);
});
