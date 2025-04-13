import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Calendar, MapPin, Trophy, Activity, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/alberto-hero.png"
            alt="About Alberto Beltrán García"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">My Story</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Alberto</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Motorcycle racer, athlete, and advocate for those living with Type 1 Diabetes
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-6 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/images/about/profile/placeholder-400x600.svg"
                    alt="Alberto Beltrán García"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold mb-4 border-b pb-2">Quick Facts</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <div>
                        <span className="text-gray-600 text-sm block">Born:</span>
                        <span className="font-medium">2008</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <div>
                        <span className="text-gray-600 text-sm block">From:</span>
                        <span className="font-medium">Valencia, Spain</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Trophy className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <div>
                        <span className="text-gray-600 text-sm block">Racing Class:</span>
                        <span className="font-medium">SSP 300</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Activity className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <div>
                        <span className="text-gray-600 text-sm block">Championships:</span>
                        <span className="font-medium">R3 Blu Cru, ESBK</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-12">
              <div>
                <Badge className="mb-2 bg-red-600 hover:bg-red-700">The Beginning</Badge>
                <h2 className="text-3xl font-bold mb-6">A Passion Discovered</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Alberto Beltrán García discovered his passion for motorcycle racing at the age of 10. What started as
                  a weekend hobby quickly developed into a serious pursuit as Alberto's natural talent became evident on
                  the track.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  His dedication and innate ability allowed him to progress rapidly through local competitions,
                  showcasing a racing style that combined technical precision with bold, strategic moves.
                </p>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden my-8 shadow-lg">
                <Image
                  src="/images/about/gallery/placeholder-800x400.svg"
                  alt="Racing Career"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-white p-6 font-medium text-lg">Alberto competing in the R3 bLU cRU Challenge</p>
                </div>
              </div>

              <div>
                <Badge className="mb-2 bg-red-600 hover:bg-red-700">The Challenge</Badge>
                <h2 className="text-3xl font-bold mb-6">Overcoming Diabetes</h2>
                <p className="text-lg text-gray-700 mb-4">
                  In 2020, Alberto faced a significant challenge when he was diagnosed with Type 1 Diabetes. This
                  diagnosis could have derailed his dreams, but Alberto chose a different path.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Rather than letting this diagnosis limit his ambitions, Alberto approached it with the same
                  determination he showed on the track. Working closely with medical professionals and nutritionists, he
                  developed strategies to manage his condition whilst continuing to compete at the highest level.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  His journey with diabetes has become an integral part of his story, demonstrating that with proper
                  management and unwavering determination, health conditions need not be barriers to achieving one's
                  dreams.
                </p>
              </div>

              <div>
                <Badge className="mb-2 bg-red-600 hover:bg-red-700">Racing Career</Badge>
                <h2 className="text-3xl font-bold mb-6">Rising Through the Ranks</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Alberto's racing career has been marked by steady progression and impressive achievements. In 2022, he
                  secured second place in the Valencian Community's minimotard 85cc championship and achieved a
                  commendable seventh place nationally.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The 2023 season saw Alberto competing in the Copa R4C on demanding circuits like Cheste, Jerez,
                  Cartagena, Pau Arnos (France), and Navarra. Despite suffering a broken collarbone during this season,
                  his competitive spirit and quick recovery allowed him to consistently rank amongst the top competitors.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  2024 marked another significant step in Alberto's career as he entered the R3 bLU cRU Challenge,
                  competing against top Yamaha riders in the SS300 category. As a rookie in this highly competitive
                  environment, Alberto showcased his innate talent and unwavering determination.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl my-8">
                  <h3 className="text-xl font-bold mb-4">Notable Achievements</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-bold">2nd place</span> in the national Yamaha R3 Cup (2024)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-bold">Fastest lap</span> in the R3 bLU cRU Challenge final at Estoril
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-bold">2nd place</span> in Valencian Community's minimotard 85cc
                        championship (2022)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-bold">7th place</span> nationally in minimotard 85cc (2022)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-bold">Top competitor</span> in Copa R4C despite injury (2023)
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <Badge className="mb-2 bg-red-600 hover:bg-red-700">Support Team</Badge>
                <h2 className="text-3xl font-bold mb-6">The Team Behind the Rider</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Alberto's success is supported by a dedicated team of professionals who help him maximize his
                  potential on and off the track:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-xl mb-2">Technical Support</h3>
                    <p>
                      Mateo Túnez Grau, a former Spanish and World Champion in 125cc, provides telemetry and technical
                      advice.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-xl mb-2">Engine Preparation</h3>
                    <p>
                      The best SBK engine tuner with extensive global experience handles engine preparation, setup, and
                      adjustments.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-xl mb-2">Team Management</h3>
                    <p>PCO Racing manages his training and race day operations with professional precision.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-xl mb-2">Medical Support</h3>
                    <p>
                      Specialized medical professionals help Alberto manage his Type 1 Diabetes while competing at elite
                      levels.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Badge className="mb-2 bg-red-600 hover:bg-red-700">Looking Forward</Badge>
                <h2 className="text-3xl font-bold mb-6">2025 Goals</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Looking ahead to 2025, Alberto is embarking on an exciting new chapter in his racing career. His
                  participation in the R3 Blu Cru de España and the ESBK SSP 300 Championship will provide him with the
                  opportunity to compete at the highest level and showcase his talent on an international stage.
                </p>
                <div className="bg-red-50 p-6 rounded-xl my-8 border-l-4 border-red-600">
                  <h3 className="text-xl font-bold mb-4">Alberto's Goals for 2025:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-bold">R3 Blu Cru de España:</span> To win the championship and secure
                        another selection for the Blu Cru World Superfinal, demonstrating his continued progress and
                        ability to represent Yamaha on a global scale.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-bold">Campeonato ESBK de SSP 300:</span> To compete against the world's
                        best riders and gain invaluable experience in one of the most prestigious international
                        competitions.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Alberto's Message</h2>
                <blockquote className="text-xl italic text-gray-700 mb-4 border-l-4 border-red-600 pl-4">
                  "Racing has taught me that limitations are often just perceptions. Whether it's taking a challenging
                  corner at high speed or managing my diabetes during a race, the key is preparation, focus, and
                  believing in your ability to adapt. I hope my journey shows others that with the right approach,
                  challenges become just another part of the race."
                </blockquote>
                <p className="text-right font-medium">— Alberto Beltrán García</p>
              </div>

              <div className="pt-8">
                <h2 className="text-3xl font-bold mb-6">Support Alberto's Journey</h2>
                <p className="text-lg text-gray-700 mb-6">
                  To achieve Alberto's goals for the 2025 season and beyond, he requires additional support. The
                  estimated budget for the upcoming season is €32,500, which will help cover training, equipment,
                  competition fees, and travel expenses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/sponsors" passHref>
                    <Button className="bg-red-600 hover:bg-red-700">Become a Sponsor</Button>
                  </Link>
                  <Link href="/contact" passHref>
                    <Button variant="outline">Contact Alberto</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
