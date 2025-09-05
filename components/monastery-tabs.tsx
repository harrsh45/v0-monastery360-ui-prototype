"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Download, Calendar, Volume2, ImageIcon } from "lucide-react"

interface MonasteryTabsProps {
  monastery: {
    id: string
    name: string
    description: string
    established: string
    founder: string
    tradition: string
    gallery: string[]
    events: Array<{
      id: number
      name: string
      date: string
      description: string
      type: string
      bookingAvailable: boolean
    }>
    audioGuides: Array<{
      language: string
      duration: string
      available: boolean
    }>
    coordinates: { lat: number; lng: number }
  }
}

export function MonasteryTabs({ monastery }: MonasteryTabsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)

  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="tour">Virtual Tour</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="audio">Audio Guide</TabsTrigger>
        <TabsTrigger value="archives">Archives</TabsTrigger>
      </TabsList>

      <TabsContent value="about" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">About {monastery.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{monastery.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-foreground">Established</h4>
                  <p className="text-muted-foreground">{monastery.established}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Founder</h4>
                  <p className="text-muted-foreground">{monastery.founder}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-foreground">Tradition</h4>
                  <Badge variant="outline">{monastery.tradition}</Badge>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Significance</h4>
                  <p className="text-muted-foreground">Main seat of Karma Kagyu lineage</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tour" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl flex items-center gap-2">
              <Play className="h-5 w-5" />
              Virtual Tour Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Play className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-muted-foreground">360° Virtual Tour Player</p>
                <Button className="mt-4">
                  <Play className="h-4 w-4 mr-2" />
                  Start Virtual Tour
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download for Offline
              </Button>
              <Button variant="outline" size="sm">
                VR Mode
              </Button>
              <Button variant="outline" size="sm">
                Fullscreen
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="events" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Events & Festivals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {monastery.events.map((event) => (
              <div key={event.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">{event.name}</h4>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                  <Badge variant="outline">{event.type}</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                  </div>

                  {event.bookingAvailable && <Button size="sm">Book Now</Button>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="gallery" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              Photo Gallery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={monastery.gallery[selectedImage] || "/placeholder.svg"}
                  alt={`${monastery.name} gallery image ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-2">
                {monastery.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Gallery thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="audio" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl flex items-center gap-2">
              <Volume2 className="h-5 w-5" />
              Audio Guides
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {monastery.audioGuides.map((guide) => (
              <div key={guide.language} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Volume2 className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">{guide.language}</h4>
                    <p className="text-sm text-muted-foreground">Duration: {guide.duration}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={playingAudio === guide.language ? "default" : "outline"}
                    onClick={() => setPlayingAudio(playingAudio === guide.language ? null : guide.language)}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    {playingAudio === guide.language ? "Playing..." : "Play"}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="archives" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Digital Heritage Archives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">
                Explore digitally preserved manuscripts, artifacts, and historical documents from {monastery.name}
              </p>
              <Button>
                <ImageIcon className="h-4 w-4 mr-2" />
                Browse Archives
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
