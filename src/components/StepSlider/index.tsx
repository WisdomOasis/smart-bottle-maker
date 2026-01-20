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
  const clampedValue = Math.min(Math.max(value, min), max);
  const idx = Math.min(Math.max(clampedValue - min, 0), stepCount - 1);
  const padding = 4;
  const displayText = clampedValue === 0 ? "OFF" : String(clampedValue);
  const baseWidth = trackSize.width || 280;
  const baseHeight = trackSize.height || 60;
  const innerWidth = Math.max(baseWidth - padding * 2, 0);
  const innerHeight = Math.max(baseHeight - padding * 2, 0);
  const thumbHeightPx = 44;
  const thumbWidthPx = 44;
  const ratio = stepCount > 1 ? idx / (stepCount - 1) : 0;
  const gapThumb = 4;
  const dotStart = padding + gapThumb + thumbWidthPx / 2;
  const dotEnd = padding + innerWidth - gapThumb - thumbWidthPx / 2;
  const thumbCenter = dotStart + (dotEnd - dotStart) * ratio;
  const fillWidthPx = Math.max(
    thumbWidthPx + gapThumb * 2,
    Math.min(
      innerWidth,
      thumbCenter -
        thumbWidthPx / 2 -
        gapThumb -
        padding +
        thumbWidthPx +
        gapThumb * 2
    )
  );
  const fillHeightPx = innerHeight;
  const thumbTopPx = Math.max((baseHeight - thumbHeightPx) / 2, 0);
  const thumbLeftPx = thumbCenter - thumbWidthPx / 2;

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

  return (
    <View className={styles.stepSliderWrapper}>
      <View
        className={clsx(styles.track, disabled && styles.trackDisabled)}
        ref={trackRef}
      >
        <View className={styles.dots} style={{ zIndex: disabled ? 0 : 1 }}>
          {steps.map((step, idx) => {
            const posRatio = stepCount > 1 ? idx / (stepCount - 1) : 0;
            const leftPx = dotStart + (dotEnd - dotStart) * posRatio;
            return (
              <View
                key={step}
                className={styles.dot}
                style={{ left: `${leftPx}px` }}
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
          <Text className={styles.thumbText}>{displayText}</Text>
        </View>
      </View>

      <View className={styles.nativeSliderWrapper}>
        <Slider
          step={1}
          min={min}
          max={max}
          value={value}
          disabled={disabled}
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
