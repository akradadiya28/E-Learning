"use client"


import type { Instructor } from "@/types/instructor"
import { InstructorCard } from "./InstructorCard"

interface InstructorsGridProps {
  instructors: Instructor[]
  isLoading?: boolean
}

export function InstructorsGrid({ instructors, isLoading }: InstructorsGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg border p-6 animate-pulse">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-24 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-20 mb-4"></div>
              <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <div className="h-16 bg-gray-200 rounded"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
              <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
              <div className="flex gap-2 mb-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gray-200 rounded-full"></div>
                ))}
              </div>
              <div className="flex gap-2 w-full">
                <div className="h-8 bg-gray-200 rounded flex-1"></div>
                <div className="h-8 bg-gray-200 rounded flex-1"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (instructors.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No instructors found</h3>
        <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {instructors.map((instructor) => (
        <InstructorCard key={instructor.id} instructor={instructor} />
      ))}
    </div>
  )
}
