import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  noPadding?: boolean
}

/**
 * Reusable section container for consistent spacing and layout
 * across all pages. Provides max-width, horizontal padding, and
 * vertical spacing by default.
 */
export default function SectionContainer({
  children,
  className = '',
  noPadding = false,
}: SectionContainerProps) {
  return (
    <section
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        noPadding ? '' : 'py-12 md:py-16 lg:py-20'
      } ${className}`}
    >
      {children}
    </section>
  )
}
