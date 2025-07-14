export interface Product {
  id: string
  title: string
  slug: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  badge?: string
  badgeColor?: string
  description: string
  createdAt: string
  updatedAt: string
  tags: string[]
  language: string
  author?: string
  format: string // PDF, Video, Audio, etc.
  pages?: number
  duration?: string
  fileSize?: string
}

export interface ProductFilterState {
  category: string
  language: string
  price: string
  rating: string
  search: string
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  count: number
}

export interface ProductLanguage {
  id: string
  name: string
  code: string
  count: number
}