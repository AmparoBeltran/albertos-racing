import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Download } from "lucide-react"

export default function GalleryPage() {
    // Sample gallery data - in a real app, this would come from an API or CMS
    const galleryCategories = [
        {
            name: "Race Action",
            images: [
                {
                    src: "/images/races/gallery/nacional-yamaha-r3-cup-2.jpeg",
                    alt: "Nacional Yamaha R3 Cup Race",
                    date: "2024 Season",
                    description: "Intense racing moment at the Nacional Yamaha R3 Cup"
                },
                {
                    src: "/images/races/gallery/nacional-yamaha-r3-cup-3.jpeg",
                    alt: "Nacional Yamaha R3 Cup Race",
                    date: "2024 Season",
                    description: "Close competition on the track"
                },
                {
                    src: "/images/races/gallery/nacional-yamaha-r3-cup-4.jpeg",
                    alt: "Nacional Yamaha R3 Cup Race",
                    date: "2024 Season",
                    description: "Strategic overtaking maneuver"
                },
                {
                    src: "/images/races/gallery/nacional-yamaha-r3-cup-5.jpeg",
                    alt: "Nacional Yamaha R3 Cup Race",
                    date: "2024 Season",
                    description: "High-speed cornering"
                },
                {
                    src: "/images/races/gallery/nacional-yamaha-r3-cup-6.jpeg",
                    alt: "Nacional Yamaha R3 Cup Race",
                    date: "2024 Season",
                    description: "Race start action"
                },
                {
                    src: "/images/races/gallery/nacional-yamaha-r3-cup-7.jpeg",
                    alt: "Nacional Yamaha R3 Cup Race",
                    date: "2024 Season",
                    description: "Battle for position"
                },
                {
                    src: "/images/races/gallery/r3-blu-cru-superfinale-fastest-lap.jpeg",
                    alt: "R3 bLU cRU Superfinale",
                    date: "2024 Season",
                    description: "Setting the fastest lap at the Superfinale"
                },
                {
                    src: "/images/races/gallery/r3-blu-cru-superfinale-fastest-lap-2.jpeg",
                    alt: "R3 bLU cRU Superfinale",
                    date: "2024 Season",
                    description: "Leading the pack at Estoril"
                },
                {
                    src: "/images/races/gallery/r3-blu-cru-superfinale-fastest-lap-3.jpeg",
                    alt: "R3 bLU cRU Superfinale",
                    date: "2024 Season",
                    description: "Pushing the limits on the track"
                },
                {
                    src: "/images/races/gallery/r3-blu-cru-superfinale-fastest-lap-4.jpeg",
                    alt: "R3 bLU cRU Superfinale",
                    date: "2024 Season",
                    description: "Technical cornering at high speed"
                },
                {
                    src: "/images/races/gallery/jerez.jpeg",
                    alt: "Jerez Race",
                    date: "2024 Season",
                    description: "Competing at Circuito de Jerez"
                }
            ]
        },
        {
            name: "Podium Celebrations",
            images: [
                {
                    src: "/images/gallery/podium-celebrations/nacional-yamaha-r3-cup-podio.jpeg",
                    alt: "Nacional Yamaha R3 Cup Podium",
                    date: "2024 Season",
                    description: "Celebrating on the podium at the Nacional Yamaha R3 Cup"
                },
                {
                    src: "/images/gallery/podium-celebrations/podio-jerez-.jpeg",
                    alt: "Jerez Podium Celebration",
                    date: "2024 Season",
                    description: "Victory celebration at Circuito de Jerez"
                },
                {
                    src: "/images/gallery/podium-celebrations/podio-jerez-2.jpeg",
                    alt: "Jerez Podium Celebration",
                    date: "2024 Season",
                    description: "Sharing the podium moment with the team"
                },
                {
                    src: "/images/gallery/podium-celebrations/podio-jerez-3.jpeg",
                    alt: "Jerez Podium Celebration",
                    date: "2024 Season",
                    description: "Podium ceremony at Jerez"
                }
            ]
        },
        {
            name: "Behind the Scenes",
            images: [
                {
                    src: "/images/gallery/behind-the-scenes/behind-the-scenes-1.jpg",
                    alt: "Team Preparation",
                    date: "2024 Season",
                    description: "Team working on bike setup and preparation"
                },
                {
                    src: "/images/gallery/behind-the-scenes/behind-the-scenes-2.jpg",
                    alt: "Race Day Preparation",
                    date: "2024 Season",
                    description: "Pre-race team meeting and strategy discussion"
                },
                {
                    src: "/images/gallery/behind-the-scenes/behind-the-scenes-3.jpg",
                    alt: "Team Work",
                    date: "2024 Season",
                    description: "Team collaboration during race weekend"
                },
                {
                    src: "/images/gallery/behind-the-scenes/behind-the-scenes-4.jpg",
                    alt: "Technical Preparation",
                    date: "2024 Season",
                    description: "Technical team preparing the bike"
                }
            ]
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] w-full">
                <Image
                    src="/images/races/hero/race-gallery-hero.jpg"
                    alt="Gallery Hero - Racing Moments"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-6xl px-4 md:px-6">
                        <div className="flex items-center gap-4 mb-4">
                            <Link href="/races" className="text-white/80 hover:text-white transition-colors">
                                <ChevronLeft className="h-6 w-6" />
                            </Link>
                            <Badge variant="outline" className="bg-white/10 text-white backdrop-blur-sm">
                                Gallery
                            </Badge>
                        </div>
                        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Race Gallery</h1>
                        <p className="mt-4 max-w-[600px] text-lg text-white/90 md:text-xl">
                            Capturing the most exciting moments from Alberto's racing journey
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Content */}
            <section className="py-16 px-4 md:px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    {galleryCategories.map((category, index) => (
                        <div key={category.name} className="mb-20">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <Badge className="mb-2 bg-red-600 hover:bg-red-700">{category.name}</Badge>
                                    <h2 className="text-3xl font-bold">
                                        {category.name === "Race Action" && "On Track Moments"}
                                        {category.name === "Podium Celebrations" && "Victory Moments"}
                                        {category.name === "Behind the Scenes" && "Team & Preparation"}
                                    </h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.images.map((image, imgIndex) => (
                                    <div
                                        key={`${category.name}-${imgIndex}`}
                                        className="relative h-64 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                            <h3 className="text-white font-bold">{image.description}</h3>
                                            <p className="text-white/80 text-sm">{image.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
} 