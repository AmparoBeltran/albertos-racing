import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Motion } from "@/components/motion-wrapper"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/alberto-hero.png"
          alt="Alberto Beltrán García racing"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10"></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <Motion
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-500 blur-3xl"
        >
          <div></div>
        </Motion>
        <Motion
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-yellow-500 blur-3xl"
        >
          <div></div>
        </Motion>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Alberto Beltrán García</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Professional motorcycle racer competing in the R3 Blu Cru de España and Campeonato ESBK de SSP 300
            </p>
            <p className="text-lg text-white/80 mb-8">
              From a 10-year-old with a dream to a rising star in motorcycling — breaking barriers and inspiring others
              while managing Type 1 Diabetes
            </p>
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/about" passHref>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  My Story
                </Button>
              </Link>
              <Link href="/sponsors" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-red-600"
                >
                  Support My Journey
                </Button>
              </Link>
            </Motion>
          </Motion>
        </div>
      </div>

      {/* Racing Stats Overlay */}
      <div className="absolute bottom-8 right-8 z-30 hidden lg:block">
        <Motion
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20"
        >
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-white/80 text-sm">2nd Place</p>
              <p className="text-white font-bold text-xl">Yamaha R3 Cup</p>
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm">Fastest Lap</p>
              <p className="text-white font-bold text-xl">Estoril Final</p>
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm">2025 Goal</p>
              <p className="text-white font-bold text-xl">ESBK SSP 300</p>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  )
}
