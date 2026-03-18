import Link from 'next/link'
import clsx from 'clsx'

export function IconLink({
  children,
  className,
  compact = false,
  icon: Icon,
  ...props
}) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-gray-400 transition-colors hover:text-teal-600 dark:text-white/30 dark:hover:text-lime-300',
        compact ? 'gap-x-2' : 'gap-x-3',
      )}
    >
      <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-gray-900/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-white/5" />
      {Icon && <Icon className="h-4 w-4 flex-none" />}
      <span className="self-baseline text-gray-700 dark:text-white">{children}</span>
    </Link>
  )
}
