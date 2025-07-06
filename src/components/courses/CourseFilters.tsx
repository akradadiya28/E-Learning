"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp, Search, X } from "lucide-react"
import type { FilterState, Category, Instructor } from "@/types/courses"

interface CourseFiltersProps {
  filters: FilterState
  categories: Category[]
  instructors: Instructor[]
  hideCategory?: boolean
  basePath?: string
}

export function CourseFilters({
  filters,
  categories,
  instructors,
  hideCategory = false,
  basePath = "/courses",
}: CourseFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    language: false,
    price: false,
    skillLevel: false,
    instructors: false,
    ratings: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const updateURL = (newFilters: Partial<FilterState>) => {
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
    const clearedFilters: Partial<FilterState> = {
      language: "all",
      price: "all",
      skillLevel: "all",
      instructor: "all",
      rating: "all",
      search: "",
    }

    if (!hideCategory) {
      clearedFilters.category = "all"
    }

    updateURL(clearedFilters)
  }

  const hasActiveFilters = Object.entries(filters).some(([key, value]) => {
    if (hideCategory && key === "category") return false
    return value !== "all" && value !== ""
  })

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Search Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search courses..."
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
      {!hideCategory && (
        <Card>
          <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("categories")}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Categories</CardTitle>
              {expandedSections.categories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </CardHeader>
          {expandedSections.categories && (
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="category-all"
                  checked={filters.category === "all"}
                  onCheckedChange={() => updateURL({ category: "all" })}
                />
                <Label htmlFor="category-all" className="text-sm cursor-pointer">
                  All Categories
                </Label>
              </div>
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
      )}

      {/* Language */}
      <Card>
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("language")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Language</CardTitle>
            {expandedSections.language ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CardHeader>
        {expandedSections.language && (
          <CardContent className="space-y-3">
            {[
              { value: "all", label: "All Languages", count: 250 },
              { value: "english", label: "English", count: 53 },
              { value: "arabic", label: "Arabic", count: 11 },
              { value: "spanish", label: "Spanish", count: 22 },
            ].map((lang) => (
              <div key={lang.value} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`lang-${lang.value}`}
                    checked={filters.language === lang.value}
                    onCheckedChange={() => updateURL({ language: lang.value })}
                  />
                  <Label htmlFor={`lang-${lang.value}`} className="text-sm cursor-pointer">
                    {lang.label}
                  </Label>
                </div>
                <span className="text-xs text-gray-500">({lang.count})</span>
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

      {/* Skill Level */}
      <Card>
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("skillLevel")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Skill Level</CardTitle>
            {expandedSections.skillLevel ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CardHeader>
        {expandedSections.skillLevel && (
          <CardContent className="space-y-3">
            {[
              { value: "all", label: "All Skills", count: 250 },
              { value: "beginner", label: "Beginner", count: 53 },
              { value: "intermediate", label: "Intermediate", count: 22 },
              { value: "advanced", label: "Advanced", count: 42 },
            ].map((skill) => (
              <div key={skill.value} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`skill-${skill.value}`}
                    checked={filters.skillLevel === skill.value}
                    onCheckedChange={() => updateURL({ skillLevel: skill.value })}
                  />
                  <Label htmlFor={`skill-${skill.value}`} className="text-sm cursor-pointer">
                    {skill.label}
                  </Label>
                </div>
                <span className="text-xs text-gray-500">({skill.count})</span>
              </div>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Instructors */}
      <Card>
        <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleSection("instructors")}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Instructors</CardTitle>
            {expandedSections.instructors ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </CardHeader>
        {expandedSections.instructors && (
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="instructor-all"
                checked={filters.instructor === "all"}
                onCheckedChange={() => updateURL({ instructor: "all" })}
              />
              <Label htmlFor="instructor-all" className="text-sm cursor-pointer">
                All Instructors
              </Label>
            </div>
            {instructors.map((instructor) => (
              <div key={instructor.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`instructor-${instructor.id}`}
                    checked={filters.instructor === instructor.name.toLowerCase()}
                    onCheckedChange={() => updateURL({ instructor: instructor.name.toLowerCase() })}
                  />
                  <Label htmlFor={`instructor-${instructor.id}`} className="text-sm cursor-pointer">
                    {instructor.name}
                  </Label>
                </div>
                <span className="text-xs text-gray-500">({instructor.courseCount})</span>
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
              { value: "all", label: "All Ratings", count: 250 },
              { value: "4.5", label: "4.5 & up", count: 42 },
              { value: "4.0", label: "4.0 & up", count: 23 },
              { value: "3.5", label: "3.5 & up", count: 11 },
              { value: "3.0", label: "3.0 & up", count: 3 },
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
