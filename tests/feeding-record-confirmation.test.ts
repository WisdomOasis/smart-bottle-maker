/* eslint-disable jest/expect-expect */
import test from "node:test";
import assert from "node:assert/strict";

import {
  buildFeedingRecordUpdate,
  parseFeedingRecordConfirmation,
  sha256Hex,
} from "../src/utils/feedingRecordConfirmation.ts";
import dpCodes from "../src/constant/dpCodes.ts";
import { defaultSchema } from "../src/devices/schema.ts";

const context = {
  bdUserCiphertext: `${"A".repeat(342)}==`,
  userIdentity: "baby-diary-identity",
  homeID: "238738635",
  childID: 17,
  timezoneID: "Europe/Paris",
};

const recordJson = JSON.stringify({
  version: 1,
  feeding_record_id: "1234567890123456789",
  home_id: "238738635",
  child_id: 17,
  bottle_type: "formula",
  prepared_amount: 100,
  unit: "ml",
  completed_at: 1788830000,
});

test("parses plain JSON, hex Raw, and byte-array DP 115 values", () => {
  const expected = {
    version: 1,
    feedingRecordID: "1234567890123456789",
    homeID: "238738635",
    childID: 17,
    bottleType: "formula",
    preparedAmount: 100,
    unit: "ml",
    completedAt: 1788830000,
  };
  const bytes = Array.from(Buffer.from(recordJson, "utf8"));

  assert.deepEqual(
    parseFeedingRecordConfirmation(recordJson, context),
    expected
  );
  assert.deepEqual(
    parseFeedingRecordConfirmation(
      Buffer.from(recordJson).toString("hex"),
      context
    ),
    expected
  );
  assert.deepEqual(parseFeedingRecordConfirmation(bytes, context), expected);
});

test("rejects mismatched Home, child, non-formula, and malformed records", () => {
  const mutate = (changes: Record<string, unknown>) =>
    JSON.stringify({ ...JSON.parse(recordJson), ...changes });

  assert.equal(
    parseFeedingRecordConfirmation(mutate({ home_id: "other-home" }), context),
    null
  );
  assert.equal(
    parseFeedingRecordConfirmation(mutate({ child_id: 18 }), context),
    null
  );
  assert.equal(
    parseFeedingRecordConfirmation(mutate({ bottle_type: "water" }), context),
    null
  );
  assert.equal(
    parseFeedingRecordConfirmation(mutate({ feeding_record_id: 123 }), context),
    null
  );
  assert.equal(parseFeedingRecordConfirmation("not-json", context), null);
});

test("builds the authenticated PUT without converting the 64-bit record ID", () => {
  const record = parseFeedingRecordConfirmation(recordJson, context);
  assert.ok(record);

  const request = buildFeedingRecordUpdate({
    context,
    record,
    remainingAmount: 30,
    timestamp: 1788830900,
  });

  assert.equal(
    request.url,
    "https://bd.prod-eu.connected.maxicosi.com/api/feeding/1234567890123456789/"
  );
  assert.equal(request.headers["bd-uid"], "1788830900baby-diary-identity");
  assert.equal(request.headers["bd-timestamp"], "1788830900");
  assert.equal(request.headers["bd-user"], context.bdUserCiphertext);
  assert.equal(request.headers["bd-homeid"], "238738635");
  assert.equal(request.headers["bd-timezone"], "Europe/Paris");
  assert.equal(
    request.headers["bd-hash"],
    "852b607c2afd3e18312f246d5e9e884ba0422c845db6c5f6e4fb2e6c76e1baf3"
  );
  assert.deepEqual(request.body, {
    child_id: 17,
    type: "bottle",
    started_at: 1788830000,
    bottle_type: "formula",
    bottle_amount: 70,
    unit: "ml",
    save_type: "save",
  });
});

test("supports zero consumed amount and rejects an invalid remaining amount", () => {
  const record = parseFeedingRecordConfirmation(recordJson, context);
  assert.ok(record);
  assert.equal(
    buildFeedingRecordUpdate({
      context,
      record,
      remainingAmount: 100,
      timestamp: 1788830900,
    }).body.bottle_amount,
    0
  );
  assert.throws(() =>
    buildFeedingRecordUpdate({
      context,
      record,
      remainingAmount: 101,
      timestamp: 1788830900,
    })
  );
});

test("SHA-256 implementation matches standard vectors", () => {
  assert.equal(
    sha256Hex(""),
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  );
  assert.equal(
    sha256Hex("abc"),
    "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
  );
});

test("declares DP 120 as a writable confirmation enum", () => {
  assert.equal(dpCodes.feedingRecordConfirmation, "feeding_record_confir");
  assert.deepEqual(
    defaultSchema.find((item) => item.id === 120),
    {
      code: "feeding_record_confir",
      id: 120,
      mode: "rw",
      name: "Feeding Record Confir",
      property: { type: "enum", range: ["none", "pending"] },
      type: "obj",
    }
  );
});
