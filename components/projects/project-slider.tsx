import Project from '../projects/project';

import { projects } from '../../constants/projects';

export default function ProjectSlider() {
  return (
    <div id="slider" className="py-3 overflow-hidden">
      <div id="slider-inner" className="relative w-max">
        {projects.map((proj) => {
          return <Project key={`${proj.name}-1`} project={proj} />;
        })}
        {projects.map((proj) => {
          return <Project key={`${proj.name}-2`} project={proj} />;
        })}
      </div>
    </div>
  );
}
