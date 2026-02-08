import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'

import ReadyToStart from '@/components/ReadyToStart'

export const metadata = {
  title: 'Technology Mentorship - Zarvo Studio',
  description: 'Roadmap-based mentorship for computer science and software careers.',
}

import HeroSection from '@/components/HeroSection';

export default function TechnologyMentorship() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Technology Mentorship"
        description="Roadmap-based mentorship for computer science and software careers. Fundamentals before frameworks. Clarity before code."
      />

      {/* What This Is & Principles */}
      <SectionContainer noPadding={true} className='py-2'>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 mb-8 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-2xl">🧑‍💻</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">What Technology Mentorship Means at Zarvo</h2>
            </div>
            <p className="text-brand-800 leading-relaxed mb-4">
              Technology mentorship at Zarvo is not about learning the latest framework or building a portfolio for quick placement. It is about building a structured, long-term understanding of computer science and software development.
            </p>
            <p className="text-brand-800 leading-relaxed mb-8">
              We focus on fundamentals, problem-solving, and critical thinking—skills that remain valuable regardless of trends.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2 items-center text-center">
                <span className="text-3xl mb-2">📚</span>
                <h4 className="font-semibold text-brand mb-1">Fundamentals Before Frameworks</h4>
                <p className="text-gray-700 text-sm">We prioritize core concepts—data structures, algorithms, computer architecture, operating systems—over trendy tools. Frameworks change. Fundamentals do not.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2 items-center text-center">
                <span className="text-3xl mb-2">🧭</span>
                <h4 className="font-semibold text-brand mb-1">Structured Learning Over Trend Chasing</h4>
                <p className="text-gray-700 text-sm">We do not recommend learning based on what is currently hyped. We recommend learning based on what builds a strong foundation.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2 items-center text-center">
                <span className="text-3xl mb-2">🔬</span>
                <h4 className="font-semibold text-brand mb-1">Depth Over Breadth</h4>
                <p className="text-gray-700 text-sm">It is better to understand one concept deeply than to know ten concepts superficially. We emphasize understanding, not just completion.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10 flex flex-col gap-2 items-center text-center">
                <span className="text-3xl mb-2">🚫</span>
                <h4 className="font-semibold text-brand mb-1">No Job Guarantees</h4>
                <p className="text-gray-700 text-sm">We do not claim that mentorship will get you a job. We claim that it will help you build the skills and understanding you need to pursue a career responsibly.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* What This Includes/Does Not Include */}
      <SectionContainer noPadding={true} className='py-2'>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 bg-brand/5 mb-8 shadow-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white text-2xl">✅</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand">What Technology Mentorship Includes</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6 border border-brand/10">
                <h4 className="mb-3 font-semibold text-brand">What This Includes</h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Initial assessment of your current knowledge and goals</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Personalized learning roadmap based on fundamentals</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Guidance on self-directed learning resources (books, courses, exercises)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Periodic check-ins to review progress and clarify concepts</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Help with problem-solving and debugging mindset</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-600">✔️</span> <span>Honest feedback on your understanding and readiness</span></li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-6 border border-red-100">
                <h4 className="mb-3 font-semibold text-red-600">What This Does Not Include</h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>We are not a training institute. We do not provide formal courses or certifications.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>We do not guarantee job placements or interview success.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>We do not provide project work, internships, or work experience.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>We do not focus on resume building or mock interviews (unless specifically requested).</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> <span>We do not teach based on trendy bootcamp curriculums.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Example Tracks Timeline - Modern Style */}
      <SectionContainer>
        <div className="relative max-w-3xl mx-auto">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-brand">Example Learning Tracks</h2>
          <p className="text-brand-800 leading-relaxed mb-8 text-lg md:text-xl">
            These are high-level examples of structured learning paths. Your actual roadmap will be tailored to your context.
          </p>
          {/* Vertical timeline line (only behind timeline cards) */}
          <div className="absolute left-5" style={{top: '120px', bottom: '80px'}}>
            <div className="w-1 h-full bg-gradient-to-b from-brand via-brand-600 to-brand-800 rounded-full"></div>
          </div>
          <div className="space-y-16">
            {/* Track 1 */}
            <div className="relative flex items-start group">
              {/* Timeline marker */}
              <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-lg font-bold text-white">1</span>
                </div>
                <div className="w-1 flex-1 bg-brand/20"></div>
              </div>
              {/* Card */}
              <div className="ml-16 flex-1">
                <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 transition-all">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-brand">Track 1: Computer Science Fundamentals</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">For students new to computer science or those with gaps in foundational knowledge.</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-2">
                    <li>• Problem-solving and computational thinking</li>
                    <li>• Data structures and algorithms</li>
                    <li>• Computer architecture and systems</li>
                    <li>• Operating systems basics</li>
                    <li>• Networking fundamentals</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 2 */}
            <div className="relative flex items-start group">
              {/* Timeline marker */}
              <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-lg font-bold text-white">2</span>
                </div>
                <div className="w-1 flex-1 bg-brand/20"></div>
              </div>
              {/* Card */}
              <div className="ml-16 flex-1">
                <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 transition-all">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-brand">Track 2: Software Development Pathway</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">For students aiming to build professional software development skills.</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-2">
                    <li>• Programming language mastery (depth over breadth)</li>
                    <li>• Software design and architecture</li>
                    <li>• Version control and collaboration</li>
                    <li>• Testing and debugging techniques</li>
                    <li>• Building real projects (not tutorial-following)</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Track 3 */}
            <div className="relative flex items-start group">
              {/* Timeline marker */}
              <div className="z-10 flex flex-col items-center" style={{minWidth: '2.5rem'}}>
                <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-lg font-bold text-white">3</span>
                </div>
              </div>
              {/* Card */}
              <div className="ml-16 flex-1">
                <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg p-6 md:p-8 transition-all">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-brand">Track 3: Systems and Low-Level Programming</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">For students interested in understanding how computers work at a deeper level.</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-2">
                    <li>• C programming and memory management</li>
                    <li>• Operating systems internals</li>
                    <li>• Computer architecture and assembly</li>
                    <li>• Networking and protocols</li>
                    <li>• Systems programming projects</li>
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
              <p className="text-gray-700 text-sm">Pursuing or considering computer science degrees</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">📖</span>
              <h4 className="font-semibold text-brand mb-1">Self-Learners</h4>
              <p className="text-gray-700 text-sm">Who want structured guidance</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">🎓</span>
              <h4 className="font-semibold text-brand mb-1">Graduates</h4>
              <p className="text-gray-700 text-sm">Who feel they lack foundational understanding</p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-brand/10 p-6 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl mb-2">💡</span>
              <h4 className="font-semibold text-brand mb-1">Explorers</h4>
              <p className="text-gray-700 text-sm">Anyone confused about what to learn next in technology</p>
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
              Zarvo Studio is not a training institute.
            </p>
            <p>
              We do not provide certifications, placements, or guaranteed outcomes. 
              Technology mentorship is guidance—not a shortcut.
            </p>
            <p>
              Your progress depends on your effort, consistency, and capacity. We provide 
              structure and direction. You provide the work.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* How to Get Started */}
      <div className="mt-12">
        <ReadyToStart
          heading="Interested in Technology Mentorship?"
          message="If you are ready for structured, honest guidance in computer science and software development, reach out via the contact form."
          buttonText="Contact Us"
        />
      </div>
    </>
  )
}
