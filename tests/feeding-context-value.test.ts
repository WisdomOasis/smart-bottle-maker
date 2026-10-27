/* eslint-disable no-restricted-syntax */
// Node-only tests: sequential fixtures; local transpilation and platform stubs.
import test from "node:test";
import assert from "node:assert/strict";

import { parseFeedingContextValue } from "../src/utils/feedingContextValue.ts";

const bdUserCiphertext = `${"A".repeat(342)}==`;

test("parses the five-field DP 119 value", () => {
  assert.deepEqual(
    parseFeedingContextValue(
      `${bdUserCiphertext},baby-diary-identity,238738635,17,Europe/Paris`
    ),
    {
      bdUserCiphertext,
      userIdentity: "baby-diary-identity",
      homeID: "238738635",
      childID: 17,
      timezoneID: "Europe/Paris",
    }
  );
});

test("rejects a raw Tuya UID in the first field", () => {
  assert.equal(
    parseFeedingContextValue(
      "eu-sensitive-uid,baby-diary-identity,238738635,17,Europe/Paris"
    ),
    null
  );
});

test("rejects the legacy JSON value", () => {
  assert.equal(
    parseFeedingContextValue(
      '{"v":1,"u":"eu-sensitive-uid","i":"baby-diary-identity","h":"238738635","c":17,"z":"Europe/Paris"}'
    ),
    null
  );
});

test("rejects values that do not contain exactly five fields", () => {
  assert.equal(
    parseFeedingContextValue(`${bdUserCiphertext},identity,home,17`),
    null
  );
  assert.equal(
    parseFeedingContextValue(
      `${bdUserCiphertext},identity,home,17,Europe/Paris,extra`
    ),
    null
  );
});

test("rejects empty fields", () => {
  assert.equal(
    parseFeedingContextValue(`${bdUserCiphertext},,home,17,Europe/Paris`),
    null
  );
});

test("rejects an invalid child ID", () => {
  assert.equal(
    parseFeedingContextValue(
      `${bdUserCiphertext},identity,home,0,Europe/Paris`
    ),
    null
  );
  assert.equal(
    parseFeedingContextValue(
      `${bdUserCiphertext},identity,home,1.5,Europe/Paris`
    ),
    null
  );
  assert.equal(
    parseFeedingContextValue(
      `${bdUserCiphertext},identity,home,child,Europe/Paris`
    ),
    null
  );
});

test("rejects values longer than DP 119", () => {
  assert.equal(
    parseFeedingContextValue(
      `${bdUserCiphertext},${"i".repeat(150)},home,17,Europe/Paris`
    ),
    null
  );
});

test("Raw decoder restores profile state and rejects malformed wire data", async () => {
  const value = await import("../src/utils/feedingContextValue.ts");
  assert.equal(typeof value.parseFeedingContextRaw, "function");
  const text = `${bdUserCiphertext},宝宝😀,home,17,Europe/Paris`;
  const hex = Buffer.from(text).toString("hex");
  assert.deepEqual(
    value.parseFeedingContextRaw(hex.toUpperCase()),
    parseFeedingContextValue(text)
  );
  for (const invalid of [
    text,
    "abc",
    "zz",
    "ff",
    "c080",
    "00".repeat(513),
    null,
  ]) {
    assert.equal(value.parseFeedingContextRaw(invalid), null);
  }
});

test("text parser rejects UTF-8 exceeding the byte limit", () => {
  assert.equal(
    parseFeedingContextValue(
      `${bdUserCiphertext},${"宝".repeat(55)},home,17,Europe/Paris`
    ),
    null
  );
});
