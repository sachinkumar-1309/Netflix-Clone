import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18n.use(languageDetector).use(Backend).use(initReactI18next).init({
  debug: true,
  lng: "en",
  returnObjects: true,
});
