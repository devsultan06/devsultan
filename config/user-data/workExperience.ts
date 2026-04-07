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
    position: "Frontend Engineering",
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
    company: "Freelance",
    position: "Full-Stack Developer",
    companyUrl: "http://one-growth.com/",
    period: "October 2024 – December 2024",
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
    company: "Freelance / Web3 Projects",
    position: "Solidity & Smart Contract Developer (Hackathon)",
    period: "February 2026 – March 2026",
    shortDescription: "Specializing in secure smart contract development and decentralized application architecture.",
    responsibilities: [
      "Designing and implementing secure, optimized smart contracts using Solidity.",
      "Utilizing Foundry for robust testing, security auditing, and automated deployment pipelines.",
      "Developing decentralized applications (dApps) with seamless blockchain integration.",
      "Optimizing gas consumption for contract interactions to improve cost-efficiency.",
      "Conducting code reviews and implementing security best practices to prevent vulnerabilities.",
    ]
  },
];

