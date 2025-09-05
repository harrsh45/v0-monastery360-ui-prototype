import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import SafeHydration from "./document"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Monastery360 - Digital Heritage of Sikkim Monasteries",
  description:
    "Explore Sikkim's sacred monasteries through immersive virtual tours, cultural events, and digital heritage preservation.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>
        <SafeHydration>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Analytics />
        </SafeHydration>
      </body>
    </html>
  )
}
