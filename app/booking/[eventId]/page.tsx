"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { BookingForm } from "@/components/booking-form"
import { BookingSummary } from "@/components/booking-summary"
import { BookingProgress } from "@/components/booking-progress"

export default function BookingPage({ params }: { params: { eventId: string } }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    eventId: params.eventId,
    bookingType: "",
    participants: 1,
    selectedDate: "",
    personalInfo: {},
    preferences: {},
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BookingProgress currentStep={currentStep} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <BookingForm
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              bookingData={bookingData}
              setBookingData={setBookingData}
            />
          </div>
          <div className="lg:col-span-1">
            <BookingSummary bookingData={bookingData} />
          </div>
        </div>
      </div>
    </main>
  )
}
