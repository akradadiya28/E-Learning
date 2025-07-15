"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2, ShoppingCart, Star, Heart, X } from "lucide-react"
import type { WishlistItem } from "@/types/wishlist"
import { wishlistItems as initialWishlistItems } from "@/data/wishlistData"

export default function WishlistContent() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading from localStorage or API
    setTimeout(() => {
      setWishlistItems(initialWishlistItems)
      setIsLoading(false)
    }, 500)
  }, [])

  const removeFromWishlist = (itemId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== itemId))
  }

  const addToCart = (item: WishlistItem) => {
    // Add to cart logic here
    console.log("Added to cart:", item.title)
    // You can integrate with your cart state management
  }

  const clearWishlist = () => {
    setWishlistItems([])
  }

  if (isLoading) {
    return <WishlistSkeleton />
  }

  if (wishlistItems.length === 0) {
    return <EmptyWishlist />
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Wishlist Items */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">My Wishlist</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} in your wishlist
              </p>
            </div>
            <Button
              onClick={clearWishlist}
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
            <div className="col-span-3 text-sm font-semibold text-gray-900 dark:text-white text-center">
              Add To Cart
            </div>
            <div className="col-span-1 text-sm font-semibold text-gray-900 dark:text-white text-center">Remove</div>
          </div>

          {/* Wishlist Items */}
          <div className="space-y-4 md:space-y-6">
            {wishlistItems.map((item) => (
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
                      <Link href={`/course/${item.slug}`} className="hover:text-purple-600 transition-colors">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2 mb-1">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">by {item.author}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">{item.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">({item.reviewCount})</span>
                        <Badge variant="secondary" className="text-xs px-2 py-0.5 h-auto">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-purple-600">${item.price.toFixed(2)}</span>
                        {item.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button
                      onClick={() => addToCart(item)}
                      className="bg-purple-600 hover:bg-purple-700 text-white w-full"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add To Cart
                    </Button>
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
                      <Link href={`/course/${item.slug}`} className="hover:text-purple-600 transition-colors">
                        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1">{item.title}</h3>
                      </Link>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">by {item.author}</p>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">{item.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({item.reviewCount} reviews)</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-purple-600">${item.price.toFixed(2)}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
                      )}
                      {item.originalPrice && (
                        <span className="text-xs text-green-600 font-medium">
                          Save ${(item.originalPrice - item.price).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-span-3 text-center">
                    <Button onClick={() => addToCart(item)} className="bg-purple-600 hover:bg-purple-700 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add To Cart
                    </Button>
                  </div>
                  <div className="col-span-1 text-center">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wishlist Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">WISHLIST SUMMARY</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Total Items</span>
                <span className="font-semibold text-gray-900 dark:text-white">{wishlistItems.length}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Total Value</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  ${wishlistItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                </span>
              </div>

              {wishlistItems.some((item) => item.originalPrice) && (
                <div className="flex justify-between items-center text-green-600">
                  <span>Total Savings</span>
                  <span className="font-semibold">
                    $
                    {wishlistItems
                      .reduce((sum, item) => sum + (item.originalPrice ? item.originalPrice - item.price : 0), 0)
                      .toFixed(2)}
                  </span>
                </div>
              )}

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <Button
                  onClick={() => {
                    wishlistItems.forEach((item) => addToCart(item))
                    clearWishlist()
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                  size="lg"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add All To Cart
                </Button>
              </div>

              <Button
                onClick={clearWishlist}
                variant="outline"
                className="w-full text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 bg-transparent"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WishlistSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-8"></div>

            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-4 rounded-lg border">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg border">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-32 mb-6"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmptyWishlist() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center py-16">
        <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your wishlist is empty</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Start adding courses to your wishlist to keep track of what you want to learn.
        </p>
        <Button asChild className="bg-purple-600 hover:bg-purple-700">
          <Link href="/courses">Browse Courses</Link>
        </Button>
      </div>
    </div>
  )
}
