import { CheckCircle2 } from "lucide-react"

export default function RacingTimeline() {
  const timelineEvents = [
    {
      year: "2010",
      title: "The Beginning",
      description: "Alberto discovers his passion for motorcycles at the age of 10.",
    },
    {
      year: "2020",
      title: "Facing Challenges",
      description:
        "Diagnosed with Type 1 Diabetes, Alberto adapts and continues racing with even greater determination.",
    },
    {
      year: "2022",
      title: "Rising Success",
      description: "Achieves 2nd place in Valencian Community's minimotard 85cc championship and 7th place nationally.",
    },
    {
      year: "2023",
      title: "Copa R4C",
      description:
        "Competes on demanding circuits like Cheste, Jerez, Cartagena, Pau Arnos, and Navarra despite a collarbone injury.",
    },
    {
      year: "2024",
      title: "R3 bLU cRU Challenge",
      description:
        "Enters the prestigious championship, securing 2nd place in the national Yamaha R3 Cup and competing in the Superfinal at Estoril.",
    },
    {
      year: "2025",
      title: "New Horizons",
      description: "Set to compete in R3 Blu Cru de España and ESBK SSP 300 Championship at the highest level.",
    },
  ]

  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>

      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div
            key={event.year}
            className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-600">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="rounded-full h-10 w-10 bg-red-600 flex items-center justify-center z-10">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div className="text-red-600 font-bold mt-2">{event.year}</div>
            </div>

            <div className="w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
