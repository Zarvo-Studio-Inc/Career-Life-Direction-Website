import SectionContainer from '@/components/SectionContainer'

export const metadata = {
  title: 'About - Zarvo Studio',
  description: 'Learn about our philosophy, values, and approach to career and life guidance.',
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">About Zarvo Studio</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe career and life decisions deserve thoughtful, structured, and 
            honest guidance—not hype, not shortcuts.
          </p>
        </div>
      </SectionContainer>

      {/* Why Zarvo Was Founded */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Why Zarvo Was Founded</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Too many students make critical life decisions based on trends, peer pressure, 
              or incomplete information. Too many families are sold unrealistic promises by 
              those who profit from confusion.
            </p>
            <p>
              Zarvo Studio was founded to create a space where students and parents can have 
              calm, structured, ethical conversations about career and life direction—without 
              hype, without guarantees, and without false promises.
            </p>
            <p>
              We do not claim to have all the answers. But we do offer clarity, structure, 
              and honest guidance grounded in reality.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Philosophy */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Our Philosophy</h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2">Clarity Over Certainty</h4>
              <p className="text-gray-700">
                We do not offer certainty about the future. We offer clarity about the 
                present—what you know about yourself, what constraints exist, and what 
                actions you can take.
              </p>
            </div>
            <div>
              <h4 className="mb-2">Process Over Outcomes</h4>
              <p className="text-gray-700">
                We focus on helping you think clearly and plan responsibly. We cannot 
                control outcomes—job markets, admissions, scholarships—but we can guide 
                your process.
              </p>
            </div>
            <div>
              <h4 className="mb-2">Fundamentals Over Hype</h4>
              <p className="text-gray-700">
                We do not chase trends. We emphasize foundational skills, long-term thinking, 
                and building from first principles.
              </p>
            </div>
            <div>
              <h4 className="mb-2">Ethics Over Profit</h4>
              <p className="text-gray-700">
                We refuse to make promises we cannot keep. We do not earn by selling false hope.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* What Zarvo Believes */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">What We Believe</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-gray-400 font-bold">•</span>
              <span>Not everyone needs to be an engineer, doctor, or entrepreneur.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400 font-bold">•</span>
              <span>Career direction should be grounded in self-awareness, not social pressure.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400 font-bold">•</span>
              <span>Aptitude, temperament, and circumstances matter more than motivation alone.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400 font-bold">•</span>
              <span>Parents deserve honest information, not sales tactics.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400 font-bold">•</span>
              <span>Scholarship and mentorship guidance should be transparent and realistic.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400 font-bold">•</span>
              <span>There are no shortcuts. Only structured pathways.</span>
            </li>
          </ul>
        </div>
      </SectionContainer>

      {/* What Zarvo Refuses To Do */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">What We Refuse To Do</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold">✗</span>
              <span>Promise job placements or guaranteed outcomes.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold">✗</span>
              <span>Promote trendy fields without assessing individual fit.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold">✗</span>
              <span>Act as agents, brokers, or middlemen for institutions.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold">✗</span>
              <span>Use urgency, FOMO, or manipulative marketing tactics.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold">✗</span>
              <span>Collect unnecessary personal data or documents prematurely.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold">✗</span>
              <span>Overpromise or oversimplify complex life decisions.</span>
            </li>
          </ul>
        </div>
      </SectionContainer>

      {/* Closing Statement */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="mb-4">A Space for Thoughtful Decision-Making</h3>
          <p className="text-gray-700 leading-relaxed">
            Zarvo Studio is not a training institute, not a placement agency, and not a 
            consulting firm. We are a space for students and families to think clearly, 
            plan responsibly, and move forward with realistic expectations.
          </p>
        </div>
      </SectionContainer>
    </>
  )
}
