import { Navigation } from "@/components/navigation"
import { MonasteryListHeader } from "@/components/monastery-list-header"
import { MonasteryFilters } from "@/components/monastery-filters"
import { MonasteryGrid } from "@/components/monastery-grid"

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MonasteryListHeader />
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <MonasteryFilters />
          </aside>
          <div className="flex-1">
            <MonasteryGrid />
          </div>
        </div>
      </div>
    </main>
  )
}
