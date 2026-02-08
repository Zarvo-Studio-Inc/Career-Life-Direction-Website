import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'

export const metadata = {
  title: 'Technology Mentorship - Zarvo Studio',
  description: 'Roadmap-based mentorship for computer science and software careers.',
}

export default function TechnologyMentorship() {
  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Technology Mentorship</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Roadmap-based mentorship for computer science and software careers. 
            Fundamentals before frameworks. Clarity before code.
          </p>
        </div>
      </SectionContainer>

      {/* What This Is */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">What Technology Mentorship Means at Zarvo</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Technology mentorship at Zarvo is not about learning the latest framework or 
            building a portfolio for quick placement. It is about building a structured, 
            long-term understanding of computer science and software development.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We focus on fundamentals, problem-solving, and critical thinking—skills that 
            remain valuable regardless of trends.
          </p>
        </div>
      </SectionContainer>

      {/* Principles */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Our Principles</h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2">Fundamentals Before Frameworks</h4>
              <p className="text-gray-700">
                We prioritize core concepts—data structures, algorithms, computer architecture, 
                operating systems—over trendy tools. Frameworks change. Fundamentals do not.
              </p>
            </div>
            <div>
              <h4 className="mb-2">Structured Learning Over Trend Chasing</h4>
              <p className="text-gray-700">
                We do not recommend learning based on what is currently hyped. We recommend 
                learning based on what builds a strong foundation.
              </p>
            </div>
            <div>
              <h4 className="mb-2">Depth Over Breadth</h4>
              <p className="text-gray-700">
                It is better to understand one concept deeply than to know ten concepts 
                superficially. We emphasize understanding, not just completion.
              </p>
            </div>
            <div>
              <h4 className="mb-2">No Job Guarantees</h4>
              <p className="text-gray-700">
                We do not claim that mentorship will get you a job. We claim that it will 
                help you build the skills and understanding you need to pursue a career 
                responsibly.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* What This Includes */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">What Technology Mentorship Includes</h2>
          
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Initial assessment of your current knowledge and goals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Personalized learning roadmap based on fundamentals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Guidance on self-directed learning resources (books, courses, exercises)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Periodic check-ins to review progress and clarify concepts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Help with problem-solving and debugging mindset</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Honest feedback on your understanding and readiness</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-6 rounded-lg">
            <h4 className="mb-4">What This Does Not Include:</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>We are not a training institute. We do not provide formal courses or certifications.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>We do not guarantee job placements or interview success.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>We do not provide project work, internships, or work experience.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>We do not focus on resume building or mock interviews (unless specifically requested).</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-red-500">✗</span>
                <span>We do not teach based on trendy bootcamp curriculums.</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Example Tracks */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Example Learning Tracks</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            These are high-level examples of structured learning paths. Your actual roadmap 
            will be tailored to your context.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="mb-3">Track 1: Computer Science Fundamentals</h4>
              <p className="text-sm text-gray-600 mb-3">
                For students new to computer science or those with gaps in foundational knowledge.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-6">
                <li>• Problem-solving and computational thinking</li>
                <li>• Data structures and algorithms</li>
                <li>• Computer architecture and systems</li>
                <li>• Operating systems basics</li>
                <li>• Networking fundamentals</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="mb-3">Track 2: Software Development Pathway</h4>
              <p className="text-sm text-gray-600 mb-3">
                For students aiming to build professional software development skills.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-6">
                <li>• Programming language mastery (depth over breadth)</li>
                <li>• Software design and architecture</li>
                <li>• Version control and collaboration</li>
                <li>• Testing and debugging techniques</li>
                <li>• Building real projects (not tutorial-following)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="mb-3">Track 3: Systems and Low-Level Programming</h4>
              <p className="text-sm text-gray-600 mb-3">
                For students interested in understanding how computers work at a deeper level.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-6">
                <li>• C programming and memory management</li>
                <li>• Operating systems internals</li>
                <li>• Computer architecture and assembly</li>
                <li>• Networking and protocols</li>
                <li>• Systems programming projects</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-6 italic">
            Note: These are examples only. Your roadmap will depend on your starting point, 
            goals, and capacity.
          </p>
        </div>
      </SectionContainer>

      {/* Who This Is For */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Who This Is For</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Students pursuing or considering computer science degrees</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Self-learners who want structured guidance</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Graduates who feel they lack foundational understanding</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Anyone confused about what to learn next in technology</span>
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
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Interested in Technology Mentorship?</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            If you are ready for structured, honest guidance in computer science and software 
            development, reach out via the contact form.
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
