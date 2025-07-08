
import Link from "next/link";
import Image from "next/image";
import { BaseTemplate } from "../../config/app-data/templates/base";
import { UserSocialsData } from "../../config/user-data/socials";

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
              <h1 className="text-2xl font-medium mb-4">
                {BaseTemplate.fullName}
              </h1>
              <div className="space-y-2 mb-6">
                <p className="text-base text-zinc-300 flex items-center gap-2">
                  <span>📍</span> {BaseTemplate.location}
                </p>
                <p className="text-base text-zinc-300 flex items-center gap-2">
                  <span>💻</span> {BaseTemplate.tagline}
                </p>
              </div>
            </div>

          
          </div>

          <p className="text-base text-zinc-300 leading-relaxed mb-8  break-words">
            I&apos;m a  <span className="lol text-white px-1">Full Stack Engineer</span> with a strong focus on frontend development, building clean, responsive, and user-centered interfaces using React, Next JS, TypeScript, and Tailwind CSS. While my expertise lies in the frontend, I&apos;m continuously improving my backend skills with technologies like Node.js and Express. I&apos;m also an aspiring open source contributor, passionate about building impactful tools and learning through collaboration.
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
