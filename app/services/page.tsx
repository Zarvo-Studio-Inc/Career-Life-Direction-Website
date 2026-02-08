import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'

export const metadata = {
  title: 'Services - Zarvo Studio',
  description: 'Career guidance, technology mentorship, and scholarship guidance services.',
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Services</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Structured, honest guidance across three core areas. No hype, no guarantees—only 
            thoughtful support.
          </p>
        </div>
      </SectionContainer>

      {/* One-to-One Guidance Sessions */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">One-to-One Guidance Sessions</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Individual sessions for students seeking clarity on career and life direction. 
            These sessions follow the Three-Lens Framework and are tailored to your context.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <h4 className="mb-4">What This Includes:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Initial intake to understand your situation, concerns, and goals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Structured conversation using the Three-Lens Framework (Self, Reality, Direction)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Assessment of aptitude, temperament, and readiness</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Discussion of constraints (financial, geographical, family, market)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Suggested roadmap with actionable next steps</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Written summary of the session</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-6 rounded-lg">
            <h4 className="mb-4">What This Does Not Include:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>Job placement or guaranteed outcomes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>Technical training or skill development (see mentorship services)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>Application assistance or document review</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>Long-term coaching or ongoing support (unless separately arranged)</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Parent-Student Alignment Sessions */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Parent–Student Alignment Sessions</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Joint sessions for parents and students to have structured, honest conversations 
            about career and life direction. This helps align expectations and reduce conflict.
          </p>
          
          <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
            <h4 className="mb-4">What This Includes:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Separate intake with student and parent(s) to understand each perspective</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Joint session facilitated using the Three-Lens Framework</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Discussion of student's aptitude and interests</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Discussion of family constraints and concerns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Alignment on realistic expectations and next steps</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Written summary shared with both parties</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
            <h4 className="mb-4">What This Does Not Include:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>Family counseling or therapy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>Decision-making on behalf of the student or family</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>Mediation of unrelated family conflicts</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Group Workshops */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Group Workshops</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Small-group sessions on career planning, technology pathways, or scholarship 
            preparation. These are offered periodically and announced on this website.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <h4 className="mb-4">What This Includes:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Structured group sessions (typically 2-3 hours)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Discussion of common concerns and pathways</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Q&A with the facilitator</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Written resources and next-step suggestions</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-6 rounded-lg">
            <h4 className="mb-4">What This Does Not Include:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>Personalized roadmaps (one-to-one sessions are recommended for that)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>Technical training or hands-on labs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>Follow-up support beyond the session</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Technology Mentorship & Scholarship Guidance */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8 text-center">Specialized Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="mb-3">Technology Mentorship</h4>
              <p className="text-gray-600 text-sm mb-4">
                Roadmap-based mentorship for computer science students. Fundamentals before 
                frameworks. Structured learning over trend chasing.
              </p>
              <Link 
                href="/technology-mentorship" 
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                Learn more →
              </Link>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="mb-3">Scholarship Guidance</h4>
              <p className="text-gray-600 text-sm mb-4">
                Help with awareness, planning, and preparation for scholarship opportunities. 
                We are not agents. We do not guarantee results.
              </p>
              <Link 
                href="/scholarships" 
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* How to Get Started */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Ready to Start?</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            If you are interested in any of these services, please reach out via the contact 
            form. We will respond personally to guide next steps.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </SectionContainer>
    </>
  )
}
