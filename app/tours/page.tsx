import { Navigation } from "@/components/navigation"
import { MonasteryListHeader } from "@/components/monastery-list-header"
import { MonasteryFilters } from "@/components/monastery-filters"
import { MonasteryGrid } from "@/components/monastery-grid"

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black/90 via-black/80 to-black/95">
      <Navigation />
      
      {/* Hero Banner */}
      <div className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('/pemayangtse-monastery-mountain-view-ancient-buddhi.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">Explore Sacred Spaces</span> */}
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Virtual Monastery Tours</h1>
          <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {/* Immerse yourself in the spiritual beauty of Sikkim's monasteries through interactive virtual experiences */}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MonasteryListHeader />
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
              <MonasteryFilters />
            </div>
          </aside>
          <div className="flex-1">
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
              <MonasteryGrid />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
