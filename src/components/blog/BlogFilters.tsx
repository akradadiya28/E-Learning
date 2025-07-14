"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp, Search, X } from "lucide-react"
import { blogCategories, blogTags, latestPosts } from "@/data/blogData"
import type { BlogFilters } from "@/types/blog"
import Image from "next/image"

interface BlogFiltersProps {
  filters: BlogFilters
  onFiltersChange: (filters: BlogFilters) => void
  totalResults: number
}

export function BlogFiltersComponent({ filters, onFiltersChange, totalResults }: BlogFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    tags: false,
    latestPosts: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const updateURL = (newFilters: Partial<BlogFilters>) => {
    const params = new URLSearchParams(searchParams.toString())

    // Update or remove parameters
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== "all" && value !== "") {
        params.set(key, value.toString())
      } else {
        params.delete(key)
      }
    })

    // Remove page parameter when filters change
    params.delete("page")

    const newUrl = params.toString() ? `/blog?${params.toString()}` : "/blog"
    router.push(newUrl)

    // Also update the local state immediately for UI feedback
    onFiltersChange({ ...filters, ...newFilters, page: 1 })
  }

  const clearAllFilters = () => {
    const clearedFilters: BlogFilters = {
      search: "",
      category: "all",
      tag: "",
      sortBy: "newest",
      page: 1,
    }
    updateURL(clearedFilters)
  }

  const handleCategoryChange = (categorySlug: string) => {
    const newCategory = filters.category === categorySlug ? "all" : categorySlug
    updateURL({ category: newCategory })
  }

  const handleTagChange = (tagSlug: string) => {
    const newTag = filters.tag === tagSlug ? "" : tagSlug
    updateURL({ tag: newTag })
  }

  const hasActiveFilters = filters.search || filters.category !== "all" || filters.tag

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Search here</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search here"
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
          <X className="w-4 h-4 mr-2" />
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
            {blogCategories.slice(1).map((category) => {
              const isSelected = filters.category === category.slug
              return (
                <div key={category.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={isSelected}
                      onCheckedChange={() => handleCategoryChange(category.slug)}
                    />
                    <Label
                      htmlFor={`category-${category.id}`}
                      className={`text-sm cursor-pointer transition-colors ${
                        isSelected 
                      }`}
                    >
                      {category.name}
                    </Label>
                  </div>
                  <span className="text-xs text-gray-500">({category.count})</span>
                </div>
              )
            })}
          </CardContent>
        )}
      </Card>

      {/* Latest Posts */}
      <Card>
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("latestPosts")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Latest Post</CardTitle>
            {expandedSections.latestPosts ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CardHeader>
        {expandedSections.latestPosts && (
          <CardContent className="space-y-4">
            {latestPosts.map((post) => (
              <div
                key={post.id}
                className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                  <h4 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("tags")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Tags</CardTitle>
            {expandedSections.tags ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CardHeader>
        {expandedSections.tags && (
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {blogTags.map((tag) => {
                const isSelected = filters.tag === tag.slug
                return (
                  <Button
                    key={tag.id}
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleTagChange(tag.slug)}
                    className={`h-8 px-3 text-sm transition-all duration-200 ${
                      isSelected
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {tag.name}
                  </Button>
                )
              })}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

