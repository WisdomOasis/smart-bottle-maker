#!/usr/bin/env node
/**
 * Reads data/milk-formula-database.xlsx and writes src/data/milkFormulaDatabase.json
 *
 * Column layout is read from the header row.
 * 261010 sheet: O amount/g, P water Default.
 * 0804+ sheet: P amount/g, Q water Default.
 *
 * Merge: existing barcodes not present in the sheet are kept.
 * Overlapping barcodes are replaced by sheet data.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const xlsxPath = path.join(root, "data", "milk-formula-database.xlsx");
const outPath = path.join(root, "src", "data", "milkFormulaDatabase.json");
const pyPath = path.join(root, "scripts", "sync-milk-database.py");

if (!fs.existsSync(xlsxPath)) {
  console.error("Missing:", xlsxPath);
  process.exit(1);
}

const json = execSync(`python3 "${pyPath}" "${xlsxPath}" "${outPath}"`, {
  encoding: "utf8",
  maxBuffer: 50 * 1024 * 1024,
});
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${json.trim()}\n`);
console.log("Wrote", outPath, `(${JSON.parse(json).length} records)`);
