import Image from 'next/image'
import Link from 'next/link'

import GitHub from '../../public/image/github.svg'
import Url from '../../public/image/url.svg'

import { ProjectType } from '../../constants/type'

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div key={project.name} className="card">
      <div className="card-inner">
        <div className="card-front flex flex-col justify-center items-center">
          <div className="mb-2 font-bold text-xl text-center">
            {project.name}
          </div>
          <div className="mb-2">{project.description}</div>
          <Image
            className="mb-2"
            width={300}
            src={project.img}
            alt={project.name}
          />
          <div className="flex flex-wrap mb-1">
            {project.skills.map((skill, i) => {
              return (
                <span
                  className="mr-1 mb-1 px-2 py-1 text-xs border border-gray-400 rounded-lg last:mr-0"
                  key={`${skill}-${i}`}
                >
                  {skill}
                </span>
              )
            })}
          </div>
        </div>
        <div className="card-back flex flex-col justify-between">
          <div>
            {project.content.map((c) => {
              return <div className="mb-3">✔️ {c}</div>
            })}
          </div>
          <div className="flex justify-center">
            <Link href={project.github} target="_blank">
              <Image
                className="mx-1"
                width={25}
                src={GitHub}
                alt={`github-${project.name}`}
              />
            </Link>
            {project.url && (
              <Link href={project.url} target="_blank">
                <Image
                  className="mx-1"
                  width={25}
                  src={Url}
                  alt={`link-${project.name}`}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}