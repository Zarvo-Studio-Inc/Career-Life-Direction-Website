import SectionContainer from '@/components/SectionContainer'
import HeroSection from '@/components/HeroSection'
import Link from 'next/link'
import ReadyToStart from '@/components/ReadyToStart'

export const metadata = {
  title: 'Services - Zarvo Studio',
  description: 'Career guidance, technology mentorship, and scholarship guidance services.',
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Our Services"
        description="Structured, honest guidance across three core areas. No hype, no guarantees—only thoughtful support."
      />

      {/* One-to-One Guidance Sessions */}
      <SectionContainer noPadding={true} className='pt-12'>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-6 md:p-8 bg-brand/5 mb-6 shadow-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-2xl">🎯</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">One-to-One Guidance Sessions</h2>
            </div>
            <p className="text-brand-800 leading-relaxed mb-6">
              Individual sessions for students seeking clarity on career and life direction. These sessions follow the Three-Lens Framework and are tailored to your context.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10">
                <h4 className="mb-3 font-semibold text-brand">What This Includes</h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Initial intake to understand your situation, concerns, and goals</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Structured conversation using the Three-Lens Framework (Self, Reality, Direction)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Assessment of aptitude, temperament, and readiness</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Discussion of constraints (financial, geographical, family, market)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Suggested roadmap with actionable next steps</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Written summary of the session</span></li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-red-100">
                <h4 className="mb-3 font-semibold text-red-600">What This Does Not Include</h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>Job placement or guaranteed outcomes</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>Technical training or skill development (see mentorship services)</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>Application assistance or document review</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>Long-term coaching or ongoing support (unless separately arranged)</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </SectionContainer>

      {/* Parent–Student Alignment Session */}
      <SectionContainer noPadding={true}>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-6 md:p-8 bg-brand/5 mb-6 shadow-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-2xl">👨‍👩‍👧‍👦</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">Parent–Student Alignment Session</h2>
            </div>
            <p className="text-brand-800 leading-relaxed mb-6">
              Joint sessions for parents and students to have structured, honest conversations about career and life direction. This helps align expectations and reduce conflict.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10">
                <h4 className="mb-3 font-semibold text-brand">What This Includes</h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Separate intake with student and parent(s) to understand each perspective</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Joint session facilitated using the Three-Lens Framework</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Discussion of student's aptitude and interests</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Discussion of family constraints and concerns</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Alignment on realistic expectations and next steps</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Written summary shared with both parties</span></li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-red-100">
                <h4 className="mb-3 font-semibold text-red-600">What This Does Not Include</h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>Family counseling or therapy</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>Decision-making on behalf of the student or family</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>Mediation of unrelated family conflicts</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Group Workshops */}
      <SectionContainer noPadding={true}>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-6 md:p-8 bg-brand/5 mb-6 shadow-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-2xl">🧑‍🏫</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">Group Workshops</h2>
            </div>
            <p className="text-brand-800 leading-relaxed mb-6">
              Small-group sessions on career planning, technology pathways, or scholarship preparation. These are offered periodically and announced on this website.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10">
                <h4 className="mb-3 font-semibold text-brand">What This Includes</h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Structured group sessions (typically 2-3 hours)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Discussion of common concerns and pathways</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Q&amp;A with the facilitator</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Written resources and next-step suggestions</span></li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-red-100">
                <h4 className="mb-3 font-semibold text-red-600">What This Does Not Include</h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>Personalized roadmaps (one-to-one sessions are recommended for that)</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>Technical training or hands-on labs</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>Follow-up support beyond the session</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Specialized Services */}
      <SectionContainer>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-6 md:p-8 bg-brand/5 mb-6 shadow-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-2xl">💡</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">Specialized Services</h2>
            </div>
            <p className="text-brand-800 leading-relaxed mb-6">
              Targeted support for students seeking mentorship in technology or guidance on scholarships. These services are designed for those with specific needs beyond general career guidance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🖥️</span>
                  <h4 className="font-semibold text-brand text-lg">Technology Mentorship</h4>
                </div>
                <p className="text-gray-700 text-sm mb-4 flex-1">
                  Roadmap-based mentorship for computer science students. Fundamentals before frameworks. Structured learning over trend chasing.
                </p>
                <Link 
                  href="/technology-mentorship" 
                  className="text-sm font-medium text-brand hover:underline transition-colors"
                >
                  Learn more →
                </Link>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎓</span>
                  <h4 className="font-semibold text-brand text-lg">Scholarship Guidance</h4>
                </div>
                <p className="text-gray-700 text-sm mb-4 flex-1">
                  Help with awareness, planning, and preparation for scholarship opportunities. We are not agents. We do not guarantee results.
                </p>
                <Link 
                  href="/scholarships" 
                  className="text-sm font-medium text-brand hover:underline transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* How to Get Started */}
      <div className="mt-8">
        <ReadyToStart 
          message="If you are interested in any of these services, please reach out via the contact form. We will respond personally to guide next steps."
          buttonText="Contact Us"
        />
      </div>
    </>
  )
}
