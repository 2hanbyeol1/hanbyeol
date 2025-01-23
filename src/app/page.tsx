'use client';
import Header from '@/components/Header';
import ContactSection from '@/components/Sections/ContactSection';
import ExperiencesSection from '@/components/Sections/ExperiencesSection';
import IntroSection from '@/components/Sections/IntroSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import SkillsSection from '@/components/Sections/SkillsSection';

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
