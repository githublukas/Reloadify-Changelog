const dictionaries = {
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  nl: () => import('./dictionaries/nl.json').then((m) => m.default),
  de: () => import('./dictionaries/de.json').then((m) => m.default),
}

export function getDictionary(locale) {
  return dictionaries[locale]?.() ?? dictionaries.en()
}
