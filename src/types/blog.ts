export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar: string
    bio: string
  }
  publishedAt: string
  readTime: number
  views: number
  likes: number
  featured: boolean
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  count: number
  color: string
}

export interface BlogTag {
  id: string
  name: string
  slug: string
  count: number
}

export interface BlogFilters {
  search: string
  category: string
  tag: string
  sortBy: string
  page: number
}

export interface BlogSearchParams {
  search?: string
  category?: string
  tag?: string
  sort?: string
  page?: string
}
