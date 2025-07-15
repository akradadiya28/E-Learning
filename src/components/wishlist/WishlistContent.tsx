"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Trash2, ShoppingCart, Star, Heart } from "lucide-react"
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
    <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
      {/* Wishlist Header */}
      <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">My Wishlist</h2>
          <p className="text-sm sm:text-base text-gray-600">
            {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} in your wishlist
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <Button
            variant="outline"
            onClick={clearWishlist}
            size="sm"
            className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent text-xs sm:text-sm px-3 sm:px-4"
          >
            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Clear All
          </Button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b font-semibold text-gray-700">
            <div className="col-span-1">Image</div>
            <div className="col-span-4">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-3">Add To Cart</div>
            <div className="col-span-2">Remove</div>
          </div>

          {wishlistItems.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
              {/* Image */}
              <div className="col-span-1">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
              </div>

              {/* Product Info */}
              <div className="col-span-4">
                <Link href={`/course/${item.slug}`} className="hover:text-purple-600 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                </Link>
                <p className="text-sm text-gray-600 mb-2">by {item.author}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({item.reviewCount} reviews)</span>
                </div>
                <Badge variant="secondary" className="mt-2">
                  {item.category}
                </Badge>
              </div>

              {/* Price */}
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-purple-600">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                  )}
                </div>
                {item.originalPrice && (
                  <div className="text-sm text-green-600 font-medium">
                    Save ${(item.originalPrice - item.price).toFixed(2)}
                  </div>
                )}
              </div>

              {/* Add to Cart */}
              <div className="col-span-3">
                <Button onClick={() => addToCart(item)} className="bg-purple-600 hover:bg-purple-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add To Cart
                </Button>
              </div>

              {/* Remove */}
              <div className="col-span-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Card View - Optimized for 320px */}
      <div className="lg:hidden space-y-3 sm:space-y-4">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="p-3 sm:p-4">
            <div className="flex gap-3">
              {/* Image - Fixed size for small screens */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>

              {/* Content - Flexible width */}
              <div className="flex-1 min-w-0">
                {/* Title and Remove Button */}
                <div className="flex justify-between items-start mb-1 sm:mb-2">
                  <Link href={`/course/${item.slug}`} className="hover:text-purple-600 transition-colors flex-1 mr-2">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 break-words">
                      {item.title}
                    </h3>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 h-auto min-w-0 flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Author */}
                <p className="text-xs text-gray-600 mb-1 sm:mb-2 truncate">by {item.author}</p>

                {/* Rating and Category */}
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <div className="flex items-center flex-shrink-0">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600 ml-1">{item.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500 hidden xs:inline">({item.reviewCount})</span>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5 h-auto">
                    {item.category}
                  </Badge>
                </div>

                {/* Price and Add to Cart - Stacked on very small screens */}
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-purple-600">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">${item.originalPrice}</span>
                    )}
                  </div>

                  <Button
                    onClick={() => addToCart(item)}
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-1.5 h-auto w-full xs:w-auto"
                  >
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    <span className="whitespace-nowrap">Add To Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function WishlistSkeleton() {
  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="animate-pulse">
        <div className="h-6 sm:h-8 bg-gray-200 rounded w-32 sm:w-48 mb-1 sm:mb-2"></div>
        <div className="h-3 sm:h-4 bg-gray-200 rounded w-24 sm:w-32 mb-6 sm:mb-8"></div>

        <div className="space-y-3 sm:space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-3 sm:p-4 rounded-lg border">
              <div className="flex gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="h-4 sm:h-5 bg-gray-200 rounded w-3/4 mb-1 sm:mb-2"></div>
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2 mb-1 sm:mb-2"></div>
                  <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-6 sm:h-8 bg-gray-200 rounded w-20 sm:w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EmptyWishlist() {
  return (
    <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16">
      <div className="text-center max-w-sm mx-auto">
        <div className="w-16 h-16 sm:w-24 sm:h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Your wishlist is empty</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          Start adding courses to your wishlist to keep track of what you want to learn.
        </p>
        <Link href="/courses">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto">Browse Courses</Button>
        </Link>
      </div>
    </div>
  )
}
