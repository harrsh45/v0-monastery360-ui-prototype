"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Grid3X3, List, SlidersHorizontal } from "lucide-react"

export function MonasteryListHeader() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Explore Monasteries</h2>
        <div className="h-1 w-16 bg-accent mb-4 rounded-full"></div>
        <p className="text-lg text-white/80">
          {/* Discover Sikkim's sacred monasteries through virtual tours and cultural experiences */}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/10">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4" />
          <Input
            placeholder="Search monasteries by name, location, or tradition..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
          />
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-2">
          <Button 
            variant={viewMode === "grid" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "border-white/20 text-white hover:bg-white/10"}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button 
            variant={viewMode === "list" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "border-white/20 text-white hover:bg-white/10"}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="ml-2 bg-black/30 border-white/20 text-white hover:bg-white/10"
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>
    </div>
  )
}
