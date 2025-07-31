import Image from 'next/image';
import Link from 'next/link';

import { PROJECT_DETAIL_PATH } from '@/constants/path';
import { TProject } from '@/data/project';
import { parseDateToAriaLabel, parseDateToYYYYMM } from '@/utils/util';

function Project({
  project: { id, title, subtitle, duration, mainSkills, bgDark },
}: {
  project: TProject;
}) {
  return (
    <Link
      href={PROJECT_DETAIL_PATH({ projectId: id })}
      className="group/project flex w-64 -translate-x-1/2 flex-col items-center duration-100 hover:translate-y-3"
    >
      <div
        className={`mb-5 flex aspect-square items-center justify-center rounded-md p-5 shadow-lg shadow-dark/15 ${bgDark ? 'bg-black' : ''}`}
      >
        <Image
          width={60}
          height={60}
          src={`/image/projects/${id}/logo.png`}
          alt={`${title} 로고`}
          className="h-auto duration-100 group-hover/project:scale-125"
        />
      </div>
      <h3 className="mb-2 text-lg font-bold tablet:text-xl desktop:text-2xl">
        {title}
      </h3>
      <p className="mb-5 line-clamp-2 h-12 text-center text-base desktop:text-lg">
        {Array.isArray(subtitle)
          ? subtitle.map((desc, idx) => (
              <span key={`${id}-desc-${idx}`} className="block leading-normal">
                {desc}
              </span>
            ))
          : subtitle}
      </p>
      <div
        className="mb-5 text-sm desktop:text-base [&>span]:text-dark2"
        aria-label={`${parseDateToAriaLabel(duration[0])}부터 ${parseDateToAriaLabel(duration[1])}까지`}
      >
        <span>{parseDateToYYYYMM(duration[0])}</span>
        <span aria-hidden> - </span>
        <span>{parseDateToYYYYMM(duration[1])}</span>
      </div>
      <div className="flex gap-2.5">
        {mainSkills.map((skill) => (
          <div key={`proj-skill-${skill}`} className="group/skill relative">
            <Image
              width={25}
              height={25}
              src={`/image/skills/${skill === 'react-native' ? 'react' : skill}.png`}
              alt={skill}
            />
            <span
              className="absolute left-1/2 top-[140%] hidden -translate-x-1/2 whitespace-nowrap rounded-sm bg-black/50 px-2 py-1 text-white backdrop-blur-xl group-hover/skill:block"
              role="tooltip"
              aria-label={`사용된 기술: ${skill}`}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
    </Link>
  );
}
export default Project;
