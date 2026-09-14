/* eslint-disable no-param-reassign */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CustomRatioPayload } from "@/components/PowderBrandOptionSheet";
import {
  readBrandBannerClicked,
  writeBrandBannerClicked,
} from "@/constant/brandBannerStorage";
import {
  deletePowderBrandEntries,
  entryToSelection,
  readPowderBrandListStore,
  setActivePowderBrandEntryId,
  upsertPowderBrandEntry,
  type PowderBrandEntry,
  type PowderBrandListStore,
} from "@/constant/powderBrandListStorage";
import type { PowderBrandSelection } from "@/constant/powderBrandStorage";
import type { ReduxState } from "..";

interface PowderBrandState {
  entries: PowderBrandEntry[];
  activeId: string | null;
  configured: boolean;
  pendingCustomRatio: CustomRatioPayload | null;
  /** 是否曾點擊過首頁奶粉品牌入口（橘色 → 灰白） */
  brandBannerEverClicked: boolean;
  /** 編輯頁對應的列表項 id；null 表示新增 */
  editingEntryId: string | null;
}

const hydrateFromStorage = (): PowderBrandState => {
  const store = readPowderBrandListStore();
  const active = store.entries.find((e) => e.id === store.activeId) ?? null;
  return {
    entries: store.entries,
    activeId: store.activeId,
    configured: Boolean(active),
    pendingCustomRatio: null,
    brandBannerEverClicked: readBrandBannerClicked(),
    editingEntryId: null,
  };
};

const initialState: PowderBrandState = hydrateFromStorage();

const syncConfigured = (state: PowderBrandState) => {
  const active = state.entries.find((e) => e.id === state.activeId) ?? null;
  state.configured = Boolean(active);
};

const powderBrandSlice = createSlice({
  name: "powderBrand",
  initialState,
  reducers: {
    setPowderBrandSelection(
      state,
      action: PayloadAction<PowderBrandSelection | null>
    ) {
      if (!action.payload) {
        const next = setActivePowderBrandEntryId(null);
        state.entries = next.entries;
        state.activeId = next.activeId;
        syncConfigured(state);
        return;
      }
      upsertPowderBrandEntry(action.payload, state.editingEntryId);
      const store = readPowderBrandListStore();
      state.entries = store.entries;
      state.activeId = store.activeId;
      syncConfigured(state);
    },
    addPowderBrandEntry(state, action: PayloadAction<PowderBrandSelection>) {
      upsertPowderBrandEntry(action.payload, null, { activate: false });
      const store = readPowderBrandListStore();
      state.entries = store.entries;
      syncConfigured(state);
    },
    hydratePowderBrandFromStorage(state) {
      const store = readPowderBrandListStore();
      state.entries = store.entries;
      state.activeId = store.activeId;
      syncConfigured(state);
    },
    setPowderBrandListState(
      state,
      action: PayloadAction<PowderBrandListStore>
    ) {
      state.entries = action.payload.entries;
      state.activeId = action.payload.activeId;
      syncConfigured(state);
    },
    setActiveBrandId(state, action: PayloadAction<string | null>) {
      const next = setActivePowderBrandEntryId(action.payload);
      state.entries = next.entries;
      state.activeId = next.activeId;
      syncConfigured(state);
    },
    removePowderBrandEntries(state, action: PayloadAction<string[]>) {
      const next = deletePowderBrandEntries(action.payload);
      state.entries = next.entries;
      state.activeId = next.activeId;
      syncConfigured(state);
    },
    setPendingCustomRatio(
      state,
      action: PayloadAction<CustomRatioPayload | null>
    ) {
      state.pendingCustomRatio = action.payload;
    },
    markBrandBannerEverClicked(state) {
      state.brandBannerEverClicked = true;
      writeBrandBannerClicked();
    },
    syncBrandBannerEverClicked(state) {
      state.brandBannerEverClicked = readBrandBannerClicked();
    },
    setEditingBrandId(state, action: PayloadAction<string | null>) {
      state.editingEntryId = action.payload;
    },
  },
});

export const {
  setPowderBrandSelection,
  addPowderBrandEntry,
  hydratePowderBrandFromStorage,
  setPowderBrandListState,
  setActiveBrandId,
  removePowderBrandEntries,
  setPendingCustomRatio,
  markBrandBannerEverClicked,
  syncBrandBannerEverClicked,
  setEditingBrandId,
} = powderBrandSlice.actions;

export const selectPowderBrandConfigured = (state: ReduxState) =>
  state.powderBrand.configured;

export const selectPowderBrandEntries = (state: ReduxState) =>
  state.powderBrand.entries;

export const selectActiveBrandId = (state: ReduxState) =>
  state.powderBrand.activeId;

export const selectPowderBrandSelection = (state: ReduxState) => {
  const { entries, activeId } = state.powderBrand;
  const active = entries.find((e) => e.id === activeId);
  return active ? entryToSelection(active) : null;
};

export const selectPendingCustomRatio = (state: ReduxState) =>
  state.powderBrand.pendingCustomRatio;

export const selectBrandBannerEverClicked = (state: ReduxState) =>
  state.powderBrand.brandBannerEverClicked;

export const selectEditingBrandId = (state: ReduxState) =>
  state.powderBrand.editingEntryId;

export default powderBrandSlice.reducer;
