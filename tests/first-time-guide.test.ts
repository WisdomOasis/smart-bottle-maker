import test from "node:test";
import assert from "node:assert/strict";

import { buildFirstTimeGuideSteps } from "../src/constant/firstTimeGuide.ts";

test("first-time guide spotlights each control and adds CryAssist only when a device exists", () => {
  const core = buildFirstTimeGuideSteps(false);
  const withSmartPrep = buildFirstTimeGuideSteps(true);

  assert.deepEqual(
    core.map((step) => step.targetId),
    [
      "guide-gauge",
      "guide-formula",
      "guide-actions",
      "guide-care",
      "guide-feeding",
      null,
    ]
  );
  assert.equal(core[3]?.title, "first_guide_care_title");
  assert.equal(core[3]?.targetId, "guide-care");
  assert.equal(core[4]?.targetId, "guide-feeding");
  assert.equal(core[core.length - 1]?.cardPlace, "center");
  assert.equal(withSmartPrep.length, 6);
  assert.equal(
    withSmartPrep[withSmartPrep.length - 1]?.targetId,
    "guide-smart-prep"
  );
});
