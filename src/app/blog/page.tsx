"use client"

import { useState, useMemo, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import type { BlogFilters as BlogFiltersType } from "@/types/blog"
import { blogPosts } from "@/data/blogData"
import { BlogFiltersComponent } from "@/components/blog/BlogFilters"
import { PageLayout } from "@/components/common/PageLayout"
import { BlogHeader } from "@/components/blog/BlogHeader"
import { BlogGrid } from "@/components/blog/BlogGrid"
import { BlogPagination } from "@/components/blog/BlogPagination"

const POSTS_PER_PAGE = 9

export default function BlogPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Initialize filters from URL params
  const [filters, setFilters] = useState<BlogFiltersType>({
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "all",
    tag: searchParams.get("tag") || "",
    sortBy: searchParams.get("sort") || "newest",
    page: Number.parseInt(searchParams.get("page") || "1"),
  })

  // Update view mode from URL
  useEffect(() => {
    const urlViewMode = searchParams.get("view") as "grid" | "list"
    if (urlViewMode) {
      setViewMode(urlViewMode)
    }
  }, [searchParams])

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()

    if (filters.search) params.set("search", filters.search)
    if (filters.category !== "all") params.set("category", filters.category)
    if (filters.tag) params.set("tag", filters.tag)
    if (filters.sortBy !== "newest") params.set("sort", filters.sortBy)
    if (filters.page > 1) params.set("page", filters.page.toString())
    if (viewMode !== "grid") params.set("view", viewMode)

    const queryString = params.toString()
    const newUrl = queryString ? `/blog?${queryString}` : "/blog"

    router.replace(newUrl, { scroll: false })
  }, [filters, viewMode, router])

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = [...blogPosts]

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.excerpt.toLowerCase().includes(searchTerm) ||
          post.category.toLowerCase().includes(searchTerm) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
      )
    }

    // Apply category filter
    if (filters.category !== "all") {
      filtered = filtered.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === filters.category)
    }

    // Apply tag filter
    if (filters.tag) {
      filtered = filtered.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase().replace(/\s+/g, "-") === filters.tag),
      )
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "newest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        case "oldest":
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        case "popular":
          return b.views - a.views
        case "title":
          return a.title.localeCompare(b.title)
        case "read-time":
          return a.readTime - b.readTime
        default:
          return 0
      }
    })

    return filtered
  }, [filters])

  // Paginate posts
  const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE)
  const startIndex = (filters.page - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredAndSortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const handleFiltersChange = (newFilters: BlogFiltersType) => {
    setFilters(newFilters)
  }

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }))
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs", current: true },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile/tablet */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <BlogFiltersComponent
              filters={filters}
              onFiltersChange={handleFiltersChange}
              totalResults={filteredAndSortedPosts.length}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <BlogHeader
              filters={filters}
              onFiltersChange={handleFiltersChange}
              totalResults={filteredAndSortedPosts.length}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            <BlogGrid posts={paginatedPosts} viewMode={viewMode} />

            <BlogPagination currentPage={filters.page} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
