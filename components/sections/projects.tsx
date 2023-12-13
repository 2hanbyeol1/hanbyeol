import Title from '../common/title'
import Project from '../projects/project'

import { teamProjects, sideProjects } from '../../constants/projects'

export default function Projects() {
  return (
    <div id="projects">
      <Title title="Projects" />
      <div className="flex flex-wrap justify-center items-center py-3 border-b border-gray-500">
        {teamProjects.map((proj) => {
          return <Project project={proj} />
        })}
      </div>
      <div className="flex justify-center items-center flex-wrap py-3">
        {sideProjects.map((proj) => {
          return <Project project={proj} />
        })}
      </div>
    </div>
  )
}
