import { Routes } from "@ray-js/types";

export const routes: Routes = [
  {
    route: "/",
    path: "/pages/home/index",
    name: "Home",
  },
  {
    route: "/formula",
    path: "/pages/formula/index",
    name: "Formula",
  },
  {
    route: "/formula-details",
    path: "/pages/formula-details/index",
    name: "FormulaDetails",
  },
  {
    route: "/scan-barcode",
    path: "/pages/scan-barcode/index",
    name: "ScanBarcode",
  },
  {
    route: "/enter-barcode",
    path: "/pages/enter-barcode/index",
    name: "EnterBarcode",
  },
  {
    route: "/search-brand",
    path: "/pages/search-brand/index",
    name: "SearchBrand",
  },
  {
    route: "/barcode-result",
    path: "/pages/barcode-result/index",
    name: "BarcodeResult",
  },
  {
    route: "/customize-formula-ratio",
    path: "/pages/customize-formula-ratio/index",
    name: "CustomizeFormulaRatio",
  },
  {
    route: "/powder-brand-settings",
    path: "/pages/powder-brand-settings/index",
    name: "PowderBrandSettings",
  },
  {
    route: "/powder-brand-batch-delete",
    path: "/pages/powder-brand-batch-delete/index",
    name: "PowderBrandBatchDelete",
  },
  {
    route: "/custom-mix-ratio",
    path: "/pages/custom-mix-ratio/index",
    name: "CustomMixRatio",
  },
];
