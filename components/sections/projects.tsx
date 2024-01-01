import Title from '../common/title'
import Project from '../projects/project'

import { projects } from '../../constants/projects'

export default function Projects() {
  return (
    <>
      <Title title="Projects" />
      <div className="flex flex-wrap justify-center items-center py-3">
        {projects.map((proj) => {
          return <Project project={proj} />
        })}
      </div>
    </>
  )
}
