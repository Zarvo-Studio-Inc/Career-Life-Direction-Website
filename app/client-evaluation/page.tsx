"use client"
import SectionContainer from '../../components/SectionContainer'
import ReadyToStart from '../../components/ReadyToStart'
import { useRef } from 'react'

export default function ClientEvaluationPage() {
  const formRef = useRef<HTMLFormElement>(null)

  function handleDownloadCSV(e: React.MouseEvent) {
    e.preventDefault()
    if (!formRef.current) return
    const form = formRef.current
    const data: Record<string, string[]> = {}
    const fields = form.querySelectorAll('input, textarea, select')
    fields.forEach((el) => {
      const input = el as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      const name = input.closest('.field')?.querySelector('label')?.textContent?.replace(/[:：]/g, '').trim() || input.name || ''
      if (!name) return
      if (input.type === 'checkbox') {
        if (!data[name]) data[name] = []
        if ((input as HTMLInputElement).checked) data[name].push(input.nextSibling?.textContent?.trim() || input.value || 'Yes')
      } else if (input.type === 'radio') {
        if ((input as HTMLInputElement).checked) data[name] = [input.value]
      } else {
        data[name] = [input.value]
      }
    })
    const header = Object.keys(data).join(',')
    const row = Object.values(data).map(arr => '"' + arr.join('; ') + '"').join(',')
    const csv = `${header}\n${row}`
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'client-evaluation.csv'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  function handleLoadCSV(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file || !formRef.current) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      if (!text) return
      const [header, row] = text.split(/\r?\n/)
      if (!header || !row) return
      const keys = header.split(',').map(k => k.trim())
      // Remove quotes and split by ; for multi-value
      const values = row.match(/"([^"]*)"|[^,]+/g)?.map(v => v.replace(/^"|"$/g, '')) || []
      const data: Record<string, string[]> = {}
      keys.forEach((k, i) => {
        data[k] = values[i]?.split(';').map(s => s.trim()).filter(Boolean) || ['']
      })
      // Fill form fields
      const form = formRef.current
      const fields = form.querySelectorAll('input, textarea, select')
      fields.forEach((el) => {
        const input = el as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        const name = input.closest('.field')?.querySelector('label')?.textContent?.replace(/[:：]/g, '').trim() || input.name || ''
        if (!name || !(name in data)) return
        if (input.type === 'checkbox') {
          input.checked = data[name].includes(input.nextSibling?.textContent?.trim() || input.value || 'Yes')
        } else if (input.type === 'radio') {
          input.checked = data[name][0] === input.value
        } else {
          input.value = data[name][0] || ''
        }
      })
    }
    reader.readAsText(file)
  }

  return (
    <main>
      <SectionContainer>
        <div className="py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">Client Evaluation</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Welcome to our Client Evaluation page. Please fill out the evaluation form below or contact us for a personalized consultation.
          </p>
          <form className="space-y-10" ref={formRef}>
            {/* Section 1: Basic Info */}
            <div className="section bg-white/90 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">1. Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="field">
                  <label className="block font-medium mb-1">Full Name:</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Role:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Student</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Parent</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Email:</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Phone / WhatsApp:</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">City:</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Country:</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
              </div>
            </div>

            {/* Section 2: Context */}
            <div className="section bg-white/90 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">2. Context</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="field">
                  <label className="block font-medium mb-1">Student Level:</label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> School (9–12)</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> College</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Graduate</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Working</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Guidance Intent:</label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Career Direction</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Tech Mentorship (CS)</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Scholarship Guidance</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Not Sure</label>
                  </div>
                </div>
                <div className="field col-span-2">
                  <label className="block font-medium mb-1">Primary Concern (verbatim):</label>
                  <textarea className="w-full px-4 py-2 border rounded-md" rows={3}></textarea>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Urgency Level:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Low</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Medium</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> High</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Lens 1 — Self */}
            <div className="section bg-white/90 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">3. Lens 1 — Self</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="field">
                  <label className="block font-medium mb-1">Learning Style:</label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Visual</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Practical</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Reading</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Repetition</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Aptitude Signal:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Strong</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Moderate</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Weak</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Consistency Level:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> High</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Medium</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Low</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Emotional Readiness:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Stable</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Stressed</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Burnout</label>
                  </div>
                </div>
                <div className="field col-span-2">
                  <label className="block font-medium mb-1">Self Notes:</label>
                  <textarea className="w-full px-4 py-2 border rounded-md" rows={3}></textarea>
                </div>
              </div>
            </div>

            {/* Section 4: Lens 2 — Reality */}
            <div className="section bg-white/90 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">4. Lens 2 — Reality</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="field">
                  <label className="block font-medium mb-1">Financial Constraint Level:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Low</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Medium</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> High</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Family Pressure Level:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Low</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Medium</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> High</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Mobility:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Local Only</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Open</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Global</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Time Urgency:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Immediate</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Medium-term</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Flexible</label>
                  </div>
                </div>
                <div className="field col-span-2">
                  <label className="block font-medium mb-1">Reality Notes:</label>
                  <textarea className="w-full px-4 py-2 border rounded-md" rows={3}></textarea>
                </div>
              </div>
            </div>

            {/* Section 5: Lens 3 — Direction */}
            <div className="section bg-white/90 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">5. Lens 3 — Direction</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="field">
                  <label className="block font-medium mb-1">Direction Readiness:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Not Ready</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Partially Ready</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Ready</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Risk Level:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Low</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Medium</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> High</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Recommended Focus:</label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Career Clarity</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Skill Building</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Scholarship Prep</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Pause</label>
                  </div>
                </div>
                <div className="field col-span-2">
                  <label className="block font-medium mb-1">Suggested Path (Internal):</label>
                  <textarea className="w-full px-4 py-2 border rounded-md" rows={3}></textarea>
                </div>
                <div className="field col-span-2">
                  <label className="block font-medium mb-1">Direction Notes:</label>
                  <textarea className="w-full px-4 py-2 border rounded-md" rows={3}></textarea>
                </div>
              </div>
            </div>

            {/* Section 6: Recommendation & Follow-up */}
            <div className="section bg-white/90 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">6. Recommendation &amp; Follow-up</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="field">
                  <label className="block font-medium mb-1">Overall Readiness Score (0–10):</label>
                  <input type="text" className="w-32 px-4 py-2 border rounded-md" />
                </div>
                <div className="field col-span-2">
                  <label className="block font-medium mb-1">Counselor Recommendation:</label>
                  <textarea className="w-full px-4 py-2 border rounded-md" rows={3}></textarea>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Follow-up Required:</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Yes</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> No</label>
                  </div>
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Next Review Date:</label>
                  <input type="date" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Counselor Name:</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div className="field">
                  <label className="block font-medium mb-1">Date:</label>
                  <input type="date" className="w-full px-4 py-2 border rounded-md" />
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row gap-4">
              <button type="submit" className="w-full md:w-auto bg-brand text-white px-6 py-3 rounded-md font-bold hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl">
                Submit Evaluation
              </button>
              <button type="button" onClick={handleDownloadCSV} className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-md font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                Download as CSV
              </button>
              <label className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center">
                Load CSV
                <input type="file" accept=".csv" onChange={handleLoadCSV} className="hidden" />
              </label>
            </div>
          </form>
        </div>
      </SectionContainer>
      <ReadyToStart />
    </main>
  )
}
