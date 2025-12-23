// config/user-data/tech-stack.ts
export const TechStackGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "Flutter",
      "Firebase",
      "Shadcn/Material UI",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Supabase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Figma", "Vercel", "Vscode"],
  },
];

export const TechStackSection = () => {
  return (
    <section className="container mx-auto px-4 mb-16">
      <h2 className="text-2xl font-bold mb-2">My Tech Stack</h2>
      <p className="text-base text-zinc-300 flex  mb-8 items-start gap-2">
        <span>🧑‍💻</span> Tools I rely on daily to build clean, scalable, and
        delightful digital experiences, from code to deployment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {TechStackGroups.map((group, index) => (
          <div
            key={index}
            className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className="text-sm bg-zinc-700 text-white px-3 py-1 rounded-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
