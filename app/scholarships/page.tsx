
import SectionContainer from '@/components/SectionContainer'
import HeroSection from '@/components/HeroSection'
import ReadyToStart from '@/components/ReadyToStart'

export const metadata = {
  title: 'Scholarships - Zarvo Studio',
  description: 'Guidance for scholarship awareness, planning, and preparation.',
}

export default function Scholarships() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Scholarship Guidance"
        description="Structured guidance for scholarship awareness, planning, and preparation. Honest advice, no agent-like behavior, no guarantees."
      />

      {/* What Scholarship Guidance Means */}
      <SectionContainer noPadding={true} className="py-2">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 mb-8 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-2xl">🎓</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">What Scholarship Guidance Means at Zarvo</h2>
            </div>
            <p className="text-brand-800 leading-relaxed mb-4">
              Scholarship guidance at Zarvo is about awareness, planning, and preparation for competitive opportunities. We help you understand what exists, what is realistic, and how to prepare—without false promises or agent-like behavior.
            </p>
            <p className="text-brand-800 leading-relaxed mb-8">
              We focus on honest advice, structured timelines, and realistic expectations. No shortcuts, no guarantees.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2 items-center text-center">
                <span className="text-3xl mb-2">📚</span>
                <h4 className="font-semibold text-brand mb-1">Awareness Before Application</h4>
                <p className="text-gray-700 text-sm">We help you discover scholarships you may be eligible for, before jumping into applications.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2 items-center text-center">
                <span className="text-3xl mb-2">🧭</span>
                <h4 className="font-semibold text-brand mb-1">Structured Planning</h4>
                <p className="text-gray-700 text-sm">We guide you in creating timelines, gathering documents, and preparing your profile.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2 items-center text-center">
                <span className="text-3xl mb-2">🔬</span>
                <h4 className="font-semibold text-brand mb-1">Depth Over Breadth</h4>
                <p className="text-gray-700 text-sm">We emphasize quality preparation for a few scholarships, not superficial applications to many.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2 items-center text-center">
                <span className="text-3xl mb-2">🚫</span>
                <h4 className="font-semibold text-brand mb-1">No Guarantees</h4>
                <p className="text-gray-700 text-sm">We do not guarantee results. We provide guidance, not outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* What This Includes/Does Not Include */}
      <SectionContainer noPadding={true} className="py-2">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 bg-brand/5 mb-8 shadow-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-2xl">✅</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">What Scholarship Guidance Includes</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10">
                <h4 className="mb-3 font-semibold text-brand">What This Includes</h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Awareness of available scholarships and eligibility</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Planning timelines and document requirements</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Guidance on strengthening your profile</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Honest feedback on your chances</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Resource sharing: official sources, portals, info</span></li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-red-100">
                <h4 className="mb-3 font-semibold text-red-600">What This Does Not Include</h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>We are not agents. We do not submit applications for you.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>No guarantees of acceptance or outcomes.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>We do not write essays or recommendation letters.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>No inside access or connections to committees.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>No commission-based fees or guarantees.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Example Scholarship Tracks Timeline - Modern Style */}
      <SectionContainer>
        <div className="relative max-w-3xl mx-auto">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-brand">Example Scholarship Tracks</h2>
          <p className="text-brand-800 leading-relaxed mb-8 text-lg md:text-xl">
            These are high-level examples of scholarship types and preparation tracks. Your actual roadmap will be tailored to your context.
          </p>
          <div className="absolute left-5" style={{top: '120px', bottom: '80px'}}>
            <div className="w-1 h-full bg-gradient-to-b from-brand via-brand-600 to-brand-800 rounded-full"></div>
          </div>
          <div className="space-y-16">
            {/* Track 1 */}
            <div className="relative flex items-start group">
              <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-lg font-bold text-white">1</span>
                </div>
                <div className="w-1 flex-1 bg-brand/20"></div>
              </div>
              <div className="ml-16 flex-1">
                <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 transition-all">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-brand">Merit-Based Scholarships</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">For students with strong academic performance, test scores, or achievements.</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-2">
                    <li>• Academic excellence</li>
                    <li>• Test scores</li>
                    <li>• Extracurricular achievements</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 2 */}
            <div className="relative flex items-start group">
              <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-lg font-bold text-white">2</span>
                </div>
                <div className="w-1 flex-1 bg-brand/20"></div>
              </div>
              <div className="ml-16 flex-1">
                <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 transition-all">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-brand">Need-Based Scholarships</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">For students who require financial aid based on family income and circumstances.</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-2">
                    <li>• Financial need</li>
                    <li>• Documentation requirements</li>
                    <li>• Application process</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 3 */}
            <div className="relative flex items-start group">
              <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-lg font-bold text-white">3</span>
                </div>
              </div>
              <div className="ml-16 flex-1">
                <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 transition-all">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-brand">Country/University/Field-Specific Scholarships</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">For students targeting scholarships offered by governments, universities, or specific fields of study.</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-2">
                    <li>• Country-specific (e.g., Commonwealth, Fulbright, DAAD, Chevening)</li>
                    <li>• University-specific</li>
                    <li>• Field-specific (STEM, arts, social sciences)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-6 italic">
            Note: These are examples only. Your roadmap will depend on your starting point, goals, and capacity.
          </p>
        </div>
      </SectionContainer>

      {/* Who This Is For - Modern Card Grid */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl md:text-4xl font-bold text-brand text-center">Who This Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">🎓</span>
              <h4 className="font-semibold text-brand mb-1">Students</h4>
              <p className="text-gray-700 text-sm">Planning to study abroad, concerned about costs</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">👨‍👩‍👧‍👦</span>
              <h4 className="font-semibold text-brand mb-1">Families</h4>
              <p className="text-gray-700 text-sm">Seeking financial aid options for higher education</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">🔍</span>
              <h4 className="font-semibold text-brand mb-1">Unaware Students</h4>
              <p className="text-gray-700 text-sm">Unaware of scholarship opportunities available to them</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">💡</span>
              <h4 className="font-semibold text-brand mb-1">Guidance Seekers</h4>
              <p className="text-gray-700 text-sm">Want structured, honest guidance without agent-like behavior</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Clear Disclaimer */}
      <SectionContainer className="bg-red-50 border-t border-red-200">
        <div className="max-w-3xl mx-auto">
          <h3 className="mb-4 text-red-900">Important Disclaimer</h3>
          <div className="space-y-3 text-red-800">
            <p className="font-medium">
              Zarvo Studio is not a scholarship agent.
            </p>
            <p>
              We do not guarantee scholarship acceptance. We do not submit applications 
              on your behalf. We do not have special access to committees or institutions.
            </p>
            <p>
              We provide awareness, planning, and preparation guidance. Your success depends 
              on your profile, effort, and external factors beyond our control.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* How to Get Started */}
      <div className="mt-12">
        <ReadyToStart
          heading="Interested in Scholarship Guidance?"
          message="If you are planning for scholarships and want structured, honest guidance, reach out via the contact form."
          buttonText="Contact Us"
        />
      </div>
    </>
  )
}
