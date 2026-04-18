export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  links: {
    github?: string
    demo?: string
    article?: string
  }
  category: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Automated CI/CD Pipeline for Personal Web Portfolio',
    description:
      'Designed and implemented an automated CI/CD pipeline using GitHub Actions to continuously build, test, and deploy a personal web portfolio.',
    longDescription:
      'This project demonstrates DevOps automation best practices by implementing a complete CI/CD pipeline. Each code update triggers automatic deployment to GitHub Pages, ensuring fast, reliable, and error-free delivery. The pipeline includes automated testing, code quality checks, and seamless deployment workflows.',
    technologies: ['GitHub Actions', 'CI/CD', 'GitHub Pages', 'DevOps', 'Automation'],
    image: '/images/cicd-pipeline.jpg',
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    category: 'DevOps',
  },
  {
    id: '2',
    title: 'IoT Temperature Anomaly Detection Using ML and Deep Learning',
    description:
      'Machine learning and deep learning techniques to analyze IoT temperature data and detect abnormal behavior.',
    longDescription:
      'This project applies advanced ML and DL techniques to analyze IoT temperature data collected from servers and laboratory environments. The system detects abnormal temperature behavior to prevent equipment damage and data loss. An interactive interface was developed to connect IoT sensors, perform temperature predictions, and send real-time alerts when thresholds are exceeded.',
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'IoT', 'TensorFlow', 'Real-time Alerts'],
    image: '/images/iot-temperature.jpg',
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    category: 'Machine Learning',
  },
  {
    id: '3',
    title: 'Wi-Fi Coverage Analysis Using NetSpot',
    description:
      'Wi-Fi coverage analysis of laboratory and practical training rooms using the NetSpot tool.',
    longDescription:
      'This project presents a comprehensive Wi-Fi coverage analysis focusing on signal strength, coverage quality, and network performance. The study evaluates connectivity issues and proposes optimization improvements for laboratory environments.',
    technologies: ['NetSpot', 'Network Analysis', 'Wi-Fi', 'Networking', 'Performance Analysis'],
    image: '/images/wifi-coverage.jpg',
    links: {
      article: 'https://example.com',
    },
    category: 'Networking',
  },
  {
    id: '4',
    title: 'Network & Telecommunication Engineering Projects',
    description:
      'Collection of networking and telecommunication projects including routing, DNS, and TCP/IP implementations.',
    longDescription:
      'Various projects demonstrating networking fundamentals including TCP/IP protocol implementation, DNS configuration, routing algorithms, and network simulation using Cisco Packet Tracer. These projects showcase practical networking knowledge and problem-solving skills.',
    technologies: ['Networking', 'TCP/IP', 'DNS', 'Routing', 'Cisco Packet Tracer'],
    image: '/images/networking.jpg',
    links: {
      github: 'https://github.com',
    },
    category: 'Networking',
  },
]
