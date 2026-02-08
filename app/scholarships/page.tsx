import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'

export const metadata = {
  title: 'Scholarships - Zarvo Studio',
  description: 'Guidance for scholarship awareness, planning, and preparation.',
}

export default function Scholarships() {
  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Scholarship Guidance</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Help with awareness, planning, and preparation for scholarship opportunities. 
            We are not agents. We do not guarantee results.
          </p>
        </div>
      </SectionContainer>

      {/* Why Scholarship Guidance Matters */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Why Scholarship Guidance Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many students and families are unaware of scholarship opportunities that could 
            significantly reduce the cost of education. However, navigating scholarships 
            requires awareness, planning, and realistic preparation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Zarvo Studio helps you understand what scholarships exist, what they require, 
            and how to prepare—without false promises or agent-like behavior.
          </p>
        </div>
      </SectionContainer>

      {/* What We Cover */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Types of Scholarships We Cover</h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2">Merit-Based Scholarships</h4>
              <p className="text-gray-700">
                Scholarships based on academic performance, test scores, or specific achievements. 
                We help you understand eligibility and how to strengthen your application.
              </p>
            </div>
            <div>
              <h4 className="mb-2">Need-Based Scholarships</h4>
              <p className="text-gray-700">
                Financial aid based on family income and circumstances. We guide you through 
                documentation and application requirements.
              </p>
            </div>
            <div>
              <h4 className="mb-2">Country-Specific Scholarships</h4>
              <p className="text-gray-700">
                Scholarships offered by governments or universities in specific countries 
                (e.g., Commonwealth Scholarships, Fulbright, DAAD, Chevening). We help you 
                identify which ones match your profile.
              </p>
            </div>
            <div>
              <h4 className="mb-2">University-Specific Scholarships</h4>
              <p className="text-gray-700">
                Scholarships offered directly by universities. We help you research and 
                understand their criteria.
              </p>
            </div>
            <div>
              <h4 className="mb-2">Field-Specific Scholarships</h4>
              <p className="text-gray-700">
                Scholarships for specific fields of study (e.g., STEM, arts, social sciences). 
                We help you align your academic interests with available opportunities.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* How Zarvo Helps */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">How Zarvo Helps</h2>
          
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <h4 className="mb-4">What Scholarship Guidance Includes:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Awareness: Helping you understand what scholarships exist and which ones you might be eligible for</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Planning: Creating a timeline for when to start preparing, what documents to gather, and what criteria to meet</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Preparation: Guidance on strengthening your profile (academic, extracurricular, test scores, essays)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Realistic assessment: Honest feedback on your chances and what gaps need to be addressed</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Resource sharing: Directing you to official sources, application portals, and credible information</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-6 rounded-lg">
            <h4 className="mb-4">What This Does Not Include:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>We are not agents. We do not submit applications on your behalf.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>We do not guarantee scholarship acceptance. Outcomes depend on your profile and competition.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>We do not write essays, recommendation letters, or statements of purpose for you.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>We do not have "connections" or "inside access" to scholarship committees.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>We do not charge on a commission basis or take fees upon scholarship approval.</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Realistic Expectations */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Realistic Expectations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Scholarships are competitive. Many factors influence outcomes—academic performance, 
            test scores, profile strength, competition levels, and sometimes luck.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <span className="mr-3 text-gray-400 font-bold">•</span>
              <span>
                <strong>No guarantees:</strong> Even the strongest applicants face rejection. 
                We help you prepare, but outcomes are not in our control.
              </span>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-gray-400 font-bold">•</span>
              <span>
                <strong>Time and effort required:</strong> Scholarship preparation takes months, 
                not weeks. It requires consistent effort.
              </span>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-gray-400 font-bold">•</span>
              <span>
                <strong>Profile matters:</strong> If your academic record or test scores are 
                weak, scholarships may not be realistic without significant improvement.
              </span>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-gray-400 font-bold">•</span>
              <span>
                <strong>No shortcuts:</strong> There are no "hacks" or secret strategies. Only 
                structured preparation.
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Who This Is For */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Who This Is For</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Students planning to study abroad but concerned about costs</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Families seeking financial aid options for higher education</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Students unaware of scholarship opportunities that may be available to them</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Those who want structured, honest guidance without agent-like behavior</span>
            </li>
          </ul>
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
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Interested in Scholarship Guidance?</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            If you are planning for scholarships and want structured, honest guidance, 
            reach out via the contact form.
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
