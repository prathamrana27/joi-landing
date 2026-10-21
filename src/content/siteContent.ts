export type NavLink = {
  label: string;
  href: string;
};

export type Feature = {
  icon: FeatureIcon;
  title: string;
  description: string;
  size?: "wide" | "tall";
};

export type FeatureIcon =
  | "mail"
  | "calendar"
  | "folder"
  | "monitor"
  | "mic"
  | "repeat"
  | "plug"
  | "brain"
  | "book"
  | "sun";

export type Step = {
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Plan = {
  name: string;
  price: string;
  note: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  disabled?: boolean;
};

// The installer link can be changed at build time without touching code:
//   VITE_DOWNLOAD_URL=https://…/JOI-Setup-1.1.0.exe npm run build
// Where the release process puts installers (see joi-frontend/package.json "publish").
const DEFAULT_DOWNLOAD_URL =
  "https://joi-release.s3.ap-southeast-2.amazonaws.com/JOI-Setup-1.1.0.exe";

const DOWNLOAD_URL: string = import.meta.env.VITE_DOWNLOAD_URL || DEFAULT_DOWNLOAD_URL;

export const siteContent = {
  brand: "JOI",
  downloadUrl: DOWNLOAD_URL,
  downloadMeta: "Windows 10 & 11 · 64-bit · Free during early access",

  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Privacy", href: "#privacy" },
    { label: "Safety", href: "#safety" },
    { label: "How it works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ] as NavLink[],

  hero: {
    eyebrow: "Your personal AI, on your desktop",
    headlineStart: "The assistant that",
    headlineAccent: "actually does",
    headlineEnd: "things.",
    rotating: ["Reads your inbox.", "Plans your day.", "Finds your files.", "Runs your computer."],
    subheadline:
      "JOI lives on your computer. Ask in plain words, typed or spoken, and it handles your email, calendar, files and apps, and checks with you before anything important.",
    secondaryCta: { label: "See what it can do", href: "#features" },
  },

  marquee: [
    "Summarise my unread email",
    "What's on my calendar today?",
    "Find the invoice from March",
    "Turn the brightness down",
    "Draft a reply to Priya",
    "Send the notes to #team on Slack",
    "Create a Meet link for 4 pm",
    "Every morning, brief me at 8",
    "Take a screenshot",
    "Add milk to my tasks",
  ],

  features: [
    {
      icon: "mail",
      title: "Your inbox, handled",
      description:
        "JOI reads and summarises your Gmail, drafts replies in your voice, and only sends when you say so.",
      size: "wide",
    },
    {
      icon: "calendar",
      title: "Your day, planned",
      description: "Checks your schedule, books events and keeps your task list in order.",
    },
    {
      icon: "monitor",
      title: "Your computer, on command",
      description: "Media, brightness, windows, screenshots, apps: just ask.",
    },
    {
      icon: "repeat",
      title: "Routines that run themselves",
      description:
        "“Every morning, summarise my unread email.” JOI runs it in the background and notifies you with the result.",
      size: "tall",
    },
    {
      icon: "folder",
      title: "Files, found",
      description: "Search, read and organise documents in your JOI workspace.",
    },
    {
      icon: "mic",
      title: "Just talk",
      description: "Speak your request and hear the answer back. Hands-free when you need it.",
    },
    {
      icon: "plug",
      title: "Google Workspace & Slack",
      description:
        "Drive, Docs, Sheets, Contacts and Meet, plus reading and sending Slack messages, all on your own accounts.",
      size: "wide",
    },
    {
      icon: "brain",
      title: "Remembers what matters",
      description: "Your preferences and notes, kept and editable any time.",
    },
    {
      icon: "book",
      title: "Knows your documents",
      description: "Add your files and ask questions about them in plain language.",
    },
    {
      icon: "sun",
      title: "A morning briefing",
      description: "Weather, today's schedule and unread email, ready when you are.",
    },
  ] as Feature[],

  privacy: {
    title: "Private by design.",
    description:
      "Most assistants send every word you type to someone else's servers and need a paid AI subscription. JOI's AI model runs right on your computer.",
    points: [
      {
        title: "The AI runs on your machine",
        body: "Your conversations are processed by a model installed on your own computer, not a cloud chatbot.",
      },
      {
        title: "No AI subscription or API key",
        body: "Everything JOI needs to think comes with it. Nothing to sign up for, nothing to paste.",
      },
      {
        title: "Your accounts stay yours",
        body: "Every person connects their own Google and Slack accounts. JOI never shares access between people.",
      },
    ],
    footnote:
      "Services you connect (like Gmail or Slack) and web search talk to their own providers, as they always do.",
  },

  safety: {
    title: "It asks before it acts.",
    description:
      "Letting software act for you takes trust. JOI is built so that nothing important happens without your say-so.",
    points: [
      "See exactly what JOI wants to do, then approve or deny it",
      "Choose per tool: always allow, ask first, or never",
      "Never sends to an address you didn't give it",
      "Answers come from your real data, not made-up details",
      "Every action is written to your activity log",
    ],
  },

  steps: [
    {
      title: "Install JOI",
      description: "Download the installer and sign in with email or Google. Setup takes a few minutes.",
    },
    {
      title: "Connect what you use",
      description: "Optionally link your Google account and Slack. Each takes one click and you can disconnect any time.",
    },
    {
      title: "Press Ctrl + Alt + J",
      description: "JOI appears instantly, even from the tray. Type or talk, and watch it work.",
    },
  ] as Step[],

  plans: [
    {
      name: "Early access",
      price: "Free",
      note: "Everything JOI can do today.",
      features: [
        "Local AI model, no subscription",
        "Email, calendar, files and computer control",
        "Google Workspace and Slack",
        "Voice, routines and morning briefing",
        "Approvals and activity log",
      ],
      cta: "Download for Windows",
      ctaHref: DOWNLOAD_URL,
      featured: true,
    },
    {
      name: "JOI Pro",
      price: "Coming soon",
      note: "For people who want even more.",
      features: [
        "A larger, smarter model when you need it",
        "Reach JOI from your phone",
        "Priority support",
      ],
      cta: "Coming soon",
      ctaHref: "#",
      disabled: true,
    },
  ] as Plan[],

  faqs: [
    {
      question: "Is JOI free?",
      answer: "Yes. JOI is free during early access, with every current feature included.",
    },
    {
      question: "What do I need to run it?",
      answer:
        "A Windows 10 or 11 PC (64-bit) with at least 8 GB of RAM; 16 GB is better. Plan for about 6 GB of free disk space for JOI and its AI model. A graphics card makes replies faster but isn't required.",
    },
    {
      question: "Does my data leave my computer?",
      answer:
        "Your chats are processed by the AI model on your own computer. When you connect services like Gmail or Slack, or ask JOI to search the web, those requests go to those services, as they normally would.",
    },
    {
      question: "Can JOI do things without asking me?",
      answer:
        "Only what you allow. Sending email, changing your calendar, typing on your computer and other sensitive actions wait for your approval by default, and you can change that per tool.",
    },
    {
      question: "Which accounts can I connect?",
      answer:
        "Google (Gmail, Calendar, Tasks, Drive, Docs, Sheets, Contacts and Meet) and Slack. Each person connects their own accounts.",
    },
    {
      question: "Is there a Mac or phone version?",
      answer: "Not yet. JOI is Windows-first today.",
    },
  ] as FAQ[],

  finalCta: {
    title: "Meet the assistant that gets things done.",
    description: "Free during early access. Installs in minutes.",
  },

  footerLinks: [
    { label: "Features", href: "#features" },
    { label: "Privacy", href: "#privacy" },
    { label: "FAQ", href: "#faq" },
    { label: "About", href: "#about-developer" },
  ] as NavLink[],
};
