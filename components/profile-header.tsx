"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, MapPin, Calendar, Heart, Download, Settings } from "lucide-react"

export function ProfileHeader() {
  const [isEditing, setIsEditing] = useState(false)

  const userStats = {
    bookings: 12,
    favorites: 8,
    downloads: 15,
    toursCompleted: 6,
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Avatar and Basic Info */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg?key=avatar1" alt="User Avatar" />
              <AvatarFallback className="text-lg font-semibold">JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-serif text-2xl font-bold text-foreground">John Doe</h1>
              <p className="text-muted-foreground">Cultural Heritage Enthusiast</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Gangtok, Sikkim</span>
                <Calendar className="h-4 w-4 ml-2" />
                <span>Member since March 2023</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{userStats.bookings}</div>
              <div className="text-xs text-muted-foreground">Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{userStats.favorites}</div>
              <div className="text-xs text-muted-foreground">Favorites</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{userStats.downloads}</div>
              <div className="text-xs text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{userStats.toursCompleted}</div>
              <div className="text-xs text-muted-foreground">Tours</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            <Heart className="h-3 w-3 mr-1" />
            Heritage Supporter
          </Badge>
          <Badge variant="secondary" className="bg-secondary/10 text-secondary">
            <Download className="h-3 w-3 mr-1" />
            Digital Collector
          </Badge>
          <Badge variant="secondary" className="bg-accent/10 text-accent">
            Virtual Explorer
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
