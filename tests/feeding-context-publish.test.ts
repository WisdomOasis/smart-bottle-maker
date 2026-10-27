/* eslint-disable no-await-in-loop, no-restricted-syntax */
// Node-only tests: sequential fixtures; local transpilation and platform stubs.
import test from "node:test";
import assert from "node:assert/strict";
import { publishFeedingContext } from "../src/utils/feedingContextPublish.ts";

const schema = [
  {
    id: 119,
    code: "feeding_record_context",
    mode: "rw",
    property: { type: "string", maxlen: 512 },
  },
];
function fixture(overrides = {}) {
  let listener: any;
  let callbacks: any;
  let removed = 0;
  const calls: any[] = [];
  const input = {
    context: "context",
    deviceId: "device",
    modelDeviceId: "device",
    schema,
    isOnline: true,
    timeoutMs: 20,
    subscribe: (fn: any) => {
      listener = fn;
      return () => {
        removed++;
      };
    },
    publish: (params: any) => {
      calls.push(params);
      callbacks = params;
    },
    ...overrides,
  };
  const tx = publishFeedingContext(input);
  return {
    tx,
    calls,
    callbacks,
    report: (deviceId = "device", value = "636f6e74657874") =>
      listener({ deviceId, dps: { "119": value } }),
    removed: () => removed,
  };
}
test("native callback plus fresh matching report is required on every selection", async () => {
  for (let i = 0; i < 3; i++) {
    const f = fixture();
    assert.equal(f.calls.length, 1);
    assert.equal(f.calls[0].deviceId, "device");
    assert.deepEqual(f.calls[0].dps, { "119": "636f6e74657874" });
    f.report(); // report may precede native success
    f.callbacks.success(true);
    await f.tx.promise;
    assert.equal(f.removed(), 1);
  }
});
test("undefined native return is not acceptance; missing callback times out", async () => {
  const f = fixture();
  f.report();
  await assert.rejects(f.tx.promise, { stage: "send_timeout" });
  assert.equal(f.removed(), 1);
});
test("wrong device, wrong value and existing cache cannot confirm", async () => {
  const f = fixture();
  f.callbacks.success(true);
  f.report("other");
  f.report("device", "old");
  await assert.rejects(f.tx.promise, { stage: "readback" });
  assert.equal(f.removed(), 1);
});
test("native failure wins even if matching report arrived", async () => {
  const f = fixture();
  f.report();
  f.callbacks.fail({ errorCode: 12, errorMsg: "private content" });
  await assert.rejects(f.tx.promise, { stage: "publish", code: "12" });
  assert.equal(f.removed(), 1);
});
test("false success callback is failure", async () => {
  const f = fixture();
  f.callbacks.success(false);
  await assert.rejects(f.tx.promise, { stage: "publish" });
});
test("offline/unmount cancellation removes listener and ignores late callbacks", async () => {
  for (const stage of ["offline", "cancelled"] as const) {
    const f = fixture();
    f.tx.cancel(stage);
    f.callbacks.success(true);
    f.report();
    await assert.rejects(f.tx.promise, { stage });
    assert.equal(f.removed(), 1);
  }
});
test("schema metadata does not block numeric DP119 sending", async () => {
  for (const metadata of [
    undefined,
    [],
    [{ id: 119, code: "hid_uid" }],
    [{ ...schema[0], property: { type: "string" } }],
  ]) {
    const f = fixture({ schema: metadata });
    // Consume rejection during the red phase as well.
    const result = f.tx.promise.catch((error) => error);
    assert.equal(f.calls.length, 1);
    assert.deepEqual(f.calls[0].dps, { "119": "636f6e74657874" });
    f.callbacks.success(true);
    f.report();
    assert.equal(await result, undefined);
  }
});
test("rejects wrong target, offline and invalid payload before publishing", async () => {
  for (const overrides of [
    { deviceId: "" },
    { modelDeviceId: "other" },
    { isOnline: false },
    { context: "" },
    { context: "x".repeat(513) },
  ]) {
    const f = fixture(overrides);
    await assert.rejects(f.tx.promise);
    assert.equal(f.calls.length, 0);
  }
});

test("phone diagnostic contains only stage, origin and bounded platform codes", async () => {
  const { FeedingContextSaveError, feedingContextDiagnostic } = await import(
    "../src/utils/feedingContextPublish.ts"
  );
  const error = new FeedingContextSaveError(
    "publish",
    {
      errorCode: 123,
      errorMsg: "secret context",
      innerError: { errorCode: -45, errorMsg: "private account" },
    },
    "native_fail"
  );
  assert.equal(
    feedingContextDiagnostic(error),
    "DP119-r3 / publish / native_fail / 123 / -45"
  );
  assert.equal(
    feedingContextDiagnostic(new Error("secret")),
    "DP119-r3 / validation"
  );
});

test("Raw reports accept hex case but reject malformed and plain text", async () => {
  const f = fixture();
  f.callbacks.success(true);
  for (const value of ["context", "636", "zz", "636f6e7465787400"])
    f.report("device", value);
  f.report("device", "636F6E74657874");
  await f.tx.promise;
});
test("UTF-8 payload limit applies to bytes, not JS characters", async () => {
  const f = fixture({ context: "宝".repeat(171) });
  await assert.rejects(f.tx.promise, { stage: "validation" });
  assert.equal(f.calls.length, 0);
});
test("512 bytes are sent intact and acknowledged", async () => {
  const f = fixture({ context: "宝".repeat(170) + "ab" });
  const expected = Buffer.from("宝".repeat(170) + "ab").toString("hex");
  const result = f.tx.promise.catch((e) => e);
  assert.equal(f.calls[0]?.dps["119"], expected);
  f.callbacks.success(true);
  f.report("device", expected);
  assert.equal(await result, undefined);
});

test("malformed Raw and old plain-text reports never confirm success", async () => {
  const f = fixture();
  f.callbacks.success(true);
  for (const value of ["context", "636", "zz", "636f6e7465787400"])
    f.report("device", value);
  await assert.rejects(f.tx.promise, { stage: "readback" });
  assert.equal(f.removed(), 1);
});
