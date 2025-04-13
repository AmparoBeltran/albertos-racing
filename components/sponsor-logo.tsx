import Image from "next/image"

interface SponsorLogoProps {
  name: string
  imageUrl: string
}

export default function SponsorLogo({ name, imageUrl }: SponsorLogoProps) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative h-20 w-full mb-2 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110">
        <Image
          src={imageUrl ?? "/images/sponsors/main/placeholder-200x100.svg"}
          alt={`${name} logo`}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-sm text-gray-500 group-hover:text-red-600 transition-colors">{name}</span>
    </div>
  )
}
