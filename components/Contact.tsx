'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    const { name, email, message } = formData
    const mailtoLink = `mailto:hibanahri@gmail.com?subject=Message from ${name}&body=${message}%0A%0AFrom: ${name}%0AEmail: ${email}`
    window.location.href = mailtoLink
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Contact Me
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-10">
          Feel free to reach out for collaborations or opportunities!
        </p>
        {sent ? (
          <div className="text-center text-green-600 dark:text-green-400 text-lg font-medium">
            Your email client has been opened. Thank you!
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Send Message
            </button>
          </div>
        )}
      </div>
    </section>
  )
}