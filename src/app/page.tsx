'use client';
import ContactSection from '@/components/organisms/ContactSection';
import ExperiencesSection from '@/components/organisms/ExperiencesSection';
import Header from '@/components/organisms/Header';
import IntroSection from '@/components/organisms/IntroSection';
import ProjectsSection from '@/components/organisms/ProjectsSection';
import SkillsSection from '@/components/organisms/SkillsSection';

function Page() {
  return (
    <>
      <Header />
      <IntroSection />
      <SkillsSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default Page;
