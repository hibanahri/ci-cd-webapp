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
    category: 'Frontend / Web Development',
    items: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (basic)', 'Docker (basic)', 'CI/CD (GitHub Actions)', 'Git & GitHub'],
  },
  {
    category: 'Networking & Security',
    items: ['TCP/IP', 'Routing & Switching', 'VLANs', 'OSPF', 'DNS', 'Firewall fundamentals', 'Cisco Packet Tracer', 'Network analysis (Wireshark)'],
  },
  {
    category: 'Systems & Databases',
    items: ['Linux (command line)', 'MySQL', 'Oracle Database', 'PL/SQL'],
  },
  {
    category: 'Systems & Scripting',
    items: ['Bash (basic)', 'MATLAB'],
  },
]