import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span
      className={clsx(
        'text-xl font-bold font-poppins tracking-tight whitespace-nowrap',
        className,
      )}
    >
      <span className="text-teal">Cascade</span>
      <span> Online Design</span>
    </span>
  )
}
