'use client';
import { useState } from 'react';
import { motion } from 'motion/react';

import SlideInView from '@/components/SlideInView';
import Tag from '@/components/Tag';
import { SKILL_CONTENTS, SKILL_GROUPS, TSkillGroup } from '@/data/skill';
import { TSectionId } from '@/stores/useActiveSectionIdStore';

import SectionWatcher from '../SectionWatcher';

import Skill from './Skill';

function SkillsSection() {
  const [selectedSkillGroup, setSelectedSkillGroup] =
    useState<TSkillGroup | null>(null);

  const handleSkillGroupTagClick = (group: TSkillGroup) =>
    setSelectedSkillGroup((prev) => (prev?.id === group.id ? null : group));

  return (
    <SectionWatcher
      sectionId={TSectionId.SKILLS}
      className="relative flex h-screen flex-col items-center justify-center gap-10 px-6 desktop:px-10"
    >
      <div
        className="absolute -left-32 -top-32 -z-50 aspect-square w-full max-w-[30rem] rounded-full bg-primary/30 blur-[220px]"
        aria-hidden
      ></div>
      <motion.div
        className="mx-auto grid w-full max-w-[40rem] grid-cols-5 gap-x-2 gap-y-2 foldable:grid-cols-7 foldable:gap-x-4 foldable:gap-y-4"
        layout
      >
        {SKILL_CONTENTS.map((skill, idx) => (
          <SlideInView
            key={`skill-${skill.title}`}
            delay={idx % 2 === 0 ? 0 : 0.4}
            duration={1.5}
          >
            <Skill
              skill={skill}
              isFocused={
                !selectedSkillGroup ||
                skill.skillGroupId === selectedSkillGroup?.id
              }
            />
          </SlideInView>
        ))}
      </motion.div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {SKILL_GROUPS.map((group) => (
          <Tag
            key={`skill-group-${group.id}`}
            isSelected={selectedSkillGroup?.id === group.id}
            onClick={() => handleSkillGroupTagClick(group)}
          >
            {group.name}
          </Tag>
        ))}
      </div>
    </SectionWatcher>
  );
}
export default SkillsSection;
