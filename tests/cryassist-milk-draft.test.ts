import test from "node:test";
import assert from "node:assert/strict";

import {
  buildCryAssistMilkRecipe,
  createCryAssistMilkDraft,
  getCryAssistPowderBounds,
  overrideCryAssistPowder,
  updateCryAssistVolume,
} from "../src/utils/cryassistMilkDraft.ts";
import {
  executeMilkStart,
  isMilkStartConfirmed,
} from "../src/utils/milkStart.ts";

test("creates the CryAssist draft from the current device recipe", () => {
  const draft = createCryAssistMilkDraft({
    volumeMl: 180,
    temp: 40,
    formulaWater: 60,
    formulaRatio: 50,
  });

  assert.deepEqual(draft, {
    volumeMl: 180,
    powderGrams: 15,
    temp: 40,
    sourceFormulaWater: 60,
    sourceFormulaRatio: 50,
    powderOverridden: false,
  });
});

test("water changes recalculate powder until powder is manually adjusted", () => {
  const initial = createCryAssistMilkDraft({
    volumeMl: 180,
    temp: 35,
    formulaWater: 60,
    formulaRatio: 50,
  });

  const automatic = updateCryAssistVolume(initial, 240);
  assert.equal(automatic.powderGrams, 20);
  assert.equal(automatic.powderOverridden, false);

  const manual = overrideCryAssistPowder(automatic, 25);
  const afterWaterChange = updateCryAssistVolume(manual, 300);
  assert.equal(afterWaterChange.powderGrams, 25);
  assert.equal(afterWaterChange.powderOverridden, true);
});

test("manual powder is clamped to the legal ratio range for the volume", () => {
  const initial = createCryAssistMilkDraft({
    volumeMl: 60,
    temp: 40,
    formulaWater: 100,
    formulaRatio: 130,
  });
  const bounds = getCryAssistPowderBounds(60);

  assert.deepEqual(bounds, { min: 1.5, max: 21 });
  assert.equal(overrideCryAssistPowder(initial, 999).powderGrams, 21);
  assert.equal(overrideCryAssistPowder(initial, 0).powderGrams, 1.5);
  assert.equal(overrideCryAssistPowder(initial, 10.26).powderGrams, 10.3);
});

test("preserves the source recipe until powder is overridden", () => {
  const initial = createCryAssistMilkDraft({
    volumeMl: 180,
    temp: 35,
    formulaWater: 60,
    formulaRatio: 50,
  });
  const automatic = updateCryAssistVolume(initial, 240);

  assert.deepEqual(buildCryAssistMilkRecipe(automatic), {
    volumeMl: 240,
    temp: 35,
    formulaWater: 60,
    formulaRatio: 50,
    unitSet: "mL",
  });

  const manual = overrideCryAssistPowder(automatic, 24);
  assert.deepEqual(buildCryAssistMilkRecipe(manual), {
    volumeMl: 240,
    temp: 35,
    formulaWater: 100,
    formulaRatio: 100,
    unitSet: "mL",
  });
});

test("converts decimal total powder to the nearest legal formula ratio", () => {
  const initial = createCryAssistMilkDraft({
    volumeMl: 180,
    temp: 35,
    formulaWater: 100,
    formulaRatio: 130,
  });
  const manual = overrideCryAssistPowder(initial, 10.3);

  assert.deepEqual(buildCryAssistMilkRecipe(manual), {
    volumeMl: 180,
    temp: 35,
    formulaWater: 100,
    formulaRatio: 57,
    unitSet: "mL",
  });
});

test("starts working only after the recipe batch succeeds", async () => {
  const calls: string[] = [];
  const recipe = buildCryAssistMilkRecipe(
    createCryAssistMilkDraft({
      volumeMl: 180,
      temp: 40,
      formulaWater: 100,
      formulaRatio: 130,
    })
  );

  const success = await executeMilkStart(
    recipe,
    async () => {
      calls.push("recipe");
      return true;
    },
    async () => {
      calls.push("working");
      return true;
    }
  );
  assert.equal(success, true);
  assert.deepEqual(calls, ["recipe", "working"]);

  calls.length = 0;
  const failed = await executeMilkStart(
    recipe,
    async () => {
      calls.push("recipe");
      return false;
    },
    async () => {
      calls.push("working");
      return true;
    }
  );
  assert.equal(failed, false);
  assert.deepEqual(calls, ["recipe"]);
});

test("only treats the milk start as confirmed after matching device feedback", () => {
  assert.equal(isMilkStartConfirmed(false, "milk"), false);
  assert.equal(isMilkStartConfirmed(true, "water"), false);
  assert.equal(isMilkStartConfirmed(true, "milk"), true);
});
