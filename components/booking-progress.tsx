import { Check } from "lucide-react"

interface BookingProgressProps {
  currentStep: number
}

const steps = [
  { id: 1, title: "Event Details", description: "Select event type and date" },
  { id: 2, title: "Personal Info", description: "Contact and participant details" },
  { id: 3, title: "Preferences", description: "Special requirements and add-ons" },
  { id: 4, title: "Payment", description: "Review and complete booking" },
]

export function BookingProgress({ currentStep }: BookingProgressProps) {
  return (
    <div className="mb-8">
      <h1 className="font-serif text-3xl font-bold text-foreground mb-6">Complete Your Booking</h1>

      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors
                  ${
                    currentStep > step.id
                      ? "bg-primary border-primary text-primary-foreground"
                      : currentStep === step.id
                        ? "border-primary text-primary bg-primary/10"
                        : "border-muted-foreground text-muted-foreground"
                  }
                `}
              >
                {currentStep > step.id ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-medium">{step.id}</span>
                )}
              </div>
              <div className="ml-3">
                <p
                  className={`text-sm font-medium ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${currentStep > step.id ? "bg-primary" : "bg-muted"}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
