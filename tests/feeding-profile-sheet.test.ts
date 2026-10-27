/* eslint-disable no-await-in-loop, no-restricted-syntax, no-new-func, @typescript-eslint/no-empty-function */
// Node-only tests: sequential fixtures; local transpilation and platform stubs.
import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
const require = createRequire(import.meta.url);
const ts = require("typescript");
const { JSDOM } = require("jsdom");
const React = require("react");
const ReactDOM = require("react-dom");
const { act } = require("react-dom/test-utils");
const context = `${"A".repeat(342)}==,identity,home,1,Europe/Paris`;
const child = { id: 1, name: "Baby" };
const prepared = {
  session: "session",
  expiresAt: Date.now() / 1000 + 300,
  children: [child],
};
function load(file: string, mocks: Record<string, unknown> = {}) {
  const output = ts.transpileModule(
    readFileSync(new URL(file, import.meta.url), "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true,
        target: ts.ScriptTarget.ES2020,
      },
    }
  ).outputText;
  const module = { exports: {} as any };
  new Function("require", "module", "exports", output)(
    (name: string) => {
      if (name in mocks) return mocks[name];
      if (name === "./feedingContextRaw.js")
        return load("../src/utils/feedingContextRaw.js");
      if (name.startsWith("@/utils/"))
        return load(`../src/utils/${name.split("/").pop()}.ts`);
      if (name.endsWith(".less"))
        return {
          __esModule: true,
          default: new Proxy({}, { get: (_, key) => key }),
        };
      return require(name);
    },
    module,
    module.exports
  );
  return module.exports;
}
function fixture(
  prepare = async (_input: any) => prepared,
  currentChildId?: number
) {
  const dom = new JSDOM('<div id="root"></div>');
  const previous = { window: globalThis.window, document: globalThis.document };
  Object.assign(globalThis, {
    window: dom.window,
    document: dom.window.document,
  });
  const root = dom.window.document.getElementById("root");
  const listeners = new Set<any>();
  const sends: any[] = [];
  let closes = 0;
  let selected = 0;
  const devInfo = {
    devId: "device",
    schema: [
      {
        id: 119,
        code: "feeding_record_context",
        mode: "rw",
        property: { type: "string", maxlen: 512 },
      },
    ],
  };
  const Component = load("../src/components/FeedingProfileSheet/index.tsx", {
    "@ray-js/ray": {
      Image: "img",
      Text: "span",
      View: "div",
      getSystemInfoSync: () => ({ timezoneId: "Europe/Paris" }),
      useAppEvent() {},
      showToast() {},
      publishDps: (p: any) => sends.push(p),
      onDpDataChange: (fn: any) => listeners.add(fn),
      offDpDataChange: (fn: any) => listeners.delete(fn),
    },
    "@ray-js/panel-sdk": { useDevice: () => ({ devInfo }) },
    "@/res": { __esModule: true, default: { actionButtonIcons: { baby: "" } } },
    "@/components/PowderBrandOptionSheet/icons": {
      POWDER_BRAND_SHEET_ICONS: {},
    },
    "@/utils/openBabyDiaryPanel": { openBabyDiaryPanel() {} },
    "@/services/feedingContext": {
      prepareFeedingContext: prepare,
      finalizeFeedingContext: async () => context,
    },
  }).default;
  const props = {
    deviceId: "device",
    homeId: "home",
    currentChildId,
    onClose: () => closes++,
    onDismiss() {},
    onSelectionChange: () => selected++,
    onBusyChange() {},
    showBackButton: false,
  };
  return {
    sends,
    listeners,
    root,
    render: async (isOnline = true) => {
      await act(async () => {
        ReactDOM.render(
          React.createElement(Component, { ...props, isOnline }),
          root
        );
      });
    },
    choose: async () => {
      await act(async () => {
        const row = root.querySelector(".childRow");
        assert.ok(row);
        row.dispatchEvent(
          new dom.window.MouseEvent("click", { bubbles: true })
        );
        row.dispatchEvent(
          new dom.window.MouseEvent("click", { bubbles: true })
        );
      });
    },
    confirm: async () => {
      await act(async () => {
        for (const listener of listeners)
          listener({
            deviceId: "device",
            dps: { "119": Buffer.from(context).toString("hex") },
          });
        sends[0].success(true);
      });
    },
    closes: () => closes,
    selected: () => selected,
    unmount: async () => {
      await act(async () => {
        ReactDOM.unmountComponentAtNode(root);
      });
    },
    cleanup: async () => {
      await act(async () => {
        ReactDOM.unmountComponentAtNode(root);
      });
      dom.window.close();
      Object.assign(globalThis, previous);
    },
  };
}
test("first, changed and same baby selections send once; success waits for fresh report", async () => {
  for (const current of [undefined, 2, 1]) {
    const f = fixture(undefined, current);
    try {
      await f.render();
      await f.choose();
      assert.equal(f.sends.length, 1);
      assert.equal(f.closes(), 0);
      assert.equal(f.selected(), 0);
      assert.deepEqual(f.sends[0].dps, {
        "119": Buffer.from(context).toString("hex"),
      });
      await f.confirm();
      assert.equal(f.closes(), 1);
      assert.equal(f.selected(), 1);
      assert.equal(f.listeners.size, 0);
    } finally {
      await f.cleanup();
    }
  }
});
test("reconnect while old query is pending loads profiles again", async () => {
  let resolve!: (v: typeof prepared) => void;
  const pending = new Promise<typeof prepared>((r) => {
    resolve = r;
  });
  let calls = 0;
  const f = fixture(async () => {
    calls++;
    return calls === 1 ? pending : prepared;
  });
  try {
    await f.render();
    await f.render(false);
    await f.render(true);
    await act(async () => {
      resolve(prepared);
    });
    assert.equal(calls, 2);
    assert.ok(f.root.querySelector(".childRow"));
  } finally {
    await f.cleanup();
  }
});
test("unmount while sending removes native listener without applying selection", async () => {
  const f = fixture();
  try {
    await f.render();
    await f.choose();
    assert.equal(f.listeners.size, 1);
    await f.unmount();
    assert.equal(f.listeners.size, 0);
    f.sends[0].success(true);
    assert.equal(f.selected(), 0);
  } finally {
    await f.cleanup();
  }
});

test("native publish failure displays a safe support code on the phone", async () => {
  const f = fixture();
  try {
    await f.render();
    await f.choose();
    await act(async () => {
      f.sends[0].fail({
        errorCode: 123,
        errorMsg: "secret-context",
        innerError: { errorCode: -45 },
      });
    });
    assert.match(
      f.root.textContent,
      /Support code: DP119-r3 \/ publish \/ native_fail \/ 123 \/ -45/
    );
    assert.doesNotMatch(f.root.textContent, /secret-context/);
    assert.equal(f.listeners.size, 0);
  } finally {
    await f.cleanup();
  }
});
