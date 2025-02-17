'use client';
import Checkbox from '@/app/_components/Checkbox/Checkbox';
import { PROJECT_CONTENTS } from '@/app/_data/project';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import SectionWatcher from '../SectionWatcher';
import Project from './Project';

function ProjectsSection() {
  const [isMainChecked, setMainChecked] = useState<boolean>(true);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
  });
  const PROJECT_COUNT = isMainChecked ? 5 : PROJECT_CONTENTS.length;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.min(0, -(320 * (PROJECT_COUNT - 1)))],
  );

  const handleCheckboxChange = () => {
    setMainChecked((prev) => !prev);
    scrollYProgress.set(0);
    projectsRef?.current?.scrollIntoView();
  };

  return (
    <SectionWatcher sectionId="projects">
      <div
        ref={projectsRef}
        style={{ height: `${PROJECT_COUNT * 40}rem` }}
        className="mt-[32rem] h-[320rem] px-8"
      >
        <div className="sticky top-1/2 mx-auto w-full max-w-[64rem] -translate-y-1/2 overflow-hidden px-8">
          <Checkbox
            className="flex justify-end"
            size="lg"
            checked={isMainChecked}
            onChange={handleCheckboxChange}
            text="메인 프로젝트만"
          />
          <motion.ul
            className="relative left-1/2 flex flex-nowrap gap-10 py-20"
            style={{ x }}
          >
            {PROJECT_CONTENTS.filter(
              (project) => !isMainChecked || project.isMain,
            ).map((project) => (
              <motion.li key={project.id} transition={{ duration: 1 }}>
                <Project project={project} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </SectionWatcher>
  );
}
export default ProjectsSection;
