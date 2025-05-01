import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Clock, Calendar, MapPin } from "lucide-react"
import CircuitTrack from "@/components/circuit-track"

export default function RacesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/races/gallery/nacional-yamaha-r3-cup-5.jpeg"
                        alt="Racing Events"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
                </div>

                <div className="relative z-20 h-full flex items-center">
                    <div className="container mx-auto max-w-6xl px-4 md:px-6">
                        <Badge className="mb-4 bg-red-600 hover:bg-red-700">Racing Calendar</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Circuits & Results</h1>
                        <p className="text-xl text-white/90 max-w-2xl">
                            Follow Alberto's journey across the most challenging motorcycle racing circuits in Spain and Europe
                        </p>
                    </div>
                </div>
            </section>

            {/* Races Section */}
            <section className="py-20 px-4 md:px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <Tabs defaultValue="2024" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="grid grid-cols-2 w-full max-w-md">
                                <TabsTrigger value="2024">
                                    2024 Season
                                </TabsTrigger>
                                <TabsTrigger value="2023">
                                    2023 Season
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        {/* 2024 Season */}
                        <TabsContent value="2024" className="space-y-12">
                            <div className="text-center mb-8">
                                <Badge className="mb-2 bg-red-600 hover:bg-red-700">R3 bLU cRU Challenge</Badge>
                                <h2 className="text-3xl font-bold mb-4">2024 Season Highlights</h2>
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                    Alberto competed in the prestigious R3 bLU cRU Challenge within the SS300 category, achieving a
                                    remarkable second-place finish in the national Yamaha R3 cup. This qualified him for the Superfinal at
                                    the Superbike World Championship in Estoril, representing Yamaha Spain.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Ricardo Tormo Circuit */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/2 aspect-square relative">
                                            <CircuitTrack circuit="ricardo-tormo" className="text-red-600" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h3 className="text-xl font-bold mb-3">Ricardo Tormo</h3>
                                            <p className="text-gray-600 mb-4">Valencia, Spain</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-red-600" />
                                                    <span className="font-medium">Best Time: 1:48,163</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="h-5 w-5 text-red-600" />
                                                    <span>R3 bLU cRU Challenge</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-red-600" />
                                                    <span>4.005 km (2.489 mi)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Jerez Circuit */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/2 aspect-square relative">
                                            <CircuitTrack circuit="jerez" className="text-red-600" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h3 className="text-xl font-bold mb-3">Jerez</h3>
                                            <p className="text-gray-600 mb-4">Jerez de la Frontera, Spain</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-red-600" />
                                                    <span className="font-medium">Best Time: 1:56,368</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="h-5 w-5 text-red-600" />
                                                    <span>R3 bLU cRU Challenge</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-red-600" />
                                                    <span>4.428 km (2.751 mi)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cartagena Circuit */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/2 aspect-square relative">
                                            <CircuitTrack circuit="cartagena" className="text-red-600" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h3 className="text-xl font-bold mb-3">Cartagena</h3>
                                            <p className="text-gray-600 mb-4">Murcia, Spain</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-red-600" />
                                                    <span className="font-medium">Best Time: 1:45,611</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="h-5 w-5 text-red-600" />
                                                    <span>R3 bLU cRU Challenge</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-red-600" />
                                                    <span>3.506 km (2.178 mi)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Alcarras Circuit */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/2 aspect-square relative">
                                            <CircuitTrack circuit="alcarras" className="text-red-600" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h3 className="text-xl font-bold mb-3">Alcarras</h3>
                                            <p className="text-gray-600 mb-4">Lleida, Spain</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-red-600" />
                                                    <span className="font-medium">Best Time: 1:44,833</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="h-5 w-5 text-red-600" />
                                                    <span>R3 bLU cRU Challenge</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-red-600" />
                                                    <span>3.743 km (2.326 mi)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Estoril Circuit */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 md:col-span-2">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/3 aspect-square relative">
                                            <CircuitTrack circuit="estoril" className="text-red-600" />
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className="bg-yellow-500 hover:bg-yellow-600">Superfinal</Badge>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">Estoril</h3>
                                            <p className="text-gray-600 mb-4">Estoril, Portugal</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-red-600" />
                                                    <span className="font-medium">Best Time: 1:56,361 (Yamaha de serie)</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="h-5 w-5 text-red-600" />
                                                    <span>Superfinal R3 bLU cRU Challenge - Superbike World Championship</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-red-600" />
                                                    <span>4.182 km (2.599 mi)</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                                <p className="text-gray-700">
                                                    Despite a crash in free practice due to adverse weather conditions, Alberto achieved the
                                                    fastest lap in the R3 bLU cRU Challenge final, demonstrating his exceptional skill and
                                                    tenacity.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600 mt-8">
                                <h3 className="text-xl font-bold mb-3">Season Achievement</h3>
                                <p className="text-gray-700">
                                    Alberto secured an impressive 2nd place in the national Yamaha R3 Cup, earning him a spot in the
                                    Superfinal R3 bLU cRU Challenge at the Superbike World Championship in Estoril, where he represented
                                    Yamaha Spain.
                                </p>
                            </div>
                        </TabsContent>

                        {/* 2023 Season */}
                        <TabsContent value="2023" className="space-y-12">
                            <div className="text-center mb-8">
                                <Badge className="mb-2 bg-red-600 hover:bg-red-700">Copa R4C</Badge>
                                <h2 className="text-3xl font-bold mb-4">2023 Season Highlights</h2>
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                    The 2023 season presented new challenges as Alberto competed in the Copa R4C on demanding circuits
                                    across Spain and France. Despite suffering a broken collarbone, his competitive spirit and quick
                                    recovery allowed him to consistently rank amongst the top competitors.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Cheste Circuit */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/2 aspect-square relative">
                                            <CircuitTrack circuit="ricardo-tormo" className="text-red-600" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h3 className="text-xl font-bold mb-3">Ricardo Tormo (Cheste)</h3>
                                            <p className="text-gray-600 mb-4">Valencia, Spain</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="h-5 w-5 text-red-600" />
                                                    <span>Copa R4C</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-red-600" />
                                                    <span>4.005 km (2.489 mi)</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                                <p className="text-gray-700">
                                                    Alberto was unable to race at Cheste due to a broken collarbone, demonstrating the challenges
                                                    racers face in this demanding sport.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Jerez Circuit */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/2 aspect-square relative">
                                            <CircuitTrack circuit="jerez" className="text-red-600" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className="bg-yellow-500 hover:bg-yellow-600">2nd Place</Badge>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">Jerez</h3>
                                            <p className="text-gray-600 mb-4">Jerez de la Frontera, Spain</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-red-600" />
                                                    <span className="font-medium">Best Time: 2:00.420</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="h-5 w-5 text-red-600" />
                                                    <span>Copa R4C</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-red-600" />
                                                    <span>4.428 km (2.751 mi)</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                                <p className="text-gray-700">
                                                    Alberto achieved 2nd place and recorded the fastest lap in the race, showcasing his
                                                    exceptional skill on this challenging circuit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pau Arnos Circuit */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/2 aspect-square relative">
                                            <CircuitTrack circuit="pau-arnos" className="text-red-600" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className="bg-blue-500 hover:bg-blue-600">4th Place</Badge>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">Pau Arnos</h3>
                                            <p className="text-gray-600 mb-4">Pau, France</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-red-600" />
                                                    <span className="font-medium">Best Time: 1:28.897</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="h-5 w-5 text-red-600" />
                                                    <span>Copa R4C</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-red-600" />
                                                    <span>3.030 km (1.883 mi)</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                                <p className="text-gray-700">
                                                    Alberto secured 4th place and achieved the fastest lap in the race at this international
                                                    circuit, demonstrating his adaptability to new tracks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Navarra Circuit */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/2 aspect-square relative">
                                            <CircuitTrack circuit="navarra" className="text-red-600" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className="bg-yellow-500 hover:bg-yellow-600">2nd Place</Badge>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">Navarra</h3>
                                            <p className="text-gray-600 mb-4">Los Arcos, Spain</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-red-600" />
                                                    <span className="font-medium">Best Time: 1:57.789</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="h-5 w-5 text-red-600" />
                                                    <span>Copa R4C</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-red-600" />
                                                    <span>3.933 km (2.444 mi)</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                                <p className="text-gray-700">
                                                    Alberto achieved an impressive 2nd place finish at Navarra, continuing his strong performance
                                                    in the Copa R4C.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cartagena Circuit */}
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 md:col-span-2">
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="w-full md:w-1/3 aspect-square relative">
                                            <CircuitTrack circuit="cartagena" className="text-red-600" />
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className="bg-blue-500 hover:bg-blue-600">4th Place</Badge>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">Cartagena</h3>
                                            <p className="text-gray-600 mb-4">Murcia, Spain</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-red-600" />
                                                    <span className="font-medium">Best Time: 1:48.431</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="h-5 w-5 text-red-600" />
                                                    <span>Copa R4C</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-5 w-5 text-red-600" />
                                                    <span>3.506 km (2.178 mi)</span>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                                <p className="text-gray-700">
                                                    Alberto secured 4th place at Cartagena, demonstrating consistent performance throughout the
                                                    season despite the challenges of recovering from injury.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600 mt-8">
                                <h3 className="text-xl font-bold mb-3">Additional Achievements</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold">Copa de España</h4>
                                        <p className="text-gray-700">
                                            Alberto consistently placed in the leading positions and was in third place in the championship
                                            until the last race, where he had to withdraw due to a fractured scapula.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Copa KTM</h4>
                                        <p className="text-gray-700">
                                            Alberto finished second in the first race of the Copa KTM in Jerez de la Frontera, adding another
                                            podium to his growing list of achievements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-4 md:px-6 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <Badge className="mb-2 bg-red-600 hover:bg-red-700">Racing Moments</Badge>
                        <h2 className="text-3xl font-bold mb-4">Race Gallery</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Capturing Alberto's journey on the track - from intense race moments to podium celebrations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                src: "/images/races/gallery/nacional-yamaha-r3-cup-5.jpeg",
                                alt: "Nacional Yamaha R3 Cup Race",
                                title: "Nacional Yamaha R3 Cup",
                                date: "2024 Season"
                            },
                            {
                                src: "/images/races/gallery/r3-blu-cru-superfinale-fastest-lap-3.jpeg",
                                alt: "R3 bLU cRU Superfinale",
                                title: "R3 bLU cRU Superfinale",
                                date: "2024 Season"
                            },
                            {
                                src: "/images/races/gallery/nacional-yamaha-r3-cup-podio.jpeg",
                                alt: "Nacional Yamaha R3 Cup Podium",
                                title: "Podium Celebration",
                                date: "2024 Season"
                            },
                            {
                                src: "/images/races/gallery/nacional-yamaha-r3-cup-2.jpeg",
                                alt: "Nacional Yamaha R3 Cup Race",
                                title: "Race Start",
                                date: "2024 Season"
                            },
                            {
                                src: "/images/races/gallery/r3-blu-cru-superfinale-fastest-lap.jpeg",
                                alt: "R3 bLU cRU Superfinale",
                                title: "Fastest Lap",
                                date: "2024 Season"
                            },
                            {
                                src: "/images/races/gallery/podio-jerez-.jpeg",
                                alt: "Jerez Podium Celebration",
                                title: "Jerez Podium",
                                date: "2024 Season"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <h3 className="text-white font-bold">{item.title}</h3>
                                    <p className="text-white/80 text-sm">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/gallery">
                            <Button className="bg-red-600 hover:bg-red-700">View Full Gallery</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Video Highlights */}
            <section className="py-20 px-4 md:px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <Badge className="mb-2 bg-red-600 hover:bg-red-700">Video Content</Badge>
                        <h2 className="text-3xl font-bold mb-4">Race Highlights</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Watch Alberto's most exciting racing moments and interviews
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-8 h-8 text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 font-medium">Estoril Superfinal Highlights</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-8 h-8 text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 font-medium">Jerez Race Highlights</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg md:col-span-2">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-8 h-8 text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 font-medium">Interview: Alberto's Journey with Type 1 Diabetes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Button className="bg-red-600 hover:bg-red-700">View All Videos</Button>
                    </div>
                </div>
            </section>

            {/* Upcoming Races */}
            <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <Badge className="mb-2 bg-white text-red-600 hover:bg-gray-100">Looking Forward</Badge>
                        <h2 className="text-3xl font-bold mb-4">2025 Racing Calendar</h2>
                        <p className="text-xl max-w-3xl mx-auto">
                            Follow Alberto's journey in the upcoming season as he competes in the R3 Blu Cru de España and ESBK SSP
                            300 Championship
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <Trophy className="mr-2 h-5 w-5" /> R3 Blu Cru de España
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">March 2025</p>
                                            <p className="text-white/80">Circuit Ricardo Tormo, Valencia</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">April 2025</p>
                                            <p className="text-white/80">Circuit de Jerez, Andalucía</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">May 2025</p>
                                            <p className="text-white/80">Circuit de Barcelona-Catalunya</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">June 2025</p>
                                            <p className="text-white/80">Circuito de Navarra</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center">
                                    <Trophy className="mr-2 h-5 w-5" /> ESBK SSP 300 Championship
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">April 2025</p>
                                            <p className="text-white/80">Circuito de Jerez, Andalucía</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">May 2025</p>
                                            <p className="text-white/80">MotorLand Aragón</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">July 2025</p>
                                            <p className="text-white/80">Circuit de Barcelona-Catalunya</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">September 2025</p>
                                            <p className="text-white/80">Circuit Ricardo Tormo, Valencia</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-white/80 mb-4">
                                Calendar is provisional and subject to change. Stay tuned for updates!
                            </p>
                            <Link href="/contact" passHref>
                                <Button variant="secondary">Get Race Day Updates</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
