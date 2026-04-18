'use client'
import { Project } from '@/lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
        {project.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
      {project.links.github && (
        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity">
          GitHub
        </a>
      )}
    </div>
  )
}