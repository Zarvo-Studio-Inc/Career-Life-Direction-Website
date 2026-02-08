import Link from 'next/link'
import SectionContainer from '@/components/SectionContainer'
import LeadForm from '@/components/LeadForm'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <SectionContainer className="pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge with animation */}
          <div className="inline-block mb-8 group">
            <div className="px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-brand/30 hover:border-brand/50 transition-all duration-300 hover:shadow-xl">
              <span className="text-sm font-semibold text-brand flex items-center gap-2">
                <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
                Career & Life Direction
              </span>
            </div>
          </div>
          
          {/* Main Heading with gradient text */}
          <h1 className="mb-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-brand to-brand-800 bg-clip-text text-transparent">
              Clarity before choice.
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 font-light">
            Helping students and families make thoughtful career and life decisions 
            through <span className="font-medium text-brand">structured guidance</span>, mentorship, and realistic planning.
          </p>
          
          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
            <Link 
              href="/contact"
              className="group relative px-10 py-5 bg-brand text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg overflow-hidden"
            >
              <span className="relative z-10">Request Guidance Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-800 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/framework"
              className="group px-10 py-5 bg-white/90 backdrop-blur-sm text-brand font-bold rounded-2xl border-2 border-brand/30 hover:border-brand transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:bg-white"
            >
              <span className="flex items-center gap-2">
                Learn Our Approach
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Stats Section with enhanced cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200/50 hover:border-brand/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-2xl font-bold bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent mb-2">
                3 Lenses
              </div>
              <div className="text-sm font-medium text-gray-600">Structured Framework</div>
              <div className="mt-3 pt-3 border-t border-gray-200/50">
                <p className="text-xs text-gray-500">Self · Reality · Direction</p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200/50 hover:border-brand/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-2xl font-bold bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent mb-2">
                No Guarantees
              </div>
              <div className="text-sm font-medium text-gray-600">Only Honest Guidance</div>
              <div className="mt-3 pt-3 border-t border-gray-200/50">
                <p className="text-xs text-gray-500">Ethics over profit</p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200/50 hover:border-brand/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-2xl font-bold bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent mb-2">
                Zero Hype
              </div>
              <div className="text-sm font-medium text-gray-600">Reality-Based Planning</div>
              <div className="mt-3 pt-3 border-t border-gray-200/50">
                <p className="text-xs text-gray-500">Fundamentals first</p>
              </div>
            </div>
          </div>
          
          {/* Trust indicator */}
          <div className="mt-16">
            <p className="text-sm text-gray-500 font-medium">Guiding students and families since 2024</p>
          </div>
        </div>
      </SectionContainer>

      {/* Who Zarvo is For */}
      <SectionContainer className="py-20 md:py-32 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/wave-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Who This Is For
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Tailored guidance for students seeking clarity and parents supporting their journey
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Students Card */}
            <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-12 rounded-3xl hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/15">
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-3xl font-bold mb-4 text-white">Students</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                If you are confused about what to study, what career to choose, or how to 
                prepare for your future—we can help you think through it methodically.
              </p>
            </div>
            
            {/* Parents Card */}
            <div className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-12 rounded-3xl hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/15">
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              {/* Content */}
              <h3 className="text-3xl font-bold mb-4 text-white">Parents</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                If you want to support your child with realistic advice grounded in their 
                aptitude and circumstances—not hype or false promises—we can guide that conversation.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Services Overview */}
      <SectionContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Services */}
            <div className="order-2 lg:order-1">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-brand bg-clip-text text-transparent">
                  What We Offer
                </h2>
                <p className="text-lg text-gray-600">
                  Structured, honest guidance across three core areas.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Service Card 1 */}
                <div className="group bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-brand/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand to-brand-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 text-gray-900">Career & Life Direction</h4>
                      <p className="text-gray-600 mb-4">
                        Thoughtful sessions to explore aptitude, values, and realistic pathways. 
                        No guarantees, no shortcuts.
                      </p>
                      <Link 
                        href="/services" 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-700 transition-colors group"
                      >
                        Learn more 
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Service Card 2 */}
                <div className="group bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-brand/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand to-brand-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 text-gray-900">Technology Mentorship</h4>
                      <p className="text-gray-600 mb-4">
                        Roadmap-based guidance for computer science students. Fundamentals before 
                        frameworks. Clarity before code.
                      </p>
                      <Link 
                        href="/technology-mentorship" 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-700 transition-colors group"
                      >
                        Learn more 
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Service Card 3 */}
                <div className="group bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-brand/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand to-brand-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 text-gray-900">Scholarship Guidance</h4>
                      <p className="text-gray-600 mb-4">
                        Help with awareness, planning, and preparation for scholarship opportunities. 
                        We are not agents.
                      </p>
                      <Link 
                        href="/scholarships" 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-700 transition-colors group"
                      >
                        Learn more 
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Ship Animation */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-blue-100 to-blue-300">
                {/* Ocean Wave Animation Container */}
                <div className="aspect-square relative">
                  {/* You can replace this src with your preferred ship/ocean gif */}
                  <img 
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazBkdWp3cjk5cW52MWJ3YnNhNzJ5OWR6YmR4aGN6YnF3OGF6ZnZ6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRuo6sLetdllPAQ/giphy.gif"
                    alt="Ship sailing in ocean - representing journey and direction"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-brand/20">
                  <p className="text-sm font-semibold text-brand flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Navigate Your Journey
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-brand/5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Three-Lens Framework */}
      <SectionContainer className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-brand bg-clip-text text-transparent">
              The Three-Lens Framework
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Every guidance session at Zarvo follows a structured approach to understanding 
              career and life decisions.
            </p>
          </div>

          {/* Timeline/Roadmap */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-brand via-brand-600 to-brand-800"></div>
            
            <div className="space-y-12 md:space-y-16">
              {/* Lens 1: Self */}
              <div className="relative group">
                {/* Timeline marker */}
                <div className="absolute left-0 md:left-4 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-brand to-brand-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                      <span className="text-lg md:text-2xl font-bold text-white">1</span>
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 w-10 h-10 md:w-16 md:h-16 bg-brand/20 rounded-2xl animate-ping"></div>
                  </div>
                </div>
                
                {/* Content card */}
                <div className="ml-12 md:ml-32">
                  <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-8 md:p-10 rounded-3xl shadow-lg group-hover:shadow-2xl group-hover:border-brand/30 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-full">
                        <div className="w-2 h-2 bg-brand rounded-full"></div>
                        <span className="text-sm font-semibold text-brand">LENS 1</span>
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Self</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      Understanding aptitude, temperament, interests, and readiness. What are you 
                      capable of? What suits your nature?
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      <span className="px-3 py-1 bg-brand/5 text-brand text-sm font-medium rounded-full">Aptitude</span>
                      <span className="px-3 py-1 bg-brand/5 text-brand text-sm font-medium rounded-full">Temperament</span>
                      <span className="px-3 py-1 bg-brand/5 text-brand text-sm font-medium rounded-full">Interests</span>
                      <span className="px-3 py-1 bg-brand/5 text-brand text-sm font-medium rounded-full">Readiness</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lens 2: Reality */}
              <div className="relative group">
                {/* Timeline marker */}
                <div className="absolute left-0 md:left-4 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                      <span className="text-lg md:text-2xl font-bold text-white">2</span>
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 w-10 h-10 md:w-16 md:h-16 bg-brand-600/20 rounded-2xl animate-ping"></div>
                  </div>
                </div>
                
                {/* Content card */}
                <div className="ml-12 md:ml-32">
                  <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-8 md:p-10 rounded-3xl shadow-lg group-hover:shadow-2xl group-hover:border-brand/30 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-full">
                        <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-brand-700">LENS 2</span>
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Reality</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      Assessing constraints—financial, familial, geographical, market-based. What 
                      is realistic given your circumstances?
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      <span className="px-3 py-1 bg-brand/5 text-brand-700 text-sm font-medium rounded-full">Financial</span>
                      <span className="px-3 py-1 bg-brand/5 text-brand-700 text-sm font-medium rounded-full">Familial</span>
                      <span className="px-3 py-1 bg-brand/5 text-brand-700 text-sm font-medium rounded-full">Geographical</span>
                      <span className="px-3 py-1 bg-brand/5 text-brand-700 text-sm font-medium rounded-full">Market-Based</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lens 3: Direction */}
              <div className="relative group">
                {/* Timeline marker */}
                <div className="absolute left-0 md:left-4 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-brand-700 to-brand-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                      <span className="text-lg md:text-2xl font-bold text-white">3</span>
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 w-10 h-10 md:w-16 md:h-16 bg-brand-700/20 rounded-2xl animate-ping"></div>
                  </div>
                </div>
                
                {/* Content card */}
                <div className="ml-12 md:ml-32">
                  <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-8 md:p-10 rounded-3xl shadow-lg group-hover:shadow-2xl group-hover:border-brand/30 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-full">
                        <div className="w-2 h-2 bg-brand-800 rounded-full"></div>
                        <span className="text-sm font-semibold text-brand-800">LENS 3</span>
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Direction</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      Building a roadmap with responsibility. What actions can you take, and what 
                      is within your control?
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      <span className="px-3 py-1 bg-brand/5 text-brand-800 text-sm font-medium rounded-full">Actionable Steps</span>
                      <span className="px-3 py-1 bg-brand/5 text-brand-800 text-sm font-medium rounded-full">Responsibility</span>
                      <span className="px-3 py-1 bg-brand/5 text-brand-800 text-sm font-medium rounded-full">Control</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16 md:mt-20">
            <Link 
              href="/framework" 
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold rounded-2xl hover:from-brand hover:to-brand-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Explore Our Framework in Depth</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </SectionContainer>

      {/* Ethical Commitments & Lead Form */}
      <SectionContainer className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Ethical Commitments */}
            <div>
              <div className="mb-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-brand bg-clip-text text-transparent">
                  Ethical Commitments
                </h2>
                <p className="text-lg text-gray-600">
                  Clear boundaries built on honesty, integrity, and realistic expectations.
                </p>
              </div>

              {/* Merged Card */}
              <div className="rounded-3xl pt-0 p-8 md:p-10">
                {/* What We Do Section */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">What We Do</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50/50 transition-colors">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1.5 text-base">Honest Assessment</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We provide realistic evaluations based on aptitude, circumstances, and market realities.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50/50 transition-colors">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1.5 text-base">Structured Guidance</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We follow the Three-Lens Framework to help you think through decisions methodically.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50/50 transition-colors">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1.5 text-base">Long-Term Focus</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We prioritize fundamentals and sustainable career paths over quick fixes and trends.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50/50 transition-colors">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1.5 text-base">Transparent Communication</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We maintain clear, honest dialogue about what is possible and what is not.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* What We Don't Do Section */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">What We Don't Do</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-50/50 transition-colors">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1.5 text-base">No Job Guarantees</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We do not promise placements, outcomes, or employment. Guidance is not a guarantee.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-50/50 transition-colors">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1.5 text-base">No Placements</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We are not a recruitment agency. We do not place students into jobs or institutions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-50/50 transition-colors">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1.5 text-base">No Trend Chasing</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We do not follow hype cycles. We focus on fundamentals, not fleeting trends.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-red-50/50 transition-colors">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1.5 text-base">No False Promises</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          No claims about salaries, success rates, or shortcuts. Only realistic guidance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-brand rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-brand-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/wave-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
