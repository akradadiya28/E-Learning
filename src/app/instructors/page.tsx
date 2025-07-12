"use client";

import { useState, useMemo } from "react";
import type { InstructorFilters as FilterType } from "@/types/instructor";
import { instructorsData } from "@/data/instructorsData";
import { InstructorFilters } from "@/components/instructor/InstructorFilters";
import { InstructorsGrid } from "@/components/instructor/InstructorsGrid";
import { PageLayout } from "@/components/common/PageLayout";

export default function InstructorsPage() {
  const [filters, setFilters] = useState<FilterType>({
    search: "",
    specialization: "All Specializations",
    rating: "All Ratings",
    experience: "All Experience",
    sortBy: "rating",
  });

  const filteredInstructors = useMemo(() => {
    let filtered = [...instructorsData];

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(
        (instructor) =>
          instructor.name.toLowerCase().includes(searchTerm) ||
          instructor.specialization.toLowerCase().includes(searchTerm) ||
          instructor.title.toLowerCase().includes(searchTerm) ||
          instructor.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm)
          )
      );
    }

    // Specialization filter
    if (filters.specialization !== "All Specializations") {
      filtered = filtered.filter(
        (instructor) => instructor.specialization === filters.specialization
      );
    }

    // Rating filter
    if (filters.rating !== "All Ratings") {
      const minRating = Number.parseFloat(filters.rating);
      filtered = filtered.filter(
        (instructor) => instructor.rating >= minRating
      );
    }

    // Experience filter
    if (filters.experience !== "All Experience") {
      filtered = filtered.filter(
        (instructor) => instructor.experience === filters.experience
      );
    }

    // Sort
    switch (filters.sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "students":
        filtered.sort((a, b) => b.studentCount - a.studentCount);
        break;
      case "courses":
        filtered.sort((a, b) => b.courseCount - a.courseCount);
        break;
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime()
        );
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [filters]);

    // Breadcrumbs data
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Instructors", href: "/instructors" },
    ];
    
  return (
    <main className="min-h-screen bg-gray-50">
      <PageLayout breadcrumbs={breadcrumbs}>
        {/* Main Content */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="mb-8">
              <InstructorFilters
                filters={filters}
                onFiltersChange={setFilters}
                totalResults={filteredInstructors.length}
              />
            </div>

            {/* Instructors Grid */}
            <InstructorsGrid instructors={filteredInstructors} />

            {/* Load More Button (for pagination) */}
            {filteredInstructors.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Load More Instructors
                </button>
              </div>
            )}
          </div>
        </section>
      </PageLayout>
    </main>
  );
}
