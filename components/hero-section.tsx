import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Play, Map, Calendar, Archive } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/beautiful-sikkim-monastery-in-mountains-with-praye.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Discover Sikkim's
            <span className="text-accent block">Sacred Heritage</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Immerse yourself in the spiritual beauty of Sikkim's monasteries through virtual tours, cultural events, and
            digital heritage preservation.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search monasteries, events..."
                className="pl-10 bg-white/95 backdrop-blur border-white/20 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Button
              size="lg"
              className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur border border-white/20"
            >
              <Play className="h-4 w-4 mr-2" />
              Virtual Tours
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Events
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur"
            >
              <Map className="h-4 w-4 mr-2" />
              Map
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur"
            >
              <Archive className="h-4 w-4 mr-2" />
              Archives
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
