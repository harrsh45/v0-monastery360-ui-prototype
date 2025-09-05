"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Clock, MapPin } from "lucide-react"

interface BookingFormProps {
  currentStep: number
  setCurrentStep: (step: number) => void
  bookingData: any
  setBookingData: (data: any) => void
}

export function BookingForm({ currentStep, setCurrentStep, bookingData, setBookingData }: BookingFormProps) {
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          {currentStep === 1 && "Event Details"}
          {currentStep === 2 && "Personal Information"}
          {currentStep === 3 && "Preferences & Add-ons"}
          {currentStep === 4 && "Payment & Confirmation"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-6">
            {/* Event Info */}
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-serif text-lg font-semibold mb-2">Losar Festival 2024</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Rumtek Monastery, East Sikkim</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Feb 10-12, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>320/500 registered</span>
                </div>
              </div>
            </div>

            {/* Booking Type */}
            <div>
              <Label className="text-base font-medium">Select Booking Type</Label>
              <RadioGroup className="mt-3 space-y-3">
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="individual" id="individual" />
                  <div className="flex-1">
                    <label htmlFor="individual" className="font-medium cursor-pointer">
                      Individual Experience
                    </label>
                    <p className="text-sm text-muted-foreground">Join the festival with personal guide assistance</p>
                    <Badge variant="secondary" className="mt-1">
                      Free
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="group" id="group" />
                  <div className="flex-1">
                    <label htmlFor="group" className="font-medium cursor-pointer">
                      Group Tour
                    </label>
                    <p className="text-sm text-muted-foreground">Guided group experience with cultural insights</p>
                    <Badge variant="secondary" className="mt-1">
                      ₹500 per person
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="virtual" id="virtual" />
                  <div className="flex-1">
                    <label htmlFor="virtual" className="font-medium cursor-pointer">
                      Virtual Experience
                    </label>
                    <p className="text-sm text-muted-foreground">Live-streamed festival with interactive features</p>
                    <Badge variant="secondary" className="mt-1">
                      ₹200
                    </Badge>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Number of Participants */}
            <div>
              <Label htmlFor="participants" className="text-base font-medium">
                Number of Participants
              </Label>
              <Input id="participants" type="number" min="1" max="10" defaultValue="1" className="mt-2" />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" className="mt-1" />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" className="mt-1" rows={3} />
            </div>

            <div>
              <Label htmlFor="emergency">Emergency Contact</Label>
              <Input id="emergency" placeholder="Name and phone number" className="mt-1" />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium">Dietary Requirements</Label>
              <div className="mt-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="vegetarian" />
                  <label htmlFor="vegetarian" className="text-sm">
                    Vegetarian
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vegan" />
                  <label htmlFor="vegan" className="text-sm">
                    Vegan
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="gluten-free" />
                  <label htmlFor="gluten-free" className="text-sm">
                    Gluten-free
                  </label>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-base font-medium">Add-on Services</Label>
              <div className="mt-3 space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="photography" />
                    <div>
                      <label htmlFor="photography" className="font-medium cursor-pointer">
                        Professional Photography
                      </label>
                      <p className="text-sm text-muted-foreground">Capture your festival experience</p>
                    </div>
                  </div>
                  <Badge variant="outline">₹1,000</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="transport" />
                    <div>
                      <label htmlFor="transport" className="font-medium cursor-pointer">
                        Transportation
                      </label>
                      <p className="text-sm text-muted-foreground">Round-trip from Gangtok</p>
                    </div>
                  </div>
                  <Badge variant="outline">₹800</Badge>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="special-requests">Special Requests</Label>
              <Textarea
                id="special-requests"
                placeholder="Any special requirements or requests..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Booking Summary</h3>
              <p className="text-sm text-green-700">
                Please review your booking details and proceed with payment to confirm your reservation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions and cancellation policy
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <label htmlFor="newsletter" className="text-sm">
                  Subscribe to newsletter for event updates
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
            Previous
          </Button>
          <Button onClick={handleNext}>{currentStep === 4 ? "Complete Booking" : "Next Step"}</Button>
        </div>
      </CardContent>
    </Card>
  )
}
