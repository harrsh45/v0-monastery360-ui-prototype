"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const filterOptions = {
  districts: [
    { id: "east", label: "East Sikkim", count: 12 },
    { id: "west", label: "West Sikkim", count: 8 },
    { id: "north", label: "North Sikkim", count: 6 },
    { id: "south", label: "South Sikkim", count: 4 },
  ],
  traditions: [
    { id: "nyingma", label: "Nyingma", count: 15 },
    { id: "kagyu", label: "Kagyu", count: 10 },
    { id: "gelug", label: "Gelug", count: 5 },
  ],
  accessibility: [
    { id: "easy", label: "Easy Access", count: 20 },
    { id: "moderate", label: "Moderate Trek", count: 8 },
    { id: "difficult", label: "Difficult Trek", count: 2 },
  ],
  features: [
    { id: "virtual-tour", label: "Virtual Tour Available", count: 25 },
    { id: "audio-guide", label: "Audio Guide", count: 18 },
    { id: "events", label: "Upcoming Events", count: 12 },
    { id: "archives", label: "Digital Archives", count: 15 },
  ],
}

export function MonasteryFilters() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const handleFilterChange = (filterId: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filterId])
    } else {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId))
    }
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
  }

  const removeFilter = (filterId: string) => {
    setSelectedFilters(selectedFilters.filter((id) => id !== filterId))
  }

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filterId) => {
                const filterLabel = Object.values(filterOptions)
                  .flat()
                  .find((option) => option.id === filterId)?.label
                return (
                  <Badge key={filterId} variant="secondary" className="pr-1">
                    {filterLabel}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1"
                      onClick={() => removeFilter(filterId)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filter Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {Object.entries(filterOptions).map(([category, options], index) => (
            <div key={category}>
              <h3 className="font-medium text-sm text-foreground mb-3 capitalize">{category.replace("-", " ")}</h3>
              <div className="space-y-2">
                {options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.id}
                      checked={selectedFilters.includes(option.id)}
                      onCheckedChange={(checked) => handleFilterChange(option.id, checked as boolean)}
                    />
                    <label
                      htmlFor={option.id}
                      className="text-sm text-muted-foreground cursor-pointer flex-1 flex items-center justify-between"
                    >
                      <span>{option.label}</span>
                      <span className="text-xs">({option.count})</span>
                    </label>
                  </div>
                ))}
              </div>
              {index < Object.entries(filterOptions).length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
