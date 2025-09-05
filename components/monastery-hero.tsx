"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Download, Share2, Heart, Star, MapPin } from "lucide-react"

interface MonasteryHeroProps {
  monastery: {
    name: string
    location: string
    image: string
    panoramicImage: string
    tradition: string
    rating: number
    distance: string
    features: string[]
  }
}

export function MonasteryHero({ monastery }: MonasteryHeroProps) {
  const [is360View, setIs360View] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url('${is360View ? monastery.panoramicImage : monastery.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary/90 text-primary-foreground">{monastery.tradition}</Badge>
              {monastery.features.includes("virtual-tour") && (
                <Badge variant="secondary" className="bg-white/90 text-foreground">
                  360° Virtual Tour
                </Badge>
              )}
              {monastery.features.includes("audio-guide") && (
                <Badge variant="secondary" className="bg-white/90 text-foreground">
                  Audio Guide
                </Badge>
              )}
            </div>

            {/* Title and Info */}
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3 text-balance">{monastery.name}</h1>

            <div className="flex flex-wrap items-center gap-4 text-white/90 mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>
                  {monastery.location} • {monastery.distance}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{monastery.rating}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setIs360View(!is360View)}>
                <Play className="h-4 w-4 mr-2" />
                {is360View ? "Exit 360° View" : "Start Virtual Tour"}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Guide
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur"
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className={`h-4 w-4 mr-2 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
                {isFavorited ? "Saved" : "Save"}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 360° View Indicator */}
      {is360View && (
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-accent/90 text-accent-foreground animate-pulse">360° Panoramic View</Badge>
        </div>
      )}
    </section>
  )
}
