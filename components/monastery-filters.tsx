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
      <h3 className="text-xl font-serif font-semibold text-white mb-4">Refine Your Search</h3>
      
      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden mb-6">
          <div className="p-4 pb-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-white">Active Filters</h4>
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-primary hover:text-primary/80 hover:bg-black/30">
                Clear All
              </Button>
            </div>
          </div>
          <div className="px-4 pb-4 pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filterId) => {
                const filterLabel = Object.values(filterOptions)
                  .flat()
                  .find((option) => option.id === filterId)?.label
                return (
                  <Badge key={filterId} variant="secondary" className="pr-1 bg-primary/20 text-primary hover:bg-primary/30">
                    {filterLabel}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1 text-primary hover:text-primary/80"
                      onClick={() => removeFilter(filterId)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Filter Categories */}
      <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <h4 className="text-lg font-medium text-white">Filters</h4>
        </div>
        <div className="p-4 space-y-6">
          {Object.entries(filterOptions).map(([category, options], index) => (
            <div key={category}>
              <h3 className="font-medium text-sm text-primary mb-3 capitalize">{category.replace("-", " ")}</h3>
              <div className="space-y-2">
                {options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.id}
                      checked={selectedFilters.includes(option.id)}
                      onCheckedChange={(checked) => handleFilterChange(option.id, checked as boolean)}
                      className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label
                      htmlFor={option.id}
                      className="text-sm text-white/80 hover:text-white cursor-pointer flex-1 flex items-center justify-between"
                    >
                      <span>{option.label}</span>
                      <span className="text-xs text-white/60 bg-black/30 px-2 py-0.5 rounded-full">({option.count})</span>
                    </label>
                  </div>
                ))}
              </div>
              {index < Object.entries(filterOptions).length - 1 && <Separator className="mt-4 bg-white/10" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
