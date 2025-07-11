"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Course } from "@/types/courses"

interface CourseGridProps {
  courses: Course[]
  viewMode?: "grid" | "list"
}

export function CourseGrid({ courses, viewMode = "grid" }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12 md:py-16 px-4">
        <div className="text-gray-400 mb-4 md:mb-6">
          <BookOpen className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">No courses found</h3>
        <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
          Try adjusting your filters to see more results.
        </p>
        <div>
          <Button asChild variant="outline" size="sm" className="md:size-default bg-transparent">
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4 md:space-y-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Course Image */}
                <div className="relative w-full lg:w-80 xl:w-96 h-48 md:h-56 lg:h-48 flex-shrink-0">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 320px, 384px"
                  />
                  {course.badge && (
                    <div className="absolute top-2 md:top-3 left-2 md:left-3">
                      <Badge className={`${course.badgeColor} hover:${course.badgeColor} text-white text-xs shadow-lg`}>
                        {course.badge}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="flex-1 p-4 md:p-6">
                  <div className="flex flex-col h-full">
                    {/* Category and Skill Level Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-50">
                        {course.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 hover:bg-green-50">
                        {course.skillLevel}
                      </Badge>
                    </div>

                    {/* Course Title */}
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 md:mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                      <Link href={`/course/${course.slug}`}>{course.title}</Link>
                    </h3>

                    {/* Course Description */}
                    <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Course Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mt-auto">
                      {/* Rating and Instructor */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-sm">{course.rating}</span>
                          <span className="text-gray-500 text-sm">({course.reviewCount} reviews)</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">By {course.instructor}</p>
                      </div>

                      {/* Price and Enroll Button */}
                      <div className="flex items-center justify-between sm:justify-end gap-4">
                        <div className="text-left sm:text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl md:text-3xl font-bold text-gray-900">
                              ${course.price.toFixed(2)}
                            </span>
                            {course.originalPrice && (
                              <span className="text-base md:text-lg text-gray-500 line-through">
                                ${course.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                          {course.originalPrice && (
                            <div className="text-sm text-green-600 font-semibold">
                              Save ${(course.originalPrice - course.price).toFixed(2)}
                            </div>
                          )}
                        </div>
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 px-4 md:px-8 py-2 font-semibold whitespace-nowrap"
                        >
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // Grid View
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
      {courses.map((course) => (
        <Card
          key={course.id}
          className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
        >
          {/* Course Image */}
          <div className="relative overflow-hidden">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              width={400}
              height={240}
              className="w-full h-44 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            {course.badge && (
              <div className="absolute top-2 md:top-3 left-2 md:left-3">
                <Badge className={`${course.badgeColor} hover:${course.badgeColor} text-white text-xs shadow-lg`}>
                  {course.badge}
                </Badge>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Course Content */}
          <CardContent className="p-4 md:p-5 flex flex-col flex-1">
            {/* Category and Skill Level Badges */}
            <div className="flex flex-wrap items-center gap-1 md:gap-2 mb-2 md:mb-3">
              <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-50">
                {course.category}
              </Badge>
              <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 hover:bg-green-50">
                {course.skillLevel}
              </Badge>
            </div>

            {/* Rating and Students */}
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-xs md:text-sm font-semibold">{course.rating}</span>
                <span className="text-xs md:text-sm text-gray-500">({course.reviewCount})</span>
              </div>
              <div className="text-xs md:text-sm text-gray-500">{course.students.toLocaleString()} students</div>
            </div>

            {/* Course Title */}
            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
              <Link href={`/course/${course.slug}`}>{course.title}</Link>
            </h3>

            {/* Instructor */}
            <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 font-medium">By {course.instructor}</p>

            {/* Course Meta */}
            <div className="flex items-center gap-3 md:gap-4 text-xs text-gray-500 mb-3 md:mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                <span>{course.lessons} lessons</span>
              </div>
            </div>

            {/* Price and Enroll Button */}
            <div className="flex items-center justify-between mt-auto pt-2">
              <div className="flex items-center space-x-1 md:space-x-2">
                <span className="text-lg md:text-xl font-bold text-gray-900">${course.price.toFixed(2)}</span>
                {course.originalPrice && (
                  <span className="text-xs md:text-sm text-gray-500 line-through">
                    ${course.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 font-semibold text-xs md:text-sm px-3 md:px-4"
              >
                Enroll Now
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

