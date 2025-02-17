import SlideInView from '@/app/_components/SlideInView';
import { EXPERIENCE_CONTENTS } from '@/app/_data/experience';
import SectionWatcher from '../SectionWatcher';
import Experience from './Experience';

function ExperiencesSection() {
  return (
    <SectionWatcher
      sectionId="experiences"
      className="mt-64 scroll-mt-36 pt-60"
    >
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-44 px-16 max-tablet:px-8">
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
