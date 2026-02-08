import SectionContainer from '@/components/SectionContainer'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Contact - Zarvo Studio',
  description: 'Get in touch with Zarvo Studio for career and life guidance.',
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Reach out if you are interested in guidance, mentorship, or have questions 
            about how we work. We respond personally to every inquiry.
          </p>
        </div>
      </SectionContainer>

      {/* Contact Information */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-10">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="mb-3">Email</h4>
              <p className="text-gray-700 mb-2">
                For general inquiries or to schedule a guidance session:
              </p>
              <a 
                href="mailto:contact@zarvostudio.com" 
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                contact@zarvostudio.com
              </a>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="mb-3">WhatsApp</h4>
              <p className="text-gray-700 mb-2">
                For quick questions or to connect directly:
              </p>
              <p className="text-gray-900 font-medium">
                +[Country Code] [Number]
              </p>
              <p className="text-sm text-gray-500 mt-2">
                (Please introduce yourself and mention you found us via the website)
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Contact Form */}
      <SectionContainer>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4">Send Us a Message</h2>
            <p className="text-gray-600 leading-relaxed">
              Use the form below to tell us about yourself and what guidance you are seeking. 
              We will respond within 1-2 business days.
            </p>
          </div>
          <LeadForm variant="contact" />
        </div>
      </SectionContainer>

      {/* What to Expect */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8">What to Expect After You Reach Out</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-semibold text-sm mr-4 mt-1">
                1
              </div>
              <div>
                <h4 className="text-lg mb-2">We respond personally</h4>
                <p className="text-gray-700">
                  No automated replies. We read every message and respond individually.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-semibold text-sm mr-4 mt-1">
                2
              </div>
              <div>
                <h4 className="text-lg mb-2">We ask clarifying questions</h4>
                <p className="text-gray-700">
                  If needed, we will ask follow-up questions to understand your situation better.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-semibold text-sm mr-4 mt-1">
                3
              </div>
              <div>
                <h4 className="text-lg mb-2">We suggest next steps</h4>
                <p className="text-gray-700">
                  If we think we can help, we will suggest scheduling a guidance session. 
                  If we cannot help, we will tell you honestly.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-semibold text-sm mr-4 mt-1">
                4
              </div>
              <div>
                <h4 className="text-lg mb-2">No pressure, no urgency</h4>
                <p className="text-gray-700">
                  We do not use sales tactics or create urgency. You can take your time to decide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Important Notes */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Before You Reach Out</h2>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Please take a moment to explore the following pages to understand our approach:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  <a href="/about" className="text-gray-900 font-medium hover:text-gray-600 transition-colors underline">
                    About
                  </a> - Our philosophy and what we refuse to do
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  <a href="/framework" className="text-gray-900 font-medium hover:text-gray-600 transition-colors underline">
                    Framework
                  </a> - How we approach guidance
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  <a href="/how-it-works" className="text-gray-900 font-medium hover:text-gray-600 transition-colors underline">
                    How It Works
                  </a> - The process from first contact to guidance
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              If our approach resonates with you, we look forward to hearing from you.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
