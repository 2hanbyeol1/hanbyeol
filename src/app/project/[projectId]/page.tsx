import ExpandableCards from '@/app/_components/ExpandableCards/ExpandableCards';
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

  const TR_CLASSNAME =
    '[&_th]:tablet:py-3 max-tablet:mb-6 [&_td]:py-3 max-tablet:grid [&_th]:py-0 [&_th]:align-top';

  return (
    <div className="flex min-h-screen flex-col rounded-lg bg-gradient-to-tl from-primary3/60 via-primary3/30 via-5% to-primary3/0 p-6">
      <div className="mb-7 flex flex-col items-start gap-x-4 gap-y-2 tablet:flex-row tablet:items-center">
        <div className="flex items-center gap-3">
          <div
            className={`relative flex h-10 w-10 flex-shrink-0 items-center rounded-md ${bgDark && 'bg-black'}`}
          >
            <Image
              src={`/image/projects/${id}/logo.png`}
              alt={`${title} 로고`}
              fill
              className="object-contain p-1"
            />
          </div>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <p className="flex flex-wrap gap-1.5 text-lg text-dark3 tablet:text-xl">
          {Array.isArray(description)
            ? description.map((desc, idx) => (
                <span key={`${id}-desc-${idx}`}>{desc}</span>
              ))
            : description}
        </p>
      </div>
      <table>
        <tbody className="[&_*]:text-start [&_th]:whitespace-nowrap [&_th]:pr-8 [&_th]:font-semibold">
          {website && (
            <tr className={TR_CLASSNAME}>
              <th>링크</th>
              <td>
                <Link
                  className="text-primary underline"
                  href={website}
                  target="_blank"
                >
                  {website}
                </Link>
              </td>
            </tr>
          )}
          <tr className={TR_CLASSNAME}>
            <th>참여 인원</th>
            <td className="flex gap-2">
              {!team ? (
                '개인 프로젝트'
              ) : (
                <>
                  {team.fe && <div>FE {team.fe}명</div>}
                  {team.be && <div>BE {team.be}명</div>}
                  {team.designer && <div>디자이너 {team.designer}명</div>}
                </>
              )}
            </td>
          </tr>
          <tr className={TR_CLASSNAME}>
            <th>개발 기간</th>
            <td
              aria-label={`${parseDateToAriaLabel(duration[0])}부터 ${parseDateToAriaLabel(duration[1])}까지`}
            >
              <span>{parseDateToYYYYMM(duration[0])}</span>
              <span aria-hidden> - </span>
              <span>{parseDateToYYYYMM(duration[1])}</span>
            </td>
          </tr>
          <tr className={TR_CLASSNAME}>
            <th>기술 스택</th>
            <td className="flex gap-2.5">
              {mainSkills.map((skill) => (
                <div
                  key={`proj-skill-${skill}`}
                  className="group/skill relative"
                >
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
            </td>
          </tr>
          <tr className={TR_CLASSNAME}>
            <th>담당 업무</th>
            <td>
              <ul className="flex flex-col gap-4 max-tablet:pl-6">
                {tasks?.map((task, idx) => (
                  <li
                    key={`tro-${idx}`}
                    className="list-disc font-light leading-normal [&>b]:font-semibold"
                    dangerouslySetInnerHTML={{ __html: task }}
                  ></li>
                ))}
              </ul>
            </td>
          </tr>
          {images && images.length > 0 && (
            <tr className={TR_CLASSNAME}>
              <th>참고 이미지</th>
              <td className="overflow-x-scroll pb-3">
                <ExpandableCards
                  className="h-80"
                  images={images.map((image) => ({
                    ...image,
                    src: `/image/projects/${id}/${image.src}.png`,
                  }))}
                  isMobile={isMobile}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectDetailPage;
