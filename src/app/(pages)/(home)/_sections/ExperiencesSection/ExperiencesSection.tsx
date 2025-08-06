import SlideInView from '@/components/SlideInView';
import { EXPERIENCE_CONTENTS } from '@/data/experience';
import { TSectionId } from '@/stores/useActiveSectionIdStore';

import SectionWatcher from '../SectionWatcher';

import Experience from './Experience';

function ExperiencesSection() {
  return (
    <SectionWatcher
      sectionId={TSectionId.EXPERIENCE}
      className="scroll-mt-16 pb-60 pt-20"
    >
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-36 px-6 tablet:px-10">
        {EXPERIENCE_CONTENTS.map((experience) => (
          <SlideInView key={`exp-${experience.title}`}>
            <Experience experience={experience} />
          </SlideInView>
        ))}
      </div>
    </SectionWatcher>
  );
}
export default ExperiencesSection;
