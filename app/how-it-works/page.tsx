import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'

export const metadata = {
  title: 'How It Works - Zarvo Studio',
  description: 'Step-by-step process for working with Zarvo Studio.',
}

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">How It Works</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A simple, transparent process for students and families seeking guidance.
          </p>
        </div>
      </SectionContainer>

      {/* Process Steps */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg mr-6">
                1
              </div>
              <div className="flex-1">
                <h3 className="mb-3">Initial Contact</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Reach out to us via the contact form or email. Let us know who you are 
                  (student, parent, graduate) and briefly describe what guidance you are seeking.
                </p>
                <p className="text-sm text-gray-600">
                  We respond personally—no automated replies. We will ask clarifying questions 
                  if needed.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg mr-6">
                2
              </div>
              <div className="flex-1">
                <h3 className="mb-3">Intake Form</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If we determine that our services might be helpful, we will send you a 
                  brief intake form. This helps us understand your context, concerns, and 
                  what you hope to gain from guidance.
                </p>
                <p className="text-sm text-gray-600">
                  The form is not a questionnaire or test. It is a tool to prepare for a 
                  meaningful conversation.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg mr-6">
                3
              </div>
              <div className="flex-1">
                <h3 className="mb-3">Guidance Session</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We schedule a one-to-one or parent–student guidance session. The session 
                  follows the Three-Lens Framework (Self, Reality, Direction) and is 
                  structured but conversational.
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Sessions are typically 60-90 minutes, conducted via video call or in person 
                  (depending on location).
                </p>
                <p className="text-sm text-gray-600">
                  The goal is not to give you a formulaic answer. The goal is to help you 
                  think clearly about your situation.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg mr-6">
                4
              </div>
              <div className="flex-1">
                <h3 className="mb-3">Roadmap & Summary</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After the session, we provide a written summary of the conversation, 
                  including key insights, suggested next steps, and a roadmap (if applicable).
                </p>
                <p className="text-sm text-gray-600">
                  This document is yours to keep. It is not a guarantee or contract—it is 
                  a reference for your planning.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg mr-6">
                5
              </div>
              <div className="flex-1">
                <h3 className="mb-3">Optional: Ongoing Mentorship</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you need continued support (e.g., technology mentorship, scholarship 
                  preparation, or follow-up sessions), we can discuss an ongoing arrangement.
                </p>
                <p className="text-sm text-gray-600">
                  This is optional and depends on your needs and our capacity. We do not 
                  pressure anyone into long-term commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* What Happens After */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">What Happens After the First Session?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            After your initial guidance session, you have clarity on your next steps. What 
            you do next is up to you. Some students proceed independently. Others request 
            follow-up support.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                <strong>If you want ongoing mentorship:</strong> We can discuss technology 
                mentorship, scholarship preparation, or periodic check-ins.
              </span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                <strong>If you prefer to proceed independently:</strong> You can use the 
                roadmap and summary as a reference. We do not require ongoing engagement.
              </span>
            </div>
            <div className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                <strong>If you need a follow-up session:</strong> You can request it. 
                We keep sessions focused and purposeful.
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Pricing & Payment */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Pricing & Payment</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pricing depends on the type of service (one-to-one session, mentorship, workshop) 
            and duration. We discuss fees transparently before scheduling any session.
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
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
      </SectionContainer>

      {/* Who Should NOT Work With Us */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Who Should NOT Work With Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Zarvo Studio is not for everyone. We are explicit about who we cannot help:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-red-500">✗</span>
              <span>
                If you are looking for guaranteed placements or job outcomes, we cannot help.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500">✗</span>
              <span>
                If you want shortcuts, hacks, or quick fixes, we are not the right fit.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500">✗</span>
              <span>
                If you expect us to make decisions for you, we will not do that.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500">✗</span>
              <span>
                If you are not willing to invest time and effort in your own preparation, 
                guidance will not be effective.
              </span>
            </li>
          </ul>
        </div>
      </SectionContainer>

      {/* Call to Action */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Ready to Start?</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            If this process feels right for you, reach out via the contact form. 
            We will respond personally.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </SectionContainer>
    </>
  )
}
