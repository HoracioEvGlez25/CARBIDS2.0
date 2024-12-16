import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Traducciones
const resources = {
  en: {
    translation: {
      welcome: "Welcome to CARBIDS",
      selectLanguage: "Select your preferred language:",
      selectedLanguage: "Selected language:",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a CARBIDS",
      selectLanguage: "Selecciona tu idioma preferido:",
      selectedLanguage: "Idioma seleccionado:",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue à CARBIDS",
      selectLanguage: "Sélectionnez votre langue préférée :",
      selectedLanguage: "Langue sélectionnée :",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Localization.locale.split('-')[0], // Detecta el idioma del dispositivo
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react ya escapa por defecto
  },
});

export default i18n;
