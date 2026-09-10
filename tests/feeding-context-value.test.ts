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
