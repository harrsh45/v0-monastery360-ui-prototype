"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation2, Eye, Calendar, Star, X, Layers, Route, Car } from "lucide-react"

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    image: "/rumtek-monastery-golden-roof-traditional-architect.jpg",
    tradition: "Kagyu",
    rating: 4.8,
    distance: "24 km from Gangtok",
    coordinates: { x: 65, y: 45 },
    description: "The largest monastery in Sikkim with golden stupa",
    accessibility: "Easy Access",
    features: ["virtual-tour", "audio-guide", "events"],
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    image: "/pemayangtse-monastery-mountain-view-ancient-buddhi.jpg",
    tradition: "Nyingma",
    rating: 4.7,
    distance: "110 km from Gangtok",
    coordinates: { x: 25, y: 60 },
    description: "One of the oldest monasteries with mountain views",
    accessibility: "Easy Access",
    features: ["virtual-tour", "audio-guide"],
  },
  {
    id: 3,
    name: "Enchey Monastery",
    location: "Gangtok",
    image: "/enchey-monastery-gangtok-city-view-colorful-prayer.jpg",
    tradition: "Nyingma",
    rating: 4.6,
    distance: "3 km from Gangtok center",
    coordinates: { x: 60, y: 50 },
    description: "Beautiful monastery overlooking Gangtok",
    accessibility: "Easy Access",
    features: ["virtual-tour", "events"],
  },
  {
    id: 4,
    name: "Tashiding Monastery",
    location: "West Sikkim",
    image: "/placeholder.svg?key=tash1",
    tradition: "Nyingma",
    rating: 4.9,
    distance: "40 km from Pelling",
    coordinates: { x: 30, y: 70 },
    description: "Sacred hilltop monastery with Himalayan views",
    accessibility: "Moderate Trek",
    features: ["virtual-tour"],
  },
  {
    id: 5,
    name: "Dubdi Monastery",
    location: "West Sikkim",
    image: "/placeholder.svg?key=dubd1",
    tradition: "Nyingma",
    rating: 4.5,
    distance: "5 km from Yuksom",
    coordinates: { x: 20, y: 75 },
    description: "First monastery built in Sikkim",
    accessibility: "Moderate Trek",
    features: ["virtual-tour", "audio-guide"],
  },
  {
    id: 6,
    name: "Phensang Monastery",
    location: "North Sikkim",
    image: "/placeholder.svg?key=phen1",
    tradition: "Gelug",
    rating: 4.4,
    distance: "125 km from Gangtok",
    coordinates: { x: 55, y: 20 },
    description: "Remote high-altitude monastery",
    accessibility: "Difficult Trek",
    features: ["archives"],
  },
]

export function MapInterface() {
  const [selectedMonastery, setSelectedMonastery] = useState<(typeof monasteries)[0] | null>(null)
  const [showRoutes, setShowRoutes] = useState(false)
  const [showTransport, setShowTransport] = useState(false)
  const [mapLayer, setMapLayer] = useState<"satellite" | "terrain" | "standard">("standard")

  return (
    <div className="relative h-full bg-gradient-to-br from-green-50 to-blue-50">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <Card className="p-2">
          <div className="flex flex-col gap-1">
            <Button
              size="sm"
              variant={mapLayer === "standard" ? "default" : "outline"}
              onClick={() => setMapLayer("standard")}
            >
              <Layers className="h-4 w-4" />
            </Button>
            <Button size="sm" variant={showRoutes ? "default" : "outline"} onClick={() => setShowRoutes(!showRoutes)}>
              <Route className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant={showTransport ? "default" : "outline"}
              onClick={() => setShowTransport(!showTransport)}
            >
              <Car className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>

      {/* Map Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-emerald-100 via-green-50 to-blue-100 relative overflow-hidden">
          {/* Sikkim outline mockup */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <path
              d="M20 20 L80 25 L85 80 L25 85 Z"
              fill="rgba(34, 197, 94, 0.1)"
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth="0.5"
            />
            {/* Mountain ranges */}
            <path
              d="M10 30 Q30 15 50 25 Q70 10 90 20"
              fill="none"
              stroke="rgba(107, 114, 128, 0.3)"
              strokeWidth="0.3"
            />
            <path
              d="M15 40 Q35 25 55 35 Q75 20 95 30"
              fill="none"
              stroke="rgba(107, 114, 128, 0.3)"
              strokeWidth="0.3"
            />
          </svg>

          {/* Routes overlay */}
          {showRoutes && (
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <path
                d="M60 50 Q40 45 25 60 Q35 70 30 70"
                fill="none"
                stroke="rgba(59, 130, 246, 0.6)"
                strokeWidth="0.5"
                strokeDasharray="2,1"
              />
              <path
                d="M65 45 Q55 30 55 20"
                fill="none"
                stroke="rgba(59, 130, 246, 0.6)"
                strokeWidth="0.5"
                strokeDasharray="2,1"
              />
            </svg>
          )}

          {/* Transport nodes */}
          {showTransport && (
            <>
              <div className="absolute" style={{ left: "50%", top: "55%" }}>
                <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="absolute" style={{ left: "30%", top: "65%" }}>
                <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </>
          )}

          {/* Monastery Pins */}
          {monasteries.map((monastery) => (
            <div
              key={monastery.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${monastery.coordinates.x}%`, top: `${monastery.coordinates.y}%` }}
              onClick={() => setSelectedMonastery(monastery)}
            >
              <div className="relative">
                <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center">
                  <MapPin className="h-3 w-3 text-white" />
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {monastery.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monastery Popup */}
      {selectedMonastery && (
        <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-96 z-30">
          <Card className="shadow-xl">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={selectedMonastery.image || "/placeholder.svg"}
                  alt={selectedMonastery.name}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => setSelectedMonastery(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <Badge className="absolute bottom-2 left-2 bg-primary/90 text-primary-foreground">
                  {selectedMonastery.tradition}
                </Badge>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{selectedMonastery.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{selectedMonastery.location}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{selectedMonastery.rating}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{selectedMonastery.description}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{selectedMonastery.distance}</span>
                  <Badge variant="outline" className="text-xs">
                    {selectedMonastery.accessibility}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Navigation2 className="h-3 w-3 mr-1" />
                    Directions
                  </Button>
                  {selectedMonastery.features.includes("events") && (
                    <Button size="sm" variant="outline">
                      <Calendar className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-20">
        <Card className="p-3">
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Monastery</span>
            </div>
            {showTransport && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Transport Hub</span>
              </div>
            )}
            {showRoutes && (
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-blue-500 opacity-60"></div>
                <span>Route</span>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
