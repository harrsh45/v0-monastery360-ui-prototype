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
    <section className="py-20 bg-gradient-to-b from-black/80 to-black/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Explore Sacred Spaces</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Featured Monasteries</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore some of Sikkim's most sacred and historically significant monasteries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredMonasteries.map((monastery, index) => (
            <Card 
              key={monastery.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 rounded-2xl bg-black/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={monastery.image || "/placeholder.svg"}
                  alt={monastery.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground shadow-lg">
                  {monastery.tradition}
                </Badge>
              </div>

              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">{monastery.name}</h3>

                <div className="flex items-center text-sm text-white/70 mb-4">
                  <MapPin className="h-4 w-4 mr-2 text-accent" />
                  {monastery.location}
                </div>

                <p className="text-white/70 text-sm mb-6 line-clamp-2">{monastery.description}</p>

                <div className="flex items-center justify-between text-xs text-white/70 mb-6 border-t border-b border-white/20 py-3">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-2 text-primary/70" />
                    Est. {monastery.established}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-2 text-primary/70" />
                    {monastery.visitors}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    Virtual Tour
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 bg-transparent text-white rounded-xl border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-8 text-white border-primary/30 hover:border-primary/70 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
          >
            View All Monasteries
          </Button>
        </div>
      </div>
    </section>
  )
}
