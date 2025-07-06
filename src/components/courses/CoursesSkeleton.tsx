import { Card, CardContent } from "@/components/ui/card"

export function CoursesSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Skeleton */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-3 bg-gray-100 rounded animate-pulse"></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1">
          {/* Header Skeleton */}
          <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg">
            <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
            <div className="flex gap-3">
              <div className="h-8 bg-gray-200 rounded w-32 animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
          </div>

          {/* Course Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Card key={i} className="h-full">
                <div className="w-full h-48 bg-gray-200 rounded-t-lg animate-pulse"></div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-100 rounded w-24 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
                      <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
