'use client'

import { createContext, useContext } from 'react'

let LocaleContext = createContext({ locale: 'en', dictionary: {} })

export function LocaleProvider({ locale, dictionary, children }) {
  return (
    <LocaleContext.Provider value={{ locale, dictionary }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
