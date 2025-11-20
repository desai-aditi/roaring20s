"use client"

import { useState } from "react"

interface FinalConclusionProps {
  onNavigate: (screen: "assembly" | "conclusion" | "questions" | "credits") => void
  onBack?: () => void
  audioUrl?: string
}

export default function FinalConclusion({ onNavigate, onBack, audioUrl }: FinalConclusionProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-background factory-bg flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto py-12 px-4 space-y-8">
          <div className="border-l-4 border-accent pl-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 text-balance">The Complete Assembly</h1>
            <p className="text-lg text-muted-foreground font-mono">Understanding 1920s Economic Life</p>
          </div>

          {audioUrl && (
            <div className="flex justify-center">
              <audio
                controls
                className="w-full max-w-sm"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-bold text-accent">The Assembly Metaphor</h2>
              <p className="text-foreground/80 leading-relaxed text-sm">
                Each stage of the assembly line represents a distinct economic force shaping the 1920s. From post-war
                recovery to mass production, these stages interconnect to build the decade's prosperity.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-bold text-accent">The Hidden Vulnerabilities</h2>
              <p className="text-foreground/80 leading-relaxed text-sm">
                Yet beneath this gleaming surface lay dangerous imbalances: concentrated wealth, agricultural collapse,
                and speculative excess. By 1929, the entire assembly would come undone.
              </p>
            </div>
          </div>

          {/* Key takeaways */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <span className="text-accent font-bold">▪</span>
                <span className="text-foreground/80">
                  Mass production revolutionized American manufacturing and consumption
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-accent font-bold">▪</span>
                <span className="text-foreground/80">
                  Consumer culture and speculation masked underlying economic weakness
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-accent font-bold">▪</span>
                <span className="text-foreground/80">
                  Prosperity was unevenly distributed across regions and social classes
                </span>
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div className="border-l-4 border-muted pl-6 py-4">
            <p className="text-foreground/90 leading-relaxed">
              Explore the essential questions that connect these stages to larger historical themes, or review the
              sources that informed this exhibit.
            </p>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="border-t border-border/30 bg-background/50 backdrop-blur">
        <div className="max-w-3xl mx-auto px-4 py-6 flex gap-3 justify-center flex-wrap">
          <button
            onClick={onBack}
            className="px-6 py-2 bg-card/50 border border-border/50 rounded font-mono text-sm hover:bg-card/80 transition-colors"
          >
            ← Back to Stages
          </button>
          <button
            onClick={() => onNavigate("questions")}
            className="px-6 py-2 bg-accent text-accent-foreground rounded font-mono text-sm hover:bg-accent/80 transition-colors"
          >
            Essential Questions →
          </button>
        </div>
      </div>
    </div>
  )
}
