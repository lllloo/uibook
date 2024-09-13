import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...value: ClassValue[]) => {
  return twMerge(clsx(value))
}

/**
 * Base classes for components
 */
export const baseCva: string[] = [
  'focus-visible:ring-ring focus:ring-ring',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  'transition-colors',
  'disabled:pointer-events-none disabled:opacity-50'
]
