import test from "node:test";
import assert from "node:assert/strict";

import {
  resolveFeedingProfileAvatar,
  shouldStartFeedingProfileCheck,
} from "../src/utils/feedingProfilePresentation.ts";
import { parsePreparedChildren } from "../src/utils/feedingProfileChildren.ts";

test("maps provisioning image_url to the MiniApp avatar field", () => {
  assert.deepEqual(
    parsePreparedChildren([
      { id: 17, name: "Noah", image_url: " https://media.example/noah.jpg " },
      { id: 18, name: "Mia", image_url: "" },
    ]),
    [
      { id: 17, name: "Noah", imageUrl: "https://media.example/noah.jpg" },
      { id: 18, name: "Mia", imageUrl: undefined },
    ]
  );
});

test("uses the selected baby avatar when the DP context and Home match", () => {
  assert.equal(
    resolveFeedingProfileAvatar({
      isOnline: true,
      homeId: "home-1",
      context: { homeID: "home-1", childID: 17 },
      selection: {
        childId: 17,
        childName: "Noah",
        homeId: "home-1",
        imageUrl: "https://media.example/noah.jpg",
      },
    }),
    "https://media.example/noah.jpg"
  );
});

test("falls back to the generic baby icon for old cache entries without an avatar", () => {
  assert.equal(
    resolveFeedingProfileAvatar({
      isOnline: true,
      homeId: "home-1",
      context: { homeID: "home-1", childID: 17 },
      selection: { childId: 17, childName: "Noah", homeId: "home-1" },
    }),
    null
  );
});

test("does not expose a cached avatar belonging to another Home or child", () => {
  const selection = {
    childId: 17,
    childName: "Noah",
    homeId: "home-1",
    imageUrl: "https://media.example/noah.jpg",
  };
  assert.equal(
    resolveFeedingProfileAvatar({
      isOnline: true,
      homeId: "home-2",
      context: { homeID: "home-2", childID: 17 },
      selection,
    }),
    null
  );
  assert.equal(
    resolveFeedingProfileAvatar({
      isOnline: true,
      homeId: "home-1",
      context: { homeID: "home-1", childID: 18 },
      selection,
    }),
    null
  );
});

test("keeps the same-Home cached avatar visible while the device is offline", () => {
  assert.equal(
    resolveFeedingProfileAvatar({
      isOnline: false,
      homeId: "home-1",
      context: null,
      selection: {
        childId: 17,
        childName: "Noah",
        homeId: "home-1",
        imageUrl: "https://media.example/noah.jpg",
      },
    }),
    "https://media.example/noah.jpg"
  );
});

test("starts profile checking once per online period", () => {
  assert.equal(
    shouldStartFeedingProfileCheck({
      isOnline: false,
      startedForOnlinePeriod: false,
    }),
    false
  );
  assert.equal(
    shouldStartFeedingProfileCheck({
      isOnline: true,
      startedForOnlinePeriod: false,
    }),
    true
  );
  assert.equal(
    shouldStartFeedingProfileCheck({
      isOnline: true,
      startedForOnlinePeriod: true,
    }),
    false
  );
});
