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
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Upcoming Events</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          Sort by:
          <Button variant="ghost" size="sm" className="h-auto p-1 font-medium">
            Date
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <Card
            key={event.id}
            className="cursor-pointer hover:shadow-md transition-all duration-200"
            onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">{event.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.monastery}, {event.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{event.type}</Badge>
                      <Badge className="bg-primary/10 text-primary">{event.price}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {event.booked}/{event.capacity} spots
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {event.bookingTypes.map((type) => (
                        <Badge key={type} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 text-muted-foreground transition-transform ${
                        selectedEvent === event.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {selectedEvent === event.id && (
                    <div className="pt-4 border-t space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {event.bookingTypes.map((type) => (
                          <Button key={type} variant="outline" size="sm" className="bg-transparent">
                            Book {type}
                          </Button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Book Now
                        </Button>
                        <Button size="sm" variant="outline">
                          More Details
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Events
        </Button>
      </div>
    </div>
  )
}
