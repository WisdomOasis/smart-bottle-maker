import test from "node:test";
import assert from "node:assert/strict";

import {
  SmartPrepError,
  asSmartPrepError,
  formatSmartPrepDiagnostic,
} from "../src/utils/smartPrepError.ts";

test("keeps the MiniApp login failure stage and platform error code", () => {
  const error = asSmartPrepError("login", {
    errorCode: 40018,
    errorMsg: "query auth code fail",
  });

  assert.equal(error.stage, "login");
  assert.equal(error.code, "40018");
  assert.equal(
    formatSmartPrepDiagnostic(error),
    "Debug: login · 40018 · query auth code fail"
  );
});

test("reads nested request failures", () => {
  const error = asSmartPrepError("request", {
    innerError: { errorCode: 1501, errorMsg: "PARAMS_NULL" },
  });

  assert.equal(error.stage, "request");
  assert.equal(error.code, "1501");
  assert.equal(
    formatSmartPrepDiagnostic(error),
    "Debug: request · 1501 · PARAMS_NULL"
  );
});

test("labels Lambda response failures and redacts sensitive values", () => {
  const error = new SmartPrepError(
    "response",
    "session=private-token authorization_code=one-time-code"
  );

  assert.equal(error.stage, "response");
  assert.match(formatSmartPrepDiagnostic(error), /Debug: response/);
  assert.doesNotMatch(
    formatSmartPrepDiagnostic(error),
    /private-token|one-time-code/
  );
});
