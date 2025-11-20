"use client"

import { useState, useEffect } from "react"

// Utility function to correctly format the YouTube embed URL
// Supports many common input formats:
// - full embed URLs (returned as-is)
// - watch URLs (e.g. youtube.com/watch?v=ID)
// - short URLs (youtu.be/ID)
// - shorts URLs (youtube.com/shorts/ID)
// - raw video IDs (11-char ID)
const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return ""

  const trimmed = url.trim()

  // If it's already an embed URL, return it (ensure https)
  if (trimmed.includes("youtube.com/embed/") || trimmed.includes("youtube-nocookie.com/embed/")) {
    return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`
  }

  // Try to extract a standard 11-character YouTube ID from common URL patterns
  // patterns handled: watch?v=, youtu.be/, /embed/, /shorts/, /v/
  const idMatch = trimmed.match(/(?:v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/)?.[1]
  if (idMatch) return `https://www.youtube.com/embed/${idMatch}?rel=0`

  // If the value itself is a raw 11-char ID, accept it
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return `https://www.youtube.com/embed/${trimmed}?rel=0`

  // Couldn't parse an ID
  return ""
}

// Extract the YouTube ID from common URL forms or from an embed URL
const getYouTubeId = (url: string) => {
  if (!url) return ""
  const trimmed = url.trim()
  const id = trimmed.match(/(?:v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/)?.[1]
  if (id) return id
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed
  return ""
}

export default function AssemblyStageInfo({
  stage,
}: {
  stage: {
    title: string
    objective: string
    metaphor: string
    summary: string
    archivalDescription?: string
    videoUrl: string
    videoCaption?: string
    // Optional image to show in archival tab
    imageUrl?: string
    imageCaption?: string
    // Optional custom label for the YouTube link
    youtubeLabel?: string
    // Optional effact bullets (plural) or typo'd 'effectBullets'
    effactBullets?: string[]
    effectBullets?: string[]
    quote: string
    source: string
  }
}) {
  const [activeTab, setActiveTab] = useState<"summary" | "effact" | "archival" | "quote">("summary")

  useEffect(() => {
    // Reset failure state when the provided video URL changes
    const embedUrl = getYouTubeEmbedUrl(stage.videoUrl)
    const videoId = getYouTubeId(stage.videoUrl) || getYouTubeId(embedUrl)
    console.debug("AssemblyStageInfo: parsed video", { videoUrl: stage.videoUrl, embedUrl, videoId })
  }, [stage.videoUrl])

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-accent mb-1">{stage.title}</h3>
        <p className="text-sm text-muted-foreground">{stage.objective}</p>
      </div>

      <div className="flex gap-2 border-b border-border">
        {(["summary", "effact", "archival", "quote"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab ? "text-accent border-b-2 border-accent" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab === "summary" && "Details"}
            {tab === "effact" && "Effact"}
            {tab === "archival" && "Archival Content"}
            {tab === "quote" && "Quotes"}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="text-sm text-foreground/80 leading-relaxed space-y-3 animate-in fade-in-0 duration-300">
        {activeTab === "summary" && (
          <div className="space-y-3">
            <div className="bg-accent/10 border-l-4 border-accent px-4 py-3 rounded">
              <p className="text-sm italic text-foreground/90">{stage.metaphor}</p>
            </div>
            <p>{stage.summary}</p>
          </div>
        )}
        {activeTab === "effact" && (
          <div className="space-y-3">
            {(() => {
              const bullets = stage.effactBullets ?? stage.effectBullets
              if (bullets && bullets.length) {
                return (
                  <ul className="list-disc pl-5 space-y-1">
                    {bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )
              }

              return (
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Objective:</strong> {stage.objective}</li>
                  <li><strong>Metaphor:</strong> {stage.metaphor}</li>
                  {stage.summary && (
                    <li>
                      <strong>Key point:</strong>{' '}
                      {stage.summary.split('.').filter(Boolean).slice(0, 2).join('. ') + (stage.summary.includes('.') ? '.' : '')}
                    </li>
                  )}
                </ul>
              )
            })()}
          </div>
        )}

        {activeTab === "archival" && (
          <div className="space-y-3">
            {(() => {
              const embedUrl = getYouTubeEmbedUrl(stage.videoUrl)
              const videoId = getYouTubeId(stage.videoUrl) || getYouTubeId(embedUrl)

              // Show a prominent YouTube/watch link if we have a video ID
              if (videoId) {
                const lowerTitle = stage.title.toLowerCase()
                const youtubeLabel =
                  stage.youtubeLabel || (lowerTitle.includes("engine") || lowerTitle.includes("wwi") ? "Watch the Treaty of Versailles" : "Open on YouTube")

                return (
                  <div className="space-y-3 w-full">
                    {stage.imageUrl && (
                      <div className="w-full rounded overflow-hidden">
                        <img src={stage.imageUrl} alt={stage.imageCaption || stage.title} className="w-full h-auto object-cover rounded" />
                        {stage.imageCaption && <p className="text-xs text-muted-foreground italic mt-1">{stage.imageCaption}</p>}
                      </div>
                    )}

                    {stage.videoCaption && <p className="text-xs text-muted-foreground italic">{stage.videoCaption}</p>}

                    <p className="mt-2">
                      <a
                        className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-background text-sm rounded-md hover:opacity-90"
                        href={`https://www.youtube.com/watch?v=${videoId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {youtubeLabel}
                      </a>
                    </p>
                  </div>
                )
              }

              // If no video, show optional image or archival description
              if (stage.imageUrl) {
                return (
                  <div className="w-full rounded overflow-hidden">
                    <img src={stage.imageUrl} alt={stage.imageCaption || stage.title} className="w-full h-auto object-cover rounded" />
                    {stage.imageCaption && <p className="text-xs text-muted-foreground italic mt-1">{stage.imageCaption}</p>}
                  </div>
                )
              }

              return <p>{stage.archivalDescription}</p>
            })()}
          </div>
        )}
            
        {activeTab === "quote" && (
          <div>
            <p className="italic mb-2">"{stage.quote}"</p>
            <p className="text-xs text-muted-foreground">{stage.source}</p>
          </div>
        )}
      </div>
    </div>
  )
}
