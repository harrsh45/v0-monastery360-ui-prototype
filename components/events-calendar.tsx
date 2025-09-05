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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Events Calendar
            </span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium min-w-[120px] text-center">
                {months[currentMonth]} {currentYear}
              </span>
              <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-2 text-xs font-medium text-muted-foreground">
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
                      ${isSelected ? "bg-primary text-primary-foreground" : "hover:bg-muted"}
                      ${isToday ? "ring-2 ring-primary ring-offset-2" : ""}
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
            <div className="flex flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Festival</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span>Retreat</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Ceremony</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">This Month</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total Events</span>
            <Badge variant="secondary">12</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Festivals</span>
            <Badge variant="secondary">4</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Retreats</span>
            <Badge variant="secondary">3</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Workshops</span>
            <Badge variant="secondary">5</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start bg-transparent">
            View My Bookings
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            Create Event Alert
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            Download Calendar
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
