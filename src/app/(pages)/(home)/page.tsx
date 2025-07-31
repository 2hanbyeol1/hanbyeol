import Header from '@/components/Header';

import ContactSection from './_sections/ContactSection';
import ExperiencesSection from './_sections/ExperiencesSection';
import IntroSection from './_sections/IntroSection';
import ProjectsSection from './_sections/ProjectsSection';
import SkillsSection from './_sections/SkillsSection';

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
