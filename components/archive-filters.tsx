"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { X, Filter } from "lucide-react"

const filterOptions = {
  types: [
    { id: "manuscripts", label: "Manuscripts", count: 847 },
    { id: "thangkas", label: "Thangkas", count: 623 },
    { id: "murals", label: "Wall Murals", count: 456 },
    { id: "sculptures", label: "Sculptures", count: 234 },
    { id: "artifacts", label: "Ritual Artifacts", count: 387 },
    { id: "texts", label: "Sacred Texts", count: 300 },
  ],
  centuries: [
    { id: "12th", label: "12th Century", count: 45 },
    { id: "13th", label: "13th Century", count: 78 },
    { id: "14th", label: "14th Century", count: 156 },
    { id: "15th", label: "15th Century", count: 234 },
    { id: "16th", label: "16th Century", count: 298 },
    { id: "17th", label: "17th Century", count: 456 },
    { id: "18th", label: "18th Century", count: 567 },
    { id: "19th", label: "19th Century", count: 623 },
    { id: "20th", label: "20th Century", count: 390 },
  ],
  traditions: [
    { id: "nyingma", label: "Nyingma", count: 1245 },
    { id: "kagyu", label: "Kagyu", count: 987 },
    { id: "gelug", label: "Gelug", count: 456 },
    { id: "sakya", label: "Sakya", count: 159 },
  ],
  conditions: [
    { id: "excellent", label: "Excellent", count: 1234 },
    { id: "good", label: "Good", count: 987 },
    { id: "fair", label: "Fair", count: 456 },
    { id: "poor", label: "Poor (Restoration Needed)", count: 170 },
  ],
  monasteries: [
    { id: "rumtek", label: "Rumtek Monastery", count: 678 },
    { id: "pemayangtse", label: "Pemayangtse Monastery", count: 543 },
    { id: "enchey", label: "Enchey Monastery", count: 432 },
    { id: "tashiding", label: "Tashiding Monastery", count: 321 },
    { id: "dubdi", label: "Dubdi Monastery", count: 234 },
  ],
}

export function ArchiveFilters() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [resolutionRange, setResolutionRange] = useState([4])

  const handleFilterChange = (filterId: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filterId])
    } else {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId))
    }
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
    setResolutionRange([4])
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
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Active Filters
              </CardTitle>
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
          {/* Artifact Types */}
          <div>
            <h3 className="font-medium text-sm text-foreground mb-3">Artifact Type</h3>
            <div className="space-y-2">
              {filterOptions.types.map((option) => (
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
          </div>

          <Separator />

          {/* Time Period */}
          <div>
            <h3 className="font-medium text-sm text-foreground mb-3">Time Period</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {filterOptions.centuries.map((option) => (
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
          </div>

          <Separator />

          {/* Buddhist Tradition */}
          <div>
            <h3 className="font-medium text-sm text-foreground mb-3">Buddhist Tradition</h3>
            <div className="space-y-2">
              {filterOptions.traditions.map((option) => (
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
          </div>

          <Separator />

          {/* Condition */}
          <div>
            <h3 className="font-medium text-sm text-foreground mb-3">Condition</h3>
            <div className="space-y-2">
              {filterOptions.conditions.map((option) => (
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
          </div>

          <Separator />

          {/* Resolution Quality */}
          <div>
            <h3 className="font-medium text-sm text-foreground mb-3">Minimum Resolution</h3>
            <div className="space-y-3">
              <Slider
                value={resolutionRange}
                onValueChange={setResolutionRange}
                max={12}
                min={2}
                step={2}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>2K</span>
                <span className="font-medium">{resolutionRange[0]}K+</span>
                <span>12K</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Monastery Source */}
          <div>
            <h3 className="font-medium text-sm text-foreground mb-3">Monastery Source</h3>
            <div className="space-y-2">
              {filterOptions.monasteries.map((option) => (
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
          </div>
        </CardContent>
      </Card>

      {/* Sponsorship Options */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Support Preservation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="needs-sponsorship" />
            <label htmlFor="needs-sponsorship" className="text-sm">
              Show items needing sponsorship
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sponsored" />
            <label htmlFor="sponsored" className="text-sm">
              Show sponsored items
            </label>
          </div>
          <Button variant="outline" className="w-full bg-transparent">
            Become a Sponsor
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
