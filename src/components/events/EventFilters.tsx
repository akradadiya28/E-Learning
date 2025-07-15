"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp, Search, X } from "lucide-react"
import type { EventFilters as FilterType, EventCategory } from "@/types/event"

interface EventFiltersProps {
  filters: FilterType
  categories: EventCategory[]
  basePath?: string
}

export function EventFilters({
  filters,
  categories,
  basePath = "/events",
}: EventFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    locations: false,
    dates: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const updateURL = (newFilters: Partial<FilterType>) => {
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
    const clearedFilters: Partial<FilterType> = {
      category: "all",
      location: "all",
      date: "all",
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
          <CardTitle className="text-lg">Search Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search events..."
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

      {/* Locations */}
      <Card>
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("locations")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Locations</CardTitle>
            {expandedSections.locations ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CardHeader>
        {expandedSections.locations && (
          <CardContent className="space-y-3">
            {[
              { value: "all", label: "All Locations", count: 8 },
              { value: "united-kingdom", label: "United Kingdom", count: 1 },
              { value: "tokyo-japan", label: "Tokyo Japan", count: 1 },
              { value: "colorado", label: "Colorado", count: 1 },
              { value: "alexander-city", label: "Alexander City", count: 1 },
              { value: "alaska", label: "Alaska", count: 1 },
            ].map((location) => (
              <div key={location.value} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`location-${location.value}`}
                    checked={filters.location === location.value}
                    onCheckedChange={() => updateURL({ location: location.value })}
                  />
                  <Label htmlFor={`location-${location.value}`} className="text-sm cursor-pointer">
                    {location.label}
                  </Label>
                </div>
                <span className="text-xs text-gray-500">({location.count})</span>
              </div>
            ))}
          </CardContent>
        )}
      </Card>
    </div>
  )
}