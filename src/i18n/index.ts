import { getSystemInfoSync } from "@ray-js/ray";
import { kit } from "@ray-js/panel-sdk";
import strings from "./strings";

const { I18N } = kit;

const Strings = new I18N(strings);

const normalizeLanguage = (language?: string) => {
  if (!language) return "en";

  if (language === "zh-Hant" || language === "zh-TW" || language === "zh-HK") {
    return "zh-TW";
  }

  if (language === "zh-Hans" || language === "zh-CN") {
    return "zh";
  }

  if (language.startsWith("ko")) {
    return "ko";
  }

  if (language.startsWith("th")) {
    return "th";
  }

  if (language.startsWith("ja")) {
    return "ja";
  }

  if (language.startsWith("zh")) {
    return "zh";
  }

  if (language.startsWith("en")) {
    return "en";
  }

  return "en";
};

const systemLanguage = getSystemInfoSync()?.language;
Strings.setLanguage(normalizeLanguage(systemLanguage));

export default Strings;
