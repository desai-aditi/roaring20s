"use client"

import { useState } from "react"
import CarAssemblyVisualization from "@/components/car-assembly-visualization"
import Navigation from "@/components/navigation"
import FinalConclusion from "@/components/final-conclusion"
import EssentialQuestions from "@/components/essential-questions"
import Credits from "@/components/credits"
import IntroScreen from "@/components/intro-screen"
import AssemblyStageInfo from "@/components/assembly-stage-info"

const stages = [
  {
    id: 1,
    part: "Engine",
    title: "World War One Aftermath",
    objective: "Kickstarts the economy of the Roaring 20s",
    metaphor:
      "The economic problems following World War I provided the initial energy and friction that would eventually ignite the roaring economic engine of the decade.",
    summary:
      "After World War I, the US faced major economic problems that made the transition from wartime to peacetime difficult. During the war, most manufacturing was focused on weapons, ships and supplies. But once the war ended, factories had to slowly shift back to consumer goods. Demand grew faster than supply and the prices skyrocketed. By 1919, the cost of living had nearly doubled compared to 1916, making everyday life much more expensive for American workers. At the same time, millions of soldiers returned home looking for jobs, which increased competition in the labor market. During wartime no-strike pledges were set up, but after the war, workers held massive strikes against the low wages and high inflation. Over four million workers went on strike in 1919 alone, causing nationwide unrest.Globally, the international economy also became unstable, and America's choices made things worse. The U.S. insisted that Allied nations repay their war debts, which pushed countries like Britain and France to demand harsh reparations from Germany. This created a cycle of debt, borrowing and repayment that strained Europe's already weakened economies. Germany experienced hyperinflation, European trade collapsed and countries imposed high tariffs to protect themselves. The United States did the same, turning inward by raising tariffs and restricting immigration. Domestic inflation, labor conflict, international debt, and Europe's financial instability set the stage for the worldwide economic collapse that later became the Great Depression.",
    videoUrl: "https://www.youtube.com/embed/dgpNrLVEOIU",
    imageUrl: "https://cepr.org/sites/default/files/styles/popup_small/public/2022-11/anderson2novfig1b.png?itok=XIk1RzeF",
    imageCaption: "Rise in unemployment between 1919 and 1921",
    youtubeLabel: "Watch the Treaty of Versailles being signed in 1919",
    quote: "We are now faced with the problem, not of saving Germany or Britain but of saving ourselves.",
    source: "- Herbert Hoover",
    effectBullets:[
      "Effact #5: There was a boom in the economy and industries were enjoying an increase in profits. However inflation was high and, in an attempt to reduce operating costs, businesses laid off workers and reduced wages",
      "Effact #6: Inflation increases the cost of living, the cost of housing, food, clothing and other essentials. In 1919, prices rose at an average of more than 15%",
      "Effact #12: The number of workers in  labor unions  increased dramatically. Workers had been given the rightto strike, industrialists and business leaders wanted to break their power.",

    ]
  },
  {
    id: 2,
    part: "Chassis",
    title: "Consumer Revolution",
    objective: "Rise of Consumerism",
    metaphor:
      "The widespread availability of credit and new products formed the foundational chassis, the structural frame upon which the entire consumer-driven economy was built.",
    summary:
      "The Roaring 20s saw an unprecedented change in the way people lived. Previously, people worked to earn money for food and other necessities. With the extra money that they could afford to spare, people would occasionally treat themselves to a couple of extra purchases. However, with the onset of the Roaring 20s, everything changed. With boosts from the increased economic activity created by World War I and new efficient technologies and methods of production such as the assembly line, the American economy boomed. To say it grew would be an understatement; the economy exploded, reaching heights never thought possible. With this expansion came changes in life. A wave of new products ranging from cars to cereal to washing machines called for Americans to reach for their wallets and begin a new age of American consumerism. Now, rather than saving money to prepare for the next recession, Americans emptied their purses on all that the new economy had to offer. It didn’t stop there; after spending all their cash, Americans, hungry for even more, made purchases on credit. The credit system allowed Americans to take home their goods now and pay later in installments, letting people go into debt to make everyday purchases. Companies and manufacturers, seeing a chance to ride the wave of money being spent, doubled down and created advertisements, in which they sent out promotions in newspapers and the radio that convinced people to buy up all the products they could have dreamed of. The new products that consumers bought changed their lives too; new machines such as washing machines and vacuum cleaners made housework many times easier, while automobiles, the greatest product of the time, allowed people to move around at crazy speeds. The roar of the twenties left a permanent mark on American society that forever changed the way that Americans lived.",
    imageUrl: "https://c8.alamy.com/comp/C00YM2/1920s-full-page-advertisement-in-consumer-magazine-for-the-thor-combined-C00YM2.jpg",
    imageCaption: "Advertisement for the Thor Washing Machine, 1920s",
    quote: "Sell them their dreams. Sell them what they longed for and hoped for. Sell them this hope and you won't have to worry about selling the goods.",
    source: "- Helen Landon Cass",
    effectBullets: [
      "#21 The Roaring 20s introduced consumerism and materialism to the U.S. with massive changes to lifestyle and culture.",
    ],
  },
  {
    id: 3,
    part: "Wheels",
    title: "NYSE & Bull Market",
    objective: "Keeps the economy moving",
    metaphor:
      "Wheels symbolize the Bull Market. The stock market's upward momentum kept the economy rolling rapidly, propelling speculation and confidence.",
    summary:
      "At the center of the economic and social change of the Roaring 20s was the economic bull market. In economics, the term bull market refers to a booming economy undergoing rapid expansion. The bull market of the 1920s was one of the greatest in history, with stocks jumping to many times their original values. This surge was initiated by high economic output during World War I and new technologies that increased efficiency and encouraged consumer spending. As it got going, the bull market began feeding itself, with rising stock values driving more investment, which drove stock values even higher. In the middle of this boom was the New York Stock Exchange. Known by its acronym, NYSE, the stock exchange served as the largest stock trading market in America. Every day, from the second it opened in the morning to when it closed at night, the NYSE was full of investors running around, looking for the best profits. Seasoned investors frequented the market, using their expertise to make seemingly endless profits. On the other side, many ordinary Americans, after being initially exposed to investing during World War I, when the government issued Liberty Bonds and Victory Bonds, put their savings into the stock market, believing that it was a foolproof, safe way to make miraculous profits. In ten years’ time, everything that the stock market had built up would come crashing down, along with the lives and fortunes of countless Americans, but for now, the bull market and the NYSE represented all of the hopes and dreams of the nation.",
    archivalDescription:
      "[Archival Artifact - Stock market data, trading floor photographs, or investment prospectuses]",
    imageUrl: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/stock-market-crash-gettyimages-542350179?_a=BAVAZGID0",
    imageCaption: "The NYSE trading floor in the 1920s",
    quote:
      "[Primary Source Quote from investors, financial analysts, or market observers describing market enthusiasm]",
    source: "- Source/Date",
    effectBullets:[
      "Effact #24: Ordinary Americans were building up high debts because of easy credit and started to gamble on the Stock Market, believing it was a safe bet.",
      "Effact #23: During World War One  Liberty Bonds , and later Victory Bonds, introduced the idea of financial securities to many Americans and encouraged the concept of investment by people from all walks of life."
    ]
  },
  {
    id: 4,
    part: "Interior",
    title: "Urban vs. Suburban vs. Rural",
    objective: "Compare Effects of Boom (Geographical)",
    metaphor:
      "The Interior represents contrasts between prosperity and hardship. While some enjoyed comfort, rural America remained isolated from the economic gains.",
    summary:
      "While urban and suburban areas thrived during the 1920s, rural America faced persistent hardship. Agricultural prices collapsed, leaving farmers struggling as the rest of the nation prospered. This stage contrasts the economic experiences across different regions.",
    archivalDescription:
      "[Archival Artifact - Photographs comparing urban prosperity with rural conditions, farm data, migration statistics]",
    videoUrl: "",
    videoCaption: "",
    quote: "[Primary Source Quote from rural workers, farmers, or observers commenting on regional inequality]",
    source: "- Source/Date",
  },
  {
    id: 5,
    part: "Body Panels",
    title: "Department Stores",
    objective: "General prosperity",
    metaphor:
      "Department stores are like the body panels of the Model T because they create the polished, eye-catching exterior of the 1920s economy. Their grand buildings and flashy window displays were the most visible expression of the consumer boom, shaping how Americans saw the era’s prosperity.",
    summary:
      "Department stores expanded rapidly in the 1920s as America's middle and working classes grew, giving more families the disposable income needed for regular shopping. As many Americans moved into newly developing suburbs, department stores followed, opening multiple locations to meet the needs of these high-density communities. This shift helped transform stores like Macy's, Wanamaker's, Filene's, Sears, Gimbel's, Marshall Field's, and Bamberger's into powerful retail chains. Their expansion popularized modern shopping culture, and in some cases, these companies even allowed employees to buy stock, tying workers into the increasingly popular stock market of the 1920s.The 1920s also witnessed the rise of window shopping, a popular pastime that department stores actively encouraged through elaborate, eye-catching displays meant to entice customers inside. Macy’s became especially famous for its innovative marketing, for example, the first Macy’s Thanksgiving Day Parade in 1924. Wanamaker’s, however, drew crowds with its grand design and high-quality goods. Filene’s appealed to more budget-conscious shoppers, showing how department stores could target different segments of the growing consumer base. Together, these stores reshaped America’s consumer culture.",
    archivalDescription:
      "[Archival Artifact - Department store photographs, fashion catalogs, or consumer goods advertisements]",
    videoUrl: "https://youtu.be/Y0nVwUpBUQg?si=b5xAp8nXq65cCzYQ",
    youtubeLabel: "Watch a 1920s department store advertisement",
    quote:
      "Even to the person least interested in art, it must have become apparent that something has hit the shop windows. A wave of brilliant color is spreading, and one sees the most incomprehensible designs in silk scarves, dress goods, and cretonnes. They look like the covers of Vanity Fair or the New Yorker, frivolous, gay…",
    source: "Edwin Avery Park, in his 1927 book, New Backgrounds for a New Age",
  },
  {
    id: 6,
    part: "Finished Car",
    title: "The Automobile Industry",
    objective: "Ford & Auto Industry Leadership",
    metaphor:
      "The Finished Car represents Ford's assembly line triumph. The automobile industry was the complete, integrated force that transformed America's economy.",
    summary:
      "Before the 1920s, automobiles were widely considered to be hand-built luxury items that only the wealthy could afford. However, Henry Ford, an inventor and businessman from Michigan, permanently changed that with a world-renowned development: a nearly perfect moving assembly line. In essence, rather than have a small group of mechanics and artisans move around a single stationary product to perform many tasks, the product itself moved past echelons of workers who each applied their own individual step repeatedly on every car. This method costs from half a day to a measly hour and a half, making them cheaper for everyday people. Combined with Ford's famous $5-a-day wage, which doubled the average industrial salary and intentionally gave workers the ability to buy the very cars they produced, automobiles were suddenly much easier to access. As a result of this process, over 26 million automobiles were distributed throughout the nation, laying the stones for another industrial spike. An important concept to understand is the Economic Multiplier Effect, where an initial increase in economic activity in one sector leads to a larger total increase in overall economic activity because it stimulates growth in other connected industries. While it is fairly common, the automobile industry's revolution is considered one of the largest showcases of this phenomenon. Demand for the automobile stimulated many other major industries in the US. Producing millions of cars required astronomical amounts of industrial stock and infrastructure. Steel for engine blocks and body panels, petroleum for fuel, and rubber for tires are just a few of these industries that were expanded drastically due to the vehicular surge. The Federal Highway Act was beginning to create an intercontinental web of transportation routes, while new jobs opened up not only in large operations such as transportation, mining, and engineering, but also in rising local businesses such as motels, gas stations, and restaurants.",
    archivalDescription:
      "[Archival Artifact - Assembly line photographs, Ford factory images, or automotive advertisements]",
    videoUrl: "https://www.youtube.com/watch?v=cTZ3rJHHSik",
    youtubeLabel: "Watch the Ford assembly line in action",
    quote: "[Primary Source Quote from Henry Ford, workers, or observers about the automobile revolution]",
    source: "- Source/Date",
  },
]

type Screen = "intro" | "assembly" | "conclusion" | "questions" | "credits"

const introAudioUrl = "https://example.com/intro-audio.mp3"
const conclusionAudioUrl = "https://example.com/conclusion-audio.mp3"

export default function Home() {
  const [currentStage, setCurrentStage] = useState(0)
  const [screen, setScreen] = useState<Screen>("intro")
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"summary" | "archival" | "quote">("summary")

  const handleNext = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1)
    } else {
      setScreen("conclusion")
    }
  }

  const handlePrevious = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1)
    }
  }

  const handleNavigateTo = (screen: Screen) => {
    setScreen(screen)
  }

  const handleStartAssembly = () => {
    setScreen("assembly")
    setCurrentStage(0)
  }

  const handleBackToAssembly = () => {
    setScreen("assembly")
    setCurrentStage(0)
  }

  const openModal = (type: "summary" | "archival" | "quote") => {
    setModalType(type)
    setModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-background factory-bg text-foreground">
      {screen === "intro" && <IntroScreen onStart={handleStartAssembly} audioUrl={introAudioUrl} />}

      {screen === "assembly" && (
        <div className="flex flex-col h-screen max-h-screen overflow-hidden">
          {/* Stage header - Stage 1 of 6, Engine */}
          <div className="bg-background/80 backdrop-blur border-b border-border px-6 py-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">
              Stage {currentStage + 1} of {stages.length}
            </p>
            <h2 className="text-2xl font-bold text-accent">{stages[currentStage].part}</h2>
          </div>

          <div className="flex-1 overflow-hidden flex gap-6 px-6 py-6">
            <div className="w-[35%] flex-shrink-0 bg-background/40 border border-border/50 rounded-lg p-6 overflow-y-auto">
              <div className="animate-in fade-in duration-500">
                <AssemblyStageInfo stage={stages[currentStage]} />
              </div>
            </div>

            {/* Right column - Car visualization */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <CarAssemblyVisualization stage={currentStage} stages={stages} />
            </div>
          </div>

          {/* Navigation controls - fixed at bottom */}
          <div className="bg-background border-t border-border px-4 py-4 flex-shrink-0">
            <Navigation
              onNext={handleNext}
              onPrevious={handlePrevious}
              canGoPrevious={currentStage > 0}
              canGoNext={true}
              currentStage={currentStage + 1}
              totalStages={stages.length}
              onNavigate={handleNavigateTo}
              isLastStage={currentStage === stages.length - 1}
            />
          </div>
        </div>
      )}

      {screen === "conclusion" && (
        <FinalConclusion onNavigate={handleNavigateTo} onBack={handleBackToAssembly} audioUrl={conclusionAudioUrl} />
      )}

      {screen === "questions" && <EssentialQuestions onNavigate={handleNavigateTo} onBack={handleBackToAssembly} />}

      {screen === "credits" && <Credits onNavigate={handleNavigateTo} onBack={handleBackToAssembly} />}
    </main>
  )
}
