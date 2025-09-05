import { Navigation } from "@/components/navigation"
import { EventsHeader } from "@/components/events-header"
import { EventsCalendar } from "@/components/events-calendar"
import { EventsList } from "@/components/events-list"
import { FeaturedEvents } from "@/components/featured-events"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EventsHeader />
        <FeaturedEvents />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <EventsList />
          </div>
          <div className="lg:col-span-1">
            <EventsCalendar />
          </div>
        </div>
      </div>
    </main>
  )
}
