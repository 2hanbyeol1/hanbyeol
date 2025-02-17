import { TProject } from '@/app/_data/project';
import { parseDateToYYYYMM } from '@/utils/util';
import Image from 'next/image';
import Link from 'next/link';

function Project({
  project: { id, title, description, duration, mainSkills, bgDark },
}: {
  project: TProject;
}) {
  return (
    <Link
      href={`/project/${id}`}
      className="group/project flex w-80 -translate-x-1/2 flex-col items-center duration-100 hover:translate-y-3"
    >
      <div
        className={`mb-5 flex aspect-square items-center justify-center rounded-md p-5 shadow-lg shadow-dark/15 ${bgDark ? 'bg-black' : ''}`}
      >
        <Image
          width={60}
          height={0}
          src={`/image/projects/${id}.png`}
          alt={title}
          className="h-auto duration-100 group-hover/project:scale-125"
        />
      </div>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="mx-4 mb-5 h-12 text-center text-lg">
        {Array.isArray(description)
          ? description.map((desc, idx) => (
              <span key={`${id}-desc-${idx}`} className="block leading-normal">
                {desc}
              </span>
            ))
          : description}
      </p>
      <div className="mb-5 [&>span]:text-dark2">
        <span>{parseDateToYYYYMM(duration[0])}</span>
        <span> - </span>
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
            <span className="hover absolute left-1/2 top-[140%] hidden -translate-x-1/2 whitespace-nowrap rounded-sm bg-black/50 px-2 py-1 text-white group-hover/skill:block">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </Link>
  );
}
export default Project;
