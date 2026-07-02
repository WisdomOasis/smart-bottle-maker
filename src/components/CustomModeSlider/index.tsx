/* eslint-disable react/require-default-props */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { View } from "@ray-js/ray";
import { Slider } from "@ray-js/components";
import clsx from "clsx";
import styles from "./index.module.less";

/** 與原生 Slider 預設 blockSize 一致，拖曳中心範圍才能對齊 */
const NATIVE_BLOCK = 28;
const KNOB_SIZE = 12;
const FILL_PAD = 4;
const MIN_FILL = KNOB_SIZE + FILL_PAD * 2 + 2;
const FALLBACK_TRACK_WIDTH = 310;

interface Props {
  min: number;
  max: number;
  value: number;
  onChange: (val: number) => void;
  step?: number;
  disabled?: boolean;
  snapTo?: number[];
}

type SliderEvent = {
  value?: number;
  detail?: { value?: number };
};

const readSliderValue = (e: SliderEvent, fallback: number) => {
  const raw = e?.value ?? e?.detail?.value ?? fallback;
  const next = Number(raw);
  return Number.isNaN(next) ? fallback : next;
};

const CustomModeSlider: React.FC<Props> = ({
  min,
  max,
  value,
  onChange,
  step = 1,
  disabled = false,
  snapTo,
}) => {
  const safeMax = max > min ? max : min + 1;
  const clamped = Math.min(safeMax, Math.max(min, value));
  const range = safeMax - min;
  const ratio = range > 0 ? (clamped - min) / range : 0;

  const trackRef = useRef<unknown>(null);
  const trackIdRef = useRef(`cms-${Math.random().toString(36).slice(2, 10)}`);
  const [trackWidth, setTrackWidth] = useState(FALLBACK_TRACK_WIDTH);

  const formatValue = useCallback(
    (raw: number) => {
      let v = Math.min(safeMax, Math.max(min, raw));
      if (step > 0) {
        v = Math.round((v - min) / step) * step + min;
      }
      if (snapTo?.length) {
        v = snapTo.reduce((best, cur) =>
          Math.abs(cur - v) < Math.abs(best - v) ? cur : best
        );
      }
      return Math.min(safeMax, Math.max(min, v));
    },
    [min, safeMax, snapTo, step]
  );

  const emit = useCallback(
    (e: SliderEvent, snap: boolean) => {
      if (disabled) return;
      onChange(formatValue(readSliderValue(e, clamped)));
    },
    [clamped, disabled, formatValue, onChange]
  );

  useEffect(() => {
    const measure = () => {
      const node = trackRef.current as {
        getBoundingClientRect?: () => { width?: number };
      } | null;
      const rect = node?.getBoundingClientRect?.();
      if (rect?.width) setTrackWidth(rect.width);
    };

    measure();

    const { ty } = globalThis as { ty?: { createSelectorQuery?: () => any } };
    if (ty?.createSelectorQuery) {
      ty.createSelectorQuery()
        .select(`#${trackIdRef.current}`)
        .boundingClientRect((result: { width?: number } | null) => {
          if (result?.width) setTrackWidth(result.width);
        })
        .exec();
    }

    const timer = setTimeout(measure, 50);

    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("resize", measure);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", measure);
      };
    }
    return () => clearTimeout(timer);
  }, [clamped, min, safeMax]);

  const layout = useMemo(() => {
    const travel = Math.max(0, trackWidth - NATIVE_BLOCK);
    const thumbCenter = NATIVE_BLOCK / 2 + ratio * travel;
    const fillWidth = Math.max(
      MIN_FILL,
      thumbCenter + KNOB_SIZE / 2 + FILL_PAD
    );
    const knobLeft = thumbCenter - KNOB_SIZE / 2;

    return { fillWidth, knobLeft };
  }, [ratio, trackWidth]);

  return (
    <View className={styles.wrapper}>
      <View
        id={trackIdRef.current}
        ref={trackRef}
        className={clsx(styles.track, disabled && styles.trackDisabled)}
      >
        <View
          className={styles.fill}
          style={{ width: `${layout.fillWidth}px` }}
        />
        <View
          className={styles.knob}
          style={{ left: `${layout.knobLeft}px` }}
        />
      </View>

      <View
        className={clsx(
          styles.nativeSliderWrapper,
          disabled && styles.nativeSliderDisabled
        )}
      >
        <Slider
          min={min}
          max={safeMax}
          step={step}
          value={clamped}
          disabled={disabled}
          blockSize={NATIVE_BLOCK}
          activeColor="transparent"
          backgroundColor="transparent"
          blockColor="transparent"
          onChanging={(e) => emit(e, false)}
          onChange={(e) => emit(e, true)}
          style={{ opacity: 0, width: "100%" }}
        />
      </View>
    </View>
  );
};

export default CustomModeSlider;
