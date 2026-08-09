export const PORTFOLIO_CONFIG = {
  name: 'Alex Carter',
  initials: 'AC',
  role: 'Full-Stack Developer & UI Engineer',
  tagline: 'I build polished, performant web experiences from concept to deployment.',
  location: 'San Francisco, CA',
  email: 'alex@carter.dev',
  resumeUrl: '#',
  socials: [
    { label: 'GitHub', url: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { label: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
  ],
  about: {
    bio: 'Full-stack developer with 6+ years of experience crafting web applications that blend clean engineering with thoughtful design.',
    story: 'I started as a frontend tinkerer building tools for local businesses, then grew into a full-stack engineer shipping production apps used by thousands. I care deeply about performance, accessibility, and the small details that make a product feel effortless. When I am not coding, you will find me contributing to open source, mentoring junior devs, or exploring new coffee shops.',
    highlights: [
      { icon: 'code', title: 'Clean Code', desc: 'Readable, tested, maintainable codebases that teams love to work in.' },
      { icon: 'zap', title: 'Performance', desc: 'Sub-second loads, smooth animations, and Lighthouse scores in the high 90s.' },
      { icon: 'palette', title: 'Design Sense', desc: 'Pixel-perfect UI with a feel for spacing, hierarchy, and motion.' },
      { icon: 'users', title: 'Collaboration', desc: 'Clear communication, code reviews, and mentoring across teams.' },
    ],
  },
  skills: [
    {
      category: 'Frontend',
      icon: 'layout',
      items: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'CSS / Tailwind', level: 92 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      category: 'Backend',
      icon: 'server',
      items: [
        { name: 'Node.js', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Supabase', level: 85 },
        { name: 'Python', level: 75 },
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: 'wrench',
      items: [
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 78 },
        { name: 'AWS', level: 72 },
        { name: 'Git', level: 95 },
      ],
    },
    {
      category: 'Design',
      icon: 'pen-tool',
      items: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX', level: 80 },
        { name: 'Motion Design', level: 70 },
        { name: 'Prototyping', level: 78 },
      ],
    },
  ],
  experience: [
    {
      role: 'Senior Full-Stack Developer',
      org: 'Nimbus Labs',
      period: '2022 — Present',
      points: [
        'Led the rebuild of the core dashboard, cutting load times by 60%.',
        'Architected a real-time collaboration feature used by 12k+ daily users.',
        'Mentored 4 junior developers and established the team code review process.',
      ],
    },
    {
      role: 'Full-Stack Developer',
      org: 'Brightfold Inc.',
      period: '2019 — 2022',
      points: [
        'Shipped 15+ client projects spanning e-commerce, SaaS, and internal tools.',
        'Built a design system adopted across 3 product teams.',
        'Reduced infrastructure costs by 35% through query optimization and caching.',
      ],
    },
    {
      role: 'Frontend Developer',
      org: 'Pixelcraft Studio',
      period: '2017 — 2019',
      points: [
        'Delivered responsive marketing sites for 20+ brands.',
        'Introduced automated testing, reducing production bugs by 40%.',
      ],
    },
  ],
  certifications: [
    'AWS Certified Developer — Associate',
    'Meta Front-End Developer Professional Certificate',
    'Google UX Design Certificate',
  ],
  themes: [
    { name: 'Indigo', accent: '#6366f1', accent2: '#06b6d4', accent3: '#8b5cf6', glow: 'rgba(99,102,241,0.25)', borderHover: 'rgba(99,102,241,0.4)' },
    { name: 'Emerald', accent: '#10b981', accent2: '#14b8a6', accent3: '#22c55e', glow: 'rgba(16,185,129,0.25)', borderHover: 'rgba(16,185,129,0.4)' },
    { name: 'Sunset', accent: '#f97316', accent2: '#ec4899', accent3: '#f43f5e', glow: 'rgba(249,115,22,0.25)', borderHover: 'rgba(249,115,22,0.4)' },
    { name: 'Ocean', accent: '#3b82f6', accent2: '#06b6d4', accent3: '#0ea5e9', glow: 'rgba(59,130,246,0.25)', borderHover: 'rgba(59,130,246,0.4)' },
  ],
};
