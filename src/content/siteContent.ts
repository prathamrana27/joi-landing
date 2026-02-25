export type NavLink = {
  label: string;
  href: string;
};

export type Capability = {
  title: string;
  description: string;
  tag: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type PricingTier = {
  name: string;
  price: string;
  summary: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
};

export type FAQ = {
  question: string;
  answer: string;
};

const DOWNLOAD_URL =
  "https://joi-exe-bucket.s3.ap-south-1.amazonaws.com/JOI-Desktop-1.0.0-x64.exe.exe";

export const siteContent = {
  brand: "JOI",
  downloadUrl: DOWNLOAD_URL,
  navLinks: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security", href: "#security-governance" },
    { label: "Integrations", href: "#integrations-tools" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ] as NavLink[],
  hero: {
    badge: "Desktop AI Operator for Builders",
    headline: "AI desktop operator with control, memory, and automation.",
    subheadline:
      "JOI executes real workflows across your desktop stack with streaming chat, governed tool actions, and context-aware voice assistance.",
    positioning:
      "Generic chatbots can draft text. JOI can run your tools with policy, approvals, and traceability.",
    highlights: [
      "Real tool execution with multi-step planning",
      "Approval workflows for sensitive actions",
      "Voice + desktop context awareness",
      "Local RAG knowledge and full auditability",
    ],
    primaryCta: { label: "Download for Windows", href: DOWNLOAD_URL },
    secondaryCta: { label: "Book Demo", href: "#final-cta" },
    statTiles: [
      { label: "Median tool-run latency", value: "340ms" },
      { label: "Policy checks per action", value: "12+" },
      { label: "Background jobs/day", value: "250K" },
    ],
  },
  trustStrip: [
    "Security-Reviewed by Design Partners",
    "SOC 2 Program In Progress",
    "Built for Operator Workflows",
    "Trusted by Founders and Technical Teams",
    "Desktop-Native Control Layer",
  ],
  capabilities: [
    {
      tag: "Access",
      title: "Secure Identity and Desktop OAuth",
      description:
        "Email/password and Google desktop OAuth with session hardening and token lifecycle controls.",
    },
    {
      tag: "Execution",
      title: "Streaming AI + Multi-Step Tool Workflows",
      description:
        "Move from chat to action with chained operations, retries, and observable step execution.",
    },
    {
      tag: "Voice",
      title: "Speech In and Natural Voice Out",
      description:
        "Transcribe intent fast, respond with low-latency TTS, and keep the operator in flow.",
    },
    {
      tag: "Memory",
      title: "Persistent Preferences and Notes",
      description:
        "Remember communication style, team context, and decisions to reduce repetitive setup.",
    },
    {
      tag: "Governance",
      title: "Per-Tool Policies and Approvals",
      description:
        "Set allow, deny, or require approval at tool level with policy checks before execution.",
    },
    {
      tag: "Knowledge",
      title: "Local Indexing + Retrieval",
      description:
        "Ingest local files, resolve facts with RAG, and answer with grounded workspace knowledge.",
    },
    {
      tag: "Automation",
      title: "Routines, Reminders, Background Jobs",
      description:
        "Schedule recurring workflows, trigger reminders, and run unattended jobs with guardrails.",
    },
    {
      tag: "Observability",
      title: "Notifications and Audit Logs",
      description:
        "Track outcomes in real time and review complete action histories for accountability.",
    },
    {
      tag: "Context",
      title: "Desktop Awareness + Hotkeys",
      description:
        "Understand active windows and invoke JOI from keyboard-first shortcuts for fast control.",
    },
  ] as Capability[],
  howItWorks: [
    {
      title: "1. Set policy boundaries",
      description:
        "Define which tools can run automatically, which need approval, and which are blocked.",
    },
    {
      title: "2. Trigger JOI from chat, voice, or hotkey",
      description:
        "JOI parses intent, collects context, and builds an execution plan across connected tools.",
    },
    {
      title: "3. Approve and monitor outcomes",
      description:
        "Review planned actions, approve when required, and inspect every result in audit logs.",
    },
  ] as Step[],
  securityBullets: [
    "Tool-level policy matrix: allow / deny / require approval",
    "Signed action traces with user/session metadata",
    "Notification pipeline for sensitive and failed operations",
    "Role-ready controls for founders, operators, and teams",
  ],
  voiceDesktopBullets: [
    "Wake and trigger via keyboard shortcuts or command palette",
    "Live transcription optimized for fast operator requests",
    "Desktop context capture to reduce ambiguity before tool runs",
    "TTS responses for eyes-off execution loops",
  ],
  automationBullets: [
    "Recurring routines for reporting, prep, and follow-up",
    "Reminder workflows linked to tasks, calendar, and email",
    "Background jobs with retries and observable status",
    "Escalation hooks for exceptions and policy conflicts",
  ],
  integrationTools: [
    "App Control",
    "Web Search",
    "System Info",
    "Files",
    "Email",
    "Calendar / Tasks",
    "WhatsApp",
  ],
  testimonials: [
    {
      quote:
        "JOI moved us from assistant prompts to actual execution. Our operations lead now automates handoffs without waiting on engineering.",
      name: "Anita Roy",
      role: "Chief of Staff",
      company: "Deltaforge",
    },
    {
      quote:
        "Approval gates are the difference maker. We can let JOI run fast while keeping finance and customer workflows under explicit control.",
      name: "Marcus Lee",
      role: "Founder",
      company: "Northline Systems",
    },
    {
      quote:
        "The local retrieval and audit trail solved trust. Answers are grounded in our docs and every action has a clean trail to review.",
      name: "Priya Nair",
      role: "Head of Platform",
      company: "Sable Metrics",
    },
  ] as Testimonial[],
  pricing: [
    {
      name: "Starter",
      price: "$29/mo",
      summary: "For solo operators validating desktop AI workflows.",
      features: [
        "1 workspace",
        "Core tools and voice",
        "Local knowledge indexing",
        "Standard audit history",
      ],
      cta: "Download for Windows",
      ctaHref: DOWNLOAD_URL,
    },
    {
      name: "Pro",
      price: "$79/mo",
      summary: "For power users running daily governed automation.",
      features: [
        "5 workspaces",
        "Advanced policy controls",
        "Priority background jobs",
        "Extended audit retention",
      ],
      cta: "Book Demo",
      ctaHref: "#final-cta",
      featured: true,
    },
    {
      name: "Team",
      price: "Custom",
      summary: "For technical teams deploying JOI across roles.",
      features: [
        "Role-based governance",
        "Shared memory and templates",
        "Security and onboarding support",
        "Dedicated solution engineer",
      ],
      cta: "Talk to Sales",
      ctaHref: "#final-cta",
    },
  ] as PricingTier[],
  faqs: [
    {
      question: "How is JOI different from a web chatbot?",
      answer:
        "JOI is desktop-native and action-oriented. It executes real tools, enforces approvals, and tracks every step instead of only returning text.",
    },
    {
      question: "Can we require approval for specific tools?",
      answer:
        "Yes. Tool governance is configurable per integration with allow, deny, and require-approval modes.",
    },
    {
      question: "Does JOI work with local files and private knowledge?",
      answer:
        "Yes. JOI can index local documents for retrieval workflows and keep responses grounded in your workspace context.",
    },
    {
      question: "How are voice interactions handled?",
      answer:
        "JOI supports low-latency voice transcription for input and TTS for responses, so operators can run flows without constant typing.",
    },
    {
      question: "What can we audit after actions run?",
      answer:
        "Each execution includes timestamps, actor/session metadata, tool calls, approvals, and outcomes for compliance-ready review.",
    },
    {
      question: "Is JOI available for teams today?",
      answer:
        "Yes. JOI is available now. Download the desktop app or book a demo for team rollout planning.",
    },
  ] as FAQ[],
  finalCta: {
    title: "Deploy JOI on your desktop today.",
    description:
      "Download JOI now for Windows x64, or book a live demo to map JOI to your workflow stack.",
    primaryCta: { label: "Download for Windows", href: DOWNLOAD_URL },
    secondaryCta: { label: "Book Demo", href: "#" },
  },
  footerLinks: [
    { label: "Privacy", href: "#" },
    { label: "Security", href: "#security-governance" },
    { label: "Contact", href: "#final-cta" },
  ],
};
