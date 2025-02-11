import Header from '@/app/_components/Header';
import ContactSection from '@/app/_sections/ContactSection';
import ExperiencesSection from '@/app/_sections/ExperiencesSection';
import IntroSection from '@/app/_sections/IntroSection';
import ProjectsSection from '@/app/_sections/ProjectsSection';
import SkillsSection from '@/app/_sections/SkillsSection';

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
