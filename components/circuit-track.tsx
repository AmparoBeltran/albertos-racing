interface CircuitTrackProps {
    circuit: string
    className?: string
  }
  
  export default function CircuitTrack({ circuit, className = "text-red-600" }: CircuitTrackProps) {
    // SVG paths for different circuits
    const circuitPaths: Record<string, string> = {
      "ricardo-tormo":
        "M50,120 C50,80 80,50 120,50 C160,50 190,80 190,120 C190,160 160,190 120,190 C80,190 50,160 50,120 Z M120,50 L120,30 M190,120 L210,120",
      jerez:
        "M40,50 L100,50 C120,50 130,70 130,90 L130,110 C130,130 150,140 170,140 L190,140 C210,140 220,160 220,180 L220,200 L180,200 C160,200 150,180 150,160 L150,140 C150,120 130,110 110,110 L90,110 C70,110 60,90 60,70 L40,70 Z",
      cartagena:
        "M50,50 L200,50 C220,50 230,70 230,90 L230,150 C230,170 210,180 190,180 L150,180 C130,180 120,160 120,140 L120,120 C120,100 100,90 80,90 L50,90 Z",
      alcarras:
        "M50,50 L150,50 C170,50 180,70 180,90 L180,150 C180,170 160,180 140,180 L100,180 C80,180 70,160 70,140 L70,100 C70,80 50,70 30,70 L30,100 C30,120 50,130 70,130 L90,130 C110,130 120,150 120,170 L50,170 Z",
      estoril:
        "M30,100 L100,100 C120,100 130,80 130,60 L130,40 L180,40 C200,40 210,60 210,80 L210,120 C210,140 190,150 170,150 L130,150 C110,150 100,170 100,190 L30,190 Z",
      "pau-arnos":
        "M50,50 L150,50 C170,50 180,70 180,90 L180,150 C180,170 160,180 140,180 L60,180 C40,180 30,160 30,140 L30,90 C30,70 50,60 70,60 L90,60 C110,60 120,80 120,100 L120,130 C120,150 100,160 80,160 L60,160 Z",
      navarra:
        "M30,100 L80,100 C100,100 110,80 110,60 L110,40 L160,40 C180,40 190,60 190,80 L190,140 C190,160 170,170 150,170 L110,170 C90,170 80,150 80,130 L80,110 C80,90 60,80 40,80 L30,80 Z",
    }
  
    // Default to Ricardo Tormo if circuit not found
    const pathData = circuitPaths[circuit] || circuitPaths["ricardo-tormo"]
  
    return (
      <div className="w-full h-full flex items-center justify-center">
        <svg
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-w-[250px] max-h-[250px]"
        >
          <path
            d={pathData}
            stroke={`currentColor`}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            fill="none"
          />
        </svg>
      </div>
    )
  }
  