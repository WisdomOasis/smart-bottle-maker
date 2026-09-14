/* eslint-disable jest/expect-expect */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));

test("global page styles allow the home page to scroll vertically", () => {
  const appStyles = readFileSync(`${projectRoot}/src/app.less`, "utf8");
  const homeConfig = readFileSync(
    `${projectRoot}/src/pages/home/index.config.ts`,
    "utf8"
  );

  assert.match(appStyles, /page\s*\{[\s\S]*?overflow-y:\s*auto;/);
  assert.doesNotMatch(appStyles, /page\s*\{[\s\S]*?overflow:\s*hidden;/);
  assert.match(homeConfig, /disableScroll:\s*false/);
});

test("home exposes the two connected feature entries without a duplicate hub", () => {
  const homePage = readFileSync(
    `${projectRoot}/src/pages/home/index.tsx`,
    "utf8"
  );

  assert.match(homePage, />\s*Feeding record\s*</);
  assert.match(homePage, />\s*Smart Prep Reminder\s*</);
  assert.doesNotMatch(homePage, />\s*Connected features\s*</);
});
