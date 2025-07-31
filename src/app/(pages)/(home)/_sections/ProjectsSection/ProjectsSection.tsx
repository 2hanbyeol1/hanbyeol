'use client';
import { useState } from 'react';

import Checkbox from '@/components/Checkbox';
import { PROJECT_CONTENTS } from '@/data/project';
import { TSectionId } from '@/stores/useActiveSectionIdStore';

import SectionWatcher from '../SectionWatcher';

import Project from './Project';

function ProjectsSection() {
  const [isMainChecked, setMainChecked] = useState<boolean>(true);

  return (
    <SectionWatcher
      sectionId={TSectionId.PROJECTS}
      className="relative flex flex-col items-center justify-center gap-10 px-6 tablet:px-10"
    >
      <Checkbox
        className="sticky top-24 z-10 flex self-end rounded-md bg-white/80 px-3 py-2 backdrop-blur-xl"
        size="lg"
        checked={isMainChecked}
        onChange={() => setMainChecked((prev) => !prev)}
        text={isMainChecked ? '대표 프로젝트' : '모든 프로젝트'}
      />
      <ul className="grid w-full grid-cols-3 gap-x-10 gap-y-14">
        {PROJECT_CONTENTS.filter(
          (project) => !isMainChecked || project.isMain,
        ).map((project) => (
          <li key={project.id}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </SectionWatcher>
  );
}
export default ProjectsSection;
