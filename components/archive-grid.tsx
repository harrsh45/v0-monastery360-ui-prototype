"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Heart, Download, Share2, Shield, Calendar, MapPin, Zap } from "lucide-react"

const artifacts = [
  {
    id: 4,
    title: "Lotus Sutra Manuscript",
    monastery: "Tashiding Monastery",
    century: "16th Century",
    type: "Manuscript",
    tradition: "Nyingma",
    image: "/placeholder.svg?key=lotus1",
    description: "Sacred Buddhist text written in Tibetan script on handmade paper",
    condition: "Good",
    resolution: "8K",
    sponsored: true,
    sponsorshipCost: "₹22,000",
    views: 567,
    likes: 34,
    dateDigitized: "2023-08-15",
    blockchainId: "0x7f9a2b8c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b",
    dimensions: "45cm x 30cm",
    materials: "Paper, Natural Ink",
    significance: "One of the most important Mahayana Buddhist texts",
  },
  {
    id: 5,
    title: "Green Tara Statue",
    monastery: "Dubdi Monastery",
    century: "18th Century",
    type: "Sculpture",
    tradition: "Nyingma",
    image: "/placeholder.svg?key=tara1",
    description: "Bronze statue of Green Tara, the female Buddha of compassion",
    condition: "Excellent",
    resolution: "12K",
    sponsored: false,
    sponsorshipCost: "₹45,000",
    views: 789,
    likes: 56,
    dateDigitized: "2023-09-22",
    blockchainId: "0x8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c",
    dimensions: "25cm height",
    materials: "Bronze, Gold Gilding",
    significance: "Represents swift compassionate action",
  },
  {
    id: 6,
    title: "Mandala of Vajradhara",
    monastery: "Rumtek Monastery",
    century: "17th Century",
    type: "Thangka",
    tradition: "Kagyu",
    image: "/placeholder.svg?key=mandala1",
    description: "Intricate geometric representation of the cosmic Buddha",
    condition: "Fair",
    resolution: "10K",
    sponsored: false,
    sponsorshipCost: "₹38,000",
    views: 432,
    likes: 28,
    dateDigitized: "2023-07-10",
    blockchainId: "0x9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d",
    dimensions: "90cm x 60cm",
    materials: "Cotton Canvas, Mineral Pigments",
    significance: "Sacred meditation tool for Vajrayana practice",
  },
  {
    id: 7,
    title: "Prayer Wheel Collection",
    monastery: "Enchey Monastery",
    century: "19th Century",
    type: "Artifacts",
    tradition: "Nyingma",
    image: "/placeholder.svg?key=wheel1",
    description: "Set of ornate prayer wheels with mantras inscribed",
    condition: "Good",
    resolution: "6K",
    sponsored: true,
    sponsorshipCost: "₹15,000",
    views: 345,
    likes: 19,
    dateDigitized: "2023-10-05",
    blockchainId: "0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c",
    dimensions: "Various sizes",
    materials: "Copper, Silver, Wood",
    significance: "Used for accumulating merit through spinning",
  },
  {
    id: 8,
    title: "Avalokiteshvara Mural",
    monastery: "Pemayangtse Monastery",
    century: "15th Century",
    type: "Mural",
    tradition: "Nyingma",
    image: "/placeholder.svg?key=avalo1",
    description: "Wall painting of the Bodhisattva of Compassion",
    condition: "Poor",
    resolution: "8K",
    sponsored: false,
    sponsorshipCost: "₹55,000",
    views: 678,
    likes: 42,
    dateDigitized: "2023-06-18",
    blockchainId: "0xb2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d",
    dimensions: "200cm x 150cm",
    materials: "Natural Pigments on Plaster",
    significance: "Represents universal compassion",
  },
  {
    id: 9,
    title: "Tibetan Medical Text",
    monastery: "Tashiding Monastery",
    century: "14th Century",
    type: "Manuscript",
    tradition: "Nyingma",
    image: "/placeholder.svg?key=medical1",
    description: "Ancient medical treatise on traditional healing",
    condition: "Excellent",
    resolution: "10K",
    sponsored: false,
    sponsorshipCost: "₹32,000",
    views: 234,
    likes: 15,
    dateDigitized: "2023-11-12",
    blockchainId: "0xc3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e",
    dimensions: "35cm x 25cm",
    materials: "Palm Leaf, Natural Ink",
    significance: "Preserves ancient healing knowledge",
  },
]

export function ArchiveGrid() {
  const [selectedArtifact, setSelectedArtifact] = useState<(typeof artifacts)[0] | null>(null)
  const [likedItems, setLikedItems] = useState<number[]>([])

  const handleLike = (id: number) => {
    setLikedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing {artifacts.length} of 2,847 artifacts</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          Sort by:
          <Button variant="ghost" size="sm" className="h-auto p-1 font-medium">
            Relevance
          </Button>
        </div>
      </div>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <Card key={artifact.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src={artifact.image || "/placeholder.svg"}
                alt={artifact.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                <Badge variant="secondary">{artifact.type}</Badge>
                {artifact.sponsored && (
                  <Badge className="bg-green-500/90 text-white">
                    <Shield className="h-3 w-3 mr-1" />
                    Sponsored
                  </Badge>
                )}
                <Badge
                  className={`${
                    artifact.condition === "Excellent"
                      ? "bg-green-500/90"
                      : artifact.condition === "Good"
                        ? "bg-blue-500/90"
                        : artifact.condition === "Fair"
                          ? "bg-yellow-500/90"
                          : "bg-red-500/90"
                  } text-white`}
                >
                  {artifact.condition}
                </Badge>
              </div>

              {/* Resolution Badge */}
              <div className="absolute top-3 right-3">
                <Badge className="bg-primary/90 text-primary-foreground">{artifact.resolution}</Badge>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      onClick={() => setSelectedArtifact(artifact)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-2xl">{selectedArtifact?.title}</DialogTitle>
                    </DialogHeader>
                    {selectedArtifact && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <img
                            src={selectedArtifact.image || "/placeholder.svg"}
                            alt={selectedArtifact.title}
                            className="w-full rounded-lg"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium text-foreground mb-2">Description</h3>
                            <p className="text-muted-foreground">{selectedArtifact.description}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <h4 className="font-medium text-foreground">Monastery</h4>
                              <p className="text-muted-foreground">{selectedArtifact.monastery}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">Period</h4>
                              <p className="text-muted-foreground">{selectedArtifact.century}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">Tradition</h4>
                              <p className="text-muted-foreground">{selectedArtifact.tradition}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">Condition</h4>
                              <p className="text-muted-foreground">{selectedArtifact.condition}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">Dimensions</h4>
                              <p className="text-muted-foreground">{selectedArtifact.dimensions}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">Materials</h4>
                              <p className="text-muted-foreground">{selectedArtifact.materials}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-foreground mb-2">Cultural Significance</h4>
                            <p className="text-muted-foreground">{selectedArtifact.significance}</p>
                          </div>

                          <div className="p-3 bg-muted/30 rounded-lg">
                            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                              <Zap className="h-4 w-4" />
                              Blockchain Certificate
                            </h4>
                            <p className="text-xs text-muted-foreground font-mono break-all">
                              {selectedArtifact.blockchainId}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                Digitized: {selectedArtifact.dateDigitized}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {selectedArtifact.views} views
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1">
                              <Download className="h-4 w-4 mr-2" />
                              Download HD
                            </Button>
                            {!selectedArtifact.sponsored && (
                              <Button variant="outline" className="flex-1 bg-transparent">
                                Sponsor {selectedArtifact.sponsorshipCost}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>

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
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{artifact.monastery}</span>
                  </div>
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
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleLike(artifact.id)}
                  className={likedItems.includes(artifact.id) ? "text-red-500" : ""}
                >
                  <Heart className={`h-3 w-3 ${likedItems.includes(artifact.id) ? "fill-current" : ""}`} />
                </Button>
                <Button size="sm" variant="outline">
                  <Share2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Artifacts
        </Button>
      </div>
    </div>
  )
}
