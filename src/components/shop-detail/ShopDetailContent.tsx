"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Plus, Minus } from "lucide-react"
import type { Product } from "@/types/product"
import { ShopDetailTabs } from "./ShopDetailTabs"
import { RelatedProducts } from "./RelatedProducts"

interface ShopDetailContentProps {
  product: Product
  relatedProducts: Product[]
}

export function ShopDetailContent({ product, relatedProducts }: ShopDetailContentProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Mock multiple images for the gallery
  const productImages = [
    product.image,
    product.image,
    product.image,
  ]

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  const handleAddToCart = () => {
    // Add to cart logic
    console.log(`Added ${quantity} of ${product.title} to cart`)
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    console.log(`${isWishlisted ? 'Removed from' : 'Added to'} wishlist: ${product.title}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={productImages[selectedImage] || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
            {product.badge && (
              <div className="absolute top-4 left-4">
                <Badge className={`${product.badgeColor} hover:${product.badgeColor} text-white shadow-lg`}>
                  {product.badge}
                </Badge>
              </div>
            )}
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-2 overflow-x-auto">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 md:w-5 md:h-5 ${
                      i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                (Reviews {product.rating})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl md:text-4xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add To Cart
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={handleWishlist}
                className={`p-3 ${isWishlisted ? 'text-red-500 border-red-500' : ''}`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>

          {/* Product Meta */}
          <div className="space-y-3 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">SKU:</span>
              <span className="text-gray-600">#{product.id}CDP21</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Categories:</span>
              <span className="text-blue-600 hover:underline cursor-pointer">
                {product.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">Tags:</span>
              <div className="flex flex-wrap gap-1">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    {tag}{index < product.tags.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
            {product.format && (
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">Format:</span>
                <span className="text-gray-600">{product.format}</span>
              </div>
            )}
            {product.pages && (
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">Pages:</span>
                <span className="text-gray-600">{product.pages}</span>
              </div>
            )}
            {product.fileSize && (
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">File Size:</span>
                <span className="text-gray-600">{product.fileSize}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <ShopDetailTabs />

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </div>
  )
}