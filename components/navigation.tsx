"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, MapPin, Calendar, Archive } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { href: "/", label: "Home", icon: null },
    { href: "/tours", label: "Virtual Tours", icon: null },
    { href: "/archives", label: "Archives", icon: Archive },
    { href: "/map", label: "Interactive Map", icon: MapPin },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/about", label: "About", icon: null },
  ]

  // Add scroll effect
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'shadow-md bg-black/40' : 'bg-black/20'} border-b border-white/10`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent transform group-hover:scale-110 transition-transform duration-300"></div>
            <span className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">Monastery360</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-md font-medium text-white/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="rounded-full text-white hover:bg-white/10 transition-colors duration-300">
               <Search className="h-4 w-4" />
             </Button>
             <Button variant="ghost" size="sm" className="rounded-full text-white hover:bg-white/10 transition-colors duration-300">
               Login
             </Button>
             <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
               Sign Up
             </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="rounded-full text-white hover:bg-white/10 transition-colors duration-300">
                 <Menu className="h-5 w-5" />
               </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/98 backdrop-blur-md">
              <div className="flex flex-col space-y-5 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon ? <item.icon className="h-5 w-5" /> : <span className="w-2 h-2 rounded-full bg-primary/40"></span>}
                    <span>{item.label}</span>
                  </Link>
                ))}
                <div className="pt-5 mt-2 border-t border-border/50">
                  <div className="flex flex-col space-y-3">
                    <Button variant="outline" className="justify-start rounded-full border-primary/20 hover:border-primary/50 transition-all duration-300">
                      Login
                    </Button>
                    <Button className="justify-start bg-primary hover:bg-primary/90 rounded-full shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">Sign Up</Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
