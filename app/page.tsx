import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Instagram, Facebook, Clock, Trophy, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import NewsCard from "@/components/news-card"
import SponsorLogo from "@/components/sponsor-logo"
import HeroSection from "@/components/hero-section"
import CountUp from "@/components/count-up"
import RacingTimeline from "@/components/racing-timeline"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <CountUp
              end={2}
              suffix="nd"
              title="R3 Blu Cru Spain"
              description="National ranking"
              icon={<Trophy className="h-8 w-8 mb-2 mx-auto text-yellow-300" />}
            />
            <CountUp
              end={7}
              suffix="th"
              title="National Ranking"
              description="Minimotard 85cc"
              icon={<Trophy className="h-8 w-8 mb-2 mx-auto text-yellow-300" />}
            />
            <CountUp
              end={5}
              suffix=""
              title="Years Racing"
              description="Started at age 10"
              icon={<Clock className="h-8 w-8 mb-2 mx-auto text-yellow-300" />}
            />
            <CountUp
              end={5}
              suffix=""
              title="Racing Circuits"
              description="Including international"
              icon={<Calendar className="h-8 w-8 mb-2 mx-auto text-yellow-300" />}
            />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 md:px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50 clip-path-diagonal z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-400 rounded-full opacity-20"></div>
              <div className="relative z-10 bg-white p-6 shadow-xl rounded-xl">
                <Badge className="mb-4 bg-red-600 hover:bg-red-700">Rising Star</Badge>
                <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                  The Journey of Alberto
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  From discovering his passion for motorcycles at age 10 to becoming a top competitor in the R3 bLU cRU
                  Challenge, Alberto's journey is one of determination and overcoming obstacles.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  In 2020, Alberto was diagnosed with Type 1 Diabetes. Rather than letting this derail his dreams, he
                  approached it with the same determination he showed on the track, proving that challenges are just
                  another part of the race.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-800 group"
                >
                  Read Alberto's full story{" "}
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-xl"></div>
              <div className="relative h-[500px] rounded-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/about/profile/placeholder-400x600.svg"
                  alt="Alberto Beltrán García racing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-red-600">Fastest Lap</p>
                <p className="text-sm">R3 bLU cRU Challenge Final</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Racing Timeline */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-red-600 hover:bg-red-700">Racing Career</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Alberto's Racing Journey</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From his early beginnings to competing in prestigious championships, follow Alberto's path to becoming an
              elite motorcycle racer.
            </p>
          </div>

          <RacingTimeline />

          <div className="mt-12 text-center">
            <Link href="/about" passHref>
              <Button className="bg-red-600 hover:bg-red-700">Explore Full Racing History</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Badge className="mb-2 bg-red-600 hover:bg-red-700">Latest Updates</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Racing News</h2>
            </div>
            <Link href="/news" className="inline-flex items-center text-red-600 font-medium hover:text-red-800 group">
              View all news <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard
              title="Fastest Lap at R3 bLU cRU Challenge Final"
              date="October 15, 2024"
              excerpt="Alberto achieved the fastest lap time in the R3 bLU cRU Challenge final at the Superbike World Championship in Estoril."
              imageUrl="/images/news/articles/placeholder-400x600.svg"
              slug="fastest-lap-blu-cru-final"
              category="Race Results"
            />
            <NewsCard
              title="Securing 2nd Place in National Yamaha R3 Cup"
              date="September 28, 2024"
              excerpt="Alberto's exceptional performance throughout the season earned him second place in the national Yamaha R3 Cup."
              imageUrl="/images/news/articles/placeholder-400x600.svg"
              slug="second-place-yamaha-r3-cup"
              category="Championship"
            />
            <NewsCard
              title="2025 Season Goals and Preparation"
              date="September 10, 2024"
              excerpt="Alberto shares his goals for the upcoming 2025 season and his preparation strategy for the R3 Blu Cru de España and ESBK SSP 300."
              imageUrl="/images/news/articles/placeholder-400x600.svg"
              slug="2025-season-goals"
              category="Announcement"
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-2 bg-red-600 hover:bg-red-700">Our Partners</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Current Sponsors</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Alberto's success wouldn't be possible without the support of these amazing partners who believe in his
            journey.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            <SponsorLogo name="Grupo Sala Alameda" imageUrl="/images/sponsors/main/placeholder-200x100.svg" />
            <SponsorLogo name="PCO Racing" imageUrl="/images/sponsors/main/placeholder-200x100.svg" />
            <SponsorLogo name="Extinxat" imageUrl="/images/sponsors/main/placeholder-200x100.svg" />
            <SponsorLogo name="Valdonaire S.L." imageUrl="/images/sponsors/main/placeholder-200x100.svg" />
            <SponsorLogo name="Nadal Cerrajeria" imageUrl="/images/sponsors/main/placeholder-200x100.svg" />
            <SponsorLogo name="Mateo Túnez Grau" imageUrl="/images/sponsors/main/placeholder-200x100.svg" />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Join Alberto's 2025 Campaign</h3>
            <p className="text-gray-700 mb-6">
              Alberto is seeking additional support to reach his goals for the 2025 season. The estimated budget of
              €32,500 will cover training, equipment, competition fees, and travel expenses.
            </p>
            <Link href="/sponsors" passHref>
              <Button className="bg-red-600 hover:bg-red-700">Become a Sponsor</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="py-20 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-2 bg-red-600 hover:bg-red-700">Merchandise</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Official Racing Collection</h2>
              <p className="text-lg mb-6">
                Show your support with the latest Alberto Beltrán García official merchandise. Each purchase directly
                supports Alberto's racing career.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Racing-inspired designs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Premium quality materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Limited edition items</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Supports Alberto's 2025 campaign</span>
                </div>
              </div>
              <Link href="/shop" passHref>
                <Button className="bg-red-600 hover:bg-red-700">Visit the Shop</Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/shop/products/placeholder-300x300.svg"
                  alt="T-shirt merchandise"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-white p-3 font-medium">Racing T-Shirts</p>
                </div>
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/shop/products/placeholder-300x300.svg"
                  alt="Cap merchandise"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-white p-3 font-medium">Team Caps</p>
                </div>
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/shop/products/placeholder-300x300.svg"
                  alt="Hoodie merchandise"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-white p-3 font-medium">Racing Hoodies</p>
                </div>
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/shop/products/placeholder-300x300.svg"
                  alt="Accessories merchandise"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-white p-3 font-medium">Accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      {/* Other example of social media section. Keeping it for now*/}
      {/* <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-2 bg-red-600 hover:bg-red-700">Stay Connected</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Follow Alberto's Journey</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Stay updated with Alberto's latest races, training, and life moments by following his social media channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-xl mb-2">Instagram</h3>
              <p className="text-white/80">Race day photos and behind-the-scenes content</p>
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Facebook className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-xl mb-2">Facebook</h3>
              <p className="text-white/80">Race updates and community engagement</p>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Twitter className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-xl mb-2">Twitter</h3>
              <p className="text-white/80">Real-time race updates and announcements</p>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-red-600 to-red-800 rounded-xl text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Youtube className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-xl mb-2">YouTube</h3>
              <p className="text-white/80">Race highlights and training videos</p>
            </Link>
          </div>
        </div>
      </section> */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-2 bg-red-600 hover:bg-red-700">Stay Connected</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Follow Alberto's Journey</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Stay updated with Alberto's latest races, training, and life moments by following his social media channels.
          </p>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Instagram className="h-8 w-8 text-pink-600" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Facebook className="h-8 w-8 text-blue-600" />
              <span className="sr-only">Facebook</span>
            </Link>

            {/* Keeping those social media links for the future */}
            {/* <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Twitter className="h-8 w-8 text-sky-500" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Youtube className="h-8 w-8 text-red-600" />
              <span className="sr-only">YouTube</span>
            </Link> */}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-2 bg-white text-red-600 hover:bg-gray-100">Join the Journey</Badge>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Support Alberto's 2025 Campaign</h2>
              <p className="text-xl mb-8">
                Be part of Alberto's journey as he competes in the R3 Blu Cru de España and ESBK SSP 300 Championship
                whilst inspiring others with Type 1 Diabetes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sponsors" passHref>
                  <Button variant="secondary" size="lg" className="font-medium">
                    Become a Sponsor
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-red-600 font-medium"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full opacity-20"></div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6">2025 Season Budget</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Physical & Mental Preparation</span>
                    <span className="font-medium">€6,500</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "20%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Technical Equipment</span>
                    <span className="font-medium">€12,000</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "37%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Competition Fees</span>
                    <span className="font-medium">€8,000</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "25%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Rider Equipment</span>
                    <span className="font-medium">€4,000</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "12%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Travel Expenses</span>
                    <span className="font-medium">€2,000</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "6%" }}></div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 flex justify-between items-center">
                  <span className="text-xl font-bold">Total Budget</span>
                  <span className="text-xl font-bold">€32,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
