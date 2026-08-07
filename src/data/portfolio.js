// ============================================================
// PORTFOLIO CONFIG — All placeholder data in one place.
// Swap these values with your real content to customize the site.
// ============================================================

export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'UNNI T A',
    title: 'AI Engineer & Prompting Specialist',
    tagline: 'Building Intelligent Systems with Precision.',
    email: 'unnita1235@gmail.com',
    location: 'Kerala, India',
    github: 'https://github.com/unnita1235-code',
    linkedin: 'https://www.linkedin.com/in/unni-ta/',
    twitter: '#',
    bio: 'AI Engineer focused on RAG pipelines, LangGraph agent orchestration, and production-grade Gen AI systems. I build end-to-end agentic applications that combine retrieval, reasoning, and real-time streaming for domain-specific accuracy.',
    story:
      'I started by automating small workflows with LLMs and quickly moved to architecting complete agentic systems — from HIPAA compliance analysis to enterprise knowledge graphs. My focus is the full loop: retrieval quality, agent reasoning, structured outputs, and a polished user experience around it.',
  },

  heroRoles: [
    'AI Engineer',
    'Full-Stack Developer',
    'Prompt Engineer',
    'Creative Technologist',
  ],

  highlights: [
    { icon: 'Brain', label: 'RAG Systems', desc: 'Production retrieval-augmented generation pipelines' },
    { icon: 'Workflow', label: 'Agent Orchestration', desc: 'LangGraph multi-step reasoning & tool-using agents' },
    { icon: 'Terminal', label: 'Prompt Engineering', desc: 'Persona-based prompting & structured Pydantic outputs' },
    { icon: 'Rocket', label: 'Full-Stack Delivery', desc: 'FastAPI backends, Next.js frontends, Docker deploys' },
  ],

  stats: [
    { value: 3, suffix: '+', label: 'Years Experience' },
    { value: 20, suffix: '+', label: 'Projects Built' },
    { value: 10, suffix: '+', label: 'Happy Clients' },
    { value: 5, suffix: '+', label: 'AI Tools Built' },
  ],

  skillTags: [
    'LangChain', 'LangGraph', 'RAG', 'pgvector', 'FastAPI', 'Python',
    'React', 'Next.js', 'Docker', 'Pydantic', 'OpenAI API', 'Gemini API',
    'Celery', 'PostgreSQL', 'SSE Streaming',
  ],

  skills: [
    {
      category: 'AI / ML',
      icon: 'Brain',
      color: '#7c3aed',
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
      color: '#0d9488',
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
      color: '#2563eb',
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
      color: '#ec4899',
      items: [
        { name: 'Docker', level: 82 },
        { name: 'Vercel', level: 88 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'SSE / Streaming', level: 85 },
        { name: 'Tavily API', level: 82 },
      ],
    },
  ],

  projects: [
    {
      name: 'MedComply',
      tag: 'AI / RAG / Healthcare',
      category: 'AI',
      aiPowered: true,
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
      category: 'AI',
      aiPowered: true,
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
      category: 'AI',
      aiPowered: true,
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
      category: 'Backend',
      aiPowered: true,
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
      category: 'Frontend',
      aiPowered: true,
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
      category: 'Backend',
      aiPowered: true,
      description:
        'A data-rich financial dashboard using LLMs for real-time sentiment scoring and news impact synthesis. Features sophisticated visualization and impact analysis.',
      tech: ['LLM', 'Python', 'Data Viz'],
      demo: 'https://github.com/unnita1235-code/Hybrid-Financial',
      github: 'https://github.com/unnita1235-code/Hybrid-Financial',
      gradient: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
      featured: true,
    },
  ],

  projectFilters: ['All', 'Frontend', 'Backend', 'AI'],

  testimonials: [
    {
      quote: "Unni delivered an AI-powered compliance system that exceeded our expectations. The RAG pipeline he built handles complex medical documents with remarkable accuracy. His ability to bridge AI research and production engineering is rare.",
      name: 'Sarah Chen',
      title: 'CTO',
      company: 'MedTech Solutions',
      color: '#7c3aed',
    },
    {
      quote: "We hired Unni to build a LangGraph-based knowledge agent for our enterprise docs. The result was a system that could reason through multi-step queries and return structured, cited answers. Outstanding work.",
      name: 'Marcus Rodriguez',
      title: 'VP of Engineering',
      company: 'DataNexus Inc.',
      color: '#2563eb',
    },
    {
      quote: "Unni's prompt engineering skills are exceptional. He structured our LLM outputs with Pydantic in a way that made the entire pipeline deterministic and testable. A true professional.",
      name: 'Priya Sharma',
      title: 'Product Lead',
      company: 'AI Labs',
      color: '#ec4899',
    },
    {
      quote: "From FastAPI backend to Next.js frontend, Unni shipped our entire MVP in record time. The SSE streaming he implemented gives real-time feedback that our users love. Highly recommended.",
      name: 'James O\'Brien',
      title: 'Founder & CEO',
      company: 'StartupHub',
      color: '#0d9488',
    },
    {
      quote: "Unni built a React Native app with Gemini-powered food recognition that blew our minds. The camera interface is smooth and the nutrition estimates are surprisingly accurate. Genuinely impressive AI work.",
      name: 'Aisha Patel',
      title: 'Head of Mobile',
      company: 'HealthFirst',
      color: '#f59e0b',
    },
  ],

  resume: {
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
  },

  // ---- AI Feature Data ----

  // Skill recommender: maps keywords to recommended skills/learning paths
  skillRecommendations: [
    {
      keywords: ['machine learning', 'ml', 'data scientist', 'ai engineer', 'deep learning'],
      role: 'Machine Learning Engineer',
      skills: [
        { name: 'Python & NumPy', path: 'Core data processing and numerical computing' },
        { name: 'PyTorch / TensorFlow', path: 'Building and training neural networks' },
        { name: 'Scikit-learn', path: 'Classical ML algorithms and model evaluation' },
        { name: 'LangChain & RAG', path: 'Production LLM pipelines with retrieval' },
        { name: 'MLOps', path: 'Model deployment, monitoring, and CI/CD' },
      ],
    },
    {
      keywords: ['full stack', 'fullstack', 'web developer', 'frontend', 'react', 'next.js'],
      role: 'Full-Stack Developer',
      skills: [
        { name: 'React & Next.js', path: 'Component architecture and SSR/SSG' },
        { name: 'TypeScript', path: 'Type-safe development at scale' },
        { name: 'FastAPI / Node.js', path: 'API design and backend services' },
        { name: 'PostgreSQL & Prisma', path: 'Database design and ORM patterns' },
        { name: 'Docker & CI/CD', path: 'Containerized deployment pipelines' },
      ],
    },
    {
      keywords: ['prompt', 'prompting', 'llm', 'gen ai', 'genai', 'chatgpt', 'gpt'],
      role: 'Prompt Engineer / Gen AI Specialist',
      skills: [
        { name: 'Prompt Design Patterns', path: 'Persona, few-shot, and chain-of-thought prompting' },
        { name: 'LangGraph', path: 'Multi-step agent orchestration and tool use' },
        { name: 'Pydantic Structured Outputs', path: 'Deterministic LLM response parsing' },
        { name: 'RAG with pgvector', path: 'Retrieval-augmented generation pipelines' },
        { name: 'Evaluation & Testing', path: 'LLM output quality metrics and guardrails' },
      ],
    },
    {
      keywords: ['design', 'ui', 'ux', 'designer', 'figma', 'creative'],
      role: 'UI/UX Designer',
      skills: [
        { name: 'Figma & Design Systems', path: 'Component libraries and design tokens' },
        { name: 'Tailwind CSS', path: 'Utility-first responsive styling' },
        { name: 'React & Framer Motion', path: 'Interactive prototyping and animation' },
        { name: 'Accessibility (WCAG)', path: 'Inclusive design principles and testing' },
        { name: 'User Research', path: 'Interviews, usability testing, and journey mapping' },
      ],
    },
    {
      keywords: ['devops', 'cloud', 'aws', 'docker', 'kubernetes', 'deploy'],
      role: 'DevOps Engineer',
      skills: [
        { name: 'Docker & Kubernetes', path: 'Container orchestration at scale' },
        { name: 'GitHub Actions', path: 'CI/CD pipeline automation' },
        { name: 'AWS / Vercel', path: 'Cloud deployment and infrastructure' },
        { name: 'Terraform', path: 'Infrastructure as code' },
        { name: 'Monitoring & Logging', path: 'Observability with Prometheus/Grafana' },
      ],
    },
    {
      keywords: ['data', 'analyst', 'analytics', 'visualization', 'bi'],
      role: 'Data Analyst',
      skills: [
        { name: 'SQL & PostgreSQL', path: 'Querying and data modeling' },
        { name: 'Python (pandas)', path: 'Data cleaning and analysis' },
        { name: 'Tableau / Power BI', path: 'Dashboard creation and reporting' },
        { name: 'Statistics', path: 'Hypothesis testing and regression analysis' },
        { name: 'LLM Sentiment Analysis', path: 'AI-powered text analytics' },
      ],
    },
  ],

  // Smart contact form AI reply templates
  aiReplyTemplates: [
    {
      keywords: ['hire', 'job', 'role', 'position', 'opening', 'career'],
      reply: "Thanks for reaching out about the role! I'm actively looking for AI engineering opportunities. I specialize in RAG systems, LangGraph agents, and production Gen AI. I'd love to hear more about the position — could you share details about the team and tech stack?",
    },
    {
      keywords: ['project', 'build', 'create', 'develop', 'app', 'application'],
      reply: "Exciting project! I've built everything from HIPAA compliance analyzers to AI-powered mobile apps. I can handle the full stack: LangGraph agents, FastAPI backends, and React/Next.js frontends. Tell me more about what you're envisioning!",
    },
    {
      keywords: ['collab', 'collaborate', 'partner', 'team up', 'work together'],
      reply: "I'm always open to collaboration! Whether it's building AI features, setting up RAG pipelines, or shipping a full product, I'm interested. What's the scope and timeline you're thinking?",
    },
    {
      keywords: ['budget', 'cost', 'price', 'rate', 'quote', 'pay'],
      reply: "Happy to discuss pricing! My rates depend on project scope, complexity, and timeline. For AI engineering work, I typically scope the project first, then provide a fixed quote. What budget range are you working with?",
    },
    {
      keywords: ['deadline', 'timeline', 'urgent', 'asap', 'soon', 'when'],
      reply: "I can work with tight timelines! For AI projects, a typical MVP takes 2-4 weeks depending on complexity. I can prioritize urgent work if needed. What's your target launch date?",
    },
    {
      keywords: ['rag', 'retrieval', 'knowledge', 'document', 'embedding'],
      reply: "RAG is my specialty! I build production RAG systems with pgvector, LangChain, and LangGraph for multi-step reasoning. I can help with chunking strategies, retrieval quality, and citation systems. What documents are you working with?",
    },
    {
      keywords: ['agent', 'langgraph', 'autonomous', 'workflow', 'automation'],
      reply: "Agent orchestration is core to my work. I use LangGraph to build multi-step reasoning agents with tool use, state management, and human-in-the-loop checkpoints. What workflow are you looking to automate?",
    },
  ],

  aiReplyFallback: "Thanks for your message! I'm an AI Engineer specializing in RAG systems, LangGraph agents, and production Gen AI. I'd love to learn more about what you need. Feel free to share more details, and I'll get back to you within 24 hours!",

  // Theme palettes for the AI Color Theme Switcher
  themes: [
    {
      name: 'Purple Dream',
      accent: '#7c3aed',
      accent2: '#2563eb',
      accent3: '#ec4899',
      glow: 'rgba(124, 58, 237, 0.35)',
      borderHover: 'rgba(124, 58, 237, 0.5)',
    },
    {
      name: 'Ocean Blue',
      accent: '#2563eb',
      accent2: '#0d9488',
      accent3: '#06b6d4',
      glow: 'rgba(37, 99, 235, 0.35)',
      borderHover: 'rgba(37, 99, 235, 0.5)',
    },
    {
      name: 'Sunset Pink',
      accent: '#ec4899',
      accent2: '#f59e0b',
      accent3: '#ef4444',
      glow: 'rgba(236, 72, 153, 0.35)',
      borderHover: 'rgba(236, 72, 153, 0.5)',
    },
    {
      name: 'Forest Teal',
      accent: '#0d9488',
      accent2: '#10b981',
      accent3: '#06b6d4',
      glow: 'rgba(13, 148, 136, 0.35)',
      borderHover: 'rgba(13, 148, 136, 0.5)',
    },
    {
      name: 'Golden Hour',
      accent: '#f59e0b',
      accent2: '#ef4444',
      accent3: '#ec4899',
      glow: 'rgba(245, 158, 11, 0.35)',
      borderHover: 'rgba(245, 158, 11, 0.5)',
    },
    {
      name: 'Midnight',
      accent: '#6366f1',
      accent2: '#8b5cf6',
      accent3: '#3b82f6',
      glow: 'rgba(99, 102, 241, 0.35)',
      borderHover: 'rgba(99, 102, 241, 0.5)',
    },
  ],

  // Chat assistant keyword-to-response map
  chatResponses: [
    {
      keywords: ['skill', 'skills', 'tech', 'technology', 'stack', 'what can you do'],
      response: "My core skills include LangChain, LangGraph, RAG with pgvector, FastAPI, Python, React/Next.js, and Docker. I specialize in building production AI systems — from retrieval pipelines to multi-step agent orchestration. Want me to dive deeper into any of these?",
    },
    {
      keywords: ['available', 'hire', 'job', 'work', 'freelance', 'open'],
      response: "Yes, I'm currently available for AI engineering roles and freelance projects! I'm especially interested in RAG systems, agent orchestration, and Gen AI product work. You can reach me at unnita1235@gmail.com or through the contact form below.",
    },
    {
      keywords: ['project', 'projects', 'work', 'portfolio', 'show me'],
      response: "I've shipped 6+ AI projects including MedComply (HIPAA compliance RAG), NexusBase (enterprise LangGraph knowledge system), and FoodSnap AI (Gemini-powered nutrition tracking). Scroll to the Projects section to see them all with live demos!",
    },
    {
      keywords: ['experience', 'years', 'background', 'history'],
      response: "I have 3+ years of experience building AI systems. I started with workflow automation using LLMs, then moved to full agentic systems with LangGraph. My recent work focuses on production RAG pipelines for healthcare and finance. Check the Resume section for details!",
    },
    {
      keywords: ['contact', 'email', 'reach', 'connect', 'social'],
      response: "You can reach me at unnita1235@gmail.com, connect on LinkedIn, or check my GitHub at github.com/unnita1235-code. There's also a contact form at the bottom of this page that goes straight to my inbox!",
    },
    {
      keywords: ['rag', 'retrieval', 'embedding', 'vector'],
      response: "RAG is my bread and butter! I build retrieval pipelines with pgvector, LangChain, and ChromaDB. My approach focuses on chunking strategy, retrieval quality, and citation systems. MedComply and NexusBase are great examples of this in production.",
    },
    {
      keywords: ['resume', 'cv', 'download'],
      response: "You can download my full resume from the Resume section — just click the 'Download Resume' button. It covers my experience with RAG systems, agent orchestration, and all my shipped projects.",
    },
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'yo'],
      response: "Hey there! I'm Unni's AI assistant. I can tell you about his skills, projects, availability, or help you get in touch. What would you like to know?",
    },
    {
      keywords: ['thanks', 'thank you', 'cool', 'awesome', 'great', 'nice'],
      response: "Glad I could help! Feel free to explore the rest of the portfolio or reach out through the contact form if you'd like to work together. Is there anything else you'd like to know?",
    },
  ],

  chatFallback: "That's a great question! I'm an AI assistant for Unni T A, an AI Engineer specializing in RAG systems and LangGraph agents. You can ask me about his skills, projects, availability, or how to get in touch. What interests you most?",

  chatQuickReplies: [
    'What are your skills?',
    'Are you available?',
    'Show me projects',
    'How to contact you?',
  ],

  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'ai-features', label: 'AI Features' },
    { id: 'resume', label: 'Resume' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ],
};

// Backward-compatible exports for existing components
export const personal = PORTFOLIO_CONFIG.personal;
export const skills = PORTFOLIO_CONFIG.skills;
export const projects = PORTFOLIO_CONFIG.projects;
export const projectFilters = PORTFOLIO_CONFIG.projectFilters;
export const resume = PORTFOLIO_CONFIG.resume;
export const navLinks = PORTFOLIO_CONFIG.navLinks;
