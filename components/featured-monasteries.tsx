"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users } from "lucide-react"

const featuredMonasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    image: "/rumtek-monastery-golden-roof-traditional-architect.jpg",
    description: "The largest monastery in Sikkim, known for its golden stupa and traditional architecture.",
    tradition: "Kagyu",
    established: "1966",
    visitors: "Open Daily",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    image: "/pemayangtse-monastery-mountain-view-ancient-buddhi.jpg",
    description: "One of the oldest monasteries in Sikkim with stunning mountain views.",
    tradition: "Nyingma",
    established: "1705",
    visitors: "Open Daily",
  },
  {
    id: 3,
    name: "Enchey Monastery",
    location: "Gangtok",
    image: "/enchey-monastery-gangtok-city-view-colorful-prayer.jpg",
    description: "A beautiful monastery overlooking Gangtok with colorful prayer flags.",
    tradition: "Nyingma",
    established: "1909",
    visitors: "Open Daily",
  },
]

export function FeaturedMonasteries() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Monasteries</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of Sikkim's most sacred and historically significant monasteries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMonasteries.map((monastery) => (
            <Card key={monastery.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={monastery.image || "/placeholder.svg"}
                  alt={monastery.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {monastery.tradition}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{monastery.name}</h3>

                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {monastery.location}
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{monastery.description}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    Est. {monastery.established}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {monastery.visitors}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    Virtual Tour
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Monasteries
          </Button>
        </div>
      </div>
    </section>
  )
}
