import { Navigation } from "@/components/navigation"
import { MapInterface } from "@/components/map-interface"
import { MapSidebar } from "@/components/map-sidebar"

export default function MapPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="flex h-[calc(100vh-4rem)]">
        <MapSidebar />
        <div className="flex-1">
          <MapInterface />
        </div>
      </div>
    </main>
  )
}
