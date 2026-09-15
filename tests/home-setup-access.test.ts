/* eslint-disable jest/expect-expect */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));

test("home page locks to one viewport without outer scroll", () => {
  const homeStyles = readFileSync(
    `${projectRoot}/src/pages/home/index.module.less`,
    "utf8"
  );
  const homeConfig = readFileSync(
    `${projectRoot}/src/pages/home/index.config.ts`,
    "utf8"
  );

  assert.match(homeStyles, /\.root\s*\{[\s\S]*?height:\s*100vh;/);
  assert.match(homeStyles, /\.page\s*\{[\s\S]*?overflow:\s*hidden;/);
  assert.match(homeConfig, /disableScroll:\s*true/);
});

test("home uses nav feeding entry and Smart Prep snackbar without a hub sheet", () => {
  const homePage = readFileSync(
    `${projectRoot}/src/pages/home/index.tsx`,
    "utf8"
  );

  assert.match(homePage, /onFeedingRecordPress/);
  assert.match(homePage, /FeedingProfileSheet/);
  assert.match(homePage, /SmartPrepSetupSnackbar/);
  assert.match(homePage, /SmartPrepReminderSheet/);
  assert.doesNotMatch(homePage, /ConnectedFeaturesSetupSheet/);
});

test("home gates European cloud flows on account availability", () => {
  const homePage = readFileSync(
    `${projectRoot}/src/pages/home/index.tsx`,
    "utf8"
  );

  assert.match(homePage, /useEuropeanCloudAvailability\(\)/);
  assert.match(homePage, /cloudFeaturesAvailable/);
  assert.match(
    homePage,
    /cloudFeaturesAvailable\s*&&\s*feedingConfirmationPending/
  );
  assert.match(homePage, /cloudFeaturesAvailable\s*&&/);
  assert.match(homePage, /CryAssistFeedRequestModal/);
  assert.match(homePage, /FeedingRecordConfirmationModal/);
});
