export interface Course {
  id: string
  title: string
  slug: string
  instructor: string
  category: string
  skillLevel: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  students: number
  duration: string
  lessons: number
  language: string
  image: string
  badge?: string
  badgeColor?: string
  description: string
  createdAt: string
  updatedAt: string
  tags: string[]
  features: string[]
}

export interface FilterState {
  category: string
  language: string
  price: string
  skillLevel: string
  instructor: string
  rating: string
  search: string
}

export interface Category {
  id: string
  name: string
  slug: string
  count: number
  icon?: string
}

export interface Instructor {
  id: string
  name: string
  courseCount: number
  avatar?: string
  rating?: number
}
