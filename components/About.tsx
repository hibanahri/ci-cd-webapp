'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
          <p>
            I am a 4th-year engineering student specializing in Network and Telecommunication
            Engineering at ENSA (École Nationale des Sciences Appliquées). My passion lies in
            DevOps, automation, and building robust systems that scale efficiently.
          </p>
          <p>
            Throughout my academic journey, I have developed a strong foundation in networking
            fundamentals, signal processing, and software development. I am particularly interested
            in CI/CD pipelines, containerization, and infrastructure automation.
          </p>
          <p>
            Beyond academics, I am committed to continuous learning and staying updated with the
            latest technologies. I believe in writing clean, maintainable code and following best
            practices in every project I undertake.
          </p>
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Education</h3>
              <p className="text-sm">
                4th Year Engineering Student<br />
                Network & Telecommunication Engineering<br />
                École Nationale des Sciences Appliquées (ENSA)
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Languages</h3>
              <p className="text-sm">
                English (Fluent)<br />
                French (Fluent)<br />
                Arabic (Native)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}