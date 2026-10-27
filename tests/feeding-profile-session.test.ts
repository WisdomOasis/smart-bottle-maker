import test from "node:test";
import assert from "node:assert/strict";
import { finalizeProfileSession } from "../src/utils/feedingProfileSession.ts";
const prepared = { session: "old", expiresAt: 200, children: [{ id: 1 }] };
test("expired session refreshes before finalize", async () => {
  const seen: string[] = [];
  const result = await finalizeProfileSession({
    prepared,
    childId: 1,
    now: () => 201,
    refresh: async () => ({ ...prepared, session: "fresh", expiresAt: 500 }),
    finalize: async (session) => {
      seen.push(session);
      return "context";
    },
  });
  assert.equal(result, "context");
  assert.deepEqual(seen, ["fresh"]);
});
test("server expiration refreshes at most once", async () => {
  let refreshes = 0;
  await assert.rejects(
    finalizeProfileSession({
      prepared,
      childId: 1,
      now: () => 100,
      refresh: async () => {
        refreshes++;
        return prepared;
      },
      finalize: async () => {
        throw new Error("provisioning session has expired");
      },
    })
  );
  assert.equal(refreshes, 1);
});
test("deleted baby is not finalized and unrelated failures do not refresh", async () => {
  let calls = 0;
  await assert.rejects(
    finalizeProfileSession({
      prepared,
      childId: 1,
      now: () => 201,
      refresh: async () => ({ ...prepared, children: [] }),
      finalize: async () => {
        calls++;
        return "";
      },
    }),
    /profile_unavailable/
  );
  assert.equal(calls, 0);
  await assert.rejects(
    finalizeProfileSession({
      prepared,
      childId: 1,
      now: () => 100,
      refresh: async () => {
        calls++;
        return prepared;
      },
      finalize: async () => {
        throw new Error("network");
      },
    }),
    /network/
  );
  assert.equal(calls, 0);
});

test("server-expired session refreshes and finalizes the original child once", async () => {
  const sessions: string[] = [];
  const value = await finalizeProfileSession({
    prepared,
    childId: 1,
    now: () => 100,
    refresh: async () => ({ ...prepared, session: "fresh" }),
    finalize: async (session, childId) => {
      assert.equal(childId, 1);
      sessions.push(session);
      if (session === "old")
        throw new Error("provisioning session has expired");
      return "context";
    },
  });
  assert.equal(value, "context");
  assert.deepEqual(sessions, ["old", "fresh"]);
});
