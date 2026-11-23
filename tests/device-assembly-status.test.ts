import assert from "node:assert/strict";
import test from "node:test";
import {
  getAssemblyStatusesForMode,
  hasAssemblyBlocker,
} from "../src/utils/deviceAssemblyStatus";

const base = {
  funnelOk: true,
  watertankOk: true,
  milkboxOk: true,
  bottleOk: true,
};

test("milk and water require mixing chamber installed", () => {
  const milk = getAssemblyStatusesForMode("milk", base);
  const water = getAssemblyStatusesForMode("water", base);
  assert.equal(milk.find((i) => i.key === "mixing_chamber")?.ok, true);
  assert.equal(water.find((i) => i.key === "mixing_chamber")?.ok, true);
  assert.equal(hasAssemblyBlocker(milk), false);

  const milkBlocked = getAssemblyStatusesForMode("milk", {
    ...base,
    funnelOk: false,
  });
  assert.equal(hasAssemblyBlocker(milkBlocked), true);
});

test("powder requires mixing chamber removed", () => {
  const stillInstalled = getAssemblyStatusesForMode("powder", base);
  assert.equal(
    stillInstalled.find((i) => i.key === "mixing_chamber_removed")?.ok,
    false
  );
  assert.equal(hasAssemblyBlocker(stillInstalled), true);

  const removed = getAssemblyStatusesForMode("powder", {
    ...base,
    funnelOk: false,
  });
  assert.equal(
    removed.find((i) => i.key === "mixing_chamber_removed")?.ok,
    true
  );
  assert.equal(hasAssemblyBlocker(removed), false);
});

test("clean requires mixing chamber installed like water", () => {
  const ok = getAssemblyStatusesForMode("clean", base);
  assert.equal(hasAssemblyBlocker(ok), false);

  const missingFunnel = getAssemblyStatusesForMode("clean", {
    ...base,
    funnelOk: false,
  });
  assert.equal(hasAssemblyBlocker(missingFunnel), true);
  assert.equal(
    missingFunnel.find((i) => i.key === "mixing_chamber")?.ok,
    false
  );
});

test("checklist excludes no_blockage and does not list it", () => {
  const milk = getAssemblyStatusesForMode("milk", base);
  const water = getAssemblyStatusesForMode("water", base);
  const powder = getAssemblyStatusesForMode("powder", {
    ...base,
    funnelOk: false,
  });
  const clean = getAssemblyStatusesForMode("clean", base);
  [milk, water, powder, clean].forEach((list) => {
    assert.equal(
      list.some((i) => (i.key as string) === "no_blockage"),
      false
    );
  });
});
