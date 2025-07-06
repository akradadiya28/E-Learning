import { PageLayout } from "@/components/common/PageLayout"
import { CourseFilters } from "@/components/courses/CourseFilters"
import { CourseGrid } from "@/components/courses/CourseGrid"
import { CourseHeader } from "@/components/courses/CourseHeader"
import { CoursePagination } from "@/components/courses/CoursePagination"
import { CoursesSkeleton } from "@/components/courses/CoursesSkeleton"
import { categories, coursesData, instructors } from "@/data/coursesData"
import { Suspense } from "react"

interface CoursesPageProps {
  searchParams: Promise<{
    category?: string
    language?: string
    price?: string
    skillLevel?: string
    instructor?: string
    rating?: string
    search?: string
    sort?: string
    page?: string
    view?: string
  }>
}

function filterAndSortCourses(searchParams: {
  category?: string
  language?: string
  price?: string
  skillLevel?: string
  instructor?: string
  rating?: string
  search?: string
  sort?: string
  page?: string
  view?: string
}) {
  let filtered = [...coursesData]

  // Apply filters
  if (searchParams.category && searchParams.category !== "all") {
    filtered = filtered.filter((course) => course.category.toLowerCase() === searchParams.category?.toLowerCase())
  }

  if (searchParams.language && searchParams.language !== "all") {
    filtered = filtered.filter((course) => course.language.toLowerCase() === searchParams.language?.toLowerCase())
  }

  if (searchParams.price && searchParams.price !== "all") {
    if (searchParams.price === "free") {
      filtered = filtered.filter((course) => course.price === 0)
    } else if (searchParams.price === "paid") {
      filtered = filtered.filter((course) => course.price > 0)
    }
  }

  if (searchParams.skillLevel && searchParams.skillLevel !== "all") {
    filtered = filtered.filter((course) => course.skillLevel.toLowerCase() === searchParams.skillLevel?.toLowerCase())
  }

  if (searchParams.instructor && searchParams.instructor !== "all") {
    filtered = filtered.filter((course) =>
      course.instructor.toLowerCase().includes(searchParams.instructor?.toLowerCase() || ""),
    )
  }

  if (searchParams.rating && searchParams.rating !== "all") {
    const minRating = Number.parseFloat(searchParams.rating)
    filtered = filtered.filter((course) => course.rating >= minRating)
  }

  if (searchParams.search) {
    filtered = filtered.filter(
      (course) =>
        course.title.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        course.instructor.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        course.category.toLowerCase().includes(searchParams.search?.toLowerCase() || ""),
    )
  }

  // Apply sorting
  const sortBy = searchParams.sort || "popular"
  switch (sortBy) {
    case "popular":
      filtered.sort((a, b) => b.students - a.students)
      break
    case "newest":
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
    case "price-low":
      filtered.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filtered.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating)
      break
    default:
      break
  }

  return filtered
}

async function CoursesContent({ searchParams }: CoursesPageProps) {
  const params = await searchParams
  const filteredCourses = filterAndSortCourses(params)
  const currentPage = Number.parseInt(params.page || "1")
  const coursesPerPage = 9
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
  const startIndex = (currentPage - 1) * coursesPerPage
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage)

  // Get view mode from URL params, default to grid
  const viewMode = (params.view as "grid" | "list") || "grid"

  const filters = {
    category: params.category || "all",
    language: params.language || "all",
    price: params.price || "all",
    skillLevel: params.skillLevel || "all",
    instructor: params.instructor || "all",
    rating: params.rating || "all",
    search: params.search || "",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters - Hidden on mobile/tablet */}
        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <CourseFilters filters={filters} categories={categories} instructors={instructors} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <CourseHeader
            totalResults={filteredCourses.length}
            sortBy={params.sort || "popular"}
            viewMode={viewMode}
            currentParams={params}
            filters={filters}
            categories={categories}
            instructors={instructors}
          />

          <CourseGrid courses={paginatedCourses} viewMode={viewMode} />

          {totalPages > 1 && (
            <CoursePagination currentPage={currentPage} totalPages={totalPages} currentParams={params} />
          )}
        </div>
      </div>
    </div>
  )
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "All Courses", current: true },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      backgroundVariant="default"
      backgroundIntensity="light"
      showAnimations={false}
    >
      <Suspense fallback={<CoursesSkeleton />}>
        <CoursesContent searchParams={searchParams} />
      </Suspense>
    </PageLayout>
  )
}