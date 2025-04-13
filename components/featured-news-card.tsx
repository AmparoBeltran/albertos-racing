import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface FeaturedNewsCardProps {
  title: string
  date: string
  excerpt: string
  imageUrl: string
  slug: string
  category: string
  externalUrl?: string
}

export default function FeaturedNewsCard({
  title,
  date,
  excerpt,
  imageUrl,
  slug,
  category,
  externalUrl,
}: FeaturedNewsCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-64 md:h-full w-full">
          <Image
            src={imageUrl ?? "/images/news/featured/placeholder-600x1200.svg"}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-red-600 hover:bg-red-700">{category}</Badge>
          </div>
        </div>
        <div className="p-6 flex flex-col">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {date}
          </div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6 flex-grow">{excerpt}</p>
          {externalUrl ? (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full md:w-auto bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
            >
              Read Full Article <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <Link href={`/news/${slug}`} passHref>
              <Button className="w-full md:w-auto bg-red-600 hover:bg-red-700">Leer Artículo Completo</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
