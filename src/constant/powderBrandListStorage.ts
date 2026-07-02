import {
  POWDER_BRAND_STORAGE_KEY,
  type PowderBrandSelection,
} from "@/constant/powderBrandStorage";

export const POWDER_BRAND_LIST_STORAGE_KEY = "smart_bottle_powder_brand_list";

export interface PowderBrandEntry extends PowderBrandSelection {
  id: string;
}

export interface PowderBrandListStore {
  entries: PowderBrandEntry[];
  activeId: string | null;
}

type TyStorage = {
  getStorageSync?: (o: { key: string }) => unknown;
  setStorageSync?: (o: { key: string; data: unknown }) => void;
};

const getTy = (): TyStorage | undefined =>
  (globalThis as { ty?: TyStorage }).ty;

const readStorage = <T>(key: string): T | null => {
  try {
    const res = getTy()?.getStorageSync?.({ key });
    const data =
      res && typeof res === "object" && "data" in res
        ? (res as { data: unknown }).data
        : res;
    return (data as T) ?? null;
  } catch {
    return null;
  }
};

const writeStorage = (key: string, data: unknown): void => {
  try {
    getTy()?.setStorageSync?.({ key, data });
  } catch {
    /* ignore */
  }
};

export const createPowderBrandEntryId = (): string =>
  `pb_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

export const entryToSelection = (
  entry: PowderBrandEntry
): PowderBrandSelection => {
  const selection = { ...entry };
  delete (selection as Partial<PowderBrandEntry>).id;
  return selection as PowderBrandSelection;
};

const isValidSelection = (value: unknown): value is PowderBrandSelection => {
  if (!value || typeof value !== "object") return false;
  const s = value as PowderBrandSelection;
  return Boolean(s.brandId && s.seriesId && s.stageId);
};

const migrateLegacyStore = (): PowderBrandListStore => {
  const legacy = readStorage<PowderBrandSelection>(POWDER_BRAND_STORAGE_KEY);
  if (!isValidSelection(legacy)) {
    return { entries: [], activeId: null };
  }
  const entry: PowderBrandEntry = {
    ...legacy,
    id: createPowderBrandEntryId(),
  };
  const store = { entries: [entry], activeId: entry.id };
  writePowderBrandListStore(store);
  return store;
};

export const readPowderBrandListStore = (): PowderBrandListStore => {
  const stored = readStorage<PowderBrandListStore>(
    POWDER_BRAND_LIST_STORAGE_KEY
  );
  if (stored?.entries?.length) {
    return {
      entries: stored.entries.filter((e) => isValidSelection(e) && e.id),
      activeId: stored.activeId ?? null,
    };
  }
  return migrateLegacyStore();
};

export const writePowderBrandListStore = (
  store: PowderBrandListStore
): void => {
  writeStorage(POWDER_BRAND_LIST_STORAGE_KEY, store);
  const active = store.entries.find((e) => e.id === store.activeId) ?? null;
  if (active) {
    writeStorage(POWDER_BRAND_STORAGE_KEY, entryToSelection(active));
  } else {
    writeStorage(POWDER_BRAND_STORAGE_KEY, null);
  }
};

export const getActivePowderBrandEntry = (): PowderBrandEntry | null => {
  const store = readPowderBrandListStore();
  if (!store.activeId) return null;
  return store.entries.find((e) => e.id === store.activeId) ?? null;
};

export const upsertPowderBrandEntry = (
  selection: PowderBrandSelection,
  entryId?: string | null
): PowderBrandEntry => {
  const store = readPowderBrandListStore();
  if (entryId) {
    const idx = store.entries.findIndex((e) => e.id === entryId);
    const entry: PowderBrandEntry = { ...selection, id: entryId };
    if (idx >= 0) {
      store.entries[idx] = entry;
    } else {
      store.entries.push(entry);
    }
    store.activeId = entryId;
    writePowderBrandListStore(store);
    return entry;
  }

  const entry: PowderBrandEntry = {
    ...selection,
    id: createPowderBrandEntryId(),
  };
  store.entries.push(entry);
  store.activeId = entry.id;
  writePowderBrandListStore(store);
  return entry;
};

export const setActivePowderBrandEntryId = (
  activeId: string | null
): PowderBrandListStore => {
  const store = readPowderBrandListStore();
  if (activeId && !store.entries.some((e) => e.id === activeId)) {
    return store;
  }
  const next = { ...store, activeId };
  writePowderBrandListStore(next);
  return next;
};

export const deletePowderBrandEntries = (
  ids: string[]
): PowderBrandListStore => {
  const store = readPowderBrandListStore();
  const idSet = new Set(ids);
  const entries = store.entries.filter((e) => !idSet.has(e.id));
  let { activeId } = store;
  if (activeId && idSet.has(activeId)) {
    activeId = null;
  }
  const next = { entries, activeId };
  writePowderBrandListStore(next);
  return next;
};

export const findPowderBrandEntry = (
  id: string | null | undefined
): PowderBrandEntry | null => {
  if (!id) return null;
  const store = readPowderBrandListStore();
  return store.entries.find((e) => e.id === id) ?? null;
};
