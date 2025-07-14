"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product"

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <section>
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Related</h2>
        <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 text-sm font-semibold">
          Products
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <Link href={`/shop-detail/${product.slug}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </Link>
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <Badge className={`${product.badgeColor} hover:${product.badgeColor} text-white text-xs shadow-lg`}>
                    {product.badge}
                  </Badge>
                </div>
              )}
            </div>

            {/* Product Content */}
            <CardContent className="p-4 flex flex-col flex-1">
              {/* Product Title */}
              <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                <Link href={`/shop-detail/${product.slug}`}>{product.title}</Link>
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">({product.reviewCount})</span>
              </div>

              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              <Button
                size="sm"
                className="w-full mt-3 bg-blue-600 hover:bg-blue-700 font-semibold"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}