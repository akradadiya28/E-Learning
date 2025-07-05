import Link from "next/link"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

function NewsFeed() {
  const newsData = [
    {
      title: "How to Become Mediocre and Stuck in 10 Minutes",
      image: "/images/newsfeed/news1.jpg",
      date: "March 15, 2024",
      category: "Education",
    },
    {
      title: "Get Started With 3 Strategies With Top 10 Trends",
      image: "/images/newsfeed/news2.jpg",
      date: "March 12, 2024",
      category: "Strategy",
    },
    {
      title: "Make Your Own Demanding Connecting Content",
      image: "/images/newsfeed/news3.jpg",
      date: "March 10, 2024",
      category: "Content",
    },
    {
      title: "What are the benefits of quality education",
      image: "/images/newsfeed/news4.jpg",
      date: "March 8, 2024",
      category: "Quality",
    },
  ]

  return (
    <div>
      {/* News Feed Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">News & Blog</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Latest News Feed</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in education and learning
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsData.map((post, index) => (
              <Card key={`news-${index}`} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-orange-500 hover:bg-orange-500 text-white text-xs">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <Link href="#" className="inline-flex items-center text-blue-600 text-sm font-medium hover:underline">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsFeed
