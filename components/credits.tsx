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
              {/* <h2 className="text-lg font-bold text-accent">Primary Sources</h2> */}
              <ul className="space-y-2 text-sm text-foreground/80 font-mono">
                <li>https://www.ebsco.com/research-starters/military-history-and-science/world-war-i-and-us-economic-growth</li>
                <li>https://www.history.com/articles/world-war-i-cause-great-depression</li>
                <li>https://www.nber.org/digest/jan05/economics-world-war-i?page=1&perPage=50</li>
                <li>https://www.digitalhistory.uh.edu/disp_textbook.cfm?smtid=2&psid=3432</li>
                <li>https://www.gilderlehrman.org/history-resources/essays/roaring-twenties</li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6 space-y-3">
              {/* <h2 className="text-lg font-bold text-accent">Secondary Sources</h2> */}
              <ul className="space-y-2 text-sm text-foreground/80 font-mono">
                <li>https://www.ebsco.com/research-starters/history/suburbs-1920s</li>
                <li>"The 1920s Business and the Economy: Topics in the News." UXL American Decades, edited by Julie L. Carnagie, et al., vol. 3: 1920-1929, UXL, 2003, pp. 30-43. Gale In Context: U.S. History, link.gale.com/apps/doc/CX3436900131/UHIC?u=ebr22021&sid=bookmark-UHIC&xid=a566f69d. Accessed 20 Nov. 2025.</li>
                <li>https://www.gothamcenter.org/blog/merchandising-modernism-new-york-city-department-stores-in-the-1920s</li>
                <li>[Institutional archives & collections]</li>
                <li>[Documentary materials & analyses]</li>
              </ul>
            </div>
          </div>

          {/* Project information */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground">About This Exhibit</h2>
            <p className="text-foreground/80 text-sm leading-relaxed">
              <span className="text-accent font-bold">The Assembly Line:</span> An interactive exploration of 1920s economic life through the metaphor of automobile manufacturing. Each stage reveals the economic forces that shaped the Roaring Twenties.
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
