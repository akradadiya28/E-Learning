import { Suspense } from "react"
import { notFound } from "next/navigation"
import { ShopDetailContent } from "@/components/shop-detail/ShopDetailContent"
import { ShopDetailSkeleton } from "@/components/shop-detail/ShopDetailSkeleton"
import { PageLayout } from "@/components/common/PageLayout"
import { productsData } from "@/data/productsData"

interface ShopDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

async function ShopDetailPageContent({ params }: ShopDetailPageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  // Find product by slug or ID
  const product = productsData.find(p => p.slug === slug || p.id === slug)

  if (!product) {
    notFound()
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return <ShopDetailContent product={product} relatedProducts={relatedProducts} />
}

export default async function ShopDetailPage({ params }: ShopDetailPageProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shop Details", current: true },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
    >
      <Suspense fallback={<ShopDetailSkeleton />}>
        <ShopDetailPageContent params={params} />
      </Suspense>
    </PageLayout>
  )
}

// Generate static params for known products
export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ShopDetailPageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const product = productsData.find(p => p.slug === slug || p.id === slug)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.title} - SkillGro Shop`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  }
}