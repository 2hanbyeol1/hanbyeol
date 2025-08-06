import Image from 'next/image';
import Link from 'next/link';

import ImageSwiper from '@/components/ImageSwiper';
import { TProject } from '@/data/project';
import useModalStore from '@/stores/useModalStore';
import { parseDateToAriaLabel, parseDateToYYYYMM } from '@/utils/util';

function Project({
  project: {
    id,
    title,
    subtitle,
    team,
    duration,
    mainSkills,
    bgDark,
    tasks,
    website,
    github,
    images,
    isMobile,
  },
}: {
  project: TProject;
}) {
  const { openModal } = useModalStore();

  const openImageModal = () => {
    if (!images) return;
    openModal({
      content: (
        <ImageSwiper
          width={isMobile ? 300 : 800}
          ratio={isMobile ? [9, 16] : [16, 9]}
          images={images.map((image) => ({
            ...image,
            src: `/image/projects/${id}/${image.src}.png`,
          }))}
          transition={3000}
        />
      ),
    });
  };

  return (
    <div className="relative flex w-full flex-col gap-4">
      <div className="absolute right-0 top-0 flex gap-4">
        {website && (
          <Link href={website} target="_blank">
            <Image
              width={28}
              height={28}
              src="/icon/link.svg"
              alt={`${title} 웹사이트 링크`}
              className="fill-dark2"
            />
          </Link>
        )}
        {github && (
          <Link href={github} target="_blank">
            <Image
              width={28}
              height={28}
              src="/image/github.png"
              alt={`${title} 깃허브 링크`}
              className="fill-dark2"
            />
          </Link>
        )}
        {images && images.length > 0 && (
          <button onClick={openImageModal}>
            <Image
              width={28}
              height={28}
              src="/icon/image.svg"
              alt={`프로젝트 ${title} 링크`}
              className="fill-dark2"
            />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2.5">
        <div
          className="text-sm tracking-wider text-dark3"
          aria-label={`${parseDateToAriaLabel(duration[0])}부터 ${parseDateToAriaLabel(duration[1])}까지`}
        >
          <span>{parseDateToYYYYMM(duration[0])}</span>
          <span aria-hidden> - </span>
          <span>{parseDateToYYYYMM(duration[1])}</span>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`relative flex aspect-square h-10 w-10 rounded-md shadow-md ${bgDark ? 'bg-black' : ''}`}
          >
            <Image
              src={`/image/projects/${id}/logo.png`}
              alt={`${title} 로고`}
              className="h-auto object-contain p-1 duration-100 group-hover/project:scale-110"
              fill
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-3">
            <div className="text-lg font-semibold tablet:text-xl">{title}</div>
            <div className="text-dark2">{subtitle}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          {!team ? (
            <div className="rounded-md bg-dark/10 px-4 py-0.5 text-sm font-semibold">
              개인
            </div>
          ) : (
            <>
              <div className="rounded-md bg-dark/10 px-4 py-0.5 text-sm font-semibold">
                팀
              </div>
              {team.fe && <div>FE {team.fe}명</div>}
              {team.be && <div>BE {team.be}명</div>}
              {team.designer && <div>디자이너 {team.designer}명</div>}
            </>
          )}
        </div>
        <ul className="flex flex-col gap-2 max-tablet:pl-3 desktop:ml-4">
          {tasks.map((task, idx) => (
            <li
              key={`proj-detail-task-${idx}`}
              className="list-disc font-light leading-relaxed [&>b]:font-semibold"
              dangerouslySetInnerHTML={{ __html: task }}
            ></li>
          ))}
        </ul>
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
                className="absolute left-1/2 top-[140%] hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-dark/90 px-1.5 py-1 text-center text-sm text-white backdrop-blur-xl group-hover/skill:block"
                role="tooltip"
                aria-label={`사용된 기술: ${skill}`}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Project;
