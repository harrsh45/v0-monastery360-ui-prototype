"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ChevronRight } from "lucide-react"

const events = [
  {
    id: 3,
    name: "Saga Dawa Festival",
    monastery: "Enchey Monastery",
    location: "Gangtok",
    date: "2024-05-23",
    time: "6:00 AM - 6:00 PM",
    type: "Festival",
    capacity: 200,
    booked: 45,
    price: "Free",
    bookingTypes: ["Group Tour", "Individual"],
  },
  {
    id: 4,
    name: "Thangka Painting Workshop",
    monastery: "Rumtek Monastery",
    location: "East Sikkim",
    date: "2024-04-08",
    time: "9:00 AM - 5:00 PM",
    type: "Workshop",
    capacity: 20,
    booked: 12,
    price: "₹1,500",
    bookingTypes: ["Individual", "Private Session"],
  },
  {
    id: 5,
    name: "Butter Lamp Ceremony",
    monastery: "Tashiding Monastery",
    location: "West Sikkim",
    date: "2024-03-28",
    time: "7:00 PM - 9:00 PM",
    type: "Ceremony",
    capacity: 100,
    booked: 67,
    price: "₹200",
    bookingTypes: ["Individual", "Group Tour"],
  },
  {
    id: 6,
    name: "Mindfulness Retreat",
    monastery: "Dubdi Monastery",
    location: "West Sikkim",
    date: "2024-04-20",
    time: "5:00 AM - 8:00 PM",
    type: "Retreat",
    capacity: 15,
    booked: 8,
    price: "₹3,000",
    bookingTypes: ["Individual"],
  },
]

export function EventsList() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4">
        <h2 className="font-serif text-2xl font-semibold text-white">Upcoming Events</h2>
        <div className="flex items-center gap-2 text-sm text-white/70">
          Sort by:
          <Button variant="ghost" size="sm" className="h-auto p-1 font-medium text-white hover:bg-white/10">
            Date
          </Button>
        </div>
      </div>

      <div className="space-y-4 relative">
        {/* Vertical Timeline */}
        <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-primary/30 z-0"></div>
        
        {events.map((event) => (
          <div key={event.id} className="relative">
            {/* Timeline Date Marker */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black/60 border-2 border-primary flex items-center justify-center text-white font-medium">
                {new Date(event.date).getDate()}
              </div>
              <div className="text-xs text-white/70 mt-1">
                {new Date(event.date).toLocaleString('default', { month: 'short' })}
              </div>
            </div>
            
            <div 
              className="ml-16 cursor-pointer hover:shadow-md transition-all duration-200 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
              onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-white">{event.name}</h3>
                      <div className="flex items-center text-sm text-white/70 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.monastery}, {event.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-white/20 text-white bg-black/30">{event.type}</Badge>
                      <Badge className="bg-primary/20 text-primary border border-primary/30">{event.price}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-white/80">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-white/80">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-white/80">
                        {event.booked}/{event.capacity} spots
                      </span>
                    </div>
                  </div>
                </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {event.bookingTypes.map((type) => (
                        <Badge key={type} variant="secondary" className="text-xs bg-black/30 text-white/90 border border-white/10">
                          {type}
                        </Badge>
                      ))}
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 text-white/70 transition-transform ${
                        selectedEvent === event.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {selectedEvent === event.id && (
                    <div className="pt-4 border-t border-white/10 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {event.bookingTypes.map((type) => (
                          <Button key={type} variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                            Book {type}
                          </Button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-white">
                          Book Now
                        </Button>
                        <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                          More Details
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">

<Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 bg-black/40 backdrop-blur-sm">
          Load More Events
        </Button>
      </div>
    </div>
  )
}
