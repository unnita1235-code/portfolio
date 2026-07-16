export const personal = {
  name: 'UNNI T A',
  title: 'AI Engineer & Prompting Specialist',
  tagline: 'Building Intelligent Systems with Precision.',
  email: 'unnita1235@gmail.com',
  github: 'https://github.com/unnita1235-code',
  linkedin: 'https://www.linkedin.com/in/unni-ta/',
  twitter: '#',
  bio: 'AI Engineer focused on RAG pipelines, LangGraph agent orchestration, and production-grade Gen AI systems. I build end-to-end agentic applications that combine retrieval, reasoning, and real-time streaming for domain-specific accuracy.',
  highlights: [
    { icon: 'Brain', label: 'RAG Systems', desc: 'Production retrieval-augmented generation pipelines' },
    { icon: 'Workflow', label: 'Agent Orchestration', desc: 'LangGraph multi-step reasoning & tool-using agents' },
    { icon: 'Terminal', label: 'Prompt Engineering', desc: 'Persona-based prompting & structured Pydantic outputs' },
    { icon: 'Rocket', label: 'Full-Stack Delivery', desc: 'FastAPI backends, Next.js frontends, Docker deploys' },
  ],
  story:
    'I started by automating small workflows with LLMs and quickly moved to architecting complete agentic systems — from HIPAA compliance analysis to enterprise knowledge graphs. My focus is the full loop: retrieval quality, agent reasoning, structured outputs, and a polished user experience around it.',
};

export const skills = [
  {
    category: 'AI / ML',
    icon: 'Brain',
    items: [
      { name: 'LangChain', level: 92 },
      { name: 'LangGraph', level: 90 },
      { name: 'RAG / pgvector', level: 88 },
      { name: 'ChromaDB', level: 80 },
      { name: 'OpenAI / Gemini APIs', level: 90 },
    ],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: [
      { name: 'Python', level: 93 },
      { name: 'FastAPI', level: 90 },
      { name: 'Celery', level: 78 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Pydantic', level: 88 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    items: [
      { name: 'Next.js', level: 85 },
      { name: 'React', level: 84 },
      { name: 'React Native', level: 75 },
      { name: 'JavaScript', level: 86 },
      { name: 'HTML / CSS', level: 88 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: 'Wrench',
    items: [
      { name: 'Docker', level: 82 },
      { name: 'Vercel', level: 88 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'SSE / Streaming', level: 85 },
      { name: 'Tavily API', level: 82 },
    ],
  },
];

export const projects = [
  {
    name: 'MedComply',
    tag: 'AI / RAG / Healthcare',
    description:
      'A Next.js 15 & FastAPI powered SaaS for HIPAA violation analysis. Features automated page-level citations and real-time streaming feedback via SSE. Engineered for domain-specific accuracy.',
    tech: ['Next.js', 'FastAPI', 'RAG', 'pgvector', 'SSE'],
    demo: 'https://github.com/unnita1235-code/medcomply',
    github: 'https://github.com/unnita1235-code/medcomply',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
    featured: true,
  },
  {
    name: 'NexusBase',
    tag: 'LangGraph / Agents / Knowledge',
    description:
      'Enterprise-grade RAG system utilizing LangGraph for multi-step document reasoning and graph-based agent orchestration. Implements advanced retrieval patterns using pgvector.',
    tech: ['LangGraph', 'LangChain', 'pgvector', 'Python'],
    demo: 'https://github.com/unnita1235-code/NexusBase',
    github: 'https://github.com/unnita1235-code/NexusBase',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
    featured: true,
  },
  {
    name: 'Research AI Agent',
    tag: 'Agentic Research',
    description:
      'Autonomous agent for web search and report synthesis using Tavily and LangGraph. Focused on high-velocity development and agentic utility.',
    tech: ['LangGraph', 'Tavily', 'Python'],
    demo: 'https://github.com/unnita1235-code/Research-AI-Agent',
    github: 'https://github.com/unnita1235-code/Research-AI-Agent',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
    featured: false,
  },
  {
    name: 'Dental Appointment Bot',
    tag: 'AI Automation',
    description:
      'Stateful AI assistant for clinic automation. Handles multi-step scheduling workflows with FastAPI and Celery.',
    tech: ['FastAPI', 'Celery', 'Python'],
    demo: 'https://github.com/unnita1235-code/Autonomous-Dental-Appointment-Bot',
    github: 'https://github.com/unnita1235-code/Autonomous-Dental-Appointment-Bot',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%)',
    featured: false,
  },
  {
    name: 'FoodSnap AI',
    tag: 'Mobile AI / Computer Vision',
    description:
      'React Native mobile app for AI-powered calorie and nutrition tracking from food photos. Uses Google Gemini API for food recognition and macronutrient estimation with a real-time camera interface.',
    tech: ['React Native', 'Gemini API', 'Computer Vision'],
    demo: 'https://github.com/unnita1235-code/foodsnap-ai-old',
    github: 'https://github.com/unnita1235-code/foodsnap-ai-old',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    featured: false,
  },
  {
    name: 'Hybrid Financial',
    tag: 'Finance / LLM Impact',
    description:
      'A data-rich financial dashboard using LLMs for real-time sentiment scoring and news impact synthesis. Features sophisticated visualization and impact analysis.',
    tech: ['LLM', 'Python', 'Data Viz'],
    demo: 'https://github.com/unnita1235-code/Hybrid-Financial',
    github: 'https://github.com/unnita1235-code/Hybrid-Financial',
    gradient: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
    featured: true,
  },
];

export const resume = {
  summary:
    'AI Engineer specializing in RAG systems, LangGraph agent orchestration, and production-grade Gen AI applications. Proven track record of delivering end-to-end agentic systems for healthcare, finance, and enterprise knowledge management.',
  experience: [
    {
      role: 'AI Engineer',
      org: 'Freelance / Open Source',
      period: '2024 — Present',
      points: [
        'Architected and shipped MedComply, a HIPAA violation analysis SaaS with RAG-powered citations and SSE streaming.',
        'Built NexusBase, an enterprise RAG system on LangGraph with multi-step document reasoning and pgvector retrieval.',
        'Developed autonomous research agents using Tavily + LangGraph for web search and report synthesis.',
        'Engineered a stateful dental appointment bot handling multi-step scheduling with FastAPI and Celery.',
      ],
    },
    {
      role: 'Full-Stack & AI Developer',
      org: 'Independent Projects',
      period: '2023 — 2024',
      points: [
        'Created FoodSnap AI, a React Native app using Google Gemini for food recognition and macronutrient estimation.',
        'Built Hybrid Financial, an LLM-powered dashboard for real-time sentiment scoring and news impact analysis.',
        'Containerized and deployed AI services with Docker and Vercel with CI/CD automation.',
      ],
    },
  ],
  education: [
    {
      degree: 'Computer Science & Engineering',
      school: 'Undergraduate Studies',
      period: '',
    },
  ],
  certifications: [
    'LangGraph Agent Orchestration',
    'RAG Systems with pgvector & LangChain',
    'Prompt Engineering & Structured Outputs (Pydantic)',
  ],
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];
