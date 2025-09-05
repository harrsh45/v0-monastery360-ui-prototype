"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react"

const featuredEvents = [
  {
    id: 1,
    name: "Losar Festival 2024",
    monastery: "Rumtek Monastery",
    location: "East Sikkim",
    date: "2024-02-10",
    endDate: "2024-02-12",
    time: "6:00 AM - 8:00 PM",
    image: "/placeholder.svg?key=losar1",
    description: "Celebrate Tibetan New Year with traditional dances, ceremonies, and cultural performances",
    type: "Festival",
    capacity: 500,
    booked: 320,
    price: "Free",
    featured: true,
    bookingTypes: ["Group Tour", "Individual", "Virtual Experience"],
  },
  {
    id: 2,
    name: "Meditation Retreat",
    monastery: "Pemayangtse Monastery",
    location: "West Sikkim",
    date: "2024-03-15",
    endDate: "2024-03-17",
    time: "5:00 AM - 7:00 PM",
    image: "/placeholder.svg?key=retreat1",
    description: "3-day intensive meditation retreat for beginners and advanced practitioners",
    type: "Retreat",
    capacity: 30,
    booked: 18,
    price: "₹2,500",
    featured: true,
    bookingTypes: ["Individual", "Private Session"],
  },
]

export function FeaturedEvents() {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4">
        <h2 className="font-serif text-2xl font-semibold text-white">Featured Events</h2>
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">View All</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredEvents.map((event) => (
          <div key={event.id} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={event.image || "/placeholder.svg"} alt={event.name} className="w-full h-48 object-cover" />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-accent/90 text-black font-medium">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
                <Badge variant="secondary" className="bg-black/50 text-white border border-white/10">{event.type}</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary/90 text-white font-medium">{event.price}</Badge>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-white mb-1">{event.name}</h3>
                <div className="flex items-center text-sm text-white/70">
                  <MapPin className="h-3 w-3 mr-1 text-primary" />
                  {event.monastery}, {event.location}
                </div>
              </div>

              <p className="text-sm text-white/80 line-clamp-2">{event.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-white">{new Date(event.date).toLocaleDateString()}</p>
                    {event.endDate && (
                      <p className="text-xs text-white/70">to {new Date(event.endDate).toLocaleDateString()}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-white">All Day</p>
                    <p className="text-xs text-white/70">{event.time}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-white/80">
                    {event.booked}/{event.capacity} registered
                  </span>
                </div>
                <div className="w-24 bg-black/30 rounded-full h-2 border border-white/10">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${(event.booked / event.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">Book Now</Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">Learn More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
