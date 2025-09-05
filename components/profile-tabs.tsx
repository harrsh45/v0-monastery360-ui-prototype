"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Calendar, MapPin, Clock, Heart, Download, Eye, Star, Bell, Shield, Globe } from "lucide-react"

const bookings = [
  {
    id: 1,
    event: "Losar Festival 2024",
    monastery: "Rumtek Monastery",
    date: "2024-02-10",
    status: "Confirmed",
    type: "Group Tour",
    participants: 2,
    amount: "₹1,000",
  },
  {
    id: 2,
    event: "Meditation Retreat",
    monastery: "Pemayangtse Monastery",
    date: "2024-03-15",
    status: "Upcoming",
    type: "Individual",
    participants: 1,
    amount: "₹2,500",
  },
  {
    id: 3,
    event: "Thangka Workshop",
    monastery: "Enchey Monastery",
    date: "2024-01-20",
    status: "Completed",
    type: "Workshop",
    participants: 1,
    amount: "₹1,500",
  },
]

const favorites = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    image: "/rumtek-monastery-golden-roof-traditional-architect.jpg",
    tradition: "Kagyu",
    rating: 4.8,
    lastVisited: "2024-01-15",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    image: "/pemayangtse-monastery-mountain-view-ancient-buddhi.jpg",
    tradition: "Nyingma",
    rating: 4.7,
    lastVisited: "2023-12-08",
  },
  {
    id: 3,
    name: "Enchey Monastery",
    location: "Gangtok",
    image: "/enchey-monastery-gangtok-city-view-colorful-prayer.jpg",
    tradition: "Nyingma",
    rating: 4.6,
    lastVisited: "2024-01-22",
  },
]

const downloads = [
  {
    id: 1,
    title: "Rumtek Virtual Tour",
    type: "Virtual Tour",
    size: "2.4 GB",
    downloadDate: "2024-01-15",
    status: "Downloaded",
  },
  {
    id: 2,
    title: "Tibetan Audio Guide - English",
    type: "Audio Guide",
    size: "156 MB",
    downloadDate: "2024-01-10",
    status: "Downloaded",
  },
  {
    id: 3,
    title: "Monastery Map Collection",
    type: "Maps",
    size: "89 MB",
    downloadDate: "2024-01-08",
    status: "Downloaded",
  },
  {
    id: 4,
    title: "Pemayangtse 360° Experience",
    type: "Virtual Tour",
    size: "1.8 GB",
    downloadDate: "2024-01-05",
    status: "Downloading",
    progress: 67,
  },
]

export function ProfileTabs() {
  return (
    <Tabs defaultValue="dashboard" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="bookings">Bookings</TabsTrigger>
        <TabsTrigger value="favorites">Favorites</TabsTrigger>
        <TabsTrigger value="downloads">Downloads</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="dashboard" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <Calendar className="h-4 w-4 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Booked Meditation Retreat</p>
                  <p className="text-xs text-muted-foreground">Pemayangtse Monastery • 2 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <Heart className="h-4 w-4 text-red-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Added Enchey Monastery to favorites</p>
                  <p className="text-xs text-muted-foreground">5 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <Download className="h-4 w-4 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Downloaded Rumtek Virtual Tour</p>
                  <p className="text-xs text-muted-foreground">1 week ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">This Month</span>
                <Badge variant="secondary">March 2024</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tours Completed</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Events Attended</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Downloads</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Hours Explored</span>
                  <span className="font-medium">12.5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Saga Dawa Festival</h4>
                <p className="text-sm text-muted-foreground mb-3">Based on your interest in Buddhist festivals</p>
                <Button size="sm">Learn More</Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Tashiding Monastery</h4>
                <p className="text-sm text-muted-foreground mb-3">Similar to your favorite monasteries</p>
                <Button size="sm" variant="outline">
                  Explore
                </Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Advanced Meditation</h4>
                <p className="text-sm text-muted-foreground mb-3">Continue your meditation journey</p>
                <Button size="sm" variant="outline">
                  Book Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="bookings" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>My Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{booking.event}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {booking.monastery}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(booking.date).toLocaleDateString()}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {booking.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      className={
                        booking.status === "Confirmed"
                          ? "bg-green-500/10 text-green-700"
                          : booking.status === "Upcoming"
                            ? "bg-blue-500/10 text-blue-700"
                            : "bg-gray-500/10 text-gray-700"
                      }
                    >
                      {booking.status}
                    </Badge>
                    <p className="text-sm font-medium mt-1">{booking.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="favorites" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Favorite Monasteries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favorites.map((monastery) => (
                <div key={monastery.id} className="border rounded-lg overflow-hidden">
                  <img
                    src={monastery.image || "/placeholder.svg"}
                    alt={monastery.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-medium">{monastery.name}</h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
                      <span>{monastery.location}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {monastery.rating}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <Badge variant="outline" className="text-xs">
                        {monastery.tradition}
                      </Badge>
                      <Button size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        Visit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="downloads" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Downloaded Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {downloads.map((download) => (
                <div key={download.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{download.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <Badge variant="outline" className="text-xs">
                        {download.type}
                      </Badge>
                      <span>{download.size}</span>
                      <span>Downloaded {download.downloadDate}</span>
                    </div>
                    {download.status === "Downloading" && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span>Downloading...</span>
                          <span>{download.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${download.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {download.status === "Downloaded" && (
                      <>
                        <Button size="sm" variant="outline">
                          Open
                        </Button>
                        <Button size="sm" variant="outline">
                          Share
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="settings" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+91 98765 43210" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="Gangtok, Sikkim" />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." rows={3} />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="event-reminders">Event Reminders</Label>
                    <Switch id="event-reminders" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="newsletter">Newsletter</Label>
                    <Switch id="newsletter" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Language & Region
                </h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="language">Preferred Language</Label>
                    <Input id="language" defaultValue="English" />
                  </div>
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input id="timezone" defaultValue="Asia/Kolkata" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Privacy
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="profile-public">Public Profile</Label>
                    <Switch id="profile-public" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="activity-sharing">Share Activity</Label>
                    <Switch id="activity-sharing" defaultChecked />
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
