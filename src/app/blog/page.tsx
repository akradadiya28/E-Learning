import { Suspense } from "react"
import { PageLayout } from "@/components/common/PageLayout"
import { BlogFilters } from "@/components/blog/BlogFilters"
import { BlogGrid } from "@/components/blog/BlogGrid"
import { BlogHeader } from "@/components/blog/BlogHeader"
import { BlogPagination } from "@/components/blog/BlogPagination"
import { BlogSkeleton } from "@/components/blog/BlogSkeleton"
import { blogCategories, blogData } from "@/data/blogData"

interface BlogPageProps {
  searchParams: Promise<{
    category?: string
    author?: string
    tag?: string
    search?: string
    sort?: string
    page?: string
    view?: string
  }>
}

function filterAndSortPosts(searchParams: {
  category?: string
  author?: string
  tag?: string
  search?: string
  sort?: string
  page?: string
  view?: string
}) {
  let filtered = [...blogData]

  // Apply filters
  if (searchParams.category && searchParams.category !== "all") {
    filtered = filtered.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === searchParams.category?.toLowerCase())
  }

  if (searchParams.author && searchParams.author !== "all") {
    filtered = filtered.filter((post) => post.author.name.toLowerCase().includes(searchParams.author?.toLowerCase() || ""))
  }

  if (searchParams.tag && searchParams.tag !== "all") {
    filtered = filtered.filter((post) => post.tags.some(tag => tag.toLowerCase().includes(searchParams.tag?.toLowerCase() || "")))
  }

  if (searchParams.search) {
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        post.excerpt.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        post.author.name.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        post.tags.some(tag => tag.toLowerCase().includes(searchParams.search?.toLowerCase() || ""))
    )
  }

  // Apply sorting
  const sortBy = searchParams.sort || "newest"
  switch (sortBy) {
    case "newest":
      filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      break
    case "oldest":
      filtered.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
      break
    case "title":
      filtered.sort((a, b) => a.title.localeCompare(b.title))
      break
    default:
      break
  }

  return filtered
}

async function BlogContent({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const filteredPosts = filterAndSortPosts(params)
  const currentPage = Number.parseInt(params.page || "1")
  const postsPerPage = 6
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  // Get view mode from URL params, default to grid
  const viewMode = (params.view as "grid" | "list") || "grid"

  const filters = {
    category: params.category || "all",
    author: params.author || "all",
    tag: params.tag || "all",
    search: params.search || "",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters - Hidden on mobile/tablet */}
        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <BlogFilters filters={filters} categories={blogCategories} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <BlogHeader
            totalResults={filteredPosts.length}
            sortBy={params.sort || "newest"}
            viewMode={viewMode}
            currentParams={params}
            filters={filters}
            categories={blogCategories}
          />

          <BlogGrid posts={paginatedPosts} viewMode={viewMode} />

          {totalPages > 1 && (
            <BlogPagination currentPage={currentPage} totalPages={totalPages} currentParams={params} />
          )}
        </div>
      </div>
    </div>
  )
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", current: true },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
    >
      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent searchParams={searchParams} />
      </Suspense>
    </PageLayout>
  )
}