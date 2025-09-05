import { Navigation } from "@/components/navigation"
import { ArchiveHeader } from "@/components/archive-header"
import { ArchiveFilters } from "@/components/archive-filters"
import { ArchiveGrid } from "@/components/archive-grid"
import { FeaturedArtifacts } from "@/components/featured-artifacts"

export default function ArchivesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ArchiveHeader />
        <FeaturedArtifacts />
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <aside className="lg:w-80 flex-shrink-0">
            <ArchiveFilters />
          </aside>
          <div className="flex-1">
            <ArchiveGrid />
          </div>
        </div>
      </div>
    </main>
  )
}
