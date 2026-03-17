import { NextResponse } from 'next/server'

const locales = ['en', 'nl', 'de']
const defaultLocale = 'en'

export function middleware(request) {
  let { pathname } = request.nextUrl

  // Check if pathname already has a locale
  let pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // files like favicon.ico
  ) {
    return
  }

  // Detect locale from Accept-Language header
  let acceptLanguage = request.headers.get('accept-language') || ''
  let preferredLocale = defaultLocale

  for (let locale of locales) {
    if (acceptLanguage.toLowerCase().includes(locale)) {
      preferredLocale = locale
      break
    }
  }

  // Redirect to locale-prefixed path
  request.nextUrl.pathname = `/${preferredLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
}
