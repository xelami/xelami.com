import type { Metadata } from "next"
import { Geist, Geist_Mono, Ubuntu, Ubuntu_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import { ThemeProvider } from "next-themes"
import Footer from "@/components/layout/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const ubuntuSans = Ubuntu({
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
})

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Xelami | Building Tomorrow, Today.",
  description: "Building Tomorrow, Today.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`container mx-auto ${geistSans.variable} ${geistMono.variable} ${ubuntuSans.variable} ${ubuntuMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
