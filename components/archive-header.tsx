"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Grid3X3, List, SlidersHorizontal, Archive } from "lucide-react"

export function ArchiveHeader() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Archive className="h-8 w-8 text-primary" />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Digital Heritage Archive</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Explore and preserve Sikkim's sacred manuscripts, ancient murals, and precious artifacts through cutting-edge
          digital preservation technology
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            2,847 Artifacts Preserved
          </Badge>
          <Badge variant="secondary" className="bg-secondary/10 text-secondary">
            Blockchain Certified
          </Badge>
          <Badge variant="secondary" className="bg-accent/10 text-accent">
            High Resolution Scans
          </Badge>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search manuscripts, artifacts, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="ml-2 bg-transparent">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
        </div>
      </div>
    </div>
  )
}
