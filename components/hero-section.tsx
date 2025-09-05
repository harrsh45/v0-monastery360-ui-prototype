import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Play, Map, Calendar, Archive, Volume1, MessageSquare } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-3000 animate-subtle-zoom"
        style={{
          backgroundImage: `url('/beautiful-sikkim-monastery-in-mountains-with-praye.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance tracking-tight">
              Discover Sikkim's
              <span className="text-accent block mt-2 animate-shimmer bg-clip-text">Sacred Heritage</span>
            </h1>

            {/* <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Immerse yourself in the spiritual beauty of Sikkim's monasteries through virtual tours, cultural events, and
              digital heritage preservation.
            </p> */}
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10 animate-fade-in transition-all duration-700 delay-300">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 transition-colors group-hover:text-primary" />
              <Input
                placeholder="Search monasteries, events..."
                className="pl-10 bg-white/95 backdrop-blur-md border-white/20 text-foreground placeholder:text-muted-foreground h-12 rounded-full shadow-lg focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in transition-all duration-700 delay-500">
            <Button
              size="lg"
              className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
            >
              <Play className="h-4 w-4 mr-2" />
              Virtual Tours
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:border-accent/50"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Events
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:border-accent/50"
            >
              <Map className="h-4 w-4 mr-2" />
              Map
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:border-accent/50"
            >
              <Archive className="h-4 w-4 mr-2" />
              Archives
            </Button>
             <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:border-accent/50"
            >
              <Volume1 className="h-4 w-4 mr-2" />
              Tour Guide
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
      
      {/* AI Assistant Button */}
      <div className="absolute bottom-6 left-6 z-20">
        <Button
          size="lg"
          className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] group"
        >
          <MessageSquare className="h-5 w-5 mr-2 group-hover:animate-pulse" />
          Ask AI
        </Button>
      </div>
    </section>
  )
}
