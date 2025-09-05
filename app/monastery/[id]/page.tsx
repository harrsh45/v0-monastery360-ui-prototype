import { Navigation } from "@/components/navigation"
import { MonasteryHero } from "@/components/monastery-hero"
import { MonasteryTabs } from "@/components/monastery-tabs"
import { MonasteryQuickInfo } from "@/components/monastery-quick-info"

// Mock data - in a real app this would come from a database
const monasteryData = {
  "1": {
    id: "1",
    name: "Rumtek Monastery",
    location: "East Sikkim",
    district: "Gangtok",
    image: "/rumtek-monastery-golden-roof-traditional-architect.jpg",
    panoramicImage: "/placeholder.svg?key=rum360",
    description:
      "The largest monastery in Sikkim, known for its golden stupa and traditional architecture. Rumtek serves as the main seat of the Karma Kagyu lineage and houses some of the most precious Buddhist artifacts in the region.",
    tradition: "Kagyu",
    established: "1966",
    founder: "16th Karmapa Rangjung Rigpe Dorje",
    accessibility: "Easy Access",
    rating: 4.8,
    visitors: "Open Daily",
    timings: "6:00 AM - 6:00 PM",
    entryFee: "Free",
    distance: "24 km from Gangtok",
    coordinates: { lat: 27.2946, lng: 88.5583 },
    features: ["virtual-tour", "audio-guide", "events", "archives"],
    gallery: [
      "/rumtek-monastery-golden-roof-traditional-architect.jpg",
      "/placeholder.svg?key=rum2",
      "/placeholder.svg?key=rum3",
      "/placeholder.svg?key=rum4",
    ],
    events: [
      {
        id: 1,
        name: "Losar Festival",
        date: "2024-02-10",
        description: "Tibetan New Year celebration with traditional dances and ceremonies",
        type: "Festival",
        bookingAvailable: true,
      },
      {
        id: 2,
        name: "Meditation Retreat",
        date: "2024-03-15",
        description: "3-day meditation retreat for beginners and advanced practitioners",
        type: "Retreat",
        bookingAvailable: true,
      },
    ],
    audioGuides: [
      { language: "English", duration: "25 min", available: true },
      { language: "Hindi", duration: "25 min", available: true },
      { language: "Nepali", duration: "25 min", available: true },
      { language: "Tibetan", duration: "25 min", available: true },
    ],
  },
}

export default function MonasteryDetailPage({ params }: { params: { id: string } }) {
  const monastery = monasteryData[params.id as keyof typeof monasteryData]

  if (!monastery) {
    return <div>Monastery not found</div>
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <MonasteryHero monastery={monastery} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MonasteryTabs monastery={monastery} />
          </div>
          <div className="lg:col-span-1">
            <MonasteryQuickInfo monastery={monastery} />
          </div>
        </div>
      </div>
    </main>
  )
}
