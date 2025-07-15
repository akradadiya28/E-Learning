export interface Event {
  id: string
  title: string
  slug: string
  description: string
  image: string
  date: string
  location: string
  category: string
  featured: boolean
  createdAt: string
  updatedAt: string
  tags: string[]
}

export interface EventFilters {
  search: string
  category: string
  location: string
  date: string
}

export interface EventCategory {
  id: string
  name: string
  slug: string
  count: number
}