import { Suspense } from "react"
import { PageLayout } from "@/components/common/PageLayout"
import { EventFilters } from "@/components/events/EventFilters"
import { EventGrid } from "@/components/events/EventGrid"
import { EventHeader } from "@/components/events/EventHeader"
import { EventPagination } from "@/components/events/EventPagination"
import { EventsSkeleton } from "@/components/events/EventsSkeleton"
import { eventCategories, eventsData } from "@/data/eventsData"

interface EventsPageProps {
  searchParams: Promise<{
    category?: string
    location?: string
    date?: string
    search?: string
    sort?: string
    page?: string
    view?: string
  }>
}

function filterAndSortEvents(searchParams: {
  category?: string
  location?: string
  date?: string
  search?: string
  sort?: string
  page?: string
  view?: string
}) {
  let filtered = [...eventsData]

  // Apply filters
  if (searchParams.category && searchParams.category !== "all") {
    filtered = filtered.filter((event) => event.category.toLowerCase().replace(/\s+/g, "-") === searchParams.category?.toLowerCase())
  }

  if (searchParams.location && searchParams.location !== "all") {
    filtered = filtered.filter((event) => event.location.toLowerCase().includes(searchParams.location?.toLowerCase() || ""))
  }

  if (searchParams.search) {
    filtered = filtered.filter(
      (event) =>
        event.title.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        event.description.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        event.location.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        event.tags.some(tag => tag.toLowerCase().includes(searchParams.search?.toLowerCase() || ""))
    )
  }

  // Apply sorting
  const sortBy = searchParams.sort || "newest"
  switch (sortBy) {
    case "newest":
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      break
    case "oldest":
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      break
    case "title":
      filtered.sort((a, b) => a.title.localeCompare(b.title))
      break
    default:
      break
  }

  return filtered
}

async function EventsContent({ searchParams }: EventsPageProps) {
  const params = await searchParams
  const filteredEvents = filterAndSortEvents(params)
  const currentPage = Number.parseInt(params.page || "1")
  const eventsPerPage = 8
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)
  const startIndex = (currentPage - 1) * eventsPerPage
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage)

  const filters = {
    category: params.category || "all",
    location: params.location || "all",
    date: params.date || "all",
    search: params.search || "",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters - Hidden on mobile/tablet */}
        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <EventFilters filters={filters} categories={eventCategories} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <EventHeader
            totalResults={filteredEvents.length}
            sortBy={params.sort || "newest"}
            currentParams={params}
            filters={filters}
            categories={eventCategories}
          />

          <EventGrid events={paginatedEvents} />

          {totalPages > 1 && (
            <EventPagination currentPage={currentPage} totalPages={totalPages} currentParams={params} />
          )}
        </div>
      </div>
    </div>
  )
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "All Events", current: true },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      backgroundVariant="default"
      backgroundIntensity="light"
      showAnimations={false}
    >
      <Suspense fallback={<EventsSkeleton />}>
        <EventsContent searchParams={searchParams} />
      </Suspense>
    </PageLayout>
  )
}