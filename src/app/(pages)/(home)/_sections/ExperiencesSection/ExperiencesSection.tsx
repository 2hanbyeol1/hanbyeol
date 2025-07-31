import SlideInView from '@/components/SlideInView';
import { EXPERIENCE_CONTENTS } from '@/data/experience';
import { TSectionId } from '@/stores/useActiveSectionIdStore';

import SectionWatcher from '../SectionWatcher';

import Experience from './Experience';

function ExperiencesSection() {
  return (
    <SectionWatcher
      sectionId={TSectionId.EXPERIENCE}
      className="scroll-mt-32 pb-52 pt-20"
    >
      <div className="mb-16 flex flex-col items-center gap-3">
        <h2 className="text-center text-2xl font-semibold">경험</h2>
        <p className="text-center text-dark3">
          다양한 활동으로부터 경험을 쌓았습니다
        </p>
      </div>

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
