import type { Media } from '@/payload-types'

export const image1: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Modern website design displayed on a laptop screen',
}
