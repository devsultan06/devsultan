import { UserProjectsData } from "../../config/user-data/projects";
import Image from "next/image";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section className="container mx-auto px-4 mb-16">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
           <div>
          <Link
            href="/projects"
            className="text-base hover:text-zinc-400 flex items-center gap-1 group"
          >
            <span className="underline group-hover:decoration-wavy decoration-1">
              view all
            </span>
            <span className="transition-transform duration-200 transform group-hover:rotate-90">
              ↗
            </span>
          </Link>
        </div>
      </div>
      <div className="space-y-24">
        {UserProjectsData.map((project, index) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row  gap-8 items-start"
          >
            {index % 2 === 1 && (
              <div className="hidden lg:block md:w-[300px] flex-shrink-0">
                <Image
                  src={project.previewImage}
                  width={300}
                  height={180}
                  alt={`${project.title} Preview`}
                  className="rounded-lg shadow-lg transform rotate-12 transition duration-300 hover:rotate-0 max-w-[300px] max-h-[180px]"
                />
              </div>
            )}
            {
              <div className="block lg:hidden  md:w-[300px] flex-shrink-0">
                <Image
                  src={project.previewImage}
                  width={300}
                  height={180}
                  alt={`${project.title} Preview`}
                  className="rounded-lg shadow-lg  transition duration-300  max-w-[300px] max-h-[180px]"
                />
              </div>
            }
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold underline hover:decoration-wavy">
                <Link href={project.url} target="_blank">
                  {project.title}
                </Link>
              </h3>
              <p className="text-zinc-400">{project.role}</p>
              <p className="text-zinc-300 leading-relaxed">
                {project.description}
              </p>
              <Link
                href={project.url}
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-100 group"
                target="_blank"
              >
                <span className="underline group-hover:decoration-wavy">
                  {project.url}
                </span>
                <span className="transition-transform duration-200 transform group-hover:rotate-90">
                  ↗
                </span>
              </Link>
            </div>
            {index % 2 === 0 && (
              <div className="hidden lg:block md:w-[300px] flex-shrink-0">
                <Image
                  src={project.previewImage}
                  width={300}
                  height={180}
                  alt={`${project.title} Preview`}
                  className="rounded-lg shadow-lg transform -rotate-12 transition duration-300 hover:rotate-0 max-w-[300px] max-h-[180px]"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20 mb-12">
        <Link
          href="/projects"
          className="group relative px-10 py-4 overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 transition-all hover:border-zinc-500 hover:bg-zinc-800/50 shadow-2xl"
        >
          <div className="absolute inset-0 w-1 bg-zinc-400/10 transition-all duration-500 group-hover:w-full" />
          <span className="relative flex items-center gap-3 text-md font-medium">
            View all projects
          </span>
        </Link>
      </div>
    </section>

  );
};
