import { SECTION_ID } from '@/constants/section';
import { useSectionObserver } from '@/hooks/useIntersection';

function ExperiencesSection() {
  const { setTarget } = useSectionObserver({
    sectionId: SECTION_ID.experiences,
  });

  return (
    <section
      id={SECTION_ID.experiences}
      ref={setTarget}
      className="flex h-screen w-full items-center justify-center"
    >
      ExperiencesSection
    </section>
  );
}
export default ExperiencesSection;
