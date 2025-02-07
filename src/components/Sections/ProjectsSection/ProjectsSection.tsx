import { SECTION_ID } from '@/constants/section';
import { useSectionObserver } from '@/hooks/useIntersection';

function ProjectsSection() {
  const { setTarget } = useSectionObserver({
    sectionId: SECTION_ID.projects,
  });

  return (
    <section
      id={SECTION_ID.projects}
      ref={setTarget}
      className="flex h-screen w-full items-center justify-center"
    >
      ProjectsSection
    </section>
  );
}
export default ProjectsSection;
