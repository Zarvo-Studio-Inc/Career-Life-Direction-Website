import SectionContainer from '@/components/SectionContainer'
import HeroSection from '@/components/HeroSection'

export const metadata = {
  title: 'Framework - Zarvo Studio',
  description: 'The Three-Lens Framework for career and life direction: Self, Reality, and Direction.',
}

export default function Framework() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="The Three-Lens Framework"
        description="Every guidance session at Zarvo follows a structured approach to understanding career and life decisions. We use three lenses to bring clarity."
      />

      {/* Overview */}
      <SectionContainer className="pt-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-brand flex items-center justify-center gap-2">
            <span>How We Approach Guidance</span>
            <span className="text-2xl md:text-3xl">🌱</span>
          </h2>
          <p className="text-brand-800 leading-relaxed mb-8 text-lg md:text-xl text-center">
            Guidance at Zarvo is a journey of discovery, not a checklist!<br className="hidden md:block" />
            We believe in making big decisions with clarity, optimism, and a little bit of joy.
          </p>
        </div>
      </SectionContainer>

      {/* Modern Timeline for Three Lenses */}
      <SectionContainer className="pb-16 md:pb-24" noPadding={true}>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-brand via-brand-600 to-brand-800 rounded-full"></div>
          <div className="space-y-16">
            {/* Lens 1: Self */}
            <div className="relative flex items-start group">
              {/* Timeline marker */}
              <div className="z-10 flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-lg font-bold text-white">1</span>
                </div>
                <div className="w-1 flex-1 bg-brand/20"></div>
              </div>
              {/* Card */}
              <div className="ml-16 flex-1">
                <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 transition-all">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-brand">Lens 1: Self</h2>
                  <div className="mb-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                      <div className="bg-brand/5 border border-brand/10 rounded-xl p-4 flex flex-col w-full">
                        <h4 className="font-semibold text-brand mb-1 text-base">Overview</h4>
                        <p className="text-gray-600 text-sm md:text-base">Understanding aptitude, temperament, interests, and readiness.</p>
                      </div>
                      <div className="bg-brand-50 border border-brand/10 rounded-xl p-4 flex flex-col w-full">
                        <h4 className="font-semibold text-brand mb-1 text-base">Key Questions</h4>
                        <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                          <li>What are your natural aptitudes? Where do you learn quickly?</li>
                          <li>What is your temperament? Are you analytical, creative, social, independent?</li>
                          <li>What do you find genuinely interesting, beyond social validation?</li>
                          <li>Are you ready for the demands of the path you are considering?</li>
                          <li>What are your current knowledge gaps?</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-brand/10 rounded-xl p-4 flex flex-col w-full">
                        <h4 className="font-semibold text-brand mb-1 text-base">Takeaway</h4>
                        <p className="text-gray-600 text-sm md:text-base">The goal is not to discover a hidden passion. The goal is to understand your strengths, weaknesses, and realistic starting point.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Lens 2: Reality */}
            <div className="relative flex items-start group">
              {/* Timeline marker */}
              <div className="z-10 flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-800 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-lg font-bold text-white">2</span>
                </div>
                <div className="w-1 flex-1 bg-brand-600/20"></div>
              </div>
              {/* Card */}
              <div className="ml-16 flex-1">
                <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 transition-all">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-brand-700">Lens 2: Reality</h2>
                  <div className="mb-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                      <div className="bg-brand-100 border border-brand-600/10 rounded-xl p-4 flex flex-col w-full">
                        <h4 className="font-semibold text-brand-700 mb-1 text-base">Overview</h4>
                        <p className="text-gray-600 text-sm md:text-base">Assessing constraints—financial, familial, geographical, and market-based.</p>
                      </div>
                      <div className="bg-brand-50 border border-brand-600/10 rounded-xl p-4 flex flex-col w-full">
                        <h4 className="font-semibold text-brand-700 mb-1 text-base">Key Questions</h4>
                        <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                          <li>What are your financial constraints? What can your family afford?</li>
                          <li>What are your geographical limitations? Can you relocate?</li>
                          <li>What does the job market look like in your field of interest?</li>
                          <li>What are your family's expectations and concerns?</li>
                          <li>What realistic timelines exist for achieving your goals?</li>
                          <li>What systemic factors (education system, visa requirements, etc.) affect your path?</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-brand-600/10 rounded-xl p-4 flex flex-col w-full">
                        <h4 className="font-semibold text-brand-700 mb-1 text-base">Takeaway</h4>
                        <p className="text-gray-600 text-sm md:text-base">Acknowledging constraints is not pessimism. It is realism. Realistic planning leads to sustainable decisions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Lens 3: Direction */}
            <div className="relative flex items-start group">
              {/* Timeline marker */}
              <div className="z-10 flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-700 to-brand-900 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-lg font-bold text-white">3</span>
                </div>
              </div>
              {/* Card */}
              <div className="ml-16 flex-1">
                <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 transition-all">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-brand-800">Lens 3: Direction</h2>
                  <div className="mb-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                      <div className="bg-brand-50 border border-brand-800/10 rounded-xl p-4 flex flex-col w-full">
                        <h4 className="font-semibold text-brand-800 mb-1 text-base">Overview</h4>
                        <p className="text-gray-600 text-sm md:text-base">Building a roadmap with responsibility—what you can control, and what you can do now.</p>
                      </div>
                      <div className="bg-brand-100 border border-brand-800/10 rounded-xl p-4 flex flex-col w-full">
                        <h4 className="font-semibold text-brand-800 mb-1 text-base">Key Questions</h4>
                        <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                          <li>What actions are within your control right now?</li>
                          <li>What skills do you need to develop first?</li>
                          <li>What short-term and long-term goals can you set?</li>
                          <li>What milestones can you use to measure progress?</li>
                          <li>What risks are you willing to take, and what backup plans exist?</li>
                          <li>How will you stay accountable and avoid drift?</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-brand-800/10 rounded-xl p-4 flex flex-col w-full">
                        <h4 className="font-semibold text-brand-800 mb-1 text-base">Takeaway</h4>
                        <p className="text-gray-600 text-sm md:text-base">Direction is about responsibility. It is about taking ownership of your decisions and understanding that guidance is not a substitute for action.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* How the Lenses Work Together */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl md:text-4xl font-bold text-brand text-center">How the Lenses Work Together</h2>
          <div className="flex flex-col items-center">
            {/* Modern horizontal stepper/timeline */}
            <div className="flex flex-row items-center justify-center w-full gap-0 md:gap-8 relative mb-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center flex-1 min-w-[120px]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand-600 flex items-center justify-center shadow-lg mb-2">
                  <span className="text-white text-2xl">🧑‍🎓</span>
                </div>
                <span className="font-semibold text-brand mt-1">Self</span>
                <span className="text-xs text-gray-500 text-center mt-1">What you might be suited for</span>
              </div>
              {/* Line 1 */}
              <div className="hidden md:block h-1 flex-1 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-700 mx-2 rounded-full"></div>
              {/* Step 2 */}
              <div className="flex flex-col items-center flex-1 min-w-[120px]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-lg mb-2">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <span className="font-semibold text-brand-700 mt-1">Reality</span>
                <span className="text-xs text-gray-500 text-center mt-1">What is feasible for you</span>
              </div>
              {/* Line 2 */}
              <div className="hidden md:block h-1 flex-1 bg-gradient-to-r from-brand-700 via-brand-800 to-brand-900 mx-2 rounded-full"></div>
              {/* Step 3 */}
              <div className="flex flex-col items-center flex-1 min-w-[120px]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-800 to-brand-900 flex items-center justify-center shadow-lg mb-2">
                  <span className="text-white text-2xl">🧭</span>
                </div>
                <span className="font-semibold text-brand-800 mt-1">Direction</span>
                <span className="text-xs text-gray-500 text-center mt-1">What actions to take next</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-center max-w-2xl">
              These three lenses are not separate steps—they inform each other. Together, they provide a structured way to think through complex decisions without oversimplifying or overpromising.
            </p>
              <div className="mt-10 flex flex-col items-center w-full">
                {/* Top Decorative Wave */}
                <div className="w-full -mb-2" style={{maxWidth: '1100px'}}>
                  <img src="/wave-2.svg" alt="Decorative wave" className="w-full h-12 object-cover" style={{objectPosition: 'top'}} />
                </div>
                <div className="bg-brand rounded-2xl p-8 md:p-12 shadow-lg w-full" style={{maxWidth: '900px'}}>
                  <h3 className="mb-2 text-2xl md:text-3xl font-bold text-white text-center tracking-tight">Clarity Through Structure</h3>
                  <div className="h-1 w-16 bg-white/40 rounded-full mb-4 mx-auto"></div>
                  <p className="text-brand-50 leading-relaxed text-center text-lg md:text-xl">
                    The Three-Lens Framework is not a formula for success. It is a tool for clarity.<br className="hidden md:block" />
                    It helps you think systematically about where you are, what is possible, and what you can do next.
                  </p>
                </div>
                {/* Bottom Decorative Wave (flipped) */}
                <div className="w-full -mt-2" style={{maxWidth: '1100px'}}>
                  <img src="/wave-2.svg" alt="Decorative wave" className="w-full h-12 object-cover rotate-180" style={{objectPosition: 'bottom'}} />
                </div>
              </div>
          </div>
        </div>
      </SectionContainer>

      {/* Closing Statement */}
    </>
  )
}
