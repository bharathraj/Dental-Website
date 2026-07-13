import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Radiant Dental | Premium Dental Care",
  description: "Advanced dental care with experienced dentists, modern technology, and a patient-first approach. Book your appointment today.",
  keywords: "dental clinic, dentist, dental implants, teeth whitening, root canal, braces, Mumbai",
  openGraph: {
    title: "Radiant Dental | Premium Dental Care",
    description: "Your Smile, Our Passion. Advanced dental care with modern technology.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
