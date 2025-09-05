"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Play, Eye, Calendar, Star } from "lucide-react"

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    district: "Gangtok",
    image: "/rumtek-monastery-golden-roof-traditional-architect.jpg",
    description: "The largest monastery in Sikkim, known for its golden stupa and traditional architecture.",
    tradition: "Kagyu",
    established: "1966",
    accessibility: "Easy Access",
    rating: 4.8,
    visitors: "Open Daily",
    features: ["virtual-tour", "audio-guide", "events", "archives"],
    distance: "24 km from Gangtok",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    district: "Pelling",
    image: "/pemayangtse-monastery-mountain-view-ancient-buddhi.jpg",
    description: "One of the oldest monasteries in Sikkim with stunning mountain views and ancient Buddhist artifacts.",
    tradition: "Nyingma",
    established: "1705",
    accessibility: "Easy Access",
    rating: 4.7,
    visitors: "Open Daily",
    features: ["virtual-tour", "audio-guide", "archives"],
    distance: "110 km from Gangtok",
  },
  {
    id: 3,
    name: "Enchey Monastery",
    location: "Gangtok",
    district: "East Sikkim",
    image: "/enchey-monastery-gangtok-city-view-colorful-prayer.jpg",
    description: "A beautiful monastery overlooking Gangtok with colorful prayer flags and city views.",
    tradition: "Nyingma",
    established: "1909",
    accessibility: "Easy Access",
    rating: 4.6,
    visitors: "Open Daily",
    features: ["virtual-tour", "audio-guide", "events"],
    distance: "3 km from Gangtok center",
  },
  {
    id: 4,
    name: "Tashiding Monastery",
    location: "West Sikkim",
    district: "Tashiding",
    image: "/placeholder.svg?key=tash1",
    description: "Sacred monastery on a hilltop with panoramic views of the Himalayas.",
    tradition: "Nyingma",
    established: "1641",
    accessibility: "Moderate Trek",
    rating: 4.9,
    visitors: "Open Daily",
    features: ["virtual-tour", "archives"],
    distance: "40 km from Pelling",
  },
  {
    id: 5,
    name: "Dubdi Monastery",
    location: "West Sikkim",
    district: "Yuksom",
    image: "/placeholder.svg?key=dubd1",
    description: "The first monastery built in Sikkim, nestled in dense forests.",
    tradition: "Nyingma",
    established: "1701",
    accessibility: "Moderate Trek",
    rating: 4.5,
    visitors: "Open Daily",
    features: ["virtual-tour", "audio-guide"],
    distance: "5 km from Yuksom",
  },
  {
    id: 6,
    name: "Phensang Monastery",
    location: "North Sikkim",
    district: "Lachen",
    image: "/placeholder.svg?key=phen1",
    description: "Remote monastery in the high Himalayas with ancient murals.",
    tradition: "Gelug",
    established: "1721",
    accessibility: "Difficult Trek",
    rating: 4.4,
    visitors: "Seasonal Access",
    features: ["archives"],
    distance: "125 km from Gangtok",
  },
]

export function MonasteryGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-white/10">
        <p className="text-sm text-white/70">Showing <span className="text-primary font-medium">{monasteries.length}</span> monasteries</p>
        <div className="flex items-center gap-2 text-sm text-white/70">
          Sort by:
          <Button variant="ghost" size="sm" className="h-auto p-1 font-medium text-primary hover:text-primary/80 hover:bg-black/30">
            Relevance
          </Button>
        </div>
      </div>

      {/* Monastery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {monasteries.map((monastery) => (
          <div
            key={monastery.id}
            className="group overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredCard(monastery.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={monastery.image || "/placeholder.svg"}
                alt={monastery.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay with quick actions */}
              <div
                className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-2 transition-opacity duration-300 ${
                  hoveredCard === monastery.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Play className="h-4 w-4 mr-1" />
                  Tour
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-black/50 hover:bg-black/70 text-white border-white/30"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  Details
                </Button>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge className="bg-primary/90 text-primary-foreground font-medium">{monastery.tradition}</Badge>
                {monastery.features.includes("virtual-tour") && (
                  <Badge variant="secondary" className="bg-accent/90 text-accent-foreground font-medium">
                    360° Tour
                  </Badge>
                )}
              </div>

              {/* Rating */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                <Star className="h-3 w-3 fill-accent text-accent" />
                {monastery.rating}
              </div>
            </div>

            <div className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {monastery.name}
                  </h3>
                  <div className="flex items-center text-sm text-white/70 mt-1">
                    <MapPin className="h-3 w-3 mr-1 text-primary" />
                    {monastery.location} • {monastery.distance}
                  </div>
                </div>

                <p className="text-sm text-white/70 line-clamp-2">{monastery.description}</p>

                <div className="flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-primary" />
                      Est. {monastery.established}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1 text-primary" />
                      {monastery.visitors}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs border-white/20 text-white/80">
                    {monastery.accessibility}
                  </Badge>
                </div>

                {/* Feature Icons */}
                <div className="flex items-center gap-2 pt-2">
                  {monastery.features.includes("virtual-tour") && (
                    <div className="flex items-center text-xs text-white/70 bg-black/30 px-2 py-1 rounded-full">
                      <Play className="h-3 w-3 mr-1 text-primary" />
                      Virtual Tour
                    </div>
                  )}
                  {monastery.features.includes("events") && (
                    <div className="flex items-center text-xs text-white/70 bg-black/30 px-2 py-1 rounded-full">
                      <Calendar className="h-3 w-3 mr-1 text-primary" />
                      Events
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Explore
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary">
          Load More Monasteries
        </Button>
      </div>
    </div>
  )
}
