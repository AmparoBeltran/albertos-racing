import Link from "next/link"
import Image from "next/image"
import { CalendarIcon } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  imageUrl: string
  slug: string
  category: string
  externalUrl?: string
}

export default function NewsCard({ title, date, excerpt, imageUrl, slug, category, externalUrl }: NewsCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md pt-0">
      <div className="relative h-48 w-full">
        <Image
          src="/images/news/articles/placeholder-400x600.svg"
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-red-600 hover:bg-red-700">{category}</Badge>
        </div>
      </div>
      <CardContent className="pt-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <CalendarIcon className="mr-1 h-4 w-4" />
          {date}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
      </CardContent>
      <CardFooter>
        {externalUrl ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-medium hover:text-red-800 group flex items-center"
          >
            Read Article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </a>
        ) : (
          <Link href={`/news/${slug}`} className="text-red-600 font-medium hover:text-red-800 group flex items-center">
            Read Article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
