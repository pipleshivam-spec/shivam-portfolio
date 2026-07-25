export interface PersonalInfo {
  name: string;
  initials: string;
  tagline: string;
  statusTag: string;
  typedRoles: string[];
  headlineDesktop: string;
  headlineMobile: string;
  description: string;
  aboutHeading: string;
  aboutSubheading: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  location: string;
  shortLocation: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  profileImage: string;
  profileImageAlt: string;
}

export interface MetricItem {
  id: string;
  targetNumber: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  skills: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  isCurrent?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl: string;
  isFeatured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  score: string;
  period: string;
  details: string;
  icon: string;
}

export interface AIMatchingDemoData {
  title: string;
  description: string;
  placeholder: string;
  sampleText: string;
  defaultScore: number;
  matchedRole: string;
  keywordsExtracted: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  metrics: MetricItem[];
  skills: SkillCategory[];
  experience: WorkExperience[];
  projects: Project[];
  education: EducationItem[];
  aiDemo: AIMatchingDemoData;
  navigation: { label: string; href: string }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Shivam Piple",
    initials: "S.P.",
    tagline: "AUTOMATION ARCHITECT",
    statusTag: "Available for projects",
    typedRoles: [
      "Automation Engineer",
      "RPA Developer",
      "Power Platform Developer",
      "AI Automation Specialist"
    ],
    headlineDesktop: "Shivam Piple",
    headlineMobile: "Engineering Autonomous Futures.",
    description: "Transforming repetitive business processes into intelligent, automated workflows through AI, RPA, and low-code excellence.",
    aboutHeading: "Engineering Efficiency",
    aboutSubheading: "The intersection of Logic and Intelligence.",
    aboutParagraph1: "I specialize in bridging the gap between manual complexity and digital precision. My work focuses on building resilient RPA systems and AI-integrated applications that handle the 'boring stuff' so humans can focus on strategy.",
    aboutParagraph2: "I specialize in creating bespoke AI solutions that bridge the gap between complex neural architectures and practical business value. My approach is rooted in technical precision and architectural elegance.",
    location: "Vadodara, Gujarat, India",
    shortLocation: "Vadodara, IN",
    email: "pipleshivam@gmail.com",
    github: "https://github.com/pipleshivam-spec",
    linkedin: "https://linkedin.com",
    resumeUrl: "#",
    profileImage: "/image/Screenshot 2026-07-26 022342.png",
    profileImageAlt: "Shivam Piple — Automation Engineer"
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "AI Engine", href: "#ai-engine" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ],

  metrics: [
    {
      id: "metric-1",
      targetNumber: 17,
      suffix: "+",
      label: "Workflows Delivered",
      sublabel: "98% Efficiency Gain"
    },
    {
      id: "metric-2",
      targetNumber: 92,
      suffix: "%",
      label: "Extraction Accuracy",
      sublabel: "Document & LLM Parsing"
    },
    {
      id: "metric-3",
      targetNumber: 60,
      suffix: "%",
      label: "Faster Approvals",
      sublabel: "Automated Routing & SLA"
    },
    {
      id: "metric-4",
      targetNumber: 4,
      suffix: "+",
      label: "Hours Saved Daily",
      sublabel: "Per Operational User"
    }
  ],

  skills: [
    {
      id: "skill-1",
      category: "Power Platform",
      icon: "bolt",
      skills: ["PowerApps", "Power Automate", "Power BI", "Dataverse", "ALM Tools"]
    },
    {
      id: "skill-2",
      category: "AI & Automation",
      icon: "psychology",
      skills: ["OpenAI API", "RPA (UiPath)", "LLM Chains", "Python", "LangChain", "Vector DBs"]
    },
    {
      id: "skill-3",
      category: "Backend & API",
      icon: "code",
      skills: ["Node.js", "FastAPI", "MongoDB", "SQL / Postgres", "REST APIs", "Docker"]
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Power Platform & RPA Developer Intern",
      company: "RPA Unicorn",
      period: "2024",
      location: "Vadodara, Gujarat",
      description: "Developed end-to-end automation solutions using Power Platform and UiPath. Architected database structures in Dataverse and optimized legacy Excel workflows by 40%.",
      achievements: [
        "Architected enterprise data models in Microsoft Dataverse with custom security roles",
        "Optimized legacy Excel processing workflows resulting in a 40% speed enhancement",
        "Built automated exception handling and logging pipelines using UiPath Orchestrator"
      ],
      isCurrent: true
    },
    {
      id: "exp-2",
      role: "Customer Support Executive",
      company: "Concentrix Imperia",
      period: "2022 - 2023",
      location: "Vadodara, Gujarat",
      description: "Handled high-volume client interactions, maintaining a 98% CSAT score. Identified repetitive ticket types which later sparked my interest in workflow automation.",
      achievements: [
        "Maintained 98% CSAT score across high-pressure multi-channel ticket queries",
        "Pioneered internal knowledge base tagging to streamline team resolution speed by 25%",
        "Identified recurring manual bottlenecks that inspired transition into full-time RPA"
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "MAISON",
      category: "FULL-STACK",
      tag: "Full-Stack E-Commerce",
      description: "Premium e-commerce experience with headless CMS integration and hyper-optimized checkout flow.",
      longDescription: "A high-fashion luxury e-commerce application built with React, Node.js microservices, and a custom GraphQL headless API for lightning-fast catalog filtering.",
      techStack: ["REACT", "NODE.JS", "TAILWIND", "GRAPHQL"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFMOLTKnKYfoqJ8tNFgAz9ZCrTEPlnoHcGhMTzBrFeQZp5Y4iFk9h8CD0MevIN0juawmZeSP6CwZ_WAxSHMgVZFE4X_uUYxgaktNTFl56JUpns9TZ3pA5np3F6pfO49u58yrR5_KLtsVLTiFhkhQ08MikbIQwqYjMeJFSxQDhm0xwBj8XSKxfSZE7IWAHmqCnpF0aL9QuyDsw3IizSEMwG-Zfg2lKrmc9x-P679OhCe44zjQUxDQ0q",
      imageAlt: "MAISON e-commerce dashboard preview",
      liveUrl: "#",
      githubUrl: "https://github.com/pipleshivam-spec"
    },
    {
      id: "proj-2",
      title: "LazyCricScore",
      category: "MOBILE",
      tag: "Android Application",
      description: "Real-time cricket update engine designed for low-bandwidth environments and instant notifications.",
      longDescription: "Native Android application built for low-latency live score polling, background Firebase cloud messaging, and lightweight statistical visualizations.",
      techStack: ["JAVA", "FIREBASE", "ANDROID", "REST API"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrEnJWEJVoWu9EGArvSJMccQfxZVLyYr1j80BOtL9utLEm2_k1sCBBOUV1USFMSkUdX6wgtQdX9tYspCK1MKTVGx5kvYV-cMZrmb1NNAGGtil2sR7x58yPWu4Aq-t9ikJtKXLgJOapkyJCLETN4AwOmdf07NoOXPEnh6Zly_V33p06moMZu8bFQsmS64al-oLbjZYIBtdVZeb9G64QzKQ6InXFK2uXVe7NB0mz-DmldZDzn4icvd6e",
      imageAlt: "LazyCricScore mobile app dashboard",
      liveUrl: "#",
      githubUrl: "https://github.com/pipleshivam-spec"
    },
    {
      id: "proj-3",
      title: "Job Search Automation Agent",
      category: "AI AGENT",
      tag: "92% ACCURACY",
      description: "Autonomous Python agent that scrapes LinkedIn/Indeed, parses descriptions via GPT-4, and generates personalized cover letters automatically.",
      longDescription: "An intelligent autonomous agent that extracts targeted job postings, evaluates candidate fit against custom vector embeddings, and drafts tailored application materials automatically.",
      techStack: ["GPT-4", "SELENIUM", "PANDAS", "PYTHON"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1iDs6cWXJTQCdRxV7FeRfKO4AtC23f9GoVezUYTo9cV3G9UbvjvSr4QpH8uejmEujnbQgr-DMugLEOnMmT0BWUtr0f8J8w6YlTKvTB1sY5h_VXjOwAl-Z23E2lnV8o7QGX0juy28pPDgGP90tAaQeF_bQR_luMGI_wqsvwgP7LKALV4GRUhSRAT1a-Ijuwd6yTLoY_rFh0Atah2VRpS2BaWPL9nBryerEfbxG-5QssL6qqlPHqAkh",
      imageAlt: "AI Job Search Agent terminal dashboard",
      liveUrl: "#",
      githubUrl: "https://github.com/pipleshivam-spec",
      isFeatured: true
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Master of Computer Applications (MCA)",
      institution: "SVIT College, Vasad",
      score: "CGPA: 7.44",
      period: "2023 - Present",
      details: "Specializing in Distributed Systems, Artificial Intelligence, and Software Engineering Principles.",
      icon: "school"
    },
    {
      id: "edu-2",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sardar Patel University",
      score: "CGPA: 6.55",
      period: "2020 - 2023",
      details: "Comprehensive coursework in Database Management Systems, Data Structures, OOP, and Web Technologies.",
      icon: "history_edu"
    }
  ],

  aiDemo: {
    title: "AI Matching Engine",
    description: "Experience a simplified version of my JobFit AI parsing logic below.",
    placeholder: "Paste job description here... (e.g. We are seeking a Senior RPA & Power Platform Engineer proficient in UiPath, Dataverse, OpenAI API, and automated workflows...)",
    sampleText: "We are seeking an Automation Engineer to design, deploy, and scale UiPath bots, Power Platform apps, and custom Python GPT-4 agents. Requires strong background in REST APIs, Dataverse schema design, and CI/CD pipelines.",
    defaultScore: 89,
    matchedRole: "Matched: Senior Automation Engineer",
    keywordsExtracted: ["UiPath RPA", "Power Platform", "Dataverse", "GPT-4 / OpenAI", "Python Backend"]
  }
};
