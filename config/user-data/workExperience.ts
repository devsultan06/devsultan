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
    position: "Frontend Developer",
    period: "October 2024 – December 2024",
    shortDescription: "Delivered tailored web applications for clients as a freelance developer",
    responsibilities: [
      "Developed custom web applications using React.js, Tailwind CSS, and JavaScript",
      "Collaborated with clients, backend developers, and designers to build feature-rich solutions",
      "Managed full project lifecycle from wireframing to deployment and maintenance",
      "Maintained clear communication with clients and incorporated regular feedback",
      "Adapted quickly to client requirements, demonstrating problem-solving and technical flexibility"
    ]
  },

];
