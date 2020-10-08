import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const languages = ['pt-BR', 'en-US'];

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  .use(Backend)
  // learn more: https://github.com/i18next/i18next-http-backend
  // detect user language
  .use(LanguageDetector)
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'pt-BR',
    debug: false,
    supportedLngs: languages,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },

    react: {
      wait: true,
      useSuspense: false
    }
  });

export default i18n;
