#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const projectRoot = path.resolve(__dirname, "..");
const stringsFile = path.join(projectRoot, "src/i18n/strings.ts");
const outputFile = path.join(projectRoot, "i18n_export.xlsx");

const args = new Set(process.argv.slice(2));
const isWatchMode = args.has("--watch");
const isStagedOnlyMode = args.has("--staged-only");

const exportLocales = [
  { key: "en", label: "英语" },
  { key: "ja", label: "日语" },
  { key: "zh", label: "简体中文" },
  { key: "zh-TW", label: "繁体中文" },
  { key: "ko", label: "韩语" },
  { key: "th", label: "泰语" },
];

function notify(title, message) {
  process.stdout.write(`[i18n] ${message}\n`);

  if (process.platform !== "darwin") {
    return;
  }

  try {
    execFileSync("terminal-notifier", ["-title", title, "-message", message], {
      stdio: "ignore",
    });
  } catch (error) {
    if (error.code !== "ENOENT") {
      process.stderr.write(
        `[i18n] macOS notification failed: ${error.message}\n`
      );
    }
  }
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getColumnName(index) {
  let value = "";
  let current = index;

  while (current >= 0) {
    value = String.fromCharCode((current % 26) + 65) + value;
    current = Math.floor(current / 26) - 1;
  }

  return value;
}

function loadStrings() {
  const source = fs.readFileSync(stringsFile, "utf8");
  const executableSource = source
    .replace(/^const strings =/m, "module.exports =")
    .replace(/^export type .*$/gm, "")
    .replace(/^export default strings;?$/gm, "");

  const sandbox = {
    module: { exports: {} },
    exports: {},
  };

  vm.runInNewContext(executableSource, sandbox, { filename: stringsFile });

  return sandbox.module.exports;
}

function validateStrings(strings) {
  const referenceKeys = Object.keys(strings.ja || {});

  if (!referenceKeys.length) {
    throw new Error("No i18n keys found in strings.ja");
  }

  exportLocales.forEach((locale) => {
    if (!strings[locale.key]) {
      throw new Error(`Missing locale: ${locale.key}`);
    }

    const localeKeys = Object.keys(strings[locale.key]);
    const missingKeys = referenceKeys.filter(
      (key) => !(key in strings[locale.key])
    );
    const extraKeys = localeKeys.filter((key) => !referenceKeys.includes(key));

    if (missingKeys.length) {
      throw new Error(
        `Locale ${locale.key} is missing keys: ${missingKeys.join(", ")}`
      );
    }

    if (extraKeys.length) {
      throw new Error(
        `Locale ${locale.key} has extra keys: ${extraKeys.join(", ")}`
      );
    }
  });

  return referenceKeys;
}

function buildSheetXml(rows) {
  const rowXml = rows
    .map((row, rowIndex) => {
      const cellXml = row
        .map((cellValue, cellIndex) => {
          const reference = `${getColumnName(cellIndex)}${rowIndex + 1}`;
          const value = xmlEscape(cellValue);

          return `<c r="${reference}" t="inlineStr"><is><t xml:space="preserve">${value}</t></is></c>`;
        })
        .join("");

      return `<row r="${rowIndex + 1}">${cellXml}</row>`;
    })
    .join("");

  const lastColumn = getColumnName(rows[0].length - 1);
  const lastRow = rows.length;

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <dimension ref="A1:${lastColumn}${lastRow}"/>
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <sheetData>${rowXml}</sheetData>
</worksheet>
`;
}

function buildWorkbookFiles(sheetXml) {
  return {
    "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
`,
    "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
`,
    "docProps/app.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Codex</Application>
  <TitlesOfParts>
    <vt:vector size="1" baseType="lpstr">
      <vt:lpstr>i18n</vt:lpstr>
    </vt:vector>
  </TitlesOfParts>
  <HeadingPairs>
    <vt:vector size="2" baseType="variant">
      <vt:variant>
        <vt:lpstr>Worksheets</vt:lpstr>
      </vt:variant>
      <vt:variant>
        <vt:i4>1</vt:i4>
      </vt:variant>
    </vt:vector>
  </HeadingPairs>
</Properties>
`,
    "docProps/core.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>i18n Export</dc:title>
  <dc:creator>Codex</dc:creator>
  <cp:lastModifiedBy>Codex</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:modified>
</cp:coreProperties>
`,
    "xl/workbook.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="i18n" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>
`,
    "xl/_rels/workbook.xml.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>
`,
    "xl/worksheets/sheet1.xml": sheetXml,
  };
}

function writeWorkbook(files) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "i18n-export-"));

  try {
    Object.entries(files).forEach(([relativePath, content]) => {
      const targetPath = path.join(tempDir, relativePath);
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.writeFileSync(targetPath, content, "utf8");
    });

    if (fs.existsSync(outputFile)) {
      fs.unlinkSync(outputFile);
    }

    execFileSync("zip", ["-q", "-r", outputFile, "."], { cwd: tempDir });
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function stageOutputFile() {
  execFileSync("git", ["add", outputFile], { cwd: projectRoot });
}

function hasStagedI18nChanges() {
  const output = execFileSync(
    "git",
    ["diff", "--name-only", "--cached", "--", "src/i18n"],
    {
      cwd: projectRoot,
      encoding: "utf8",
    }
  );

  return (
    output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean).length > 0
  );
}

function generateExport() {
  const strings = loadStrings();
  const keys = validateStrings(strings);

  const headerRow = ["key", ...exportLocales.map((locale) => locale.label)];
  const rows = [
    headerRow,
    ...keys.map((key) => [
      key,
      ...exportLocales.map((locale) => strings[locale.key][key]),
    ]),
  ];

  const sheetXml = buildSheetXml(rows);
  const files = buildWorkbookFiles(sheetXml);
  writeWorkbook(files);
  return rows.length - 1;
}

function runOnce({ stageFile }) {
  const keyCount = generateExport();

  if (stageFile) {
    stageOutputFile();
  }

  notify("smart-fan i18n", `Updated i18n_export.xlsx (${keyCount} keys)`);
}

function main() {
  if (isStagedOnlyMode) {
    if (!hasStagedI18nChanges()) {
      return;
    }

    runOnce({ stageFile: true });
    return;
  }

  runOnce({ stageFile: false });

  if (!isWatchMode) {
    return;
  }

  notify("smart-fan i18n", "Watching src/i18n/strings.ts for changes");

  let timer = null;
  fs.watch(stringsFile, () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try {
        runOnce({ stageFile: false });
      } catch (error) {
        notify("smart-fan i18n", `Export failed: ${error.message}`);
      }
    }, 200);
  });
}

try {
  main();
} catch (error) {
  notify("smart-fan i18n", `Export failed: ${error.message}`);
  process.exit(1);
}
