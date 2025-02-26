import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./i18n/en.json";
import translationID from "./i18n/id.json";

const resources = {
  en: {
    translation: translationEN,
  },
  id: {
    translation: translationID,
  },
};

i18n.use(initReactI18next).init({
  resources,
  Ing: "en",
  fallbackLng: "en",
  Interpolation: {
    escapeValue: false,
  },
});
export default i18n;
