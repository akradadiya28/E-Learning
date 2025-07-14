"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp, Search, X } from "lucide-react"
import type { ProductFilterState, ProductCategory, ProductLanguage } from "@/types/product"

interface ProductFiltersProps {
  filters: ProductFilterState
  categories: ProductCategory[]
  languages: ProductLanguage[]
  basePath?: string
}

export function ProductFilters({
  filters,
  categories,
  languages,
  basePath = "/shop",
}: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    languages: false,
    price: false,
    ratings: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const updateURL = (newFilters: Partial<ProductFilterState>) => {
    const params = new URLSearchParams(searchParams.toString())

    // Update or remove parameters
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== "all" && value !== "") {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    // Remove page parameter when filters change
    params.delete("page")

    const newUrl = params.toString() ? `${basePath}?${params.toString()}` : basePath
    router.push(newUrl)
  }

  const clearAllFilters = () => {
    const clearedFilters: Partial<ProductFilterState> = {
      category: "all",
      language: "all",
      price: "all",
      rating: "all",
      search: "",
    }

    updateURL(clearedFilters)
  }

  const hasActiveFilters = Object.entries(filters).some(([, value]) => {
    return value !== "all" && value !== ""
  })

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Search Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={filters.search}
              onChange={(e) => updateURL({ search: e.target.value })}
              className="pl-10 pr-10"
            />
            {filters.search && (
              <button
                onClick={() => updateURL({ search: "" })}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button variant="outline" onClick={clearAllFilters} className="w-full bg-transparent">
          Clear All Filters
        </Button>
      )}

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("categories")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Categories</CardTitle>
            {expandedSections.categories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CardHeader>
        {expandedSections.categories && (
          <CardContent className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={filters.category === category.slug}
                    onCheckedChange={() => updateURL({ category: category.slug })}
                  />
                  <Label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                    {category.name}
                  </Label>
                </div>
                <span className="text-xs text-gray-500">({category.count})</span>
              </div>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Languages */}
      <Card>
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("languages")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Languages</CardTitle>
            {expandedSections.languages ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CardHeader>
        {expandedSections.languages && (
          <CardContent className="space-y-3">
            {languages.map((language) => (
              <div key={language.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`lang-${language.id}`}
                    checked={filters.language === language.code}
                    onCheckedChange={() => updateURL({ language: language.code })}
                  />
                  <Label htmlFor={`lang-${language.id}`} className="text-sm cursor-pointer">
                    {language.name}
                  </Label>
                </div>
                <span className="text-xs text-gray-500">({language.count})</span>
              </div>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Price */}
      <Card>
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("price")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Price</CardTitle>
            {expandedSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CardHeader>
        {expandedSections.price && (
          <CardContent className="space-y-3">
            {[
              { value: "all", label: "All Price" },
              { value: "free", label: "Free" },
              { value: "paid", label: "Paid" },
            ].map((price) => (
              <div key={price.value} className="flex items-center space-x-2">
                <Checkbox
                  id={`price-${price.value}`}
                  checked={filters.price === price.value}
                  onCheckedChange={() => updateURL({ price: price.value })}
                />
                <Label htmlFor={`price-${price.value}`} className="text-sm cursor-pointer">
                  {price.label}
                </Label>
              </div>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Ratings */}
      <Card>
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("ratings")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Ratings</CardTitle>
            {expandedSections.ratings ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CardHeader>
        {expandedSections.ratings && (
          <CardContent className="space-y-3">
            {[
              { value: "all", label: "All Ratings", count: 22 },
              { value: "4.5", label: "4.5 & up", count: 8 },
              { value: "4.0", label: "4.0 & up", count: 15 },
              { value: "3.5", label: "3.5 & up", count: 20 },
              { value: "3.0", label: "3.0 & up", count: 22 },
            ].map((rating) => (
              <div key={rating.value} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`rating-${rating.value}`}
                    checked={filters.rating === rating.value}
                    onCheckedChange={() => updateURL({ rating: rating.value })}
                  />
                  <Label htmlFor={`rating-${rating.value}`} className="text-sm cursor-pointer">
                    {rating.label}
                  </Label>
                </div>
                <span className="text-xs text-gray-500">({rating.count})</span>
              </div>
            ))}
          </CardContent>
        )}
      </Card>
    </div>
  )
}