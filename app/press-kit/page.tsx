import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, ImageIcon, Calendar, User, Mail, Phone, Instagram, Twitter, Youtube } from "lucide-react"

export default function PressKitPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/images/races/hero/placeholder-1920x800.svg"
          alt="Press Kit Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <Badge variant="outline" className="mb-4 bg-white/10 text-white backdrop-blur-sm">
              Media
            </Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Press Kit</h1>
            <p className="mt-4 max-w-[600px] text-lg text-white/90 md:text-xl">
              Official resources for media and journalists
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to the Official Press Kit</h2>
            <p className="text-lg text-gray-700 mb-8">
              Here you will find all the resources needed to cover the sporting career of Alberto Beltrán García,
              a professional motorcycle racer competing in the R3 Blu Cru de España and the ESBK Championship SSP 300
              while managing Type 1 Diabetes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700" size="lg">
                <Download className="mr-2 h-4 w-4" /> Download Complete Kit
              </Button>
              <Link href="#contact">
                <Button variant="outline" size="lg">
                  Media Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Downloadable Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Official Photos */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/news/articles/placeholder-400x600.svg"
                  alt="Official Photos"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Official Photos</h3>
                <p className="text-gray-600 mb-4">
                  High-resolution images of Alberto in action, official portraits, and event photographs.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <ImageIcon className="mr-2 h-4 w-4" /> Download Photos
                </Button>
              </CardContent>
            </Card>

            {/* Logos and Brand Assets */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/general/logos/alberto-logo-black.svg"
                  alt="Logos and Brand Assets"
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Logos and Brand Assets</h3>
                <p className="text-gray-600 mb-4">
                  Official logos, graphic elements, and style guide for use in publications.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Download className="mr-2 h-4 w-4" /> Download Logos
                </Button>
              </CardContent>
            </Card>

            {/* Press Releases */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/news/articles/placeholder-400x600.svg"
                  alt="Press Releases"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Press Releases</h3>
                <p className="text-gray-600 mb-4">
                  Official statements about race results, important announcements, and collaborations.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <FileText className="mr-2 h-4 w-4" /> Download Releases
                </Button>
              </CardContent>
            </Card>

            {/* Biography */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/about/profile/placeholder-400x600.svg"
                  alt="Official Biography"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Official Biography</h3>
                <p className="text-gray-600 mb-4">
                  Complete biography of Alberto, including his sporting career and his journey with Type 1 Diabetes.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <FileText className="mr-2 h-4 w-4" /> Download Biography
                </Button>
              </CardContent>
            </Card>

            {/* Fact Sheet */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/news/articles/placeholder-400x600.svg"
                  alt="Fact Sheet"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Fact Sheet</h3>
                <p className="text-gray-600 mb-4">
                  Key information, statistics, achievements, and relevant data about Alberto's career.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <FileText className="mr-2 h-4 w-4" /> Download Facts
                </Button>
              </CardContent>
            </Card>

            {/* Sponsor Information */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/news/articles/placeholder-400x600.svg"
                  alt="Sponsor Information"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Sponsor Information</h3>
                <p className="text-gray-600 mb-4">
                  Details about current sponsors, logos, and commercial relationships of Alberto.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Download className="mr-2 h-4 w-4" /> Download Information
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Alberto Beltrán García portrait"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-2 bg-red-600 hover:bg-red-700">Biography</Badge>
              <h2 className="text-3xl font-bold mb-6">Alberto Beltrán García</h2>
              <p className="text-lg text-gray-700 mb-4">
                Alberto Beltrán García is a professional motorcycle racer competing in the R3 Blu Cru de España and
                the ESBK Championship SSP 300, while managing Type 1 Diabetes, demonstrating that health conditions
                are not barriers to achieving sporting success.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Born in Xàtiva, Valencia, Alberto discovered his passion for motorcycles at the age of 10. His
                dedication and natural talent allowed him to progress quickly in local competitions, showing a
                riding style that combines technical precision with bold strategic movements.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In 2020, Alberto was diagnosed with Type 1 Diabetes. Rather than allowing this to derail his
                dreams, he approached it with the same determination he showed on the track, proving that challenges
                are just another part of the race.
              </p>
              <Button className="bg-red-600 hover:bg-red-700">
                <Download className="mr-2 h-4 w-4" /> Download Complete Biography
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Facts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Sporting Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>2nd place in the National Yamaha R3 Cup (2024)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Fastest lap in the R3 bLU cRU Challenge final in Estoril</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>2nd place in the Valencian Community minimotard 85cc championship (2022)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>7th place nationally in minimotard 85cc (2022)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Personal Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Born in 2000 in Xàtiva, Valencia, Spain</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Diagnosed with Type 1 Diabetes in 2020</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Started competing at the age of 10</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Languages: Spanish, Valencian, English</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Current Competitions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>R3 Blu Cru de España</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>ESBK Championship SSP 300</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Category: SSP 300</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Motorcycle: Yamaha R3</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Technical Team</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Technical advisor: Mateo Túnez Grau (former Spanish and World Champion in 125cc)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Engine preparation: SBK engine specialist with international experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Team management: PCO Racing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Main Sponsors</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Grupo Sala Alameda</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>PCO Racing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Extinxat</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Valdonaire S.L.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">2025 Objectives</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Win the R3 Blu Cru de España championship</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Secure another selection for the Blu Cru World Superfinal</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Compete against the world's best riders in the ESBK SSP 300 Championship</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-red-600 hover:bg-red-700">
              <Download className="mr-2 h-4 w-4" /> Download Complete Fact Sheet
            </Button>
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Media Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Press Inquiries</h3>
              <p className="text-gray-700 mb-6">
                For interviews, statements, additional materials, or any press-related inquiries,
                please contact:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Elena Garcia</p>
                    <p className="text-gray-600">Press Manager</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <a href="mailto:media@albertobeltran.com" className="text-red-600 hover:text-red-800">
                      media@albertobeltran.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Telephone:</p>
                    <p>+34 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Availability:</p>
                    <p className="text-gray-600">Monday to Friday, 9:00 - 18:00 (CET)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Media Guidelines</h3>
              <p className="text-gray-700 mb-6">
                When using the materials provided in this press kit, please note the following
                guidelines:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>
                    All photographs must be credited to &quot;Alberto Beltrán García Team&quot; unless
                    otherwise specified.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>
                    Logos and brand elements must not be altered, cropped, or modified in any
                    way.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>Direct quotes must be reproduced in full and not taken out of context.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 mt-2"></div>
                  <span>
                    For exclusive interviews or special features, please contact our press team
                    in advance.
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Download className="mr-2 h-4 w-4" /> Download Complete Guidelines
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need Additional Information?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If you cannot find what you are looking for in this press kit, our team is available to help you with
            any specific queries or requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:media@albertobeltran.com">
              <Button variant="secondary" size="lg">
                Contact Press Team
              </Button>
            </a>
            <Link href="/news">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-red-600"
              >
                View Latest News
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
