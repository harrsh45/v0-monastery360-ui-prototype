"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MapPin, Star, Navigation2, ChevronLeft, ChevronRight } from "lucide-react"

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    tradition: "Kagyu",
    rating: 4.8,
    distance: "24 km",
    accessibility: "Easy Access",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    tradition: "Nyingma",
    rating: 4.7,
    distance: "110 km",
    accessibility: "Easy Access",
  },
  {
    id: 3,
    name: "Enchey Monastery",
    location: "Gangtok",
    tradition: "Nyingma",
    rating: 4.6,
    distance: "3 km",
    accessibility: "Easy Access",
  },
  {
    id: 4,
    name: "Tashiding Monastery",
    location: "West Sikkim",
    tradition: "Nyingma",
    rating: 4.9,
    distance: "40 km",
    accessibility: "Moderate Trek",
  },
]

const filterOptions = {
  districts: ["East Sikkim", "West Sikkim", "North Sikkim", "South Sikkim"],
  traditions: ["Nyingma", "Kagyu", "Gelug"],
  accessibility: ["Easy Access", "Moderate Trek", "Difficult Trek"],
}

export function MapSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const handleFilterChange = (filter: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filter])
    } else {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter))
    }
  }

  if (isCollapsed) {
    return (
      <div className="w-12 bg-background border-r flex flex-col items-center py-4">
        <Button variant="ghost" size="sm" onClick={() => setIsCollapsed(false)}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="w-80 bg-background border-r flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-xl font-semibold">Explore Map</h2>
          <Button variant="ghost" size="sm" onClick={() => setIsCollapsed(true)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search monasteries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="h-4 w-4" />
          <span className="font-medium text-sm">Filters</span>
        </div>

        <div className="space-y-4">
          {Object.entries(filterOptions).map(([category, options]) => (
            <div key={category}>
              <h4 className="text-sm font-medium mb-2 capitalize">{category.replace(/([A-Z])/g, " $1")}</h4>
              <div className="space-y-1">
                {options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${category}-${option}`}
                      checked={selectedFilters.includes(option)}
                      onCheckedChange={(checked) => handleFilterChange(option, checked as boolean)}
                    />
                    <label htmlFor={`${category}-${option}`} className="text-sm text-muted-foreground cursor-pointer">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedFilters.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Active Filters</span>
              <Button variant="ghost" size="sm" onClick={() => setSelectedFilters([])}>
                Clear
              </Button>
            </div>
            <div className="flex flex-wrap gap-1">
              {selectedFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="text-xs">
                  {filter}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Monastery List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Monasteries ({monasteries.length})</span>
            <Button variant="ghost" size="sm">
              Sort
            </Button>
          </div>

          <div className="space-y-3">
            {monasteries.map((monastery) => (
              <Card key={monastery.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-3">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{monastery.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {monastery.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {monastery.rating}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {monastery.tradition}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{monastery.distance}</span>
                    </div>

                    <div className="flex gap-1">
                      <Button size="sm" className="flex-1 h-7 text-xs">
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                        <Navigation2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 border-t bg-muted/30">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-foreground">{monasteries.length}</div>
            <div className="text-xs text-muted-foreground">Monasteries</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-foreground">4</div>
            <div className="text-xs text-muted-foreground">Districts</div>
          </div>
        </div>
      </div>
    </div>
  )
}
