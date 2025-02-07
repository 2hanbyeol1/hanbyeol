import { SECTION_ID } from '@/constants/section';
import { useSectionObserver } from '@/hooks/useIntersection';

function ContactSection() {
  const { setTarget } = useSectionObserver({
    sectionId: SECTION_ID.contact,
  });

  return (
    <section
      id={SECTION_ID.contact}
      ref={setTarget}
      className="flex h-screen w-full items-center justify-center"
    >
      ContactSection
    </section>
  );
}
export default ContactSection;
