import test from "node:test";
import assert from "node:assert/strict";

import {
  FeedingContextSaveError,
  feedingContextSaveMessage,
  publishFeedingContext,
} from "../src/utils/feedingContextPublish.ts";

test("publishes feeding context through one explicit DP payload", async () => {
  const payloads: Record<string, unknown>[] = [];
  const context = "cipher,user,238738635,123,Europe/Paris";

  const result = await publishFeedingContext({
    context,
    isOnline: true,
    publish: async (payload) => {
      payloads.push(payload);
      return { success: true };
    },
  });

  assert.equal(result.contextLength, context.length);
  assert.deepEqual(payloads, [{ feeding_record_context: context }]);
});

test("rejects unavailable, empty, and oversized contexts before publishing", async () => {
  let calls = 0;
  const publish = async () => {
    calls += 1;
    return true;
  };

  await assert.rejects(
    publishFeedingContext({ context: "valid", isOnline: false, publish }),
    (error: unknown) =>
      error instanceof FeedingContextSaveError && error.stage === "validation"
  );
  await assert.rejects(
    publishFeedingContext({ context: "", isOnline: true, publish }),
    (error: unknown) =>
      error instanceof FeedingContextSaveError && error.stage === "validation"
  );
  await assert.rejects(
    publishFeedingContext({
      context: "x".repeat(513),
      isOnline: true,
      publish,
    }),
    (error: unknown) =>
      error instanceof FeedingContextSaveError && error.stage === "validation"
  );
  assert.equal(calls, 0);
});

test("separates rejected DP publishing from missing device readback", async () => {
  await assert.rejects(
    publishFeedingContext({
      context: "cipher,user,238738635,123,Europe/Paris",
      isOnline: true,
      publish: async () => false,
    }),
    (error: unknown) =>
      error instanceof FeedingContextSaveError && error.stage === "publish"
  );

  assert.equal(
    feedingContextSaveMessage(new FeedingContextSaveError("publish")),
    "Couldn’t send this baby profile to the device."
  );
  assert.equal(
    feedingContextSaveMessage(new FeedingContextSaveError("readback")),
    "The device didn’t confirm the baby profile."
  );
});
