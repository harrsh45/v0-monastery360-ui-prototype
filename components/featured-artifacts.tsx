"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Eye, Heart, Download, Shield } from "lucide-react"

const featuredArtifacts = [
  {
    id: 1,
    title: "Prajnaparamita Manuscript",
    monastery: "Rumtek Monastery",
    century: "15th Century",
    type: "Manuscript",
    tradition: "Kagyu",
    image: "/placeholder.svg?key=manu1",
    description: "Ancient Buddhist wisdom text written in gold ink on palm leaves",
    condition: "Excellent",
    resolution: "8K Ultra HD",
    sponsored: false,
    sponsorshipCost: "₹25,000",
    views: 1247,
    likes: 89,
    featured: true,
  },
  {
    id: 2,
    title: "Mahakala Thangka",
    monastery: "Pemayangtse Monastery",
    century: "17th Century",
    type: "Thangka",
    tradition: "Nyingma",
    image: "/placeholder.svg?key=thang1",
    description: "Intricate painted scroll depicting the protective deity Mahakala",
    condition: "Good",
    resolution: "6K HD",
    sponsored: true,
    sponsorshipCost: "₹18,000",
    views: 892,
    likes: 67,
    featured: true,
  },
  {
    id: 3,
    title: "Monastery Wall Mural",
    monastery: "Enchey Monastery",
    century: "19th Century",
    type: "Mural",
    tradition: "Nyingma",
    image: "/placeholder.svg?key=mural1",
    description: "Colorful wall painting depicting Buddhist cosmology and deities",
    condition: "Fair",
    resolution: "12K Ultra HD",
    sponsored: false,
    sponsorshipCost: "₹35,000",
    views: 654,
    likes: 45,
    featured: true,
  },
]

export function FeaturedArtifacts() {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground">Featured Artifacts</h2>
        <Button variant="outline">View All Featured</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredArtifacts.map((artifact) => (
          <Card key={artifact.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src={artifact.image || "/placeholder.svg"}
                alt={artifact.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                <Badge className="bg-accent/90 text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
                <Badge variant="secondary">{artifact.type}</Badge>
                {artifact.sponsored && (
                  <Badge className="bg-green-500/90 text-white">
                    <Shield className="h-3 w-3 mr-1" />
                    Sponsored
                  </Badge>
                )}
              </div>

              {/* Resolution Badge */}
              <div className="absolute top-3 right-3">
                <Badge className="bg-primary/90 text-primary-foreground">{artifact.resolution}</Badge>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            </div>

            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {artifact.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{artifact.monastery}</span>
                  <Badge variant="outline" className="text-xs">
                    {artifact.century}
                  </Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">{artifact.description}</p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    <span>{artifact.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    <span>{artifact.likes}</span>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {artifact.tradition}
                </Badge>
              </div>

              <div className="flex gap-2 pt-2">
                {artifact.sponsored ? (
                  <Button size="sm" className="flex-1" disabled>
                    <Shield className="h-3 w-3 mr-1" />
                    Sponsored
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    Sponsor {artifact.sponsorshipCost}
                  </Button>
                )}
                <Button size="sm" variant="outline">
                  <Eye className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="outline">
                  <Heart className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
