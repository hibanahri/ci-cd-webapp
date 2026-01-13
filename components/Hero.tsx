'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/images/profile.jpg"
              alt="Hiba Nahri"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name and Headline */}
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4 animate-slideUp">
          Hiba Nahri
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6 animate-slideUp">
          4th Year Engineering Student | Network & Telecommunication Engineering
        </p>

        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto animate-slideUp">
          Passionate about DevOps, automation, and building scalable systems. Experienced in
          full-stack development, networking, and machine learning projects.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToProjects}
          className="inline-block px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl animate-slideUp"
        >
          View My Projects
        </button>
      </div>
    </section>
  )
}
