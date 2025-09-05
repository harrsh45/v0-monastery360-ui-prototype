"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, MapPin, DollarSign, Users, Navigation, Phone, Calendar } from "lucide-react"

interface MonasteryQuickInfoProps {
  monastery: {
    timings: string
    entryFee: string
    visitors: string
    accessibility: string
    distance: string
    coordinates: { lat: number; lng: number }
  }
}

export function MonasteryQuickInfo({ monastery }: MonasteryQuickInfoProps) {
  return (
    <div className="space-y-6">
      {/* Quick Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Visit Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Timings</p>
                <p className="text-sm text-muted-foreground">{monastery.timings}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Entry Fee</p>
                <p className="text-sm text-muted-foreground">{monastery.entryFee}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Visitor Status</p>
                <p className="text-sm text-muted-foreground">{monastery.visitors}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Distance</p>
                <p className="text-sm text-muted-foreground">{monastery.distance}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <Badge variant="outline" className="w-full justify-center">
              {monastery.accessibility}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Location & Directions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Location & Directions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Interactive Map</p>
            </div>
          </div>

          <div className="space-y-2">
            <Button className="w-full">
              <Navigation className="h-4 w-4 mr-2" />
              Get Directions
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              <Phone className="h-4 w-4 mr-2" />
              Contact Monastery
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Calendar className="h-4 w-4 mr-2" />
            Book Event or Tour
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Users className="h-4 w-4 mr-2" />
            Join Group Tour
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Phone className="h-4 w-4 mr-2" />
            Contact Guide
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
