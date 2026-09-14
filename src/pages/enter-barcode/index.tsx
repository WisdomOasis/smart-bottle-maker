import React, { useCallback, useState } from "react";
import clsx from "clsx";
import { View, Text, Image, router } from "@ray-js/ray";
import { Input } from "@ray-js/components";
import BarcodeScanCover from "@/components/BarcodeScanCover";
import { POWDER_BRAND_SHEET_ICONS } from "@/components/PowderBrandOptionSheet/icons";
import { writeBarcodeResult } from "@/constant/barcodeResultStorage";
import { goToBarcodeResultPage } from "@/hooks/useBarcodeScanLauncher";
import { IC_BACK_URI } from "@/res/icBackUri";
import Strings from "@/i18n";
import type { I18nKey } from "@/i18n/strings";
import { useAppDispatch } from "@/redux";
import { setEditingBrandId } from "@/redux/modules/powderBrandSlice";
import { lookupBarcodeFormula } from "@/utils/barcodeLookup";
import styles from "./index.module.less";

const readInputValue = (event: unknown): string => {
  if (event == null) return "";
  const e = event as {
    value?: string;
    detail?: { value?: string };
    target?: { value?: string };
  };
  const raw = e.value ?? e.detail?.value ?? e.target?.value ?? "";
  return String(raw);
};

const EnterBarcodePage: React.FC = () => {
  const t = (key: I18nKey) => Strings.getLang(key);
  const dispatch = useAppDispatch();
  const [barcodeValue, setBarcodeValue] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [navigatingToResult, setNavigatingToResult] = useState(false);
  const trimmedValue = barcodeValue.trim();
  const hasInput = trimmedValue.length > 0;
  const searchEnabled = hasInput && !notFound;

  const handleBack = useCallback(() => {
    router.back();
  }, []);

  const handleClear = useCallback(() => {
    setBarcodeValue("");
    setNotFound(false);
  }, []);

  const handleInput = useCallback((event: unknown) => {
    setBarcodeValue(readInputValue(event));
    setNotFound(false);
  }, []);

  const handleSearch = useCallback(() => {
    if (!searchEnabled) return;
    const match = lookupBarcodeFormula(trimmedValue);
    if (match) {
      setNotFound(false);
      setNavigatingToResult(true);
      writeBarcodeResult(match);
      goToBarcodeResultPage("/enter-barcode");
      return;
    }
    setNotFound(true);
  }, [searchEnabled, trimmedValue]);

  const handleCustomizeFormula = useCallback(() => {
    dispatch(setEditingBrandId(null));
    router.push("/customize-formula-ratio");
  }, [dispatch]);

  return (
    <View className={styles.page}>
      <View className={styles.header}>
        <View className={styles.backBtn} onClick={handleBack}>
          <Image src={IC_BACK_URI} className={styles.backIcon} />
        </View>
        <Text className={styles.headerTitle}>{t("barcode_enter_barcode")}</Text>
        <View className={styles.headerSpacer} />
      </View>

      <View className={styles.content}>
        <View className={styles.card}>
          <Text className={styles.hintText}>{t("barcode_reference_hint")}</Text>

          <View className={styles.inputBlock}>
            <View
              className={clsx(
                styles.inputRow,
                notFound && styles.inputRowError
              )}
            >
              <Input
                className={styles.input}
                style={{ background: "transparent", border: "none" }}
                type="number"
                value={barcodeValue}
                placeholder={t("barcode_input_placeholder")}
                placeholderStyle="color: #868EAA; font-size: 16px;"
                confirmType="search"
                onInput={handleInput}
                onConfirm={handleSearch}
              />
              {barcodeValue.length > 0 ? (
                <View className={styles.clearBtn} onClick={handleClear}>
                  <Image
                    src={POWDER_BRAND_SHEET_ICONS.clear}
                    className={styles.clearIcon}
                  />
                </View>
              ) : null}
            </View>
            {notFound ? (
              <Text className={styles.errorText}>{t("barcode_not_found")}</Text>
            ) : null}
          </View>

          <View
            className={clsx(
              styles.btnSearch,
              !searchEnabled && styles.btnSearchDisabled
            )}
            onClick={searchEnabled ? handleSearch : undefined}
          >
            <Text className={styles.btnSearchText}>{t("barcode_search")}</Text>
          </View>

          {notFound ? (
            <Text className={styles.footerLink}>
              <Text className={styles.footerLinkMuted}>
                {t("barcode_customize_prompt")}
              </Text>
              <Text
                className={styles.footerLinkAction}
                onClick={handleCustomizeFormula}
              >
                {t("barcode_customize_link")}
              </Text>
            </Text>
          ) : null}
        </View>
      </View>

      <BarcodeScanCover visible={navigatingToResult} />
    </View>
  );
};

export default EnterBarcodePage;
