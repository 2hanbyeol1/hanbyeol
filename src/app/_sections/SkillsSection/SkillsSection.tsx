import SlideInView from '@/app/_components/SlideInView';
import { SKILL_CONTENTS } from '@/app/_data/skill';
import SectionWatcher from '../SectionWatcher';
import Skill from './Skill';

function SkillsSection() {
  return (
    <SectionWatcher sectionId="skills" className="scroll-mt-36 pt-60">
      <div className="relative mx-auto grid w-full max-w-[58rem] grid-cols-1 gap-x-20 gap-y-40 px-8 tablet:grid-cols-2">
        <div
          className="absolute -left-32 -top-32 -z-50 aspect-square w-full max-w-[30rem] rounded-full bg-primary/30 blur-[220px]"
          aria-hidden
        ></div>
        {SKILL_CONTENTS.map((skill, idx) => (
          <SlideInView
            key={`ski-${skill.title}`}
            delay={idx % 2 === 0 ? 0 : 0.5}
          >
            <Skill skill={skill} />
          </SlideInView>
        ))}
      </div>
    </SectionWatcher>
  );
}
export default SkillsSection;
