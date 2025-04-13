import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, PieChart, TrendingUp, Users, Award, Heart } from "lucide-react"

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/alberto-hero.png"
            alt="Alberto Beltrán García with sponsors"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">Join the Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Partnership Opportunities</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Support Alberto's journey in the R3 Blu Cru de España and ESBK SSP 300 Championship while connecting your
              brand with an inspiring story
            </p>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-2 bg-red-600 hover:bg-red-700 mx-auto">Thank You</Badge>
          <h2 className="text-3xl font-bold text-center mb-4">Our Current Partners</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Alberto and his team express sincere gratitude to these sponsors whose support has been instrumental in his
            growth as a rider and his achievement of elite athlete status.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            <div className="flex flex-col items-center group">
              <div className="relative h-24 w-full mb-4 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110">
                <Image
                  src="/images/sponsors/main/placeholder-200x100.svg"
                  alt="Grupo Sala Alameda logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-red-600 transition-colors">
                Grupo Sala Alameda
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="relative h-24 w-full mb-4 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110">
                <Image
                  src="/images/sponsors/main/placeholder-200x100.svg"
                  alt="PCO Racing logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-red-600 transition-colors">PCO Racing</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="relative h-24 w-full mb-4 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110">
                <Image
                  src="/images/sponsors/main/placeholder-200x100.svg"
                  alt="Extinxat logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-red-600 transition-colors">Extinxat</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="relative h-24 w-full mb-4 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110">
                <Image
                  src="/images/sponsors/main/placeholder-200x100.svg"
                  alt="Valdonaire S.L. logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-red-600 transition-colors">Valdonaire S.L.</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="relative h-24 w-full mb-4 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110">
                <Image
                  src="/images/sponsors/main/placeholder-200x100.svg"
                  alt="Nadal cerrajeria y decoración S.L. logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-red-600 transition-colors">Nadal cerrajeria</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="relative h-24 w-full mb-4 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110">
                <Image
                  src="/images/sponsors/main/placeholder-200x100.svg"
                  alt="Mateo Túnez Grau logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-red-600 transition-colors">Mateo Túnez Grau</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Budget */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-2 bg-red-600 hover:bg-red-700">2025 Season</Badge>
              <h2 className="text-3xl font-bold mb-6">Campaign Budget</h2>
              <p className="text-lg text-gray-700 mb-6">
                To achieve Alberto's goals for the 2025 season, he requires a budget of €32,500. This will be allocated
                to various aspects of his racing career to ensure he can compete at the highest level.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Physical & Mental Preparation</span>
                    <span className="font-bold">€6,500</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="h-3 bg-red-600 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Personalized training and psychological support</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Technical Equipment</span>
                    <span className="font-bold">€12,000</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="h-3 bg-red-600 rounded-full" style={{ width: "37%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Motorcycle maintenance, spare parts, tires, and technical assistance
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Competition Fees</span>
                    <span className="font-bold">€8,000</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="h-3 bg-red-600 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Entry fees for Copa R3 BLU CRU CUP, European SSP 300, and ESBK SSP 300
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Rider Equipment</span>
                    <span className="font-bold">€4,000</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="h-3 bg-red-600 rounded-full" style={{ width: "12%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Safety gear including racing suits, helmets, airbags, and protectors
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Travel Expenses</span>
                    <span className="font-bold">€2,000</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="h-3 bg-red-600 rounded-full" style={{ width: "6%" }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Transportation and accommodation for races across Spain and Europe
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total Budget</span>
                  <span className="text-xl font-bold text-red-600">€32,500</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="relative z-10">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-center">Why Support Alberto?</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Brand Visibility</h4>
                        <p className="text-gray-700">
                          Gain exposure through Alberto's presence in races, social media, interviews, and publications,
                          reaching a vast audience of motorcycling enthusiasts.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                          <Users className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Positive Association</h4>
                        <p className="text-gray-700">
                          Align your brand with values like perseverance, effort, health, and passion through Alberto's
                          inspiring story.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                          <Heart className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Social Impact</h4>
                        <p className="text-gray-700">
                          Contribute to raising awareness about Type 1 Diabetes and promoting inclusivity in sports.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                          <PieChart className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Fiscal Benefits</h4>
                        <p className="text-gray-700">
                          Potential tax deductions through sponsorship of an elite athlete.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      {/* <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-2 bg-red-600 hover:bg-red-700 mx-auto">Opportunities</Badge>
          <h2 className="text-3xl font-bold text-center mb-4">Sponsorship Packages</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We offer flexible partnership opportunities to suit different budgets and marketing objectives. Each package
            can be customized to align with your specific goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-red-200 transition-colors hover:shadow-lg">
              <div className="p-1 bg-gradient-to-r from-gray-200 to-gray-300">
                <CardHeader className="bg-white">
                  <CardTitle className="text-xl text-center">Silver Partner</CardTitle>
                </CardHeader>
              </div>
              <CardContent className="space-y-4 pt-6">
                <div className="text-center">
                  <span className="text-3xl font-bold">€2,500</span>
                  <span className="text-gray-500">/season</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Small logo on race suit and bike</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Logo and link on website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Monthly social media mentions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Access to race day photos for marketing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Us</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-red-500 shadow-xl relative transform scale-105">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <div className="p-1 bg-gradient-to-r from-red-500 to-red-600">
                <CardHeader className="bg-white">
                  <CardTitle className="text-xl text-center">Gold Partner</CardTitle>
                </CardHeader>
              </div>
              <CardContent className="space-y-4 pt-6">
                <div className="text-center">
                  <span className="text-3xl font-bold">€5,000</span>
                  <span className="text-gray-500">/season</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Medium logo on race suit and bike</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Featured section on website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Weekly social media content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>2 personal appearances per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Quarterly newsletter feature</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-600 hover:bg-red-700">Contact Us</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-200 transition-colors hover:shadow-lg">
              <div className="p-1 bg-gradient-to-r from-yellow-400 to-yellow-500">
                <CardHeader className="bg-white">
                  <CardTitle className="text-xl text-center">Platinum Partner</CardTitle>
                </CardHeader>
              </div>
              <CardContent className="space-y-4 pt-6">
                <div className="text-center">
                  <span className="text-3xl font-bold">€10,000+</span>
                  <span className="text-gray-500">/season</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Large logo on race suit and bike</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Premium website placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Co-branded content series</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>4 personal appearances per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>VIP access to race events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Custom partnership activations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Us</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Looking for a custom partnership solution? We're happy to discuss tailored opportunities that align with
              your brand's specific goals.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Let's Discuss Your Goals
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Sponsorship Packages</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We offer flexible partnership opportunities to suit different budgets and marketing objectives. Each package
            can be customized to align with your specific goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-red-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-center">Silver Partner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold">€2,500</span>
                  <span className="text-gray-500">/season</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Small logo on race suit and bike</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Logo and link on website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Monthly social media mentions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Access to race day photos for marketing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Us</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-red-500 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-center">Gold Partner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold">€5,000</span>
                  <span className="text-gray-500">/season</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Medium logo on race suit and bike</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Featured section on website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Weekly social media content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>2 personal appearances per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Quarterly newsletter feature</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-600 hover:bg-red-700">Contact Us</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-center">Platinum Partner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold">€10,000+</span>
                  <span className="text-gray-500">/season</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Large logo on race suit and bike</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Premium website placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Co-branded content series</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>4 personal appearances per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>VIP access to race events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Custom partnership activations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Us</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Looking for a custom partnership solution? We're happy to discuss tailored opportunities.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg">Let's Discuss Your Goals</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-2 bg-red-600 hover:bg-red-700 mx-auto">Testimonials</Badge>
          <h2 className="text-3xl font-bold text-center mb-12">What Our Partners Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <div className="flex -space-x-2">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <Award className="h-8 w-8 text-yellow-400" />
                    <Award className="h-8 w-8 text-yellow-400" />
                    <Award className="h-8 w-8 text-yellow-400" />
                    <Award className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <p className="italic text-gray-700 mb-6 text-center">
                  "Partnering with Alberto has been fantastic for our brand. His authentic story resonates with our
                  audience, and his professional approach to both racing and managing diabetes aligns perfectly with our
                  company values."
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/instagram/profile/placeholder-50x50.svg"
                      alt="Sponsor representative"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">María Rodríguez</h4>
                    <p className="text-sm text-gray-500">Marketing Director, Current Sponsor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <div className="flex -space-x-2">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <Award className="h-8 w-8 text-yellow-400" />
                    <Award className="h-8 w-8 text-yellow-400" />
                    <Award className="h-8 w-8 text-yellow-400" />
                    <Award className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <p className="italic text-gray-700 mb-6 text-center">
                  "The visibility our brand has received through Alberto's racing career has exceeded our expectations.
                  His dedication to the sport and his cause creates meaningful engagement that traditional advertising
                  simply can't match."
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/instagram/profile/placeholder-50x50.svg"
                      alt="Sponsor representative"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Carlos Mendez</h4>
                    <p className="text-sm text-gray-500">CEO, Current Sponsor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-4 bg-white text-red-600 hover:bg-gray-100">Get Involved</Badge>
          <h2 className="text-3xl font-bold mb-4">Ready to Join Alberto's Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can create a partnership that delivers value for your brand whilst
            supporting Alberto's racing career.
          </p>
          <Link href="/contact" passHref>
            <Button variant="secondary" size="lg" className="font-medium">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
