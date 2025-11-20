'use client'

interface CreditsProps {
  onNavigate: (screen: 'assembly' | 'conclusion' | 'questions' | 'credits') => void
  onBack?: () => void
}

export default function Credits({ onNavigate, onBack }: CreditsProps) {
  return (
    <div className="min-h-screen bg-background factory-bg flex flex-col">
      <div className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
          <div className="border-l-4 border-accent pl-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 text-balance">
              Sources & References
            </h1>
            <p className="text-lg text-muted-foreground font-mono">
              Academic & Historical Documentation
            </p>
          </div>

          {/* Sources grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6 space-y-3">
              <h2 className="text-lg font-bold text-accent">Primary Sources</h2>
              <ul className="space-y-2 text-sm text-foreground/80 font-mono">
                <li>[Economic data & statistics - 1920-1929]</li>
                <li>[Newspaper archives & advertisements]</li>
                <li>[Government reports & records]</li>
                <li>[Worker accounts & testimonies]</li>
                <li>[Business documents & trade data]</li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6 space-y-3">
              <h2 className="text-lg font-bold text-accent">Secondary Sources</h2>
              <ul className="space-y-2 text-sm text-foreground/80 font-mono">
                <li>[Historical scholarship on the 1920s]</li>
                <li>[Economic analyses & interpretations]</li>
                <li>[Biographies of key figures]</li>
                <li>[Institutional archives & collections]</li>
                <li>[Documentary materials & analyses]</li>
              </ul>
            </div>
          </div>

          {/* Project information */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground">About This Exhibit</h2>
            <p className="text-foreground/80 text-sm leading-relaxed">
              <span className="text-accent font-bold">The Assembly Line:</span> An interactive exploration of 1920s economic life through the metaphor of automobile manufacturing. Each stage reveals interconnected economic forces—from post-war recovery to mass production—that shaped the Roaring Twenties.
            </p>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Designed to help students understand how individual economic components combine to create larger historical movements, and how prosperity can mask underlying vulnerabilities.
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
            ← Back
          </button>
          <button
            onClick={() => onNavigate('assembly')}
            className="px-6 py-2 bg-card/50 border border-border/50 rounded font-mono text-sm hover:bg-card/80 transition-colors"
          >
            Exhibit
          </button>
        </div>
      </div>
    </div>
  )
}
