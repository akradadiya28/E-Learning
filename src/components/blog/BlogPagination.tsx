"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  currentParams: Record<string, string | undefined>
  basePath?: string
}

export function BlogPagination({
  currentPage,
  totalPages,
  basePath = "/blog",
}: BlogPaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())

    if (page !== 1) {
      params.set("page", page.toString())
    } else {
      params.delete("page")
    }

    const newUrl = params.toString() ? `${basePath}?${params.toString()}` : basePath
    router.push(newUrl)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </Button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => navigateToPage(page)}
            className={`w-10 h-10 ${
              currentPage === page ? "bg-blue-600 hover:bg-blue-700 text-white" : "hover:bg-gray-50"
            }`}
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  )
}