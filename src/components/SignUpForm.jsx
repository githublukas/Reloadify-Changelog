'use client'

import { useId } from 'react'

import { Button } from '@/components/Button'
import { useLocale } from '@/components/LocaleProvider'

export function SignUpForm() {
  let id = useId()
  let { dictionary: dict } = useLocale()

  return (
    <form className="relative isolate mt-8 flex items-center pr-1">
      <label htmlFor={id} className="sr-only">
        {dict.signup.placeholder}
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        id={id}
        placeholder={dict.signup.placeholder}
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-hidden dark:text-white dark:placeholder:text-gray-500 sm:text-[0.8125rem]/6"
      />
      <Button type="submit" arrow>
        {dict.signup.button}
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-teal-500/15 dark:peer-focus:ring-lime-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-gray-900/5 ring-1 ring-gray-900/10 transition peer-focus:ring-teal-500 dark:bg-white/2.5 dark:ring-white/15 dark:peer-focus:ring-lime-300" />
    </form>
  )
}
