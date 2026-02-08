
import SectionContainer from '@/components/SectionContainer'
import HeroSection from '@/components/HeroSection'
import ReadyToStart from '@/components/ReadyToStart'

export const metadata = {
  title: 'About - Zarvo Studio',
  description: 'Learn about our philosophy, values, and approach to career and life guidance.',
}

export default function About() {
  return (
    <>
      {/* Modern Hero */}
      <HeroSection
        title="About Zarvo Studio"
        description="Thoughtful, structured, and honest guidance for career and life decisions. No hype. No shortcuts."
      />

      {/* Why Zarvo Was Founded - Card Grid */}
      <SectionContainer noPadding={true} className="py-2">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 mb-8 w-full bg-white/80 border border-brand/10 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-2xl">🌱</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">Why Zarvo Was Founded</h2>
            </div>
            <div className="space-y-4 text-brand-800 leading-relaxed">
              <p>
                Too many students make critical life decisions based on trends, peer pressure, or incomplete information. Too many families are sold unrealistic promises by those who profit from confusion.
              </p>
              <p>
                Zarvo Studio was founded to create a space where students and parents can have calm, structured, ethical conversations about career and life direction—without hype, without guarantees, and without false promises.
              </p>
              <p>
                We do not claim to have all the answers. But we do offer clarity, structure, and honest guidance grounded in reality.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Philosophy - Card Grid */}
      <SectionContainer noPadding={true} className="py-2">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 bg-brand/5 mb-8 shadow-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-2xl">💡</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">Our Philosophy</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2">
                <h4 className="font-semibold text-brand mb-1">Clarity Over Certainty</h4>
                <p className="text-gray-700 text-sm">We do not offer certainty about the future. We offer clarity about the present—what you know about yourself, what constraints exist, and what actions you can take.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2">
                <h4 className="font-semibold text-brand mb-1">Process Over Outcomes</h4>
                <p className="text-gray-700 text-sm">We focus on helping you think clearly and plan responsibly. We cannot control outcomes—job markets, admissions, scholarships—but we can guide your process.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2">
                <h4 className="font-semibold text-brand mb-1">Fundamentals Over Hype</h4>
                <p className="text-gray-700 text-sm">We do not chase trends. We emphasize foundational skills, long-term thinking, and building from first principles.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2">
                <h4 className="font-semibold text-brand mb-1">Ethics Over Profit</h4>
                <p className="text-gray-700 text-sm">We refuse to make promises we cannot keep. We do not earn by selling false hope.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* What Zarvo Believes - Card Grid */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl md:text-4xl font-bold text-brand text-center">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">🧠</span>
              <p className="text-gray-700 text-sm">Not everyone needs to be an engineer, doctor, or entrepreneur.</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">🔍</span>
              <p className="text-gray-700 text-sm">Career direction should be grounded in self-awareness, not social pressure.</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">⚖️</span>
              <p className="text-gray-700 text-sm">Aptitude, temperament, and circumstances matter more than motivation alone.</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">👪</span>
              <p className="text-gray-700 text-sm">Parents deserve honest information, not sales tactics.</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">🎓</span>
              <p className="text-gray-700 text-sm">Scholarship and mentorship guidance should be transparent and realistic.</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">🛤️</span>
              <p className="text-gray-700 text-sm">There are no shortcuts. Only structured pathways.</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* What Zarvo Refuses To Do - Card Grid */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl md:text-4xl font-bold text-red-700 text-center">What We Refuse To Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-2xl border border-red-200 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">🚫</span>
              <p className="text-gray-700 text-sm">Promise job placements or guaranteed outcomes.</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-red-200 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">⏳</span>
              <p className="text-gray-700 text-sm">Promote trendy fields without assessing individual fit.</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-red-200 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">🕵️‍♂️</span>
              <p className="text-gray-700 text-sm">Act as agents, brokers, or middlemen for institutions.</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-red-200 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">⚠️</span>
              <p className="text-gray-700 text-sm">Use urgency, FOMO, or manipulative marketing tactics.</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-red-200 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">📄</span>
              <p className="text-gray-700 text-sm">Collect unnecessary personal data or documents prematurely.</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-red-200 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">🤥</span>
              <p className="text-gray-700 text-sm">Overpromise or oversimplify complex life decisions.</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Closing Statement - Modern Card */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-brand rounded-2xl border border-brand/10 p-8 shadow-md text-center mb-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none" style={{backgroundImage: 'url(/wave-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} />
            <h3 className="mb-4 text-white text-2xl md:text-3xl font-bold">A Space for Thoughtful Decision-Making</h3>
            <p className="text-brand-50 leading-relaxed">
              Zarvo Studio is not a training institute, not a placement agency, and not a consulting firm. We are a space for students and families to think clearly, plan responsibly, and move forward with realistic expectations.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
