import { Card, CardContent } from "@/components/ui/card"

export function EventDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2">
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
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-28 animate-pulse"></div>
              </div>

              {/* Organizer Info Skeleton */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-40 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </header>

            {/* Content Skeleton */}
            <div className="space-y-8">
              {/* Overview Section */}
              <section>
                <div className="h-6 bg-gray-200 rounded w-48 mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                </div>
              </section>

              {/* Learning Section */}
              <section>
                <div className="h-5 bg-gray-200 rounded w-64 mb-4 animate-pulse"></div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded flex-1 animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Tags Section */}
              <section>
                <div className="h-5 bg-gray-200 rounded w-16 mb-4 animate-pulse"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-18 animate-pulse"></div>
                </div>
              </section>

              {/* Map Section */}
              <section>
                <div className="h-5 bg-gray-200 rounded w-20 mb-4 animate-pulse"></div>
                <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
              </section>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Registration Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Price Section */}
                    <div className="text-center">
                      <div className="h-8 bg-gray-200 rounded w-24 mx-auto mb-2 animate-pulse"></div>
                      <div className="h-12 bg-gray-200 rounded w-32 mx-auto animate-pulse"></div>
                    </div>

                    {/* Event Info */}
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
                      <div className="space-y-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="flex justify-between">
                            <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
                            <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Payment Icons */}
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-28 mb-3 animate-pulse"></div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-8 h-6 bg-gray-200 rounded animate-pulse"></div>
                        ))}
                      </div>
                    </div>

                    {/* Share Buttons */}
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32 mb-3 animate-pulse"></div>
                      <div className="flex gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                        ))}
                      </div>
                    </div>

                    {/* Join Button */}
                    <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Events */}
              <Card>
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-15 h-15 bg-gray-200 rounded animate-pulse"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Navigation Skeleton */}
        <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200">
          <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}