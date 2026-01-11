import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";

// Configuration des traductions
const resources = {
  en: translationEN,
  fr: translationFR,
};

i18n
  .use(initReactI18next) // Passe i18n à react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "fr", // Langue par défaut
    fallbackLng: "fr", // Langue de secours
    interpolation: {
      escapeValue: false, // React protège déjà contre XSS
    },
  });

export default i18n;
