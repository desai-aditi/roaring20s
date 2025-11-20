'use client'

import { useState } from 'react'

interface ContentModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  objective: string
  contentType: 'summary' | 'archival' | 'quote'
  summary: string
  archivalDescription: string
  quote: string
  source: string
}

export default function ContentModal({
  isOpen,
  onClose,
  title,
  objective,
  contentType,
  summary,
  archivalDescription,
  quote,
  source,
}: ContentModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[75vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur border-b border-border p-6 flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-accent mb-1">{title}</h2>
            <p className="text-sm text-muted-foreground">{objective}</p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors ml-4 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {contentType === 'summary' && (
            <p className="text-foreground/80 leading-relaxed">{summary}</p>
          )}
          
          {contentType === 'archival' && (
            <p className="text-foreground/80 leading-relaxed">{archivalDescription}</p>
          )}
          
          {contentType === 'quote' && (
            <div>
              <p className="italic text-lg mb-4 text-foreground/90">"{quote}"</p>
              <p className="text-xs text-muted-foreground">{source}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
