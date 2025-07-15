"use client"

import { BlogCard } from "./BlogCard"
import type { BlogPost } from "@/types/blog"

interface BlogGridProps {
  posts: BlogPost[]
  viewMode?: "grid" | "list"
}

export function BlogGrid({ posts, viewMode = "grid" }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12 md:py-16 px-4">
        <div className="text-gray-400 mb-4 md:mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
            📝
          </div>
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">No blog posts found</h3>
        <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
          Try adjusting your filters to see more results.
        </p>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} viewMode="list" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} viewMode="grid" />
      ))}
    </div>
  )
}