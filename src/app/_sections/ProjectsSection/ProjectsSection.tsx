'use client';
import Checkbox from '@/app/_components/Checkbox';
import { PROJECT_CONTENTS } from '@/app/_data/project';
import { motion, useScroll, useTransform } from 'motion/react';
import { MouseEvent, useRef, useState } from 'react';
import SectionWatcher from '../SectionWatcher';
import Project from './Project';
import { TSectionId } from '@/app/_stores/useActiveSectionIdStore';
import { throttle } from '@/app/_utils/util';

function ProjectsSection() {
  const [isMainChecked, setMainChecked] = useState<boolean>(true);
  const [isDragging, setDragging] = useState<boolean>(false);

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: projectsRef,
  });
  const PROJECT_COUNT = isMainChecked
    ? PROJECT_CONTENTS.filter((content) => content.isMain).length
    : PROJECT_CONTENTS.length;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.min(0, -(296 * (PROJECT_COUNT - 1)))],
  );

  const handleCheckboxChange = () => {
    setMainChecked((prev) => !prev);
    scrollYProgress.set(0);
    projectsRef?.current?.scrollIntoView();
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!projectsRef.current) return;
    setDragging(true);
    startX.current = e.pageX;
    projectsRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX.current) * -5; // 드래그 속도
    window.scrollBy(0, walk);
    console.log(walk, startX.current);
  };

  const throttledMouseMove = throttle(handleMouseMove, 10);

  const handleMouseUp = () => {
    if (!projectsRef.current) return;
    setDragging(false);
    projectsRef.current.style.cursor = 'grab';
  };

  return (
    <SectionWatcher sectionId={TSectionId.PROJECTS} className="mt-64 pt-96">
      <div
        ref={projectsRef}
        style={{ height: `${PROJECT_COUNT * 40}rem` }}
        className="h-[320rem] cursor-grab px-6 tablet:px-10"
        onMouseDown={handleMouseDown}
        onMouseMove={throttledMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="sticky top-1/2 mx-auto w-full max-w-[64rem] -translate-y-1/2 overflow-hidden">
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
