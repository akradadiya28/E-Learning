"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Minus, Plus, X, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { CartState } from "@/types/cart"
import { sampleCartItems, availableCoupons } from "@/data/cartData"
import Link from "next/link"

const CartContent = () => {
  const [cartState, setCartState] = useState<CartState>({
    items: sampleCartItems,
    subtotal: 0,
    discount: 0,
    total: 0,
  })

  const [couponCode, setCouponCode] = useState("")
  const [couponError, setCouponError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Calculate totals
  useEffect(() => {
    const subtotal = cartState.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const total = subtotal - cartState.discount

    setCartState((prev) => ({
      ...prev,
      subtotal,
      total: Math.max(0, total),
    }))
  }, [cartState.items, cartState.discount])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartState((prev) => ({
      ...prev,
      items: prev.items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)),
    }))
  }

  const removeItem = (id: string) => {
    setCartState((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }))
  }

  const clearCart = () => {
    setCartState((prev) => ({
      ...prev,
      items: [],
      discount: 0,
      appliedCoupon: undefined,
    }))
    setCouponCode("")
  }

  const applyCoupon = () => {
    setCouponError("")
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const coupon = availableCoupons.find((c) => c.code.toLowerCase() === couponCode.toLowerCase() && c.isActive)

      if (!coupon) {
        setCouponError("Invalid coupon code")
        setIsLoading(false)
        return
      }

      if (coupon.minAmount && cartState.subtotal < coupon.minAmount) {
        setCouponError(`Minimum order amount is $${coupon.minAmount}`)
        setIsLoading(false)
        return
      }

      let discount = 0
      if (coupon.type === "percentage") {
        discount = (cartState.subtotal * coupon.discount) / 100
        if (coupon.maxDiscount) {
          discount = Math.min(discount, coupon.maxDiscount)
        }
      } else {
        discount = coupon.discount
      }

      setCartState((prev) => ({
        ...prev,
        discount,
        appliedCoupon: coupon,
        couponCode,
      }))

      setCouponCode("")
      setIsLoading(false)
    }, 1000)
  }

  const removeCoupon = () => {
    setCartState((prev) => ({
      ...prev,
      discount: 0,
      appliedCoupon: undefined,
      couponCode: undefined,
    }))
  }

  if (cartState.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center py-16">
          <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like you haven&apos;t added any courses to your cart yet.
          </p>
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href="/courses">Browse Courses</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
              <div className="lg:col-span-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">My Cart</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {cartState.items.length} {cartState.items.length === 1 ? "item" : "items"} in your cart
              </p>
            </div>
            <Button
              onClick={clearCart}
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 bg-transparent"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
          {/* Desktop Table Header */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
            <div className="col-span-6 text-sm font-semibold text-gray-900 dark:text-white">Product</div>
            <div className="col-span-2 text-sm font-semibold text-gray-900 dark:text-white text-center">Price</div>
            <div className="col-span-2 text-sm font-semibold text-gray-900 dark:text-white text-center">Quantity</div>
            <div className="col-span-2 text-sm font-semibold text-gray-900 dark:text-white text-center">Subtotal</div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4 md:space-y-6">
            {cartState.items.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-0 md:bg-transparent md:shadow-none md:border-0"
              >
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex gap-4 mb-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">by {item.instructor}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-purple-600">${item.price.toFixed(2)}</span>
                        {item.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center py-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                  <div className="col-span-6 flex items-center gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">by {item.instructor}</p>
                    </div>
                  </div>

                  <div className="col-span-2 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-purple-600">${item.price.toFixed(2)}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center justify-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="col-span-1 text-center font-bold text-gray-900 dark:text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <div className="col-span-1 text-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coupon and Clear Cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex flex-col sm:flex-row gap-2 flex-1 max-w-md">
              <Input
                placeholder="Coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={applyCoupon}
                disabled={!couponCode.trim() || isLoading}
                className="bg-purple-600 hover:bg-purple-700 whitespace-nowrap"
              >
                {isLoading ? "Applying..." : "Apply Coupon"}
              </Button>
            </div>
          </div>

          {couponError && <p className="text-red-500 text-sm mt-2">{couponError}</p>}
        </div>

        {/* Cart Totals */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">CART TOTALS</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="font-semibold text-gray-900 dark:text-white">${cartState.subtotal.toFixed(2)}</span>
              </div>

              {cartState.appliedCoupon && (
                <div className="flex justify-between items-center text-green-600">
                  <span className="flex items-center gap-2">
                    Discount ({cartState.appliedCoupon.code})
                    <button onClick={removeCoupon} className="text-red-500 hover:text-red-700">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                  <span className="font-semibold">-${cartState.discount.toFixed(2)}</span>
                </div>
              )}

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                  <span className="text-xl font-bold text-purple-600">${cartState.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3" size="lg">
              Proceed To Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartContent
