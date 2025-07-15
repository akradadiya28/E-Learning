import { Suspense } from "react"
import { notFound } from "next/navigation"
import { BlogDetailContent } from "@/components/blog/BlogDetailContent"
import { BlogDetailSkeleton } from "@/components/blog/BlogDetailSkeleton"
import { PageLayout } from "@/components/common/PageLayout"
import { blogData } from "@/data/blogData"
import type { Metadata } from "next"

interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

async function BlogDetailPageContent({ params }: BlogDetailPageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  // Find blog post by slug
  const post = blogData.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogData
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return <BlogDetailContent post={post} relatedPosts={relatedPosts} />
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const post = blogData.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, current: true },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      backgroundVariant="default"
      backgroundIntensity="light"
      showAnimations={false}
    >
      <Suspense fallback={<BlogDetailSkeleton />}>
        <BlogDetailPageContent params={params} />
      </Suspense>
    </PageLayout>
  )
}

// Generate static params for known blog posts
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const post = blogData.find(p => p.slug === slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - SkillGro Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    keywords: post.tags.join(', '),
  }
}