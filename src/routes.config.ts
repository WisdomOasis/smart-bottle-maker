import { Routes } from "@ray-js/types";

export const routes: Routes = [
  {
    route: "/",
    path: "/pages/home/index",
    name: "Home",
  },
  {
    route: "/powder-brand",
    path: "/pages/powder-brand/index",
    name: "PowderBrand",
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
