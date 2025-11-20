"use client"

export default function CarAssemblyVisualization({
  stage,
  stages,
}: {
  stage: number
  stages: Array<{
    id: number
    part: string
  }>
}) {
  const stageImages: Record<number, string> = {
    0: "/engine.png",
    1: "/chassis.png",
    2: "/wheels.png",
    3: "/interior.png",
    4: "/body-panels.png",
    5: "/final.png",
  }

  const backgroundImage = "/factory.jpg"

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Factory floor background - fixed */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main assembly visualization - layered parts */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {Array.from({ length: stage + 1 }).map((_, index) => (
          <img
            key={index}
            src={stageImages[index] || "/placeholder.svg"}
            alt={`Car assembly part ${index + 1}`}
            className="absolute w-full h-full object-contain transition-all duration-700 ease-in-out"
            style={{
              opacity: 1,
              animation: `slideIn 0.7s ease-in-out ${index * 0.15}s both`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
