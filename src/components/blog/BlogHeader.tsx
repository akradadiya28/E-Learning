"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Grid3X3, List, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BlogFiltersComponent } from "@/components/blog/BlogFilters"
import type { BlogFilters } from "@/types/blog"

interface BlogHeaderProps {
  filters: BlogFilters
  onFiltersChange: (filters: BlogFilters) => void
  totalResults: number
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
}

export function BlogHeader({ filters, onFiltersChange, totalResults, viewMode, onViewModeChange }: BlogHeaderProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateSort = (newSort: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (newSort !== "newest") {
      params.set("sort", newSort)
    } else {
      params.delete("sort")
    }
    // Remove page parameter when sort changes
    params.delete("page")
    const newUrl = params.toString() ? `/blog?${params.toString()}` : "/blog"
    router.push(newUrl)

    // Update local state
    onFiltersChange({ ...filters, sortBy: newSort, page: 1 })
  }

  const updateViewMode = (newViewMode: "grid" | "list") => {
    const params = new URLSearchParams(searchParams.toString())
    if (newViewMode !== "grid") {
      params.set("view", newViewMode)
    } else {
      params.delete("view")
    }
    const newUrl = params.toString() ? `/blog?${params.toString()}` : "/blog"
    router.push(newUrl)

    // Update local state
    onViewModeChange(newViewMode)
  }

  // Count active filters
  const activeFiltersCount = [filters.search, filters.category !== "all" ? filters.category : null, filters.tag].filter(
    Boolean,
  ).length

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm border">
      <div className="flex items-center justify-between sm:justify-start gap-4">
        <p className="text-gray-600 text-sm sm:text-base">
          Showing <span className="font-semibold text-gray-900">1-9</span> of{" "}
          <span className="font-semibold text-gray-900">{totalResults}</span> Results
        </p>

        {/* Mobile/Tablet Filters Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0 overflow-y-auto">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Filter Blogs
              </h2>
              <BlogFiltersComponent filters={filters} onFiltersChange={onFiltersChange} totalResults={totalResults} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 hidden sm:inline">Sort By:</span>
          <Select value={filters.sortBy} onValueChange={updateSort}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
              <SelectItem value="read-time">Read Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center border rounded-lg p-1 bg-gray-50">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => updateViewMode("grid")}
            className="p-2 cursor-pointer"
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => updateViewMode("list")}
            className="p-2 cursor-pointer"
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
