export interface WishlistItem {
  id: string
  title: string
  slug: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviewCount: number
  author: string
  addedAt: string
}

export interface WishlistState {
  items: WishlistItem[]
  isLoading: boolean
  error: string | null
}
