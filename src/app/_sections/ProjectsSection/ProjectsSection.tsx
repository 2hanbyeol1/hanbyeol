import { PROJECT_CONTENTS } from '@/data/project';
import SectionWatcher from '../SectionWatcher';
import Project from './Project';

function ProjectsSection() {
  return (
    <SectionWatcher sectionId="projects" className="h-[180rem] pt-[32rem]">
      <div className="sticky top-1/2 mx-16 -translate-y-1/2 max-tablet:mx-8">
        <input
          id="main-project-checkbox"
          type="checkbox"
          className="mb-10 mr-2"
        ></input>
        <label htmlFor="main-project-checkbox">메인 프로젝트만</label>
        <ul className="flex flex-nowrap gap-20">
          {PROJECT_CONTENTS.map((project) => (
            <li key={project.id}>
              <Project project={project} />
            </li>
          ))}
        </ul>
      </div>
    </SectionWatcher>
  );
}
export default ProjectsSection;
