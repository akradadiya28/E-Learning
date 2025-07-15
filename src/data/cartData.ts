import type { CartItem, Coupon } from "@/types/cart"

export const sampleCartItems: CartItem[] = [
  {
    id: "1",
    title: "Learning JavaScript With Imagination",
    image: "/images/courses/c1.jpg",
    price: 15.0,
    originalPrice: 25.0,
    quantity: 1,
    instructor: "John Doe",
    category: "Programming",
    rating: 4.8,
    reviewCount: 245,
  },
  {
    id: "2",
    title: "Complete React Development Course",
    image: "/images/courses/c2.jpg",
    price: 29.0,
    originalPrice: 49.0,
    quantity: 2,
    instructor: "Jane Smith",
    category: "Web Development",
    rating: 4.9,
    reviewCount: 189,
  },
  {
    id: "3",
    title: "Advanced Python Programming",
    image: "/images/courses/c3.jpg",
    price: 35.0,
    originalPrice: 55.0,
    quantity: 1,
    instructor: "Mike Johnson",
    category: "Programming",
    rating: 4.7,
    reviewCount: 156,
  },
]

export const availableCoupons: Coupon[] = [
  {
    code: "SAVE10",
    discount: 10,
    type: "percentage",
    minAmount: 20,
    maxDiscount: 50,
    isActive: true,
  },
  {
    code: "WELCOME5",
    discount: 5,
    type: "fixed",
    minAmount: 15,
    isActive: true,
  },
  {
    code: "STUDENT20",
    discount: 20,
    type: "percentage",
    minAmount: 50,
    maxDiscount: 100,
    isActive: true,
  },
]
