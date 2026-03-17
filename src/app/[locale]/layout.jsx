import { Providers } from '@/app/[locale]/providers'
import { LocaleProvider } from '@/components/LocaleProvider'
import { getDictionary } from '@/i18n/getDictionary'
import { locales } from '@/i18n/config'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  let { locale } = await params
  let dict = await getDictionary(locale)

  return {
    title: "Reloadify Changelog - What's new",
    description: dict.intro.description,
    alternates: {
      types: {
        'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/feed.xml`,
      },
    },
  }
}

export default async function LocaleLayout({ children, params }) {
  let { locale } = await params
  let dict = await getDictionary(locale)

  return (
    <LocaleProvider locale={locale} dictionary={dict}>
      <Providers>{children}</Providers>
    </LocaleProvider>
  )
}
