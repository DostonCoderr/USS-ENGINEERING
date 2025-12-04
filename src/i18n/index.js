// src/i18n/index.js → TO‘G‘RI VA 100% ISHLAYDI!

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Umumiy matnlar (header, hero, services sahifasi sarlavhalari)
import uzTranslation from "../locales/uz/translation.json";
import ruTranslation from "../locales/ru/translation.json";
import enTranslation from "../locales/en/translation.json";

// Xizmatlar (alohida namespace: "services")
import uzServices from "../locales/uz/services.json";
import ruServices from "../locales/ru/services.json";
import enServices from "../locales/en/services.json";


import uzAdvantages from "../locales/uz/advantages.json";
import ruAdvantages from "../locales/ru/advantages.json";
import enAdvantages from "../locales/en/advantages.json";



import uzPortfolio from "../locales/uz/portfolio.json";
import ruPortfolio from "../locales/ru/portfolio.json";
import enPortfolio from "../locales/en/portfolio.json";



import uzReviews from "../locales/uz/reviews.json";
import ruReviews from "../locales/ru/reviews.json";
import enReviews from "../locales/en/reviews.json";


import uzFaq from "../locales/uz/faq.json";
import ruFaq from "../locales/ru/faq.json";
import enFaq from "../locales/en/faq.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: uzTranslation,
        services: uzServices,        
        advantages: uzAdvantages,
        portfolio: uzPortfolio,
        reviews : uzReviews,
        faq: uzFaq
      },
      ru: {
        translation: ruTranslation,
        services: ruServices,
        advantages: ruAdvantages,
        portfolio: ruPortfolio,
        reviews : ruReviews,
        faq: ruFaq
      },
      en: {
        translation: enTranslation,
        services: enServices,
        advantages: enAdvantages,
        portfolio: enPortfolio,
        reviews : enReviews,
        faq: enFaq
      },
    },
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;