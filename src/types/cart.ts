export interface CartItem {
  id: string
  title: string
  image: string
  price: number
  originalPrice?: number
  quantity: number
  instructor: string
  category: string
  rating: number
  reviewCount: number
}

export interface CartState {
  items: CartItem[]
  subtotal: number
  discount: number
  total: number
  couponCode?: string
  appliedCoupon?: {
    code: string
    discount: number
    type: "percentage" | "fixed"
  }
}

export interface Coupon {
  code: string
  discount: number
  type: "percentage" | "fixed"
  minAmount?: number
  maxDiscount?: number
  isActive: boolean
}
