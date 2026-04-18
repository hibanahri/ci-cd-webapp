export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  links: {
    github?: string
  }
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Automated CI/CD Pipeline',
    description: 'Designed and implemented an automated CI/CD pipeline using GitHub Actions to continuously build, test, and deploy a personal web portfolio.',
    technologies: ['GitHub Actions', 'CI/CD', 'DevOps'],
    links: {
      github: 'https://github.com/hibanahri/ci-cd-webapp',
    },
  },
  {
    id: '2',
    title: 'QAM Implementation',
    description: 'Design and implementation of the Quadrature Amplitude Modulation scheme using Python with structured and well-documented code for signal processing.',
    technologies: ['Python', 'Signal Processing', 'Modulation'],
    links: {
      github: 'https://github.com/hibanahri/QAM-Conception-and-Implementation',
    },
  },
  {
    id: '3',
    title: 'Temperature Intelligence Platform',
    description: 'A smart Industrial IoT platform for temperature monitoring and prediction. Uses machine learning and deep learning models to forecast temperatures, detect anomalies, and send alerts.',
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'IoT'],
    links: {
      github: 'https://github.com/hibanahri/Temperature-Intelligence-Platform',
    },
  },
  {
    id: '4',
    title: 'Wi-Fi Coverage Analysis',
    description: 'Comprehensive Wi-Fi coverage analysis using NetSpot tool focusing on signal strength, coverage quality, and network performance optimization.',
    technologies: ['NetSpot', 'Networking', 'Performance Analysis'],
    links: {
      github: 'https://github.com/hibanahri/Etude-sur-NETSPOT',
    },
  },
  {
    id: '5',
    title: 'Network & Telecom Projects',
    description: 'Collection of networking and telecommunication projects including TCP/IP, DNS, routing, and Cisco Packet Tracer simulations.',
    technologies: ['Networking', 'TCP/IP', 'Cisco'],
    links: {},
  },
]