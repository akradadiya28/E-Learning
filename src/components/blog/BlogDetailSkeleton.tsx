import { Card, CardContent } from "@/components/ui/card"

export function BlogDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>

        {/* Hero Image Skeleton */}
        <div className="aspect-video bg-gray-200 rounded-lg mb-8 animate-pulse"></div>

        {/* Header Skeleton */}
        <header className="mb-8">
          {/* Title Skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>

          {/* Meta Info Skeleton */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
          </div>

          {/* Author Info Skeleton */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-48 animate-pulse"></div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </header>

        {/* Content Skeleton */}
        <article className="mb-12">
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
            
            <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse mt-8"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            
            <div className="h-24 bg-gray-200 rounded animate-pulse my-8"></div>
            
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          </div>
        </article>

        {/* Tags Skeleton */}
        <div className="mb-12">
          <div className="h-5 bg-gray-200 rounded w-16 mb-4 animate-pulse"></div>
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-18 animate-pulse"></div>
          </div>
        </div>

        {/* Related Posts Skeleton */}
        <section className="mb-12">
          <div className="h-6 bg-gray-200 rounded w-48 mb-8 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <div className="aspect-video bg-gray-200 rounded-t-lg animate-pulse"></div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Navigation Skeleton */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}