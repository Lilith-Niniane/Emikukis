import i18next from 'i18next';

import navbar_es from '../Translations/Es/Navbar.json'
import navbar_en from '../Translations/En/Navbar.json'
import home_es from '../Translations/Es/Home.json'
import home_en from '../Translations/En/Home.json'
import tos_es from '../Translations/Es/TOS.json'
import tos_en from '../Translations/En/TOS.json'
import faqs_es from '../Translations/Es/Faqs.json'
import faqs_en from '../Translations/En/Faqs.json'
import services_es from '../Translations/Es/Services.json'
import services_en from '../Translations/En/Services.json'
import service_es from '../Translations/Es/Service.json'
import service_en from '../Translations/En/Service.json'

const LocalLanguage = () => {

    const admitedLangs = ['en', 'es']
    let lang = null;
  
    const validateLang = (value) => {
      let tempLang = null
      admitedLangs.forEach(element => {
        if (value == element)
        {
          tempLang = value;
        }
      });
      return tempLang;
    }
  
    const storedLang = window.localStorage.getItem('lang')
    if (storedLang) {
      lang = validateLang(storedLang);
      if (lang) {
        return lang;
      }
    }

    const localLang = navigator.language.split('-')[0]
    lang = validateLang(localLang)
    
    if (lang) {
        return lang
    }

    return 'en'
}

export const InitLanguage = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: LocalLanguage(),
    resources: {
      es: {
        navbar: navbar_es,
        home: home_es,
        tos: tos_es,
        faqs: faqs_es,
        services: services_es,
        service: service_es,
      },
      en: {
        navbar: navbar_en,
        home: home_en,
        tos: tos_en,
        faqs: faqs_en,
        services: services_en,
        service: service_en,
      },
    },
  });
}