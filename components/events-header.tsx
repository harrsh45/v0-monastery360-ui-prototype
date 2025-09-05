"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Calendar, MapPin } from "lucide-react"

export function EventsHeader() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", label: "All Events", count: 24 },
    { id: "festivals", label: "Festivals", count: 8 },
    { id: "retreats", label: "Retreats", count: 6 },
    { id: "workshops", label: "Workshops", count: 5 },
    { id: "ceremonies", label: "Ceremonies", count: 5 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Events & Festivals</h1>
        <p className="text-lg text-white/80">
          Join sacred ceremonies, cultural festivals, and spiritual retreats at Sikkim's monasteries
        </p>
        <div className="h-1 w-20 bg-primary mt-4"></div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
          <Input
            placeholder="Search events, monasteries, or festivals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-black/30 border-white/10 text-white placeholder:text-white/50 focus:border-primary focus:ring-primary"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10 hover:text-white">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10 hover:text-white">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10 hover:text-white">
            <MapPin className="h-4 w-4 mr-2" />
            Location
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={selectedCategory === category.id ? "bg-primary text-white hover:bg-primary/90" : "bg-transparent border-white/10 text-white hover:bg-white/10"}
          >
            {category.label}
            <Badge variant="secondary" className="ml-2 text-xs bg-black/30 text-white">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  )
}
