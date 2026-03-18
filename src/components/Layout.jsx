import { useId } from 'react'
import Image from 'next/image'

import { Intro, IntroFooter } from '@/components/Intro'
import { ThemeToggle } from '@/components/ThemeToggle'
import swooshA from '@/images/swoosh-a.svg'

function Timeline() {
  let id = useId()

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg lg:overflow-visible">
      <svg
        className="absolute top-0 left-[max(0px,calc(50%-18.125rem))] h-full w-1.5 lg:left-full lg:ml-1 xl:right-1 xl:left-auto xl:ml-0"
        aria-hidden="true"
      >
        <defs>
          <pattern id={id} width="6" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M0 0H6M0 8H6"
              className="stroke-gray-200 xl:stroke-gray-200 dark:stroke-white/10"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}

function SidebarBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white dark:bg-teal-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg">
      {/* Swoosh left */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-[60%] min-w-[400px] scale-[1.2] rotate-12 pointer-events-none dark:opacity-20">
        <Image src={swooshA} alt="" aria-hidden="true" className="w-full object-fill" />
      </div>
      {/* Swoosh right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[60%] min-w-[400px] scale-x-[-1.2] scale-y-[1.2] -rotate-12 pointer-events-none dark:opacity-20">
        <Image src={swooshA} alt="" aria-hidden="true" className="w-full object-fill" />
      </div>
      <div className="absolute inset-x-0 right-0 bottom-0 h-px bg-gray-200 dark:bg-white/10 lg:top-0 lg:left-auto lg:h-auto lg:w-px" />
    </div>
  )
}

function FixedSidebar({ main, footer }) {
  return (
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <SidebarBackground />
      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg lg:overflow-x-hidden lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:py-20">
            <div className="relative">
              {main}
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout({ children }) {
  return (
    <>
      <FixedSidebar main={<Intro />} footer={<IntroFooter />} />
      <ThemeToggle />
      <div className="relative flex-auto">
        <Timeline />
        <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
          {children}
        </main>
      </div>
    </>
  )
}
