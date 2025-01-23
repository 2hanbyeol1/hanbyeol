import { SECTION_ID } from '@/constants/section';
import useSectionObserver from '@/hooks/useSectionObserver';

function ContactSection() {
  const { setSection } = useSectionObserver({
    sectionId: SECTION_ID.contact,
  });

  return (
    <section
      id={SECTION_ID.contact}
      ref={setSection}
      className="flex h-screen w-full items-center justify-center"
    >
      ContactSection
    </section>
  );
}
export default ContactSection;
