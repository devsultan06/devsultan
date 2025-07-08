import React from "react";
import { BaseTemplateLayout } from "@/components/BaseTemplate/layout";
import { HeroSection } from "@/components/BaseTemplate/hero";
import { WorkExperienceSection } from "@/components/BaseTemplate/work";
import { SkillsSection } from "@/components/BaseTemplate/skills";
import { ProjectsSection } from "@/components/BaseTemplate/projects";
import ConnectSection from "@/components/BaseTemplate/connect";
import { BaseFooter } from "@/components/BaseTemplate/footer";
export default function Home() {

  return (<BaseTemplateLayout>
    <HeroSection />
    <WorkExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <ConnectSection />
    <BaseFooter />
  </BaseTemplateLayout>);



}
