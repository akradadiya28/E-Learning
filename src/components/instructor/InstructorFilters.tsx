"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import type { InstructorFilters } from "@/types/instructor";
import {
  specializations,
  experienceLevels,
  sortOptions,
} from "@/data/instructorsData";

interface InstructorFiltersProps {
  filters: InstructorFilters;
  onFiltersChange: (filters: InstructorFilters) => void;
  totalResults: number;
}

export function InstructorFilters({
  filters,
  onFiltersChange,
  totalResults,
}: InstructorFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilter = (key: keyof InstructorFilters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      specialization: "All Specializations",
      rating: "All Ratings",
      experience: "All Experience",
      sortBy: "rating",
    });
  };

  const hasActiveFilters =
    filters.search ||
    filters.specialization !== "All Specializations" ||
    filters.rating !== "All Ratings" ||
    filters.experience !== "All Experience";

  const FilterContent = () => (
    <div className="space-y-6 px-3">
      {/* Search */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Search Instructors
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search by name or expertise..."
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Specialization */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Specialization
        </label>
        <Select
          value={filters.specialization}
          onValueChange={(value) => updateFilter("specialization", value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {specializations.map((spec) => (
              <SelectItem
                key={spec}
                value={spec}
              >
                {spec}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Rating */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Minimum Rating
        </label>
        <Select
          value={filters.rating}
          onValueChange={(value) => updateFilter("rating", value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Ratings">All Ratings</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
            <SelectItem value="4.0">4.0+ Stars</SelectItem>
            <SelectItem value="3.5">3.5+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Experience */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Experience</label>
        <Select
          value={filters.experience}
          onValueChange={(value) => updateFilter("experience", value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {experienceLevels.map((level) => (
              <SelectItem
                key={level}
                value={level}
              >
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full bg-transparent"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Header with Results and Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {totalResults} Instructor{totalResults !== 1 ? "s" : ""} Found
          </h2>
          {hasActiveFilters && (
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800"
            >
              Filtered
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-3">
          {/* Sort */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Select
              value={filters.sortBy}
              onValueChange={(value) => updateFilter("sortBy", value)}
            >
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Filter Button */}
          <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="sm:hidden bg-transparent"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <Badge className="ml-2 bg-blue-500 text-white text-xs px-1.5 py-0.5">
                    •
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80"
            >
              <SheetHeader>
                <SheetTitle>Filter Instructors</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Filters */}
      <div className="hidden sm:block">
        <div className="bg-white rounded-lg border p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search instructors..."
                  value={filters.search}
                  onChange={(e) => updateFilter("search", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex gap-4">
              {/* Specialization */}
              <Select
                value={filters.specialization}
                onValueChange={(value) => updateFilter("specialization", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Specialization" />
                </SelectTrigger>
                <SelectContent>
                  {specializations.map((spec) => (
                    <SelectItem
                      key={spec}
                      value={spec}
                    >
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Rating */}
              <Select
                value={filters.rating}
                onValueChange={(value) => updateFilter("rating", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Ratings">All Ratings</SelectItem>
                  <SelectItem value="4.5">4.5+ Stars</SelectItem>
                  <SelectItem value="4.0">4.0+ Stars</SelectItem>
                  <SelectItem value="3.5">3.5+ Stars</SelectItem>
                </SelectContent>
              </Select>

              {/* Experience */}
              <Select
                value={filters.experience}
                onValueChange={(value) => updateFilter("experience", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem
                      key={level}
                      value={level}
                    >
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <span className="text-sm text-gray-600">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {filters.search && (
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    Search: {filters.search}
                    <button
                      onClick={() => updateFilter("search", "")}
                      className="ml-1 hover:text-blue-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {filters.specialization !== "All Specializations" && (
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    {filters.specialization}
                    <button
                      onClick={() =>
                        updateFilter("specialization", "All Specializations")
                      }
                      className="ml-1 hover:text-blue-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {filters.rating !== "All Ratings" && (
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    {filters.rating}+ Stars
                    <button
                      onClick={() => updateFilter("rating", "All Ratings")}
                      className="ml-1 hover:text-blue-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {filters.experience !== "All Experience" && (
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    {filters.experience}
                    <button
                      onClick={() =>
                        updateFilter("experience", "All Experience")
                      }
                      className="ml-1 hover:text-blue-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="h-6 px-2 text-xs"
                >
                  Clear all
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
