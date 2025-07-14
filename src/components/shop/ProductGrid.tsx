"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product"

interface ProductGridProps {
  products: Product[]
  viewMode?: "grid" | "list"
}

export function ProductGrid({ products, viewMode = "grid" }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 md:py-16 px-4">
        <div className="text-gray-400 mb-4 md:mb-6">
          <ShoppingCart className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">No products found</h3>
        <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
          Try adjusting your filters to see more results.
        </p>
        <div>
          <Button asChild variant="outline" size="sm" className="md:size-default bg-transparent">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4 md:space-y-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Product Image */}
                <div className="relative w-full lg:w-80 xl:w-96 h-48 md:h-56 lg:h-48 flex-shrink-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 320px, 384px"
                  />
                  {product.badge && (
                    <div className="absolute top-2 md:top-3 left-2 md:left-3">
                      <Badge className={`${product.badgeColor} hover:${product.badgeColor} text-white text-xs shadow-lg`}>
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Product Content */}
                <div className="flex-1 p-4 md:p-6">
                  <div className="flex flex-col h-full">
                    {/* Category Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-50">
                        {product.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 hover:bg-green-50">
                        {product.format}
                      </Badge>
                    </div>

                    {/* Product Title */}
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                      <Link href={`/shop/${product.slug}`}>{product.title}</Link>
                    </h3>

                    {/* Product Description */}
                    <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Product Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                      {product.author && (
                        <span>By {product.author}</span>
                      )}
                      {product.pages && (
                        <span>{product.pages} pages</span>
                      )}
                      {product.duration && (
                        <span>{product.duration}</span>
                      )}
                      {product.fileSize && (
                        <span>{product.fileSize}</span>
                      )}
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mt-auto">
                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviewCount})</span>
                      </div>

                      {/* Price and Actions */}
                      <div className="flex items-center justify-between sm:justify-end gap-4">
                        <div className="text-left sm:text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl md:text-3xl font-bold text-gray-900">
                              ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-base md:text-lg text-gray-500 line-through">
                                ${product.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="p-2">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-orange-500 hover:bg-orange-600 px-4 md:px-6 py-2 font-semibold whitespace-nowrap"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // Grid View
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
        >
          {/* Product Image */}
          <div className="relative overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              width={400}
              height={240}
              className="w-full h-44 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            {product.badge && (
              <div className="absolute top-2 md:top-3 left-2 md:left-3">
                <Badge className={`${product.badgeColor} hover:${product.badgeColor} text-white text-xs shadow-lg`}>
                  {product.badge}
                </Badge>
              </div>
            )}
            
            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Content */}
          <CardContent className="p-4 md:p-5 flex flex-col flex-1">
            {/* Category and Format Badges */}
            <div className="flex flex-wrap items-center gap-1 md:gap-2 mb-2 md:mb-3">
              <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-50">
                {product.category}
              </Badge>
              <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 hover:bg-green-50">
                {product.format}
              </Badge>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 md:w-4 md:h-4 ${
                      i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs md:text-sm text-gray-500 ml-1">({product.reviewCount})</span>
              </div>
            </div>

            {/* Product Title */}
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
              <Link href={`/shop/${product.slug}`}>{product.title}</Link>
            </h3>

            {/* Author */}
            {product.author && (
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 font-medium">By {product.author}</p>
            )}

            {/* Product Meta */}
            <div className="flex items-center gap-2 md:gap-3 text-xs text-gray-500 mb-3 md:mb-4">
              {product.pages && <span>{product.pages} pages</span>}
              {product.duration && <span>{product.duration}</span>}
              {product.fileSize && <span>{product.fileSize}</span>}
            </div>

            {/* Price and Add to Cart Button */}
            <div className="flex items-center justify-between mt-auto pt-2">
              <div className="flex items-center space-x-1 md:space-x-2">
                <span className="text-lg md:text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xs md:text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 font-semibold text-xs md:text-sm px-3 md:px-4"
              >
                <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                Add
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}