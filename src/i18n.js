import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import { en } from './locale'
import { es } from './locale'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      es
    },
    lng: "es",
    fallbackLng: "es",

    interpolation: {
      escapeValue: false
    }
  });


export default i18n;