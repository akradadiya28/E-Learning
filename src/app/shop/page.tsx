import { Suspense } from "react"
import { PageLayout } from "@/components/common/PageLayout"
import { ProductFilters } from "@/components/shop/ProductFilters"
import { ProductGrid } from "@/components/shop/ProductGrid"
import { ProductHeader } from "@/components/shop/ProductHeader"
import { ProductPagination } from "@/components/shop/ProductPagination"
import { ProductsSkeleton } from "@/components/shop/ProductsSkeleton"
import { productCategories, productsData, productLanguages } from "@/data/productsData"

interface ShopPageProps {
  searchParams: Promise<{
    category?: string
    language?: string
    price?: string
    rating?: string
    search?: string
    sort?: string
    page?: string
    view?: string
  }>
}

function filterAndSortProducts(searchParams: {
  category?: string
  language?: string
  price?: string
  rating?: string
  search?: string
  sort?: string
  page?: string
  view?: string
}) {
  let filtered = [...productsData]

  // Apply filters
  if (searchParams.category && searchParams.category !== "all") {
    filtered = filtered.filter((product) => product.category.toLowerCase().replace(/\s+/g, "-") === searchParams.category?.toLowerCase())
  }

  if (searchParams.language && searchParams.language !== "all") {
    filtered = filtered.filter((product) => product.language.toLowerCase() === searchParams.language?.toLowerCase())
  }

  if (searchParams.price && searchParams.price !== "all") {
    if (searchParams.price === "free") {
      filtered = filtered.filter((product) => product.price === 0)
    } else if (searchParams.price === "paid") {
      filtered = filtered.filter((product) => product.price > 0)
    }
  }

  if (searchParams.rating && searchParams.rating !== "all") {
    const minRating = Number.parseFloat(searchParams.rating)
    filtered = filtered.filter((product) => product.rating >= minRating)
  }

  if (searchParams.search) {
    filtered = filtered.filter(
      (product) =>
        product.title.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        product.author?.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        product.category.toLowerCase().includes(searchParams.search?.toLowerCase() || "") ||
        product.tags.some(tag => tag.toLowerCase().includes(searchParams.search?.toLowerCase() || ""))
    )
  }

  // Apply sorting
  const sortBy = searchParams.sort || "popular"
  switch (sortBy) {
    case "popular":
      filtered.sort((a, b) => b.reviewCount - a.reviewCount)
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

async function ShopContent({ searchParams }: ShopPageProps) {
  const params = await searchParams
  const filteredProducts = filterAndSortProducts(params)
  const currentPage = Number.parseInt(params.page || "1")
  const productsPerPage = 9
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

  // Get view mode from URL params, default to grid
  const viewMode = (params.view as "grid" | "list") || "grid"

  const filters = {
    category: params.category || "all",
    language: params.language || "all",
    price: params.price || "all",
    rating: params.rating || "all",
    search: params.search || "",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters - Hidden on mobile/tablet */}
        <div className="hidden lg:block lg:w-80 flex-shrink-0">
          <ProductFilters filters={filters} categories={productCategories} languages={productLanguages} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <ProductHeader
            totalResults={filteredProducts.length}
            sortBy={params.sort || "popular"}
            viewMode={viewMode}
            currentParams={params}
            filters={filters}
            categories={productCategories}
            languages={productLanguages}
          />

          <ProductGrid products={paginatedProducts} viewMode={viewMode} />

          {totalPages > 1 && (
            <ProductPagination currentPage={currentPage} totalPages={totalPages} currentParams={params} />
          )}
        </div>
      </div>
    </div>
  )
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shop Page", current: true },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      backgroundVariant="default"
      backgroundIntensity="light"
      showAnimations={false}
    >
      <Suspense fallback={<ProductsSkeleton />}>
        <ShopContent searchParams={searchParams} />
      </Suspense>
    </PageLayout>
  )
}