import SlideInView from '@/components/SlideInView';
import { SECTION_ID } from '@/constants/section';
import { EXPERIENCE_CONTENTS } from '@/data/experience';
import SectionWrapper from '../SectionWrapper';
import Experience from './Experience';

function ExperiencesSection() {
  return (
    <SectionWrapper
      sectionId={SECTION_ID.experiences}
      className="mt-[32rem] scroll-mt-36"
    >
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-28 px-16 max-mobile:px-8">
        {EXPERIENCE_CONTENTS.map((experience) => (
          <SlideInView key={`exp-${experience.title}`}>
            <Experience experience={experience} />
          </SlideInView>
        ))}
      </div>
    </SectionWrapper>
  );
}
export default ExperiencesSection;
