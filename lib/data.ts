export const profile = {
  name: "Muhammad Saad Ayaz",
  title: "AI/ML Engineer",
  tagline: "Agentic AI, LLMs & RAG Systems",
  location: "Karachi, Pakistan",
  email: "saadayaz32@gmail.com",
  phone: "+92 335-2178900",
  linkedin: "https://linkedin.com/in/saad-ayaz-b76411280",
  github: "https://github.com/saadayazzzz",
  summary:
    "AI/ML Engineer with ~2 years building and deploying production AI systems across LLM applications, agentic pipelines, and computer vision. Hands-on with multi-agent orchestration (LangGraph), RAG, FastAPI, and full-stack deployment, owning features end to end from model integration to production.",
  roles: [
    "Agentic AI Engineer",
    "LLM & RAG Builder",
    "Multi-Agent Orchestrator",
    "Computer Vision Engineer",
    "Full-Stack AI Developer",
  ],
};

export const stats = [
  { value: 2, suffix: "+", label: "Years in production AI" },
  { value: 4, suffix: "", label: "Companies & teams" },
  { value: 9, suffix: "", label: "Agents in JARVIS" },
  { value: 24, suffix: "", label: "Service checks monitored" },
];

export const skills = [
  {
    title: "AI / ML & LLMs",
    icon: "🧠",
    items: [
      "Python", "LLMs (OpenAI, Claude, Gemini)", "RAG", "LangGraph", "LangChain", "NLP",
      "Computer Vision", "PyTorch", "TensorFlow", "Generative AI", "Agentic AI",
    ],
  },
  {
    title: "Backend & Infra",
    icon: "⚙️",
    items: [
      "FastAPI", "REST API", "Django", "django-tenants", "RabbitMQ", "Redis", "PostgreSQL",
      "Supabase", "Playwright", "Ollama", "ComfyUI", "Docker", "Celery", "Production Deployment",
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: "🎨",
    items: ["React", "Next.js", "TypeScript", "Vite", "Node.js", "Capacitor (Android/iOS)", "Git & GitHub"],
  },
  {
    title: "Languages",
    icon: "💻",
    items: ["Python", "TypeScript / JavaScript", "Java", "C#", "SQL", "Node.js"],
  },
];

export const experience = [
  {
    role: "AI/ML Engineer",
    company: "National Center for Cyber Security (NCCS), NED University",
    period: "06/2026 – Present",
    current: true,
    points: [
      "Building Attack-Eye, a multi-tenant security scanning platform (Django, django-tenants, Celery, RabbitMQ, PostgreSQL, Redis) with Ollama for local LLM inference and Uptime Kuma monitoring across 24 service checks.",
      "Delivered an end-to-end on-premise, white-labeled deployment for LuckyOne (Docker, Nginx reverse proxy with TLS, multi-tenant hostname routing) and diagnosed production blockers spanning static-asset delivery, message-broker compatibility, and build dependencies.",
      "Shipped post-launch dashboard features (real-time Alerts panel, per-tenant Team Activity view) with schema migrations across every tenant.",
    ],
  },
  {
    role: "Software Engineer",
    company: "KMNR Engineering Pvt Ltd",
    period: "06/2025 – 06/2026",
    points: [
      "Built an internal Vacation Request System (Blazor, .NET, SQL) tracking leave balances across four leave types, and Skills Hub, a skill-tracking system giving managers visibility into team progress.",
    ],
  },
  {
    role: "AI/ML Trainee Engineer",
    company: "Enterprise64",
    period: "11/2024 – 02/2025",
    points: [
      "Developed a real-time facial-recognition attendance system for an HR platform using CCTV feeds (MediaPipe, face_recognition, dlib).",
      "Built a voice-based PTO request system using LLMs (Gemini) and OpenAI Whisper V3 with automatic leave-type suggestion.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Softech Worldwide",
    period: "09/2023 – 11/2023",
    points: [
      "Developed and fine-tuned models for object/vehicle detection and a facial-recognition system for detection and verification.",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  stack: string[];
  points: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "JARVIS",
    subtitle: "Multi-Agent AI Growth & Content Platform · solo-built, zero budget",
    stack: ["Python", "FastAPI", "PostgreSQL", "Next.js", "Docker"],
    featured: true,
    link: "https://github.com/saadayazzzzz/Multi-AI-Agents",
    points: [
      "Architected a voice-controlled, 9-agent AI operating system covering content creation, AI-search visibility scoring, outbound sales automation, and AI video generation, driven by one natural-language command layer and a provider-agnostic orchestration engine.",
      "Built a voice-first control console (Next.js, Web Speech API, WebSocket) with live agent task status, plus an autonomous background worker so scheduled tasks keep running independent of the UI.",
      "Engineered an LLM abstraction layer with hot-swappable providers (Gemini, OpenAI, Claude) and a cascading image-generation fallback chain (OpenRouter → OpenAI → native → Pollinations).",
      "Built GEO (Generative Engine Optimization), an original pipeline scoring brand visibility in AI answer engines (ChatGPT, Perplexity, Google AI Overviews) against mainstream competitors on a 0–100 presence/citation/share-of-voice scale.",
      "Developed an AI video pipeline (script → free TTS → B-roll via local ComfyUI/Hugging Face → ffmpeg with captions → optional YouTube upload) entirely on free/self-hosted infra.",
      "Enforced approval guardrails on every publishing/outreach surface; secured the control plane with token auth; deployed via Docker Compose and Cloudflare Tunnel.",
    ],
  },
  {
    name: "AI-Powered Sales & Automation Platform",
    subtitle: "Multi-agent B2B lead generation & outreach",
    stack: ["Python", "FastAPI", "PostgreSQL", "Next.js", "Playwright"],
    points: [
      "Designed a multi-agent orchestration system routing natural-language tasks to specialized agents (sales, content, GEO/visibility, video) via an LLM-driven tool-calling orchestrator (Claude, GPT, Gemini).",
      "Built a self-hosted B2B lead-gen engine: signal-based LinkedIn sourcing, AI lead scoring, automated pitch/outreach drafting, with Notion CRM sync.",
      "Integrated Playwright-based LinkedIn automation with per-seat daily rate limits and a manual-approval gate on every outbound send; Postgres-backed async task queue decouples the API from long-running agent work.",
      "Real-time operations dashboard (Next.js, TypeScript, WebSocket); retrofitted bearer-token auth across the API and deployed via Cloudflare Tunnel with CORS-hardened access.",
    ],
  },
  {
    name: "Real-Time Voice AI Agent",
    subtitle: "Full-duplex voice agent on the OpenAI Realtime API",
    stack: ["OpenAI Realtime API", "FastAPI", "Vapi", "Docker"],
    link: "https://github.com/saadayazzzzz/AI-Voice-Agent",
    points: [
      "STT, inference and synthesis in one connection; transport-agnostic browser/phone (Vapi) bridge, server-side VAD barge-in handling, idempotent transcript writes, 23-case test suite.",
    ],
  },
  {
    name: "Multi-Agent Job-Matching Pipeline",
    subtitle: "Scorer + Drafter agents on a conditional state graph",
    stack: ["LangGraph", "FastAPI", "React"],
    link: "https://github.com/saadayazzzzz/Multi-Agent-Job-Matching-Pipeline",
    points: ["Two-agent LangGraph pipeline (Scorer + Drafter), conditional state graph, FastAPI + React."],
  },
  {
    name: "SSU FitTest",
    subtitle: "Cross-platform fitness testing app",
    stack: ["React", "Capacitor", "Supabase", "MediaPipe"],
    points: [
      "Web + Android app: offline on-device rep counting (MediaPipe Pose), GPS run tracking, offline-first Supabase sync (RLS), SVG analytics.",
    ],
  },
];

export const education = [
  {
    degree: "BS, Computer Science",
    school: "PAF-KIET (Karachi Institute of Economics & Technology)",
    period: "01/2020 – 08/2024",
  },
  {
    degree: "Intermediate, Pre-Engineering",
    school: "Delhi Science & Commerce College",
    period: "08/2017 – 05/2019",
  },
];

export const certifications = [
  "ML Specialization – AI Python for Everybody (in progress)",
  "Git & GitHub",
  "Cloud Computing",
  "DevOps",
  "DeepLearning-AI · University of Michigan · Coursera",
];
