export interface Skill {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    category: 'Web Technologies',
    items: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'DevOps',
    items: ['Linux', 'Docker', 'CI/CD', 'GitHub Actions', 'Automation'],
  },
  {
    category: 'Networking',
    items: ['TCP/IP', 'DNS', 'Routing', 'Cisco Packet Tracer', 'Network Analysis'],
  },
  {
    category: 'Databases',
    items: ['Oracle SQL', 'SQL', 'Database Design'],
  },
  {
    category: 'Other',
    items: ['Machine Learning', 'Deep Learning', 'Signal Processing', 'IoT'],
  },
]
