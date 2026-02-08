import SectionContainer from '@/components/SectionContainer'
import HeroSection from '@/components/HeroSection'
import Link from 'next/link'

export const metadata = {
  title: 'How It Works - Zarvo Studio',
  description: 'Step-by-step process for working with Zarvo Studio.',
}

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="How It Works?"
        description="A simple, transparent process for students and families seeking guidance."
      />

      {/* Modern Process Timeline */}
      <SectionContainer>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-brand via-brand-600 to-brand-800 rounded-full"></div>
          <div className="space-y-16">
            {[
              {
                title: 'Initial Contact',
                desc: 'Reach out to us via the contact form or email. Let us know who you are (student, parent, graduate) and briefly describe what guidance you are seeking.',
                note: 'We respond personally—no automated replies. We will ask clarifying questions if needed.',
                icon: '📩',
              },
              {
                title: 'Intake Form',
                desc: 'If we determine that our services might be helpful, we will send you a brief intake form. This helps us understand your context, concerns, and what you hope to gain from guidance.',
                note: 'The form is not a questionnaire or test. It is a tool to prepare for a meaningful conversation.',
                icon: '📝',
              },
              {
                title: 'Guidance Session',
                desc: 'We schedule a one-to-one or parent–student guidance session. The session follows the Three-Lens Framework (Self, Reality, Direction) and is structured but conversational.',
                note: 'Sessions are typically 60-90 minutes, conducted via video call or in person (depending on location). The goal is not to give you a formulaic answer. The goal is to help you think clearly about your situation.',
                icon: '💬',
              },
              {
                title: 'Roadmap & Summary',
                desc: 'After the session, we provide a written summary of the conversation, including key insights, suggested next steps, and a roadmap (if applicable).',
                note: 'This document is yours to keep. It is not a guarantee or contract—it is a reference for your planning.',
                icon: '🗺️',
              },
              {
                title: 'Optional: Ongoing Mentorship',
                desc: 'If you need continued support (e.g., technology mentorship, scholarship preparation, or follow-up sessions), we can discuss an ongoing arrangement.',
                note: 'This is optional and depends on your needs and our capacity. We do not pressure anyone into long-term commitments.',
                icon: '🤝',
              },
            ].map((step, idx) => (
              <div key={step.title} className="relative flex items-start group">
                {/* Timeline marker */}
                <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                  <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-lg font-bold text-white">{step.icon}</span>
                  </div>
                  {idx !== 4 && (
                    <div className="w-1 flex-1 bg-gradient-to-b from-brand/20 to-brand-200" style={{marginTop: '-2px'}}></div>
                  )}
                </div>
                {/* Card */}
                <div className="ml-16 flex-1">
                  <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 transition-all">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-brand">{`${idx + 1}. ${step.title}`}</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">{step.desc}</p>
                    <p className="text-sm text-gray-500">{step.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* What Happens After */}
      <SectionContainer>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* What Happens After the First Session? */}
          <div className="rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <h2 className="mb-6 text-2xl md:text-3xl font-bold text-brand">What Happens After the First Session?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              After your initial guidance session, you have clarity on your next steps. What 
              you do next is up to you. Some students proceed independently. Others request 
              follow-up support.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-brand-600">🔄</span>
                <span>
                  <strong>If you want ongoing mentorship:</strong> We can discuss technology 
                  mentorship, scholarship preparation, or periodic check-ins.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-brand-600">🗺️</span>
                <span>
                  <strong>If you prefer to proceed independently:</strong> You can use the 
                  roadmap and summary as a reference. We do not require ongoing engagement.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-brand-600">📅</span>
                <span>
                  <strong>If you need a follow-up session:</strong> You can request it. 
                  We keep sessions focused and purposeful.
                </span>
              </li>
            </ul>
          </div>
          {/* Vertical Divider for desktop */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 w-px bg-gray-200" style={{zIndex: 1}} />
          {/* Pricing & Payment */}
          <div className="rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <h2 className="mb-6 text-2xl md:text-3xl font-bold text-brand">Pricing & Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pricing depends on the type of service (one-to-one session, mentorship, workshop) 
              and duration. We discuss fees transparently before scheduling any session.
            </p>
            <div className="p-6 rounded-lg">
              <h4 className="mb-3">Our Approach to Pricing:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>No hidden fees or complicated packages</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Payment is upfront and clear—no commissions, no outcome-based fees</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>We do not pressure students or families into purchasing more sessions than needed</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>We offer flexibility for families with financial constraints (where possible)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Who Should NOT Work With Us */}
      <SectionContainer>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 bg-red-50/40 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 text-2xl">🚫</span>
              <h2 className="text-2xl md:text-3xl font-bold text-red-700">Who Should NOT Work With Us</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Zarvo Studio is not for everyone. We are explicit about who we cannot help:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-white/80 rounded-lg p-4 border-l-4 border-red-400">
                <span className="mt-1 text-red-500 text-xl">✗</span>
                <span className="text-gray-800">
                  If you are looking for guaranteed placements or job outcomes, we cannot help.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/80 rounded-lg p-4 border-l-4 border-red-400">
                <span className="mt-1 text-red-500 text-xl">✗</span>
                <span className="text-gray-800">
                  If you want shortcuts, hacks, or quick fixes, we are not the right fit.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/80 rounded-lg p-4 border-l-4 border-red-400">
                <span className="mt-1 text-red-500 text-xl">✗</span>
                <span className="text-gray-800">
                  If you expect us to make decisions for you, we will not do that.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/80 rounded-lg p-4 border-l-4 border-red-400">
                <span className="mt-1 text-red-500 text-xl">✗</span>
                <span className="text-gray-800">
                  If you are not willing to invest time and effort in your own preparation, guidance will not be effective.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Call to Action */}
      <SectionContainer className="bg-brand">
        <div className="max-w-3xl mx-auto text-center py-12">
          <h2 className="mb-6 text-white text-3xl md:text-4xl font-bold">Ready to Start?</h2>
          <p className="text-brand-50 leading-relaxed mb-8 text-lg md:text-xl">
            If this process feels right for you, reach out via the contact form.<br className="hidden md:block" />
            We will respond personally.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-brand font-semibold rounded-lg shadow-md hover:bg-brand-50 hover:text-brand-700 transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </SectionContainer>
    </>
  )
}
