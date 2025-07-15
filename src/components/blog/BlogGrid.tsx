"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/types/blog"

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12 md:py-16 px-4">
        <div className="text-gray-400 mb-4 md:mb-6">
          <Calendar className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">No blog posts found</h3>
        <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
          Try adjusting your filters to see more results.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
        >
          {/* Blog Image */}
          <div className="relative overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={240}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Link>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1">
                {post.category}
              </Badge>
            </div>

            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-1">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Blog Content */}
          <CardContent className="p-6 flex flex-col flex-1">
            {/* Blog Title */}
            <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>

            {/* Blog Excerpt */}
            <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3 leading-relaxed flex-grow">
              {post.excerpt}
            </p>

            {/* Blog Meta */}
            <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}