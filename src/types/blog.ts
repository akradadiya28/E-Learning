export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  category: string
  readTime: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  featured: boolean
  fullContent?: string
}

export interface BlogFilters {
  search: string
  category: string
  author: string
  tag: string
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  count: number
}