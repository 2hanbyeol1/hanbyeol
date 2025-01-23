import { SECTION_ID } from '@/constants/section';
import useSectionObserver from '@/hooks/useSectionObserver';

function ExperiencesSection() {
  const { setSection } = useSectionObserver({
    sectionId: SECTION_ID.experiences,
  });

  return (
    <section
      id={SECTION_ID.experiences}
      ref={setSection}
      className="flex h-screen w-full items-center justify-center"
    >
      ExperiencesSection
    </section>
  );
}
export default ExperiencesSection;
