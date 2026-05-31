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
    company: "Openhealth",
    position: "Frontend Engineer",
    companyUrl: "https://openhealthcoop.com",
    period: "April 2025 – June 2025",
    shortDescription: "Worked on major frontend revamp and internal tools during a 3-month internship",
    responsibilities: [
      "Migrated the frontend codebase from Create React App (CRA) to Vite for faster builds and improved developer experience",
      "Redesigned and developed the landing page and user dashboard using React and Tailwind CSS",
      "Built and integrated an admin dashboard with API endpoints",
      "Created a functional chatbot interface and connected it with backend services",
      "Provided UI/UX suggestions to improve user experience and accessibility",
      "Advised the team on modern frontend best practices and user data security",
      "Collaborated with backend developers to ensure seamless integration"
    ]



  },
  {
    company: "Korvix Event",
    position: "Full-Stack Lead Engineer",
    period: "April 2026 – Present",
    responsibilities: [
      "Engineered a high-performance event management platform featuring an automated digital ticketing system with dynamic QR codes and real-time entry validation.",
      "Integrated Paystack payment gateway with robust webhook handling to ensure instant transaction verification and secure, automated ticket distribution.",
      "Architected a complex multi-role ecosystem including User, Organizer, Admin, Support, and Operation Manager dashboards with granular permission controls and specialized tooling.",
      "Developed advanced event modules including Livestream access fulfillment, interactive Seat Mapping, and VIP Table management for physical and hybrid events.",
      "Built scalable serverless infrastructure using Supabase Edge Functions to handle high-volume transactional emails and real-time payment \"pings\" for instant fulfillment.",
      "Managed the entire product lifecycle, from database schema design and multi-tenant security policies to full-scale production deployment and performance monitoring."
    ]
  },
  {
    company: "Freelance, Onegrowth",
    position: "Full-Stack Developer",
    companyUrl: "http://one-growth.com/",
    period: "February 2026 – March 2026",
    shortDescription: "Delivered tailored web applications for clients as a freelance developer",
    responsibilities: [
      "Designed and built a high-performance Landing Page using Next.js and Tailwind CSS, focusing on a modern and clean look.",
      "Built the full-stack architecture for the platform, including the Super Admin panel and the User Dashboard.",
      "Developed key features such as an automated newsletter system and a professional PDF receipt generator using Puppeteer.",
      "Created the backend system using Node.js and Prisma to manage accounts, content, and payments.",
      "Managed the entire product lifecycle from initial design and development to full deployment."
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

