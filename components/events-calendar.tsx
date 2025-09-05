"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

const eventDates = [
  { date: 10, events: 2, type: "festival" },
  { date: 15, events: 1, type: "retreat" },
  { date: 23, events: 1, type: "festival" },
  { date: 28, events: 1, type: "ceremony" },
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function EventsCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [selectedDate, setSelectedDate] = useState<number | null>(null)

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0)
        setCurrentYear(currentYear + 1)
      } else {
        setCurrentMonth(currentMonth + 1)
      }
    }
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <div className="space-y-6">
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-white font-serif font-semibold">
              <Calendar className="h-5 w-5 text-primary" />
              Events Calendar
            </span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")} className="text-white hover:bg-white/10">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium min-w-[120px] text-center text-white">
                {months[currentMonth]} {currentYear}
              </span>
              <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")} className="text-white hover:bg-white/10">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-2 text-xs font-medium text-white/70">
                  {day}
                </div>
              ))}

              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="p-2"></div>
              ))}

              {days.map((day) => {
                const hasEvent = eventDates.find((event) => event.date === day)
                const isSelected = selectedDate === day
                const isToday =
                  day === new Date().getDate() &&
                  currentMonth === new Date().getMonth() &&
                  currentYear === new Date().getFullYear()

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(isSelected ? null : day)}
                    className={`
                      p-2 text-sm rounded-lg transition-colors relative
                      ${isSelected ? "bg-primary text-white" : "text-white hover:bg-white/10"}
                      ${isToday ? "ring-2 ring-primary ring-offset-1 ring-offset-black/40" : ""}
                    `}
                  >
                    {day}
                    {hasEvent && (
                      <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2">
                        <div
                          className={`w-1 h-1 rounded-full ${
                            hasEvent.type === "festival"
                              ? "bg-accent"
                              : hasEvent.type === "retreat"
                                ? "bg-secondary"
                                : "bg-primary"
                          }`}
                        ></div>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 text-xs border-t border-white/10 pt-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-white/70">Festival</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-white/70">Retreat</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-white/70">Ceremony</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <h3 className="text-lg font-serif font-semibold text-white">This Month</h3>
        </div>
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Total Events</span>
            <Badge variant="secondary" className="bg-black/30 text-white border border-white/10">12</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Festivals</span>
            <Badge variant="secondary" className="bg-black/30 text-white border border-white/10">4</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Retreats</span>
            <Badge variant="secondary" className="bg-black/30 text-white border border-white/10">3</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Workshops</span>
            <Badge variant="secondary" className="bg-black/30 text-white border border-white/10">5</Badge>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <h3 className="text-lg font-serif font-semibold text-white">Quick Actions</h3>
        </div>
        <div className="p-6 space-y-2">
          <Button variant="outline" className="w-full justify-start bg-transparent border-white/20 text-white hover:bg-white/10">
            View My Bookings
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent border-white/20 text-white hover:bg-white/10">
            Create Event Alert
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent border-white/20 text-white hover:bg-white/10">
            Download Calendar
          </Button>
        </div>
      </div>
    </div>
  )
}
