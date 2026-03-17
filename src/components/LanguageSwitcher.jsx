'use client'

import { usePathname } from 'next/navigation'
import { useLocale } from '@/components/LocaleProvider'
import { locales } from '@/i18n/config'

let localeLabels = {
  en: 'EN',
  nl: 'NL',
  de: 'DE',
}

export function LanguageSwitcher() {
  let { locale: currentLocale } = useLocale()
  let pathname = usePathname()

  function switchLocale(newLocale) {
    // Replace the locale segment in the pathname
    let segments = pathname.split('/')
    segments[1] = newLocale
    window.location.href = segments.join('/')
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`rounded px-1.5 py-0.5 text-xs font-medium transition-colors ${
            locale === currentLocale
              ? 'bg-lime-300/20 text-lime-300'
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  )
}
