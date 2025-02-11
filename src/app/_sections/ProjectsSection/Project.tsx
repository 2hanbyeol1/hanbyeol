import { TProject } from '@/data/project';
import { parseDateToYYYYMM } from '@/utils/util';
import Image from 'next/image';
import Link from 'next/link';

function Project({
  project: { id, title, description, duration, bgDark },
}: {
  project: TProject;
}) {
  return (
    <Link
      href={`/project/${id}`}
      className="flex w-60 flex-col items-center duration-100 hover:scale-110"
    >
      <div
        className={`mb-5 flex h-20 w-20 items-center justify-center rounded-md shadow-lg shadow-dark/15 ${bgDark ? 'bg-black' : ''}`}
      >
        <Image
          width={60}
          height={0}
          src={`/image/projects/${id}.png`}
          alt={title}
          className="h-auto"
        />
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mx-4 mb-2 h-12 text-center leading-normal">
        {Array.isArray(description)
          ? description.map((desc, idx) => (
              <span key={`${id}-desc-${idx}`} className="inline-block">
                {desc}
              </span>
            ))
          : description}
      </p>
      <div className="text-sm [&>span]:text-dark2">
        <span>{parseDateToYYYYMM(duration[0])}</span>
        <span> - </span>
        <span>{parseDateToYYYYMM(duration[1])}</span>
      </div>
    </Link>
  );
}
export default Project;
