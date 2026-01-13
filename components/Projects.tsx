'use client'

import { useState, useMemo } from 'react'
import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  // Get all unique technologies
  const allTechs = useMemo(() => {
    const techs = new Set<string>()
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech))
    })
    return Array.from(techs).sort()
  }, [])

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects
    return projects.filter((project) => project.technologies.includes(selectedTech))
  }, [selectedTech])

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>

        {/* Technology Filter */}
        <div className="mb-12">
          <p className="text-slate-600 dark:text-slate-400 mb-4 text-center">
            Filter by technology:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedTech === null
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              All Projects
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedTech === tech
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-slideUp"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No projects found with the selected technology.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
