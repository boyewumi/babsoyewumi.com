interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Babs UI Library',
    description: `A modern, developer-first UI component library built with React and TypeScript. Designed for speed, consistency, and scalability—perfect for design systems and product interfaces.`,
    imgSrc: '/static/images/babs-ui.png',
    href: 'https://github.com/boyewumi/babs-ui',
  },
]

export default projectsData
