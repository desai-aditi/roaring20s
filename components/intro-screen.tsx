"use client"

import { useState } from "react"

export default function IntroScreen({ onStart, audioUrl }: { onStart: () => void; audioUrl?: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <main className="h-screen bg-background factory-bg text-foreground flex flex-col items-center justify-center overflow-hidden">
      {/* Industrial background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-48 border-2 border-accent" />
        <div className="absolute top-40 right-20 w-40 h-64 border-2 border-accent" />
        <div className="absolute bottom-20 left-1/3 w-48 h-40 border-2 border-accent" />
      </div>

      {/* Conveyor line */}
      <div className="absolute bottom-1/3 left-0 right-0 h-1 bg-accent/10" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center py-8 flex flex-col">
        <div className="mb-6">
          <h1 className="text-5xl font-bold text-accent mb-4">The Economy</h1>
          <p className="text-xl text-muted-foreground mb-6">11-1 Team A</p>
        </div>

        {/* Added audio player */}
        {audioUrl && (
          <div className="mb-4 flex justify-center">
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

        <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Assembly Line Economy</h2>

          <div className="text-left space-y-4 text-muted-foreground">
            <p>
              The <b>automobile industry</b>, pioneered by <b>Henry Ford</b>, was the single greatest driver of the
              economic boom in the 1920s.
            </p>

            <p>
              Its <b>assembly line and mass production</b> methods fueled the <b>Consumer Revolution</b> and reshaped
              American life. To understand this economic era, you must build its most powerful symbol: <b>The Car</b>.
            </p>

            <div className="bg-background/50 border border-accent/20 rounded p-4 my-4">
              <p className="font-bold text-accent mb-2">Your Task: Build the Economy</p>
              <ul className="space-y-2 text-sm">
                <li>
                  ⚙️ Progress through <b>six stages</b> of the assembly line.
                </li>
                <li>
                  🏛️ Each part added (Engine, Wheels, Chassis) represents a <b>key economic force</b> of the decade.
                </li>
                <li>🔎 Explore primary sources, archival media, and student analysis at every station.</li>
              </ul>
            </div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="bg-accent hover:bg-accent/90 text-background font-bold py-3 px-8 rounded text-lg transition-all duration-200 transform hover:scale-105"
        >
          Begin Assembly →
        </button>

        <p className="text-xs text-muted-foreground mt-6">
          This exhibit explores the economic forces that shaped the 1920s
        </p>
      </div>
    </main>
  )
}
