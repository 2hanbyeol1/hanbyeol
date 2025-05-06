import { PROJECT_CONTENTS } from '@/app/_data/project';
import { parseDateToAriaLabel, parseDateToYYYYMM } from '@/app/_utils/util';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

interface ProjectDetailPageParams {
  projectId: string;
}

interface ProjectDetailPageProps {
  params: Promise<ProjectDetailPageParams>;
}

async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { projectId } = await params;
  const project = PROJECT_CONTENTS.find((project) => project.id === projectId);
  if (!project) notFound();
  const {
    id,
    title,
    subtitle: description,
    duration,
    mainSkills,
    bgDark,
    team,
    tasks,
    images,
    isMobile,
    website,
  } = project;

  return (
    <div className="flex min-h-screen flex-col rounded-lg bg-gradient-to-tl from-primary3/60 via-primary3/30 via-5% to-primary3/0 p-6">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`relative flex h-10 w-10 items-center rounded-md ${bgDark && 'bg-black'}`}
          >
            <Image
              src={`/image/projects/${id}.png`}
              alt={`${title} 로고`}
              fill
              className="object-contain p-1"
            />
          </div>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <p className="flex gap-1.5 text-xl text-dark3">
          {Array.isArray(description)
            ? description.map((desc, idx) => (
                <span key={`${id}-desc-${idx}`}>{desc}</span>
              ))
            : description}
        </p>
      </div>
      <div className="grid grid-cols-[8rem_1fr] gap-x-3 gap-y-6 odd:[&>div]:font-semibold">
        {website && (
          <>
            <div>링크</div>
            <Link
              className="text-primary underline"
              href={website}
              target="_blank"
            >
              {website}
            </Link>
          </>
        )}
        <div>참여 인원</div>
        <div className="flex gap-2">
          {!team ? (
            '개인 프로젝트'
          ) : (
            <>
              {team.fe && <div>FE {team.fe}명</div>}
              {team.be && <div>BE {team.be}명</div>}
              {team.designer && <div>디자이너 {team.designer}명</div>}
            </>
          )}
        </div>
        <div>개발 기간</div>
        <div
          aria-label={`${parseDateToAriaLabel(duration[0])}부터 ${parseDateToAriaLabel(duration[1])}까지`}
        >
          <span>{parseDateToYYYYMM(duration[0])}</span>
          <span aria-hidden> - </span>
          <span>{parseDateToYYYYMM(duration[1])}</span>
        </div>
        <div>기술 스택</div>
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
                className="absolute left-1/2 top-[140%] hidden -translate-x-1/2 whitespace-nowrap rounded-sm bg-black/50 px-2 py-1 text-sm text-white backdrop-blur-xl group-hover/skill:block"
                role="tooltip"
                aria-label={`사용된 기술: ${skill}`}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>
        <div>담당 업무</div>
        <ul className="flex flex-col gap-4">
          {tasks?.map((task, idx) => (
            <li
              key={`tro-${idx}`}
              className="list-disc font-light leading-normal [&>b]:font-semibold"
              dangerouslySetInnerHTML={{ __html: task }}
            ></li>
          ))}
        </ul>
        {images && images.length > 0 && (
          <>
            <div>참고 이미지</div>
            <div className="overflow-x-scroll pb-3">
              <div className="flex gap-2">
                {images.map(({ src, caption }, idx) => (
                  <figure
                    key={`proj-img-${idx}`}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`relative bg-white ${isMobile ? 'h-[20rem] w-[10rem]' : 'h-[20rem] w-[38rem]'}`}
                    >
                      <Image
                        src={src}
                        alt={`${title} 참고 이미지`}
                        fill
                        sizes={isMobile ? '10rem' : '38rem'}
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="mt-1 text-sm text-dark3">
                      {caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDetailPage;
