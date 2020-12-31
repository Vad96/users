import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationUK from "../locales/uk/translation.json";
import translationEN from "../locales/en/translation.json";

const languages = ["en", "uk"];

const resources = {
  en: {
    translation: translationEN,
  },
  uk: {
    translation: translationUK,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    whitelist: languages,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
