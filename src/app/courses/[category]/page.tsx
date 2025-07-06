import { Suspense } from "react"
import { notFound } from "next/navigation"
import { categories, coursesData, instructors } from "@/data/coursesData"
import { CourseFilters } from "@/components/courses/CourseFilters"
import { CourseHeader } from "@/components/courses/CourseHeader"
import { CourseGrid } from "@/components/courses/CourseGrid"
import { CoursePagination } from "@/components/courses/CoursePagination"
import { PageLayout } from "@/components/common/PageLayout"
import { CoursesSkeleton } from "@/components/courses/CoursesSkeleton"

interface CategoryCoursesPageProps {
  params: {
    category: string
  }
  searchParams: {
    language?: string
    price?: string
    skillLevel?: string
    instructor?: string
    rating?: string
    search?: string
    sort?: string
    page?: string
    view?: string
  }
}

function filterAndSortCourses(category: string, searchParams: CategoryCoursesPageProps["searchParams"]) {
  // First filter by category
  let filtered = coursesData.filter(
    (course) => course.category.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase(),
  )

  // Apply other filters
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
        course.instructor.toLowerCase().includes(searchParams.search?.toLowerCase() || ""),
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

function CategoryCoursesContent({ params, searchParams }: CategoryCoursesPageProps) {
  const category = params.category
  const categoryData = categories.find((cat) => cat.slug === category)

  if (!categoryData) {
    notFound()
  }

  const filteredCourses = filterAndSortCourses(category, searchParams)
  const currentPage = Number.parseInt(searchParams.page || "1")
  const coursesPerPage = 9
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
  const startIndex = (currentPage - 1) * coursesPerPage
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage)

  // Get view mode from URL params, default to grid
  const viewMode = (searchParams.view as "grid" | "list") || "grid"

  const filters = {
    category: category,
    language: searchParams.language || "all",
    price: searchParams.price || "all",
    skillLevel: searchParams.skillLevel || "all",
    instructor: searchParams.instructor || "all",
    rating: searchParams.rating || "all",
    search: searchParams.search || "",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters - Hidden on mobile/tablet */}
        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <CourseFilters
            filters={filters}
            categories={categories}
            instructors={instructors}
            hideCategory={true}
            basePath={`/courses/${category}`}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <CourseHeader
            totalResults={filteredCourses.length}
            sortBy={searchParams.sort || "popular"}
            viewMode={viewMode}
            currentParams={searchParams}
            basePath={`/courses/${category}`}
            filters={filters}
            categories={categories}
            instructors={instructors}
            hideCategory={true}
          />

          <CourseGrid courses={paginatedCourses} viewMode={viewMode} />

          {totalPages > 1 && (
            <CoursePagination
              currentPage={currentPage}
              totalPages={totalPages}
              currentParams={searchParams}
              basePath={`/courses/${category}`}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default function CategoryCoursesPage({ params, searchParams }: CategoryCoursesPageProps) {
  const category = params.category
  const categoryData = categories.find((cat) => cat.slug === category)

  if (!categoryData) {
    notFound()
  }

  const categoryName = categoryData.name

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: categoryName, current: true },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      backgroundVariant="default"
      backgroundIntensity="light"
      showAnimations={false}
    >
      <Suspense fallback={<CoursesSkeleton />}>
        <CategoryCoursesContent params={params} searchParams={searchParams} />
      </Suspense>
    </PageLayout>
  )
}

// Generate static params for known categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}
