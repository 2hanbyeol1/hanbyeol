import { SECTION_ID } from '@/constants/section';
import SectionWrapper from '../SectionWrapper';

function ProjectsSection() {
  return (
    <SectionWrapper
      sectionId={SECTION_ID.projects}
      className="flex h-screen w-full items-center justify-center"
    >
      ProjectsSection
    </SectionWrapper>
  );
}
export default ProjectsSection;
