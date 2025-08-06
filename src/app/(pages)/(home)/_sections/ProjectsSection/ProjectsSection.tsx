'use client';

import { PROJECT_CONTENTS } from '@/data/project';
import { TSectionId } from '@/stores/useActiveSectionIdStore';

import SectionWatcher from '../SectionWatcher';

import Project from './Project';

function ProjectsSection() {
  return (
    <SectionWatcher
      sectionId={TSectionId.PROJECTS}
      className="relative scroll-mt-32 px-6 tablet:px-10"
    >
      <ul className="mx-auto flex w-full max-w-[58rem] flex-col gap-x-4 gap-y-32">
        {PROJECT_CONTENTS.map((project) => (
          <li key={project.id}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </SectionWatcher>
  );
}
export default ProjectsSection;
