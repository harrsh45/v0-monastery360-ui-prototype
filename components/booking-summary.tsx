import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

interface BookingSummaryProps {
  bookingData: any
}

export function BookingSummary({ bookingData }: BookingSummaryProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Booking Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-serif text-lg font-semibold">Losar Festival 2024</h3>
            <p className="text-sm text-muted-foreground">Rumtek Monastery</p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>February 10-12, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>6:00 AM - 8:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>East Sikkim</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>1 Participant</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Individual Experience</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Photography Add-on</span>
              <span>₹1,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Transportation</span>
              <span>₹800</span>
            </div>
          </div>

          <Separator />

          <div className="flex justify-between font-medium">
            <span>Total Amount</span>
            <span>₹1,800</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Important Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <div>
            <h4 className="font-medium text-foreground">Cancellation Policy</h4>
            <p>Free cancellation up to 48 hours before the event</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground">What to Bring</h4>
            <p>Comfortable walking shoes, warm clothing, and valid ID</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground">Meeting Point</h4>
            <p>Main entrance of Rumtek Monastery at 5:45 AM</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
