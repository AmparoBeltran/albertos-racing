import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Menu, Instagram, Facebook } from "lucide-react"
import "./globals.css"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import CookieConsent from "@/components/cookie-consent"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alberto Beltrán García | Professional Motorcycle Racer",
  description:
    "Official website of Alberto Beltrán García, professional motorcycle racer competing in R3 Blu Cru de España and Campeonato ESBK de SSP 300 while managing Type 1 Diabetes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/images/general/logos/alberto-logo-black.svg" alt="Alberto Beltrán García" width={40} height={40} />
                  <span className="font-bold">Alberto Beltrán García</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                  <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                    About
                  </Link>
                  <Link href="/races" className="text-sm font-medium transition-colors hover:text-primary">
                    Races
                  </Link>
                  <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
                    News
                  </Link>
                  <Link href="/sponsors" className="text-sm font-medium transition-colors hover:text-primary">
                    Sponsors
                  </Link>
                  <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
                    Shop
                  </Link>
                  <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-4">
                  <Link href="/contact" className="hidden md:block">
                    <Button variant="default" className="bg-red-600 hover:bg-red-700">
                      Support Alberto
                    </Button>
                  </Link>
                  <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                      <Button variant="outline" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <div className="flex flex-col gap-6 mt-8">
                        <Link href="/about" className="text-lg font-medium transition-colors hover:text-primary">
                          About
                        </Link>
                        <Link href="/races" className="text-lg font-medium transition-colors hover:text-primary">
                          Races
                        </Link>
                        <Link href="/news" className="text-lg font-medium transition-colors hover:text-primary">
                          News
                        </Link>
                        <Link href="/sponsors" className="text-lg font-medium transition-colors hover:text-primary">
                          Sponsors
                        </Link>
                        <Link href="/shop" className="text-lg font-medium transition-colors hover:text-primary">
                          Shop
                        </Link>
                        <Link href="/contact" className="text-lg font-medium transition-colors hover:text-primary">
                          Contact
                        </Link>
                        <Link href="/contact" className="mt-4">
                          <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">
                            Support Alberto
                          </Button>
                        </Link>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t bg-gray-50">
              <div className="container py-12 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-2">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                      <Image src="/images/general/logos/alberto-logo-black.svg" alt="Alberto Beltrán García" width={40} height={40} />
                      <span className="font-bold">Alberto Beltrán García</span>
                    </Link>
                    <p className="text-sm text-gray-600 mb-4 max-w-md">
                      Professional motorcycle racer competing in R3 Blu Cru de España and Campeonato ESBK de SSP 300
                      while managing Type 1 Diabetes.
                    </p>
                    <div className="flex space-x-4">
                      <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-600"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-600"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                      {/* <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-600"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-600"
                      >
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                      </Link> */}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/about" className="text-gray-600 hover:text-red-600">
                          About Alberto
                        </Link>
                      </li>
                      <li>
                        <Link href="/races" className="text-gray-600 hover:text-red-600">
                          Race Calendar
                        </Link>
                      </li>
                      <li>
                        <Link href="/news" className="text-gray-600 hover:text-red-600">
                          Latest News
                        </Link>
                      </li>
                      <li>
                        <Link href="/sponsors" className="text-gray-600 hover:text-red-600">
                          Sponsors
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop" className="text-gray-600 hover:text-red-600">
                          Shop
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-gray-600">
                        Email:{" "}
                        <Link href="mailto:info@albertobeltran.com" className="hover:text-red-600">
                          info@albertobeltran.com
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-gray-600 hover:text-red-600">
                          Contact Form
                        </Link>
                      </li>
                      <li>
                        <Link href="/sponsors" className="text-gray-600 hover:text-red-600">
                          Sponsorship Inquiries
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy" className="text-gray-600 hover:text-red-600">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/cookies" className="text-gray-600 hover:text-red-600">
                          Cookies Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms" className="text-gray-600 hover:text-red-600">
                          Terms of Use
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t mt-12 pt-6 text-center text-sm text-gray-600">
                  <p>&copy; {new Date().getFullYear()} Alberto Beltrán García. All rights reserved.</p>
                </div>
              </div>
            </footer>
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
