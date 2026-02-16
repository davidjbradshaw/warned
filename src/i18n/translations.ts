import type { Language } from './config';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.events': 'Events',
    'nav.calendar': 'Calendar',
    'nav.give': 'Give',
    'nav.join': 'Join',
    'nav.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.contact': 'Contact',
    'site.title': 'WARNED - We Are Retired Not Expired',
    'site.tagline': 'We Are Retired Not Expired',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.events': 'Événements',
    'nav.calendar': 'Calendrier',
    'nav.give': 'Donner',
    'nav.join': 'Adhérer',
    'nav.contact': 'Contact',
    'footer.followUs': 'Suivez-nous',
    'footer.contact': 'Contact',
    'site.title': 'WARNED - Nous Sommes Retraités Mais Pas Expirés',
    'site.tagline': 'Nous Sommes Retraités Mais Pas Expirés',
  },
  nl: {
    'nav.home': 'Home',
    'nav.events': 'Evenementen',
    'nav.calendar': 'Kalender',
    'nav.give': 'Geven',
    'nav.join': 'Meedoen',
    'nav.contact': 'Contact',
    'footer.followUs': 'Volg Ons',
    'footer.contact': 'Contact',
    'site.title': 'WARNED - Wij Zijn Gepensioneerd Niet Verlopen',
    'site.tagline': 'Wij Zijn Gepensioneerd Niet Verlopen',
  },
};

export function t(lang: Language, key: string): string {
  return translations[lang][key] || key;
}
