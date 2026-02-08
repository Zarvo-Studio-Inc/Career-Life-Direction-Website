'use client'

import { FormEvent, useState } from 'react'

interface LeadFormProps {
  variant?: 'default' | 'contact'
}

export default function LeadForm({ variant = 'default' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityCountry: '',
    userType: '',
    guidanceAreas: [] as string[],
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      guidanceAreas: prev.guidanceAreas.includes(value)
        ? prev.guidanceAreas.filter((area) => area !== value)
        : [...prev.guidanceAreas, value],
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Placeholder for API route - to be implemented
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        cityCountry: '',
        userType: '',
        guidanceAreas: [],
        message: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {variant === 'default' && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Request a Guidance Session
          </h3>
          <p className="text-base text-white/90 leading-relaxed">
            This form helps us understand your context. We will reach out personally to guide next steps.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
            Full Name <span className="text-red-300">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-2.5 bg-white/95 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email <span className="text-red-300">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 bg-white/95 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone / WhatsApp <span className="text-sm text-white/70">(optional but recommended)</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 bg-white/95 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* City / Country */}
        <div>
          <label htmlFor="cityCountry" className="block text-sm font-medium text-white mb-2">
            City / Country
          </label>
          <input
            type="text"
            id="cityCountry"
            value={formData.cityCountry}
            onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
            className="w-full px-4 py-2.5 bg-white/95 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-colors text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* User Type */}
        <div>
          <label htmlFor="userType" className="block text-sm font-medium text-white mb-2">
            I am a:
          </label>
          <select
            id="userType"
            value={formData.userType}
            onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
            className="w-full px-4 py-2.5 bg-white/95 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-colors text-gray-900"
          >
            <option value="">Select...</option>
            <option value="school-student">School student</option>
            <option value="college-student">College student</option>
            <option value="graduate">Graduate</option>
            <option value="parent">Parent</option>
          </select>
        </div>

        {/* Guidance Areas */}
        <div>
          <fieldset>
            <legend className="block text-sm font-medium text-white mb-3">
              Area of guidance needed:
            </legend>
            <div className="space-y-3">
              {[
                { value: 'career-direction', label: 'Career & life direction' },
                { value: 'tech-mentorship', label: 'Technology mentorship (Computer Science)' },
                { value: 'scholarships', label: 'Scholarship guidance' },
                { value: 'not-sure', label: 'Not sure yet' },
              ].map((option) => (
                <div key={option.value} className="flex items-start">
                  <input
                    type="checkbox"
                    id={option.value}
                    checked={formData.guidanceAreas.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                    className="mt-1 h-4 w-4 text-white bg-white/20 border-white/30 rounded focus:ring-white focus:ring-offset-brand"
                  />
                  <label htmlFor={option.value} className="ml-3 text-sm text-white/90">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Briefly describe what you are currently confused or concerned about:
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2.5 bg-white/95 border border-white/30 rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition-colors resize-none text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-brand px-6 py-3 rounded-md font-bold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md">
            <p className="text-sm text-white">
              Thank you for your interest. We will reach out to you soon.
            </p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-md">
            <p className="text-sm text-white">
              Something went wrong. Please try again or contact us directly.
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
