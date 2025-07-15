"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Event } from "@/types/event"

interface EventGridProps {
  events: Event[]
}

export function EventGrid({ events }: EventGridProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12 md:py-16 px-4">
        <div className="text-gray-400 mb-4 md:mb-6">
          <Calendar className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">No events found</h3>
        <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
          Try adjusting your filters to see more results.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
      {events.map((event) => (
        <Card
          key={event.id}
          className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
        >
          {/* Event Image */}
          <div className="relative overflow-hidden">
            <Link href={`/events/${event.slug}`}>
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={400}
                height={240}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </Link>
            
            {/* Date Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-3 py-1">
                {event.date}
              </Badge>
            </div>
          </div>

          {/* Event Content */}
          <CardContent className="p-6 flex flex-col flex-1">
            {/* Event Title */}
            <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
              <Link href={`/events/${event.slug}`}>{event.title}</Link>
            </h3>

            {/* Event Description */}
            <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2 leading-relaxed flex-grow">
              {event.description}
            </p>

            {/* Event Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                {event.category}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}