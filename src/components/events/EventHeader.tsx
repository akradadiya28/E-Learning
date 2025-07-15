"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { EventFilters } from "@/components/events/EventFilters"

interface EventHeaderProps {
  totalResults: number
  sortBy: string
  currentParams: Record<string, string | undefined>
  basePath?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filters: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: any[]
}

export function EventHeader({
  totalResults,
  sortBy,
  basePath = "/events",
  filters,
  categories,
}: EventHeaderProps) {
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

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm border">
      <div className="flex items-center justify-between sm:justify-start gap-4">
        <p className="text-gray-600 text-sm sm:text-base">
          Showing <span className="font-semibold text-gray-900">{totalResults}</span> Events
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
                Filter Events
              </h2>
              <EventFilters
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
    </div>
  )
}