import { Card, CardContent } from "@/components/ui/card"

export function CourseDetailLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-br from-orange-400 to-red-500 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="h-8 bg-white/20 rounded w-20 animate-pulse"></div>
                <div className="h-8 bg-white/20 rounded w-24 animate-pulse"></div>
              </div>
              <div className="h-12 bg-white/20 rounded animate-pulse"></div>
              <div className="h-6 bg-white/20 rounded w-3/4 animate-pulse"></div>
              <div className="h-6 bg-white/20 rounded w-1/2 animate-pulse"></div>
            </div>
            <div className="h-64 bg-white/20 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
