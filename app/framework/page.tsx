import SectionContainer from '@/components/SectionContainer'

export const metadata = {
  title: 'Framework - Zarvo Studio',
  description: 'The Three-Lens Framework for career and life direction: Self, Reality, and Direction.',
}

export default function Framework() {
  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">The Three-Lens Framework</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every guidance session at Zarvo follows a structured approach to understanding 
            career and life decisions. We use three lenses to bring clarity.
          </p>
        </div>
      </SectionContainer>

      {/* Overview */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">How We Approach Guidance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Career and life decisions are complex. They involve self-awareness, practical 
            constraints, and long-term planning. To navigate these decisions thoughtfully, 
            we use three interconnected lenses:
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 font-semibold">1.</span>
                <span><strong>Self:</strong> Understanding who you are</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-semibold">2.</span>
                <span><strong>Reality:</strong> Assessing what is possible</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-semibold">3.</span>
                <span><strong>Direction:</strong> Building a responsible roadmap</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Lens 1: Self */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-gray-400 pl-6">
            <h2 className="mb-4">Lens 1: Self</h2>
            <p className="text-lg text-gray-600 mb-6">
              Understanding aptitude, temperament, interests, and readiness.
            </p>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Before making any career or life decision, you need to understand yourself. 
              This is not about motivation or inspiration. It is about honest self-assessment.
            </p>
            <h4 className="text-lg font-medium mt-6">Questions We Explore:</h4>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What are your natural aptitudes? Where do you learn quickly?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What is your temperament? Are you analytical, creative, social, independent?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What do you find genuinely interesting, beyond social validation?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Are you ready for the demands of the path you are considering?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What are your current knowledge gaps?</span>
              </li>
            </ul>
            <p className="mt-6">
              The goal is not to discover a hidden passion. The goal is to understand your 
              strengths, weaknesses, and realistic starting point.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Lens 2: Reality */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-gray-400 pl-6">
            <h2 className="mb-4">Lens 2: Reality</h2>
            <p className="text-lg text-gray-600 mb-6">
              Assessing constraints—financial, familial, geographical, and market-based.
            </p>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Self-awareness is important, but it is not enough. You must also understand 
              the constraints within which you operate. Ignoring reality leads to poor decisions.
            </p>
            <h4 className="text-lg font-medium mt-6">Questions We Explore:</h4>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What are your financial constraints? What can your family afford?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What are your geographical limitations? Can you relocate?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What does the job market look like in your field of interest?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What are your family's expectations and concerns?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What realistic timelines exist for achieving your goals?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What systemic factors (education system, visa requirements, etc.) affect your path?</span>
              </li>
            </ul>
            <p className="mt-6">
              Acknowledging constraints is not pessimism. It is realism. Realistic planning 
              leads to sustainable decisions.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Lens 3: Direction */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-gray-400 pl-6">
            <h2 className="mb-4">Lens 3: Direction</h2>
            <p className="text-lg text-gray-600 mb-6">
              Building a roadmap with responsibility—what you can control, and what you can do now.
            </p>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Once you understand yourself and your constraints, you can build a direction. 
              This is not a guarantee of success. It is a plan for responsible action.
            </p>
            <h4 className="text-lg font-medium mt-6">Questions We Explore:</h4>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What actions are within your control right now?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What skills do you need to develop first?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What short-term and long-term goals can you set?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What milestones can you use to measure progress?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What risks are you willing to take, and what backup plans exist?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>How will you stay accountable and avoid drift?</span>
              </li>
            </ul>
            <p className="mt-6">
              Direction is about responsibility. It is about taking ownership of your decisions 
              and understanding that guidance is not a substitute for action.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* How the Lenses Work Together */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">How the Lenses Work Together</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These three lenses are not separate steps. They inform each other:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                <strong>Self</strong> tells you what you might be suited for.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                <strong>Reality</strong> tells you what is feasible given your circumstances.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                <strong>Direction</strong> tells you what actions to take next.
              </span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-6">
            Together, they provide a structured way to think through complex decisions 
            without oversimplifying or overpromising.
          </p>
        </div>
      </SectionContainer>

      {/* Closing Statement */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="mb-4">Clarity Through Structure</h3>
          <p className="text-gray-700 leading-relaxed">
            The Three-Lens Framework is not a formula for success. It is a tool for clarity. 
            It helps you think systematically about where you are, what is possible, and what 
            you can do next.
          </p>
        </div>
      </SectionContainer>
    </>
  )
}
