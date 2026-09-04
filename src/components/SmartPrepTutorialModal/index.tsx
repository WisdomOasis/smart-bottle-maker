/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from "react";
import { View, Text, Image } from "@ray-js/ray";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { SMART_PREP_GUIDE_FRAME_INTERVAL_MS } from "@/constant/smartPrepSetup";
import SMART_PREP_GUIDE_FRAMES from "@/res/smartPrep/guideFrames";
import { IC_FULLSCREEN_WHITE_URI } from "@/res/icFullscreenUri";
import styles from "./index.module.less";

interface Props {
  visible: boolean;
  onLater: () => void;
  onOpenRoutines: () => void;
  onMarkDone: () => void;
}

const STEP_KEYS: I18nKey[] = [
  "smart_prep_tutorial_step_1",
  "smart_prep_tutorial_step_2",
  "smart_prep_tutorial_step_3",
  "smart_prep_tutorial_step_4",
];

/** 螢幕錄影原始比例約 220×480（直式手機） */
const VIDEO_WIDTH = 176;
const VIDEO_HEIGHT = Math.round((VIDEO_WIDTH * 480) / 220);
const FULLSCREEN_WIDTH = 260;
const FULLSCREEN_HEIGHT = Math.round((FULLSCREEN_WIDTH * 480) / 220);

const formatTime = (frameIndex: number, intervalMs: number) => {
  const totalSec = Math.floor((frameIndex * intervalMs) / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${s < 10 ? `0${s}` : s}`;
};

const SmartPrepTutorialModal: React.FC<Props> = ({
  visible,
  onLater,
  onOpenRoutines,
  onMarkDone,
}) => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const [frameIndex, setFrameIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  const frameCount = SMART_PREP_GUIDE_FRAMES.length;
  const progress = frameCount > 1 ? frameIndex / (frameCount - 1) : 0;
  const durationLabel = formatTime(
    Math.max(frameCount - 1, 0),
    SMART_PREP_GUIDE_FRAME_INTERVAL_MS
  );

  useEffect(() => {
    if (!visible) {
      setFrameIndex(0);
      setPlaying(true);
      setFullscreen(false);
      return undefined;
    }
    if (!playing || frameCount === 0) return undefined;
    const timer = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frameCount);
    }, SMART_PREP_GUIDE_FRAME_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [visible, playing, frameCount]);

  if (!visible) return null;

  const frameSrc =
    SMART_PREP_GUIDE_FRAMES[frameIndex] || SMART_PREP_GUIDE_FRAMES[0] || "";

  const renderPhone = (width: number, height: number) => (
    <View
      className={styles.phoneFrame}
      style={{ width: `${width + 8}px`, height: `${height + 8}px` }}
      onClick={() => setPlaying((prev) => !prev)}
    >
      <View className={styles.phoneNotch} />
      <View className={styles.screen}>
        <Image
          className={styles.video}
          src={frameSrc}
          mode="aspectFit"
          style={{ width: `${width}px`, height: `${height}px` }}
        />
        <View
          className={styles.toolbar}
          onClick={(e: { stopPropagation?: () => void }) =>
            e?.stopPropagation?.()
          }
        >
          <View
            className={styles.toolBtn}
            onClick={() => setPlaying((prev) => !prev)}
          >
            <Text className={styles.toolBtnText}>{playing ? "II" : "▶"}</Text>
          </View>
          <Text className={styles.timeText}>
            {formatTime(frameIndex, SMART_PREP_GUIDE_FRAME_INTERVAL_MS)}
          </Text>
          <View className={styles.progressTrack}>
            <View
              className={styles.progressFill}
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </View>
          <Text className={styles.timeText}>{durationLabel}</Text>
          <View
            className={styles.toolBtn}
            onClick={() => setFullscreen((prev) => !prev)}
          >
            {fullscreen ? (
              <Text className={styles.toolBtnText}>x</Text>
            ) : (
              <Image
                src={IC_FULLSCREEN_WHITE_URI}
                className={styles.toolIcon}
                mode="aspectFit"
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View className={styles.overlay}>
      <View
        className={styles.sheet}
        onClick={(e: { stopPropagation?: () => void }) =>
          e?.stopPropagation?.()
        }
      >
        <View className={styles.content}>
          <Text className={styles.title}>{t("smart_prep_tutorial_title")}</Text>

          <View className={styles.guideCard}>
            <View className={styles.videoStage}>
              {renderPhone(VIDEO_WIDTH, VIDEO_HEIGHT)}
            </View>
            <View className={styles.steps}>
              {STEP_KEYS.map((key, index) => {
                const raw = t(key);
                const body = raw.replace(/^\d+\.\s*/, "");
                return (
                  <View key={key} className={styles.stepRow}>
                    <Text className={styles.stepIndex}>{`${index + 1}.`}</Text>
                    <Text className={styles.stepBody}>{body}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View className={styles.doneLink} onClick={onMarkDone}>
            <Text className={styles.doneLinkText}>
              {t("smart_prep_tutorial_done")}
            </Text>
          </View>
        </View>
        <View className={styles.divider} />
        <View className={styles.actions}>
          <View className={styles.btnRow} onClick={onLater}>
            <Text className={styles.btnLaterText}>{t("smart_prep_later")}</Text>
          </View>
          <View className={styles.btnDivider} />
          <View className={styles.btnRow} onClick={onOpenRoutines}>
            <Text className={styles.btnOpenText}>
              {t("smart_prep_open_routines")}
            </Text>
          </View>
        </View>
      </View>

      {fullscreen ? (
        <View
          className={styles.fullscreenOverlay}
          onClick={() => setFullscreen(false)}
        >
          <View
            className={styles.fullscreenStage}
            onClick={(e: { stopPropagation?: () => void }) =>
              e?.stopPropagation?.()
            }
          >
            {renderPhone(FULLSCREEN_WIDTH, FULLSCREEN_HEIGHT)}
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default SmartPrepTutorialModal;
