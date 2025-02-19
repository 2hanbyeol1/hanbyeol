import { TExperience } from '@/app/_data/experience';
import { parseDateToAriaLabel, parseDateToYYYYMM } from '@/app/_utils/util';
import Image from 'next/image';
import Link from 'next/link';

function Experience({
  experience: {
    title,
    subtitle,
    duration,
    description,
    activities,
    achievements,
    links,
  },
}: {
  experience: TExperience;
}) {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <div
          className="mb-2 text-xl font-medium [&>span]:text-dark2"
          aria-label={`${parseDateToAriaLabel(duration[0])}부터 ${parseDateToAriaLabel(duration[1])}까지`}
        >
          <span>{parseDateToYYYYMM(duration[0])}</span>
          <span aria-hidden> - </span>
          <span>{parseDateToYYYYMM(duration[1])}</span>
        </div>
        <div className="relative">
          <Image
            width={32}
            height={32}
            src="/image/star.png"
            alt="별"
            className="absolute right-0 -z-10 tablet:-left-14 tablet:top-1"
            aria-hidden
          />
          <h3 className="mb-1.5 text-3xl font-bold">{title}</h3>
          <h4 className="text-2xl font-medium">{subtitle}</h4>
        </div>
        {description ? (
          <p className="mt-4 text-lg leading-normal">
            <span aria-hidden>&gt;</span> {description}
          </p>
        ) : (
          <></>
        )}
      </div>
      <div>
        <h5 className="mb-2 text-xl font-bold">주요 활동</h5>
        <ul>
          {activities.map((activity, idx) => (
            <li
              key={`act-${title}-${idx}`}
              className="text-lg [&>b]:font-semibold"
              dangerouslySetInnerHTML={{ __html: activity }}
            />
          ))}
        </ul>
      </div>
      <div>
        <h5 className="mb-2 text-xl font-bold">성과</h5>
        <ul>
          {achievements.map((achievement, idx) => (
            <li
              key={`ach-${title}-${idx}`}
              className="text-lg [&>b]:font-bold [&>b]:text-primary/80"
              dangerouslySetInnerHTML={{ __html: achievement }}
            />
          ))}
        </ul>
      </div>
      {links && links.length > 0 ? (
        <div>
          <h5 className="mb-2 text-xl font-bold">참조</h5>
          <ul className="flex flex-col gap-1">
            {links.map((link, idx) => (
              <li
                key={`lin-${title}-${idx}`}
                className="text-lg text-dark2 underline"
              >
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Experience;
