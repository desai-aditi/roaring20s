'use client'

interface NavigationProps {
  onNext: () => void
  onPrevious: () => void
  canGoPrevious: boolean
  canGoNext: boolean
  currentStage: number
  totalStages: number
  onNavigate: (screen: 'assembly' | 'conclusion' | 'questions' | 'credits') => void
  isLastStage?: boolean
}

export default function Navigation({
  onNext,
  onPrevious,
  canGoPrevious,
  canGoNext,
  currentStage,
  totalStages,
  onNavigate,
  isLastStage,
}: NavigationProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 justify-between items-center">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={`px-6 py-2 rounded font-mono text-sm transition-all ${
            canGoPrevious
              ? 'bg-card hover:bg-accent/20 text-foreground hover:text-accent border border-border cursor-pointer'
              : 'bg-muted/20 text-muted-foreground cursor-not-allowed border border-border/50'
          }`}
        >
          ← Previous
        </button>

        <div className="text-sm text-muted-foreground font-mono">
          Stage {currentStage} / {totalStages}
        </div>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`px-6 py-2 rounded font-mono text-sm font-bold transition-all ${
            canGoNext
              ? 'bg-accent text-accent-foreground hover:bg-accent/80 border border-accent cursor-pointer'
              : 'bg-muted/20 text-muted-foreground cursor-not-allowed border border-border/50'
          }`}
        >
          {isLastStage ? 'Finish →' : 'Next →'}
        </button>
      </div>

      <div className="flex gap-2 justify-center flex-wrap pt-2 border-t border-border/30">
        <button
          onClick={() => onNavigate('questions')}
          className="px-4 py-2 text-xs font-mono bg-card/50 border border-border/30 rounded hover:bg-card/80 hover:text-accent transition-colors"
        >
          Questions
        </button>
        <button
          onClick={() => onNavigate('credits')}
          className="px-4 py-2 text-xs font-mono bg-card/50 border border-border/30 rounded hover:bg-card/80 hover:text-accent transition-colors"
        >
          Sources
        </button>
      </div>
    </div>
  )
}
