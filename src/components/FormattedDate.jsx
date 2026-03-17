'use client'

import { useLocale } from '@/components/LocaleProvider'

let localeMap = {
  en: 'en-US',
  nl: 'nl-NL',
  de: 'de-DE',
}

export function FormattedDate({ date, ...props }) {
  let { locale } = useLocale()
  date = typeof date === 'string' ? new Date(date) : date

  let formatter = new Intl.DateTimeFormat(localeMap[locale] || 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <time dateTime={date.toISOString()} {...props}>
      {formatter.format(date)}
    </time>
  )
}
