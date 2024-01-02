import Image from 'next/image'
import Link from 'next/link'

import GitHub from '../../public/image/github.svg'
import Url from '../../public/image/url.svg'

import { ProjectType } from '../../constants/type'

export default function Project({ project }: { project: ProjectType }) {
  const num = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟']
  return (
    <div id={project.name} className="card">
      <div className="card-inner">
        <div className="card-front flex flex-col justify-center items-center gap-y-2">
          <div className="font-bold text-xl text-center">{project.name}</div>
          <div>{project.description}</div>
          <div className="text-xs">
            {getDateString(project.duration[0])} ~{' '}
            {getDateString(project.duration[1])} ({project.dev}명)
          </div>
          <Image width={300} src={project.img} alt={project.name} />
          <div className="flex flex-wrap mb-1">
            {project.skills.map((skill, i) => {
              return (
                <span
                  className="mr-1 mb-1 px-2 py-1 text-xs border border-gray-400 rounded-lg last:mr-0"
                  key={`${project.name}-${skill}`}
                >
                  {skill}
                </span>
              )
            })}
          </div>
        </div>
        <div className="card-back flex flex-col justify-between">
          <div className="overflow-y-auto">
            {project.content.map((c, i) => {
              return (
                <div key={`${project.name}-${i}`} className="mb-4 last:mb-0">
                  {num[i]} {c}
                </div>
              )
            })}
          </div>
          <div className="flex justify-center mt-2">
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

/**
 * Date를 string으로 바꿔줍니다
 * ex | new Date(2023, 2) → 2023-02
 */
function getDateString(date: Date | null): string {
  if (date === null) return 'ing'
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return year + '-' + (month < 10 ? '0' + month : '' + month)
}
