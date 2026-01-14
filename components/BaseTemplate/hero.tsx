import Link from "next/link";
import { BaseTemplate } from "../../config/app-data/templates/base";
import { UserSocialsData } from "../../config/user-data/socials";
import { BlurFade } from "../magicui/blur-fade";

export const HeroSection = () => {
  return (
    <header className="container mx-auto px-4 py-8">
      <nav className="flex gap-3 items-center mb-16">
        <Link
          href="/"
          className="text-base hover:text-zinc-400 flex items-center gap-1 group"
        >
          <span className="underline group-hover:decoration-wavy decoration-1">
            Home
          </span>
          <span className="transition-transform duration-200 transform group-hover:rotate-90">
            ↗
          </span>
        </Link>
        <Link
          href="/CV/cv.pdf"
          download
          className="text-base hover:text-zinc-400 flex items-center gap-1 group"
        >
          <span className="underline group-hover:decoration-wavy decoration-1">
            View resume
          </span>
          <span className="transition-transform duration-200 transform group-hover:rotate-90">
            ↗
          </span>
        </Link>
      </nav>

      <div className="flex justify-between items-start">
        <div>
          <div className="flex justify-between gap-4 mb-5">
            <div>
              <BlurFade delay={0.0001} inView={true}>
                <h2 className="text-2xl font-medium mb-4">
                  {BaseTemplate.fullName} 👋
                </h2>
              </BlurFade>
              <BlurFade delay={0.0001 * 2} inView={true}>
                <div className="space-y-2 mb-6">
                  <p className="text-base text-zinc-300 flex items-center gap-2">
                    <span>📍</span> {BaseTemplate.location}
                  </p>
                  <p className="text-base text-zinc-300 flex items-start gap-2 ">
                    <span>💻</span>
                    <div>
                      <span className="lol text-white px-1">
                        Full-Stack Web & Mobile Developer (Frontend-leaning)
                      </span>
                      & Open Source Contributor
                    </div>
                  </p>
                </div>
              </BlurFade>
            </div>
          </div>

          <p className="text-base text-zinc-300 leading-relaxed mb-8 break-words">
            I&apos;m a{" "}
            <span className="lol text-white px-1">
              Full-Stack Web & Mobile Developer
            </span>{" "}
            with a strong focus on building clean, responsive, and user-centered
            interfaces. I work primarily with React, Next.js, Node.js, Express,
            TypeScript, and Tailwind CSS for the web, and I'm also experienced
            in building mobile applications with React Native. I'm an aspiring
            open-source contributor, passionate about building impactful tools
            and learning through collaboration. I am also deeply passionate
            about Data Structures and Algorithms (DSA), constantly refining my
            problem-solving skills to build efficient and scalable software.
          </p>

          {/* social links start */}
          {BaseTemplate.features.SOCIALS_SECTION && (
            <div className="flex items-center gap-4 flex-wrap">
              {Object.entries(UserSocialsData).map(
                ([name, { icon: Icon, url }]) => {
                  let mailtoUrl = null;
                  if (url.includes("@")) {
                    mailtoUrl = `mailto:${url}`;
                  }

                  return (
                    <Link
                      key={url}
                      href={mailtoUrl || url}
                      className="text-zinc-300 hover:text-zinc-100 flex items-center gap-1 group"
                      target="_blank"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-base underline group-hover:decoration-wavy">
                        {name}
                      </span>
                      <span className="transition-transform duration-200 transform group-hover:rotate-90">
                        ↗
                      </span>
                    </Link>
                  );
                }
              )}
            </div>
          )}

          {/* social links end */}
        </div>
      </div>
    </header>
  );
};
