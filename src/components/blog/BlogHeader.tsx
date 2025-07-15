"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, Grid3X3, List } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BlogFilters } from "@/components/blog/BlogFilters"

interface BlogHeaderProps {
  totalResults: number
  sortBy: string
  viewMode?: "grid" | "list"
  currentParams: Record<string, string | undefined>
  basePath?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filters: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: any[]
}

export function BlogHeader({
  totalResults,
  sortBy,
  viewMode = "grid",
  basePath = "/blog",
  filters,
  categories,
}: BlogHeaderProps) {
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

    const newUrl = params.toString() ? `${basePath}?${params.toString()}` : basePath
    router.push(newUrl)
  }

  const updateViewMode = (newViewMode: "grid" | "list") => {
    const params = new URLSearchParams(searchParams.toString())

    if (newViewMode !== "grid") {
      params.set("view", newViewMode)
    } else {
      params.delete("view")
    }

    const newUrl = params.toString() ? `${basePath}?${params.toString()}` : basePath
    router.push(newUrl)
  }
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm border">
      <div className="flex items-center justify-between sm:justify-start gap-4">
        <p className="text-gray-600 text-sm sm:text-base">
          Showing <span className="font-semibold text-gray-900">{totalResults}</span> Blog Posts
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
                Filter Blog Posts
              </h2>
              <BlogFilters
                filters={filters}
                categories={categories}
                basePath={basePath}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 hidden sm:inline">Sort By:</span>
          <Select value={sortBy} onValueChange={updateSort}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
  )
}