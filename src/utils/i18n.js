import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import commonRu from '../locales/ru/common.json'
import homeRu from '../locales/ru/home.json'
import aboutRu from '../locales/ru/about.json'
import missionRu from '../locales/ru/mission.json'
import structureRu from '../locales/ru/structure.json'
import projectsRu from '../locales/ru/projects.json'
import newsRu from '../locales/ru/news.json'
import eventsRu from '../locales/ru/events.json'
import resourcesRu from '../locales/ru/resources.json'
import partnersRu from '../locales/ru/partners.json'
import contactRu from '../locales/ru/contact.json'

import commonEn from '../locales/en/common.json'
import homeEn from '../locales/en/home.json'
import aboutEn from '../locales/en/about.json'
import missionEn from '../locales/en/mission.json'
import structureEn from '../locales/en/structure.json'
import projectsEn from '../locales/en/projects.json'
import newsEn from '../locales/en/news.json'
import eventsEn from '../locales/en/events.json'
import resourcesEn from '../locales/en/resources.json'
import partnersEn from '../locales/en/partners.json'
import contactEn from '../locales/en/contact.json'

import commonKg from '../locales/kg/common.json'
import homeKg from '../locales/kg/home.json'
import aboutKg from '../locales/kg/about.json'
import missionKg from '../locales/kg/mission.json'
import structureKg from '../locales/kg/structure.json'
import projectsKg from '../locales/kg/projects.json'
import newsKg from '../locales/kg/news.json'
import eventsKg from '../locales/kg/events.json'
import resourcesKg from '../locales/kg/resources.json'
import partnersKg from '../locales/kg/partners.json'
import contactKg from '../locales/kg/contact.json'

const resources = {
  ru: {
    common: commonRu,
    home: homeRu,
    about: aboutRu,
    mission: missionRu,
    structure: structureRu,
    projects: projectsRu,
    news: newsRu,
    events: eventsRu,
    resources: resourcesRu,
    partners: partnersRu,
    contact: contactRu,
  },
  en: {
    common: commonEn,
    home: homeEn,
    about: aboutEn,
    mission: missionEn,
    structure: structureEn,
    projects: projectsEn,
    news: newsEn,
    events: eventsEn,
    resources: resourcesEn,
    partners: partnersEn,
    contact: contactEn,
  },
  kg: {
    common: commonKg,
    home: homeKg,
    about: aboutKg,
    mission: missionKg,
    structure: structureKg,
    projects: projectsKg,
    news: newsKg,
    events: eventsKg,
    resources: resourcesKg,
    partners: partnersKg,
    contact: contactKg,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ru',
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en', 'kg'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
