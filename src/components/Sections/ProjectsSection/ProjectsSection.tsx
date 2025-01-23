import { SECTION_ID } from '@/constants/section';
import useSectionObserver from '@/hooks/useSectionObserver';

function ProjectsSection() {
  const { setSection } = useSectionObserver({
    sectionId: SECTION_ID.projects,
  });

  return (
    <section
      id={SECTION_ID.projects}
      ref={setSection}
      className="flex h-screen w-full items-center justify-center"
    >
      ProjectsSection
    </section>
  );
}
export default ProjectsSection;
