import { SECTION_ID } from '@/constants/section';
import useSectionObserver from '@/hooks/useSectionObserver';

function SkillsSection() {
  const { setSection } = useSectionObserver({
    sectionId: SECTION_ID.skills,
  });

  return (
    <section
      id={SECTION_ID.skills}
      ref={setSection}
      className="flex h-screen w-full items-center justify-center"
    >
      SkillsSection
    </section>
  );
}
export default SkillsSection;
