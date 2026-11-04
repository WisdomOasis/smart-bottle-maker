/* eslint-disable no-new-func */
import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const load = (
  file: string,
  mocks: Record<string, unknown> = {},
  cache = new Map<string, unknown>()
) => {
  if (cache.has(file)) return cache.get(file);
  const output = ts.transpileModule(
    readFileSync(new URL(file, import.meta.url), "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        esModuleInterop: true,
        target: ts.ScriptTarget.ES2020,
      },
    }
  ).outputText;
  const module = { exports: {} as Record<string, unknown> };
  const loaded = module.exports;
  cache.set(file, loaded);
  new Function("require", "module", "exports", output)(
    (name: string) => {
      if (name in mocks) return mocks[name];
      if (name.endsWith("./panelChrome") || name.endsWith("./panelChrome.ts"))
        return load("../src/utils/panelChrome.ts", mocks, cache);
      return require(name);
    },
    module,
    module.exports
  );
  return loaded;
};

test("requests camera permission before opening documented scanCode", () => {
  const calls: unknown[] = [];
  const { runBarcodeScan } = load("../src/utils/runBarcodeScan.ts", {
    "@ray-js/ray": {
      authorize: (params: { success?: () => void }) => {
        params.success?.();
      },
      scanCode: (params: {
        onlyFromCamera?: boolean;
        scanType?: string[];
        success?: (res: { result: string }) => void;
        complete?: () => void;
      }) => {
        calls.push(params);
        params.success?.({ result: "7613031234567" });
        params.complete?.();
      },
      showToast: () => undefined,
    },
    "@/i18n": { getLang: (key: string) => key },
  }) as {
    runBarcodeScan: (handlers: { onResult: (raw: string) => void }) => void;
  };

  let result = "";
  runBarcodeScan({
    onResult: (raw) => {
      result = raw;
    },
  });

  assert.equal(calls.length, 1);
  assert.equal((calls[0] as { onlyFromCamera: boolean }).onlyFromCamera, false);
  assert.deepEqual((calls[0] as { scanType: string[] }).scanType, [
    "barCode",
    "qrCode",
  ]);
  assert.equal(result, "7613031234567");
});

test("toasts when camera permission is denied and does not open scanCode", () => {
  const toasts: Array<{ title: string }> = [];
  let scanCalls = 0;
  let unavailable = 0;
  const { runBarcodeScan } = load("../src/utils/runBarcodeScan.ts", {
    "@ray-js/ray": {
      authorize: (params: { fail?: () => void }) => {
        params.fail?.();
      },
      scanCode: () => {
        scanCalls += 1;
      },
      showToast: (params: { title: string }) => {
        toasts.push(params);
      },
    },
    "@/i18n": { getLang: (key: string) => key },
  }) as {
    runBarcodeScan: (handlers: {
      onResult: (raw: string) => void;
      onUnavailable?: () => void;
    }) => void;
  };

  runBarcodeScan({
    onResult: () => undefined,
    onUnavailable: () => {
      unavailable += 1;
    },
  });

  assert.equal(scanCalls, 0);
  assert.equal(unavailable, 1);
  assert.deepEqual(toasts, [{ title: "barcode_camera_denied", icon: "none" }]);
});

test("does not re-hide panel chrome while scanCode is open", () => {
  const cache = new Map<string, unknown>();
  let hideCalls = 0;
  const previousTy = (globalThis as { ty?: unknown }).ty;
  (globalThis as { ty?: unknown }).ty = {
    hideMenuButton: () => {
      hideCalls += 1;
    },
    hideBoardTitleIcon: () => {
      hideCalls += 1;
    },
  };

  try {
    const loaded = load(
      "../src/utils/runBarcodeScan.ts",
      {
        "@ray-js/ray": {
          authorize: (params: { success?: () => void }) => {
            params.success?.();
          },
          scanCode: () => undefined,
          showToast: () => undefined,
        },
        "@/i18n": { getLang: (key: string) => key },
      },
      cache
    ) as {
      runBarcodeScan: (handlers: { onResult: (raw: string) => void }) => void;
    };
    const chrome = load("../src/utils/panelChrome.ts", {}, cache) as {
      hidePanelFloatingButtons: () => void;
    };

    loaded.runBarcodeScan({ onResult: () => undefined });
    chrome.hidePanelFloatingButtons();
    assert.equal(hideCalls, 0);
  } finally {
    (globalThis as { ty?: unknown }).ty = previousTy;
  }
});
