// Data and long-form copy; headings and short labels live in their components.
const img = (name: string) => `/image-uploads/${name}`

export const profile = {
  name: 'Indrajeet Singh',
  tagline:
    'I build AI that survives production: models for the judgment calls, code for the parts that can’t be wrong. I’ve trained agentic workflows with LangChain and LangGraph, and most weekends I’m solving complex data structures and building applied AI systems next.',
  bio: 'Computer Science Engineering student at SRM IST building Agentic AI workflows, LLM applications, and performant backend systems.',
  photo: img('indrajeet-singh.jpg'),
  resume: '/Indrajeet.pdf',
  email: 'sihhhindra@gmail.com',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Sihhhindra', icon: '/socials/github.svg', color: '#181717' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/indrajeet-singh-b981bb287', icon: '/socials/linkedin.svg', color: '#0a66c2' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/sihhh_indraa/', icon: '/socials/leetcode.svg', color: '#FFA116' },
]

export const education = [
  { institution: 'SRM IST Kattankulathur', period: 'Aug 2023 – May 2027', logo: '/schools/srm.webp' },
]

export const experience = [
  {
    company: 'ZS Associates',
    role: 'Industrial Elective Project Trainee',
    period: 'Aug 2025 – Apr 2026',
    location: 'Chennai · Remote',
    logo: '/companies/zs.svg',
    summary:
      'Completed a 1-year industrial elective course with SRMIST focused on AI training, designing and experimenting with Agentic AI workflows, LLMs, vector embeddings, and semantic search.',
    points: [
      'Completed a 1 year industrial elective course focused on AI training.',
      'Designed and experimented with Agentic AI workflows, LLMs, vector embeddings, and semantic search using LangChain, LangGraph, and Model Context Protocol (MCP) for multi step reasoning and tool use.',
    ],
  },
]

// The site's gradients [front, side, top]: city boxes, towers, card glows and toolkit frames
export const palettes = [
  ['linear-gradient(224.9deg,#ffb5d1 9.7%,#6374ff 68.3%)', 'linear-gradient(180deg,#d980ff,#4c1ed7)', 'linear-gradient(270deg,#ffb5d1 9.7%,#6374ff 68.3%)'],
  ['linear-gradient(180deg,#57c8ff 7%,#faaedf 89.6%,#faaebd 120.4%)', 'linear-gradient(180deg,#676cd7,#b787ff)', 'linear-gradient(270deg,#57c8ff 7%,#faaedf 89.6%,#faaebd 120.4%)'],
  [
    'linear-gradient(0deg,#8fffc6 3.2%,#b2ffa6 54%,#faaedf 76.8%,#fd79ae 107%)',
    'linear-gradient(180deg,#c58dbf,#4a41c7)',
    'linear-gradient(90deg,#8fffc6 3.2%,#b2ffa6 54%,#faaedf 76.8%,#fd79ae 107%)',
  ],
  ['linear-gradient(218.4deg,#f3dd99 2.9%,#ff71b2 86%,#ce47ff 100%)', 'linear-gradient(180deg,#ce47ff,#ff72b1,#f7b6a2)', 'linear-gradient(270deg,#f3dd99 2.9%,#ff71b2 86%,#ce47ff 100%)'],
  ['linear-gradient(200deg,#f3dd99 0%,#f985c5 45%,#664ca3 100%)', 'linear-gradient(180deg,#9b7bff,#3b2f61)', 'linear-gradient(270deg,#f3dd99 0%,#f985c5 45%,#664ca3 100%)'],
]

export const projects = [
  {
    title: 'MultiRAG',
    description:
      'Content-aware multimodal RAG system for complex PDFs and document layouts using semantic chunking, cross-encoder reranking, and local LLM/VLM inference with 75% reduced hallucinations.',
    href: 'https://github.com/Sihhhindra',
    logo: '/projects/multirag.svg',
  },
  {
    title: 'Indic Sentiment Analysis',
    description:
      'Low-cost multilingual sentiment analysis for Indic languages using transformer models, parameter-efficient LoRA adaptation, and teacher-student knowledge distillation.',
    href: 'https://github.com/Sihhhindra/Low-cost-low-resources-multilingual-sentiment-analysis-using-PEFT-and-knowledge-distillation',
    logo: '/projects/sentiment-analysis.svg',
  },
  {
    title: 'Fraud Detection',
    description:
      'Ensemble learning framework for fraud detection in digital payments combining KNN, Random Forest, and Logistic Regression with SMOTE imbalance handling and PCA.',
    href: 'https://github.com/Sihhhindra/An-ensemble-learning-approach-for-fraud-detetion-in-digital-payments',
    logo: '/projects/fraud-detection.svg',
  },
]

// Peer-reviewed and technical research publications
export const publications: { title: string; venue: string; logo: string; authors: string[]; summary: string; link?: { href: string; label: string } }[] = [
  {
    title: 'An Ensemble Learning Approach for Fraud Detection in Digital Payments',
    venue: 'IEEE Conference',
    logo: '/venues/ieee.svg',
    authors: ['Indrajeet Singh'],
    summary:
      'An ensemble machine learning architecture for detecting fraudulent digital payment transactions, combining KNN, Random Forest, and Logistic Regression with SMOTE imbalance handling and PCA dimensionality reduction for superior precision and recall.',
    link: {
      href: 'https://github.com/Sihhhindra/An-ensemble-learning-approach-for-fraud-detetion-in-digital-payments',
      label: 'Read IEEE Paper & Code',
    },
  },
]

// Organisations named in the achievement descriptions, written there as {key}. Each renders as its icon and name.
type Org = { name: string; href?: string; logo?: string }
export const orgs: Record<string, Org> = {
  leetcode: { name: 'LeetCode', href: 'https://leetcode.com/u/sihhh_indraa/', logo: '/socials/leetcode.svg' },
  codeforces: { name: 'CodeForces', href: 'https://codeforces.com' },
  codechef: { name: 'CodeChef', href: 'https://www.codechef.com' },
  srm: { name: 'SRM Institute of Science and Technology', href: 'https://www.srmist.edu.in', logo: '/schools/srm.webp' },
  salesforce: { name: 'Salesforce', href: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=7295802', logo: '/orgs/salesforce.svg' },
}

export const achievements: {
  title: string
  highlight: string
  date: string
  description: string
  image: string
  full?: string
  focus?: string
}[] = [
  {
    title: 'Salesforce Certified Agentforce Specialist',
    highlight: 'Certified Specialist.',
    date: 'Dec 2025',
    description:
      'Officially certified by {salesforce} as an Agentforce Specialist (Credential ID: 7295802), validating expertise in architecting autonomous AI agents, multi-step agent actions, prompt engineering, and proactive reasoning systems.',
    image: img('salesforce-agentforce-achievement.svg'),
  },
  {
    title: 'LeetCode & Competitive Programming',
    highlight: '250+ Solved.',
    date: '2024 – Present',
    description:
      'Solved 250+ data structures and algorithms (DSA) problems across {leetcode}, {codeforces} and {codechef}, strengthening algorithmic intuition, dynamic programming, and time-space optimization.',
    image: img('leetcode-achievement.svg'),
  },
  {
    title: 'SRMJEEE Merit Scholarship',
    highlight: '75% Scholarship.',
    date: 'Aug 2023 – Present',
    description:
      'Awarded 75% SRMJEEE Merit Scholarship by {srm} in recognition of outstanding entrance examination rank and academic distinction in Bachelor of Technology in Computer Science and Engineering (9.16 CGPA).',
    image: img('scholarship-achievement.svg'),
  },
]

// Filter tabs for the toolkit grid, in display order: AI and data first, engineering next, then ML.
// Each tab has its own caption.
export const toolkitCaption = 'What my AI systems, data pipelines and backend services are built on.'
export const skillGroups = [
  { id: 'data', label: 'AI & data', caption: 'Agent frameworks, vector stores, RAG tools and relational databases.' },
  { id: 'eng', label: 'Engineering', caption: 'Cloud infrastructure, containers, CI/CD and deployment tooling.' },
  { id: 'ml', label: 'Machine learning', caption: 'Core programming languages, algorithms and scientific Python stack.' },
] as const

type Group = (typeof skillGroups)[number]['id']
const tool = (name: string, file: string, group: Group, href: string) => ({ name, icon: img(file), group, href })

export const skills = [
  tool('LangChain', 'LangChain.svg', 'data', 'https://www.langchain.com'),
  tool('LangGraph', 'LangChain.svg', 'data', 'https://www.langchain.com/langgraph'),
  tool('Ollama', 'ollama.svg', 'data', 'https://ollama.com'),
  tool('MCP', 'mcp.svg', 'data', 'https://modelcontextprotocol.io'),
  tool('MySQL', 'mysql.svg', 'data', 'https://www.mysql.com'),
  tool('SQL', 'sql.svg', 'data', 'https://en.wikipedia.org/wiki/SQL'),
  tool('AWS', 'AWS.svg', 'eng', 'https://aws.amazon.com'),
  tool('Docker', 'Docker.svg', 'eng', 'https://www.docker.com'),
  tool('Kubernetes', 'kubernetes.svg', 'eng', 'https://kubernetes.io'),
  tool('Jenkins', 'jenkins.svg', 'eng', 'https://www.jenkins.io'),
  tool('Git', 'Git.webp', 'eng', 'https://git-scm.com'),
  tool('GitHub', 'GitHub.webp', 'eng', 'https://github.com'),
  tool('Python', 'Python.webp', 'ml', 'https://www.python.org'),
  tool('C++', 'cpp.svg', 'ml', 'https://isocpp.org'),
  tool('NumPy', 'NumPy.webp', 'ml', 'https://numpy.org'),
  tool('pandas', 'pandas.webp', 'ml', 'https://pandas.pydata.org'),
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Research' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Connect' },
]
