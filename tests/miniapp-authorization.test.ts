import test from "node:test";
import assert from "node:assert/strict";

import {
  MiniAppAuthorizationTimeoutError,
  createMiniAppAuthorizationCoordinator,
} from "../src/services/miniAppAuthorization.ts";

const deferred = <T>() => {
  let resolve!: (value: T) => void;
  let reject!: (error: unknown) => void;
  const promise = new Promise<T>((onResolve, onReject) => {
    resolve = onResolve;
    reject = onReject;
  });
  return { promise, resolve, reject };
};

test("serializes authorization and backend exchange work with separate codes", async () => {
  const firstExchange = deferred<void>();
  const codes = ["code-1", "code-2"];
  const events: string[] = [];
  const coordinator = createMiniAppAuthorizationCoordinator(
    async () => codes.shift() || "",
    100
  );

  const first = coordinator.run(async (code) => {
    events.push(`first:${code}`);
    await firstExchange.promise;
    events.push("first:complete");
  });
  const second = coordinator.run(async (code) => {
    events.push(`second:${code}`);
  });

  await new Promise((resolve) => setTimeout(resolve, 0));
  assert.deepEqual(events, ["first:code-1"]);

  firstExchange.resolve();
  await Promise.all([first, second]);
  assert.deepEqual(events, ["first:code-1", "first:complete", "second:code-2"]);
});

test("releases queued work after a failed authorization task", async () => {
  let attempt = 0;
  const coordinator = createMiniAppAuthorizationCoordinator(async () => {
    attempt += 1;
    if (attempt === 1) throw new Error("query auth code fail");
    return "code-2";
  }, 100);

  const failed = coordinator.run(async () => undefined);
  const succeeded = coordinator.run(async (code) => code);

  await assert.rejects(failed, /query auth code fail/);
  assert.equal(await succeeded, "code-2");
});

test("times out a stalled native login and releases the next task", async () => {
  let attempt = 0;
  const coordinator = createMiniAppAuthorizationCoordinator(async () => {
    attempt += 1;
    if (attempt === 1) return new Promise<string>(() => undefined);
    return "code-2";
  }, 5);

  const timedOut = coordinator.run(async () => undefined);
  const succeeded = coordinator.run(async (code) => code);

  await assert.rejects(timedOut, MiniAppAuthorizationTimeoutError);
  assert.equal(await succeeded, "code-2");
});
