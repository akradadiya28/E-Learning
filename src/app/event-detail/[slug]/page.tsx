import { Suspense } from "react"
import { notFound } from "next/navigation"
import { PageLayout } from "@/components/common/PageLayout"
import { eventsData } from "@/data/eventsData"
import type { Metadata } from "next"
import { EventDetailContent } from "@/components/event-detail/EventDetailContent"
import { EventDetailSkeleton } from "@/components/event-detail/EventDetailSkeleton"

interface EventDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

async function EventDetailPageContent({ params }: EventDetailPageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  // Find event by slug
  const event = eventsData.find(e => e.slug === slug)

  if (!event) {
    notFound()
  }

  // Get related events (same category, excluding current event)
  const relatedEvents = eventsData
    .filter(e => e.category === event.category && e.id !== event.id)
    .slice(0, 3)

  return <EventDetailContent event={event} relatedEvents={relatedEvents} />
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const event = eventsData.find(e => e.slug === slug)

  if (!event) {
    notFound()
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: event.title, current: true },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
    >
      <Suspense fallback={<EventDetailSkeleton />}>
        <EventDetailPageContent params={params} />
      </Suspense>
    </PageLayout>
  )
}

// Generate static params for known events
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const event = eventsData.find(e => e.slug === slug)

  if (!event) {
    return {
      title: "Event Not Found",
      description: "The requested event could not be found.",
    }
  }

  return {
    title: `${event.title} - SkillGro Events`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.image],
      type: 'article',
      publishedTime: event.createdAt,
      modifiedTime: event.updatedAt,
      tags: event.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.description,
      images: [event.image],
    },
    keywords: event.tags.join(', '),
  }
}