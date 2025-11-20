'use client'

interface EssentialQuestionsProps {
  onNavigate: (screen: 'assembly' | 'conclusion' | 'questions' | 'credits') => void
  onBack?: () => void
}

export default function EssentialQuestions({ onNavigate, onBack }: EssentialQuestionsProps) {
  return (
    <div className="min-h-screen bg-background factory-bg flex flex-col">
      <div className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
          <div className="border-l-4 border-accent pl-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 text-balance">
              Essential Questions
            </h1>
            <p className="text-lg text-muted-foreground font-mono">
              Analyzing the Assembly
            </p>
          </div>

          {/* Questions grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-bold text-accent"> A1 How do citizens, civic ideals, and government institutions interact to balance the needs of individuals and the common good?</h2>
              <div className="bg-background/50 rounded p-4 border border-border/30">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  In the 1920s, citizens, civic ideals, and government institutions interacted in many ways as Americans tried to balance individual freedom with the common good. Many citizens embraced the decade’s celebration of personal liberty: buying automobiles, enjoying mass entertainment, and taking advantage of new economic opportunities. Civic ideals, such as democracy, equality, and public morality, however, continued to shape debates about how society should function. Government institutions attempted to regulate this rapidly changing world through policies such as Prohibition and immigration restrictions. In the economy, this meant adopting a largely hands-off, pro-business approach that fueled rapid growth but also allowed speculation and inequality to increase, reflecting efforts to maintain social order while still promoting business growth, trusting that individual enterprise and consumer choice would benefit the nation as a whole. The pro-business approach included low taxes, limited regulation, and encouragement of consumer spending. These policies allowed short-term prosperity but left the economy vulnerable, illustrating the tension between economic freedom and the common good. This ultimately revealed how difficult it was to maintain long-term stability while promoting a modern consumer economy.
                </p>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-bold text-accent">C2 How have the scientific and technological developments over the course of history changed the way people live and economies and governments function?</h2>
              <div className="bg-background/50 rounded p-4 border border-border/30">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Scientific and technological developments, such as the invention and mass production of automobiles, changed how people, economies, and governments functioned. In the 1920’s Henry Ford’s development of the moving assembly line made cars more affordable and accessible to the American population than ever before. This change came with a sense of personal freedom by allowing families the pleasure of unprecedented mobility. People could now live farther from their formerly cramped city center workplaces, leading to a new rise in suburban neighborhoods, where citizens had the opportunity to freely experience their lives. Economically, the automobile created a vast follower network of industries that included steel, oil, rubber, glass, construction, and local businesses, leaving in its wake millions of jobs. Consumer credit systems were popularized to afford larger expenses, and Americans increased their spending with their new freedom, fueling an immense economic boom.Government actions were also altered due to this technological shift. Authorities began to fund highway construction through the Federal Highway Act to complement the rapid expansion of automotive activities, redesigning and regulating systems to handle the increase in automotive travel. Cars demonstrated how a technological innovation can change virtually every aspect of society and stimulate economic growth, reshape social behavior, and drive government action to support the progression of the American dream.
                </p>
              </div>
            </div>
          </div>

          {/* Reflection prompts */}
          <div className="bg-muted/20 border border-border/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Reflection Prompts</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <span className="text-accent font-bold">→</span>
                <span className="text-foreground/80">What parallels exist between the 1920s and modern economic cycles?</span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-accent font-bold">→</span>
                <span className="text-foreground/80">How did geography and class determine who benefited from prosperity?</span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-accent font-bold">→</span>
                <span className="text-foreground/80">What warnings does 1920s speculation provide today?</span>
              </li>
            </ul>
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
            onClick={() => onNavigate('conclusion')}
            className="px-6 py-2 bg-card/50 border border-border/50 rounded font-mono text-sm hover:bg-card/80 transition-colors"
          >
            Conclusion
          </button>
          <button
            onClick={() => onNavigate('credits')}
            className="px-6 py-2 bg-accent text-accent-foreground rounded font-mono text-sm hover:bg-accent/80 transition-colors"
          >
            Sources →
          </button>
        </div>
      </div>
    </div>
  )
}
