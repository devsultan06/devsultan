export interface IWorkExperience {
  company: string;
  companyUrl?: string;
  projectUrl?: string;
  position: string;
  period: string;
  responsibilities: string[];
  shortDescription?: string;
}

export const UserWorkExperienceData: IWorkExperience[] = [

  {
    company: "Blinqpay",
    position: "Frontend Engineer",
    companyUrl: "https://blinqpay.com",
    period: "June 2026 – Present",
    shortDescription: "Engineering embedded finance portals, investment platforms, the Qwid brand website, and FX rate distribution systems",
    responsibilities: [
      "Architected core modules for the Embedded Finance Admin portal (partners, customers, virtual accounts, KYC) and engineered the Rate Pusher app for centralized FX rate aggregation and markup distribution.",
      "Built main features for the Investment web platform, including liquidations management, wallet integrations, analytics tracking, and investor detail dashboards.",
      "Developed the Qwid brand website and integrated secure onboarding and 2FA authentication flows for the Qwid Partner Portal."
    ]
  },
  {
    company: "Openhealth",
    position: "Frontend Engineer",
    companyUrl: "https://openhealthcoop.com",
    period: "April 2025 – June 2025",
    shortDescription: "Worked on major frontend revamp and internal tools during a 3-month internship",
    responsibilities: [
      "Migrated the frontend codebase from Create React App (CRA) to Vite, improving build speed and development workflow.",
      "Redesigned and developed the landing page, user dashboard, and admin dashboard using React and Tailwind CSS.",
      "Developed an interactive chatbot interface and collaborated with backend developers to secure and integrate endpoints.",
      "Provided UI/UX suggestions to improve accessibility, user experience, and modern frontend best practices."
    ]

  },
  {
    company: "Korvix Event",
    position: "Full-Stack Lead Engineer",
    period: "January 2026 – June 2026",
    responsibilities: [
      "Engineered an event ticketing platform with real-time QR code validation and integrated Paystack payment processing with webhook handlers for ticket distribution.",
      "Architected a multi-role dashboard ecosystem (User, Organizer, Admin, Support) featuring permission controls, livestreaming, seat mapping, and VIP table management.",
      "Built serverless infrastructure via Supabase Edge Functions for transactional services, managing the entire database design, security policies, and deployment lifecycle."
    ]
  },
  {
    company: "Freelance, Onegrowth",
    position: "Full-Stack Developer",
    companyUrl: "http://one-growth.com/",
    period: "February 2026 – March 2026",
    shortDescription: "Delivered tailored web applications for clients as a freelance developer",
    responsibilities: [
      "Designed and built a high-performance landing page, Super Admin panel, and User Dashboard using Next.js and Tailwind CSS.",
      "Developed the backend architecture using Node.js, Prisma, and database systems, implementing automated newsletters and Puppeteer-driven PDF generation.",
      "Managed the entire product lifecycle from initial design and database schemas to production deployment."
    ]

  },
  {
    company: "Blockagram",
    position: "Full-Stack Product Engineer (Agency).",
    period: "May 2026",
    responsibilities: [
      "Designed and built a human-centered Web3 experience platform focusing on upstream product strategy, brand narrative architecture, and behavioral journey mapping.",
      "Developed interactive brand infrastructure and visual identity systems to help Web3 founders establish market positioning and clear product narratives.",
      "Engineered the interfaces and flow for \"Builder's Therapy,\" a cognitive product clarity sprint offering diagnostic UX reports and onboarding roadmaps for founders.",
      "Created content-driven sections for research publications, interactive case studies, and educational workshop details addressing Web3 trust and adoption.",
    ]
  },

];

