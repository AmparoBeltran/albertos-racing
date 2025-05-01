import Image from "next/image"

interface CircuitTrackProps {
  circuit: string
  className?: string
}

export default function CircuitTrack({ circuit, className = "text-red-600" }: CircuitTrackProps) {
  // Map circuit names to their corresponding SVG file names
  const circuitFileMap: Record<string, string> = {
    "ricardo-tormo": "circuito-ricardo-tormo.svg",
    jerez: "circuito-jerez.svg",
    cartagena: "circuito-cartagena.svg",
    alcarras: "circuito-alcarras.svg",
    estoril: "circuito-fernanda-pires-da-silva.svg",
    "pau-arnos": "circuito-pau-arnos.svg",
    navarra: "circuito-navarra.svg",
  }

  // Default to Ricardo Tormo if circuit not found
  const svgFileName = circuitFileMap[circuit] || circuitFileMap["ricardo-tormo"]

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={`/images/races/circuits/${svgFileName}`}
        alt={`${circuit} circuit`}
        width={250}
        height={250}
        className={`w-full h-full max-w-[250px] max-h-[250px] ${className}`}
      />
    </div>
  )
}
