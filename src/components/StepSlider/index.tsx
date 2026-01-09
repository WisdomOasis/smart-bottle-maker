import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "@ray-js/ray";
import { Slider } from "@ray-js/components";
import clsx from "clsx";
import styles from "./index.module.less";

interface Props {
  min: number;
  max: number;
  value: number;
  onChange: (val: number) => void;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
}

const StepSlider: React.FC<Props> = ({
  min,
  max,
  value,
  onChange,
  disabled = false,
}) => {
  const trackRef = useRef<any>(null);
  const [trackSize, setTrackSize] = useState({ width: 0, height: 0 });
  const steps = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const stepCount = steps.length;
  const stepIndex = Math.min(Math.max(value - min, 0), stepCount - 1);
  const ratio = Math.max((stepIndex + 1) / stepCount, 0); // fill length steps
  const padding = 4;

  const calcStepFromPos = (clientX: number, rect?: DOMRect) => {
    const width = rect?.width || trackSize.width || 279;
    const left = rect?.left || 0;
    const ratio = Math.min(Math.max((clientX - left) / width, 0), 1);
    const idx = Math.min(
      stepCount - 1,
      Math.max(0, Math.floor(ratio * stepCount))
    );
    return steps[idx];
  };

  const handleInteract = (e: any) => {
    if (disabled) return;
    const clientX =
      e?.origin?.touches?.[0]?.clientX ??
      e?.origin?.changedTouches?.[0]?.clientX ??
      e?.origin?.clientX;
    if (typeof clientX !== "number") return;
    const rect = trackRef.current?.getBoundingClientRect?.();
    const rootLeft = 16 + 24;
    const step = calcStepFromPos(clientX - rootLeft, rect);
    onChange(step);
  };

  useEffect(() => {
    const updateSize = () => {
      const rect = trackRef.current?.getBoundingClientRect?.();
      if (!rect) return;
      setTrackSize({
        width: rect.width,
        height: rect.height,
      });
    };
    updateSize();
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
    return undefined;
  }, [value, min, max]);

  const baseWidth = trackSize.width || 279;
  const baseHeight = trackSize.height || 60;
  const innerWidth = Math.max(baseWidth - padding * 2, 0);
  const innerHeight = Math.max(baseHeight - padding * 2, 0);
  const fillWidthPx = innerWidth * ratio;
  const fillHeightPx = innerHeight;
  const thumbHeightPx = 44;
  const thumbLeftPx = padding + fillWidthPx - 4;
  const thumbTopPx = Math.max((baseHeight - thumbHeightPx) / 2, 0);

  return (
    <View className={styles.stepSliderWrapper}>
      <View
        className={clsx(styles.track, disabled && styles.trackDisabled)}
        ref={trackRef}
      >
        <View className={styles.dots} style={{ zIndex: disabled ? 0 : 1 }}>
          {steps.map((step, idx) => {
            const leftPercent =
              (stepCount === 0 ? 0.5 : (2 * idx + 1) / (stepCount * 2)) * 100;
            return (
              <View
                key={step}
                className={styles.dot}
                style={{ left: `${leftPercent}%` }}
              />
            );
          })}
        </View>
        <View
          className={styles.fill}
          style={{
            width: `${fillWidthPx}px`,
            height: `${fillHeightPx}px`,
            left: `${padding}px`,
            top: `${padding}px`,
          }}
        />
        <View
          className={clsx(styles.thumb, disabled && styles.thumbDisabled)}
          style={{
            left: `${thumbLeftPx}px`,
            top: `${thumbTopPx}px`,
          }}
        >
          <Text className={styles.thumbText}>{value}</Text>
        </View>
      </View>

      <View className={styles.nativeSliderWrapper}>
        <Slider
          step={1}
          min={1}
          max={stepCount}
          value={value}
          disabled={disabled}
          activeColor="#59b9ff"
          blockColor="#f2f9ff"
          onChange={(e: any) => {
            if (disabled) return;
            const next = Number(e?.value ?? value);
            if (!Number.isNaN(next)) onChange(next);
          }}
          style={{ opacity: 0 }}
        />
      </View>
    </View>
  );
};

export default StepSlider;
