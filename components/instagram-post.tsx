import Image from "next/image"
import { Instagram } from "lucide-react"

interface InstagramPostProps {
  id: string
  url: string
  caption: string
  date: string
}

export default function InstagramPost({ id, url, caption, date }: InstagramPostProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200" id={`instagram-post-${id}`}>
      <div className="p-4 border-b flex items-center gap-3">
        <div className="relative h-10 w-10 rounded-full overflow-hidden">
          <Image src="/images/instagram/profile/placeholder-50x50.svg" alt="Alberto Beltrán García" fill className="object-cover" />
        </div>
        <div>
          <p className="font-medium">albertobeltrangarcia</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>

      <div className="relative aspect-square w-full">
        <Image
          src="/images/instagram/posts/placeholder-600x600.svg"
          alt={caption}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <p className="text-sm mb-3">{caption}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-700"
          aria-describedby={`instagram-post-${id}`}
        >
          <Instagram className="h-4 w-4" />
          See on Instagram
        </a>
      </div>
    </div>
  )
}
