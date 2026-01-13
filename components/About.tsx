'use client'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          About Me
        </h2>

        <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
          <p className="animate-slideUp">
            I'm a 4th-year engineering student specializing in Network and Telecommunication
            Engineering. My passion lies in DevOps, automation, and building robust systems that
            scale efficiently. I combine theoretical knowledge with practical experience to solve
            real-world problems.
          </p>

          <p className="animate-slideUp">
            Throughout my academic journey, I've developed a strong foundation in networking
            fundamentals, signal processing, and software development. I'm particularly interested
            in CI/CD pipelines, containerization, and infrastructure automation—technologies that
            enable teams to deliver software faster and more reliably.
          </p>

          <p className="animate-slideUp">
            Beyond academics, I'm committed to continuous learning and staying updated with the
            latest technologies. I believe in writing clean, maintainable code and following best
            practices in every project I undertake. My goal is to contribute to innovative projects
            that make a meaningful impact.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Education</h3>
              <p className="text-sm">
                4th Year Engineering Student<br />
                Network & Telecommunication Engineering
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Languages</h3>
              <p className="text-sm">
                English (Fluent)<br />
                French (Fluent)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
