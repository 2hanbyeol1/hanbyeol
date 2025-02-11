import { SECTION_ID } from '@/constants/section';
import SectionWrapper from '../SectionWrapper';

function ContactSection() {
  return (
    <SectionWrapper
      sectionId={SECTION_ID.contact}
      className="flex h-screen w-full items-center justify-center"
    >
      ContactSection
    </SectionWrapper>
  );
}
export default ContactSection;
