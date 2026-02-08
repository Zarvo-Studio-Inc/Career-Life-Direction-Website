
import SectionContainer from '@/components/SectionContainer'
import LeadForm from '@/components/LeadForm'
import HeroSection from '@/components/HeroSection'
import ReadyToStart from '@/components/ReadyToStart'

export const metadata = {
  title: 'Contact - Zarvo Studio',
  description: 'Get in touch with Zarvo Studio for career and life guidance.',
}

export default function Contact() {
  return (
    <>
      {/* Modern Hero */}
      <HeroSection
        title="Get in Touch"
        description="Reach out if you are interested in guidance, mentorship, or have questions about how we work. We respond personally to every inquiry."
      />

      {/* Contact Information - Card Grid */}
      <SectionContainer noPadding={true} className="py-2">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 mb-8 w-full">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Card Redesigned */}
              <div className="bg-gradient-to-br from-brand/10 via-white/90 to-brand/5 rounded-2xl border border-brand/20 shadow-lg p-8 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand text-white text-3xl mb-2 shadow-md">
                  <span className="">✉️</span>
                </div>
                <h4 className="font-semibold text-brand text-2xl mb-1">Email</h4>
                <p className="text-gray-700 text-base mb-2">For general inquiries or to schedule a guidance session:</p>
                <a 
                  href="mailto:contact@zarvostudio.com" 
                  className="text-lg font-semibold text-brand-700 hover:text-brand-900 transition-colors underline"
                >
                  contact@zarvostudio.com
                </a>
              </div>
              {/* WhatsApp Card Redesigned */}
              <div className="bg-gradient-to-br from-green-100 via-white/90 to-green-50 rounded-2xl border border-green-200 shadow-lg p-8 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white text-3xl mb-2 shadow-md">
                  <span className="">💬</span>
                </div>
                <h4 className="font-semibold text-green-700 text-2xl mb-1">WhatsApp</h4>
                <p className="text-gray-700 text-base mb-2">For quick questions or to connect directly:</p>
                <p className="text-lg font-semibold text-green-700">+[Country Code] [Number]</p>
                <p className="text-sm text-gray-500 mt-2">(Please introduce yourself and mention you found us via the website)</p>
              </div>
            </div>
            <div className="mt-6">
              {/* Office Address Card as Grid */}
              <div className="bg-gradient-to-br from-gray-100 via-white/90 to-gray-50 rounded-2xl border border-gray-200 shadow-lg p-8">
                <div className="grid grid-cols-3 gap-6 items-center mb-6">
                  {/* Icon & Label */}
                  <div className="flex flex-col items-center justify-center col-span-1 h-full">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 text-white text-3xl mb-2 shadow-md">
                        <span>🏢</span>
                      </div>
                      <h4 className="font-semibold text-gray-700 text-2xl">Office Address</h4>
                      <span className="text-brand-700 text-sm italic mt-1">Where ideas meet the world</span>
                    </div>
                  </div>
                  {/* HQ Address */}
                  <div className="text-left col-span-1">
                    <span className="font-semibold">Headquarters:</span><br />
                    1663 Wheat Hill Rd, Sidney Center, NY 13839, United States
                  </div>
                  {/* Branch Office Srinagar */}
                  <div className="text-left col-span-1">
                    <span className="font-semibold">Branch Office (Srinagar):</span><br />
                    90ft, Soura, Srinagar 190001
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 items-center">
                  {/* Empty cell for alignment */}
                  <div></div>
                  {/* Branch Office Delhi */}
                  <div className="text-left col-span-1">
                    <span className="font-semibold">Branch Office (Delhi):</span><br />
                    2nd Floor, DLF Cyber City, Phase 3, Gurugram, Delhi NCR 122002
                  </div>
                  {/* Branch Office Germany */}
                  <div className="text-left col-span-1">
                    <span className="font-semibold">Branch Office (Germany):</span><br />
                    Am Wehrhahn 1, 40211 Düsseldorf, Germany
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Contact Form - LeadForm Style Full Width */}
      <SectionContainer noPadding={true}>
        <div className="w-full">
          <div className="bg-brand rounded-2xl border border-brand/10 p-8 md:p-16 shadow-md text-center mb-8 relative overflow-hidden">
            {/* Subtle background wave */}
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none" style={{backgroundImage: 'url(/wave-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} />
            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-white">Send Us a Message</h2>
            <p className="text-brand-50 leading-relaxed mb-6">
              Use the form below to tell us about yourself and what guidance you are seeking. We will respond within 1-2 business days.
            </p>
            <div className="max-w-2xl mx-auto">
              <LeadForm variant="contact" />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* What to Expect - Timeline Style */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8 text-3xl md:text-4xl font-bold text-brand">What to Expect After You Reach Out</h2>
          <div className="space-y-8">
            <div className="relative flex items-start group">
              <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white text-white font-semibold text-lg">1</div>
                <div className="w-1 flex-1 bg-brand/20"></div>
              </div>
              <div className="ml-12 flex-1">
                <h4 className="text-lg mb-2 text-brand">We respond personally</h4>
                <p className="text-gray-700">No automated replies. We read every message and respond individually.</p>
              </div>
            </div>
            <div className="relative flex items-start group">
              <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white text-white font-semibold text-lg">2</div>
                <div className="w-1 flex-1 bg-brand/20"></div>
              </div>
              <div className="ml-12 flex-1">
                <h4 className="text-lg mb-2 text-brand">We ask clarifying questions</h4>
                <p className="text-gray-700">If needed, we will ask follow-up questions to understand your situation better.</p>
              </div>
            </div>
            <div className="relative flex items-start group">
              <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white text-white font-semibold text-lg">3</div>
              </div>
              <div className="ml-12 flex-1">
                <h4 className="text-lg mb-2 text-brand">We suggest next steps</h4>
                <p className="text-gray-700">If we think we can help, we will suggest scheduling a guidance session. If we cannot help, we will tell you honestly.</p>
              </div>
            </div>
            <div className="relative flex items-start group">
              <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white text-white font-semibold text-lg">4</div>
              </div>
              <div className="ml-12 flex-1">
                <h4 className="text-lg mb-2 text-brand">No pressure, no urgency</h4>
                <p className="text-gray-700">We do not use sales tactics or create urgency. You can take your time to decide.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Important Notes - Modern Card */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 rounded-2xl border border-brand/10 p-8 shadow-md">
            <h2 className="mb-6 text-2xl md:text-3xl font-bold text-brand">Before You Reach Out</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Please take a moment to explore the following pages to understand our approach:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  <a href="/about" className="text-brand font-medium hover:text-brand-700 transition-colors underline">
                    About
                  </a> - Our philosophy and what we refuse to do
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  <a href="/framework" className="text-brand font-medium hover:text-brand-700 transition-colors underline">
                    Framework
                  </a> - How we approach guidance
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  <a href="/how-it-works" className="text-brand font-medium hover:text-brand-700 transition-colors underline">
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
