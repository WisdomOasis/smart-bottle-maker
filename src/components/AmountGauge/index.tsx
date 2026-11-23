/* eslint-disable react/require-default-props */
/**
 * AmountGauge — 獨立半圓量測儀表
 * - SVG 弧軌道 + 分段刻度 / step 吸附
 * - 拖曳僅更新本地預覽；鬆手才 onChange（減少 DP 洪水）
 * - 提交後樂觀顯示，直到設備回傳對齊或逾時，避免「跳回舊值再跳新值」
 */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { View, Text, Image } from "@ray-js/ray";
import clsx from "clsx";
import { GAUGE_ARC } from "@/constant/theme";
import { buildGaugeArcImageUri } from "./arcImage";
import {
  getArcImagePadBottom,
  getArcImagePadSide,
  getArcImagePadTop,
  ratioFromArcPoint,
} from "./arcGeometry";
import { buildStepStops, pickTickStops, quantizeValue } from "./quantize";
import styles from "./index.module.less";

/** 設備回傳對齊等待上限（業界常見 2–3s） */
const OPTIMISTIC_HOLD_MS = 2800;

interface Props {
  value: number;
  unit: string;
  label: string;
  min?: number;
  max?: number;
  /** 分段步長：水量 ML_STEP/OZ_STEP、粉量 SCOOP_POWDER_STEP_G */
  step?: number;
  /** 離線或童鎖時禁用；線上弧線與數字均保持不透明 */
  dimmed?: boolean;
  /** 鬆手後回傳已吸附到 step 的數值（寫入設備） */
  onChange?: (value: number) => void;
}

type TouchLike = {
  clientX?: number;
  clientY?: number;
  pageX?: number;
  pageY?: number;
  x?: number;
  y?: number;
};

type TouchEventLike = {
  touches?: TouchLike[];
  changedTouches?: TouchLike[];
  detail?: { x?: number; y?: number };
  preventDefault?: () => void;
  stopPropagation?: () => void;
};

const valuesMatch = (a: number, b: number, step: number): boolean => {
  const eps = step > 0 ? step / 2 : 0.05;
  return Math.abs(a - b) <= eps;
};

const formatRangeUnit = (unit: string) => unit.toLowerCase();

const readTouchPoint = (e: TouchEventLike): { x: number; y: number } | null => {
  const touch = e.touches?.[0] ?? e.changedTouches?.[0];
  if (touch) {
    const x = Number(touch.pageX ?? touch.clientX ?? touch.x);
    const y = Number(touch.pageY ?? touch.clientY ?? touch.y);
    if (Number.isFinite(x) && Number.isFinite(y)) return { x, y };
  }
  if (e.detail && Number.isFinite(e.detail.x) && Number.isFinite(e.detail.y)) {
    return { x: Number(e.detail.x), y: Number(e.detail.y) };
  }
  return null;
};

const AmountGauge: React.FC<Props> = ({
  value,
  unit,
  label,
  min = 0,
  max = 420,
  step = 1,
  dimmed = false,
  onChange,
}) => {
  const interactive = Boolean(onChange) && !dimmed;
  const safeMax = max > min ? max : min + step;
  const range = safeMax - min;
  const propValue = quantizeValue(value, min, safeMax, step);
  const padTop = getArcImagePadTop();
  const padSide = getArcImagePadSide();
  const padBottom = getArcImagePadBottom();
  const svgW = GAUGE_ARC.width + padSide * 2;
  const svgH = GAUGE_ARC.height + padTop + padBottom;

  const stepStops = useMemo(
    () => buildStepStops(min, safeMax, step),
    [min, safeMax, step]
  );
  const tickRatios = useMemo(() => {
    const ticks = pickTickStops(stepStops);
    if (!(range > 0)) return ticks.map(() => 0);
    return ticks.map((v) => (v - min) / range);
  }, [min, range, stepStops]);

  const ringIdRef = useRef(
    `amount-gauge-${Math.random().toString(36).slice(2, 10)}`
  );
  const draggingRef = useRef(false);
  const dragValueRef = useRef(propValue);
  const dragRatioRef = useRef(
    range > 0 ? Math.min(1, Math.max(0, (propValue - min) / range)) : 0
  );
  const pendingRef = useRef<number | null>(null);
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rectRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const [dragging, setDragging] = useState(false);
  const [dragValue, setDragValue] = useState(propValue);
  /** 已提交、等待設備 echo 的樂觀值 */
  const [pendingValue, setPendingValue] = useState<number | null>(null);

  const clearHoldTimer = useCallback(() => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  }, []);

  const clearPending = useCallback(() => {
    clearHoldTimer();
    pendingRef.current = null;
    setPendingValue(null);
  }, [clearHoldTimer]);

  const armOptimisticHold = useCallback(
    (committed: number) => {
      clearHoldTimer();
      pendingRef.current = committed;
      setPendingValue(committed);
      holdTimerRef.current = setTimeout(() => {
        pendingRef.current = null;
        setPendingValue(null);
        holdTimerRef.current = null;
      }, OPTIMISTIC_HOLD_MS);
    },
    [clearHoldTimer]
  );

  /* 設備回傳對齊 → 結束樂觀鎖定 */
  useEffect(() => {
    if (pendingRef.current == null) return;
    if (valuesMatch(propValue, pendingRef.current, step)) {
      clearPending();
    }
  }, [clearPending, propValue, step]);

  /* 外部非本手勢改值（如 Edit 面板）且無 pending：跟進 prop */
  useEffect(() => {
    if (draggingRef.current) return;
    if (pendingRef.current != null) return;
    setDragValue(propValue);
    dragValueRef.current = propValue;
  }, [propValue]);

  useEffect(() => () => clearHoldTimer(), [clearHoldTimer]);

  const displayValue = dragging
    ? dragValue
    : pendingValue != null
    ? pendingValue
    : propValue;

  const arcRatio =
    range > 0 ? Math.min(1, Math.max(0, (displayValue - min) / range)) : 0;
  const unitLabel = formatRangeUnit(unit);
  const arcImageSrc = useMemo(
    () => buildGaugeArcImageUri(arcRatio, { tickRatios }),
    [arcRatio, tickRatios]
  );

  const measureRing = useCallback((): Promise<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null> => {
    return new Promise((resolve) => {
      const { ty } = globalThis as {
        ty?: {
          createSelectorQuery?: () => {
            select: (s: string) => {
              boundingClientRect: (
                cb: (
                  r: {
                    left?: number;
                    top?: number;
                    width?: number;
                    height?: number;
                  } | null
                ) => void
              ) => { exec: (cb?: () => void) => void };
            };
          };
        };
      };

      if (!ty?.createSelectorQuery) {
        resolve(rectRef.current);
        return;
      }

      ty.createSelectorQuery()
        .select(`#${ringIdRef.current}`)
        .boundingClientRect((result) => {
          if (
            result &&
            Number.isFinite(result.left) &&
            Number.isFinite(result.top) &&
            Number.isFinite(result.width) &&
            Number.isFinite(result.height) &&
            (result.width || 0) > 0
          ) {
            const next = {
              left: Number(result.left),
              top: Number(result.top),
              width: Number(result.width),
              height: Number(result.height),
            };
            rectRef.current = next;
            resolve(next);
            return;
          }
          resolve(rectRef.current);
        })
        .exec();
    });
  }, []);

  /** 僅更新本地預覽，不寫設備；並阻擋端點 round-trip 誤跳 */
  const previewFromPagePoint = useCallback(
    (pageX: number, pageY: number) => {
      const rect = rectRef.current;
      if (!rect || !(rect.width > 0)) return;

      const localX = ((pageX - rect.left) / rect.width) * svgW - padSide;
      const localY = ((pageY - rect.top) / rect.height) * svgH - padTop;
      let nextRatio = ratioFromArcPoint(localX, localY);
      const prevRatio = dragRatioRef.current;
      /* 單幀跨越半弧以上視為端點誤判，維持原側 */
      if (Math.abs(nextRatio - prevRatio) > 0.5) {
        nextRatio = prevRatio < 0.5 ? 0 : 1;
      }
      dragRatioRef.current = nextRatio;
      const next = quantizeValue(min + nextRatio * range, min, safeMax, step);
      dragValueRef.current = next;
      setDragValue(next);
    },
    [min, padSide, padTop, range, safeMax, step, svgH, svgW]
  );

  const handleTouchStart = useCallback(
    (e: TouchEventLike) => {
      if (!interactive) return;
      e.stopPropagation?.();
      const point = readTouchPoint(e);
      if (!point) return;
      draggingRef.current = true;
      setDragging(true);
      const startVal =
        pendingValue != null ? pendingValue : dragValueRef.current;
      dragRatioRef.current =
        range > 0 ? Math.min(1, Math.max(0, (startVal - min) / range)) : 0;
      /* 新手勢開始：暫不清除 pending，避免短暫閃舊值；預覽以當前顯示為起點 */
      measureRing().then((rect) => {
        if (!draggingRef.current || !rect) return;
        previewFromPagePoint(point.x, point.y);
      });
    },
    [interactive, measureRing, min, pendingValue, previewFromPagePoint, range]
  );

  const handleTouchMove = useCallback(
    (e: TouchEventLike) => {
      if (!interactive || !draggingRef.current) return;
      e.preventDefault?.();
      e.stopPropagation?.();
      const point = readTouchPoint(e);
      if (!point) return;
      if (!rectRef.current) {
        measureRing().then(() => {
          if (draggingRef.current) previewFromPagePoint(point.x, point.y);
        });
        return;
      }
      previewFromPagePoint(point.x, point.y);
    },
    [interactive, measureRing, previewFromPagePoint]
  );

  const handleTouchEnd = useCallback(
    (e: TouchEventLike) => {
      if (!interactive) return;
      e.stopPropagation?.();
      const point = readTouchPoint(e);
      if (point && rectRef.current) previewFromPagePoint(point.x, point.y);

      const committed = quantizeValue(dragValueRef.current, min, safeMax, step);
      draggingRef.current = false;
      setDragging(false);
      setDragValue(committed);
      dragValueRef.current = committed;

      if (!onChange) return;
      if (!valuesMatch(committed, propValue, step)) {
        armOptimisticHold(committed);
        onChange(committed);
      } else {
        clearPending();
      }
    },
    [
      armOptimisticHold,
      clearPending,
      interactive,
      min,
      onChange,
      previewFromPagePoint,
      propValue,
      safeMax,
      step,
    ]
  );

  return (
    <View
      className={clsx(
        styles.wrap,
        dimmed && styles.dimmed,
        interactive && styles.interactive
      )}
    >
      <View className={styles.card}>
        <View className={styles.arcTrack}>
          <View id={ringIdRef.current} className={styles.arcRing}>
            <Image src={arcImageSrc} className={styles.arcImage} />
            {interactive ? (
              <View
                className={styles.touchLayer}
                // @ts-expect-error Ray catchTouchMove 阻止 ScrollView 搶手勢
                catchTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}
              />
            ) : null}
          </View>

          <View className={styles.arcInner}>
            <View className={styles.gaugeContent}>
              <Text className={styles.label}>{label}</Text>
              <View className={styles.valueRow}>
                <Text className={styles.unitMirror}>{unitLabel}</Text>
                <Text className={styles.value}>{displayValue}</Text>
                <Text className={styles.unit}>{unitLabel}</Text>
              </View>
            </View>
            <View className={styles.rangeBar}>
              <Text className={styles.rangeText}>
                {min}
                {unitLabel}
              </Text>
              <Text className={styles.rangeText}>
                {safeMax}
                {unitLabel}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AmountGauge;
