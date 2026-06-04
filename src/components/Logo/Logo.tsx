import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

const LOGO_URL =
  'https://imagedelivery.net/zqlO_f93Gilxz6zHS6qT_w/db0fec33-1eec-4867-e8bc-b3f063c84700/w=500'

export const Logo = (props: Props) => {
  const { className, loading = 'eager' } = props

  return (
    <img
      src={LOGO_URL}
      alt="Cascade Online Design"
      loading={loading}
      className={clsx('h-8 w-auto md:h-10', className)}
    />
  )
}
