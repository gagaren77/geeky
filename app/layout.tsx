import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Geeky Squirrels — IT Support & Consulting in Chicago",
    template: "%s | Geeky Squirrels",
  },
  description:
    "25 years of IT experience serving Chicago and the suburbs. Managed IT, networking, data centers, security cameras, Microsoft 365, websites and hosting.",
  metadataBase: new URL("https://geekysquirrels.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Geeky Squirrels — IT Support & Consulting",
    description:
      "Friendly, experienced IT help for small businesses in Chicago and the suburbs.",
    url: "https://geekysquirrels.com",
    siteName: "Geeky Squirrels",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}