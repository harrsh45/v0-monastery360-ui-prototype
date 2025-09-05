import { Navigation } from "@/components/navigation"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileTabs } from "@/components/profile-tabs"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileHeader />
        <ProfileTabs />
      </div>
    </main>
  )
}
