import Image from 'next/image';
import Link from 'next/link';

import { TExperience } from '@/data/experience';
import { parseDateToAriaLabel, parseDateToYYYYMM } from '@/utils/util';

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
    <div className="flex flex-col gap-8 tablet:gap-12">
      <div>
        <div className="mb-2 flex text-sm tablet:text-base desktop:text-lg">
          {duration.map((d, idx) => (
            <div
              key={`duration-${title}-${idx}`}
              className={'font-medium [&>span]:text-dark3'}
              aria-label={`${parseDateToAriaLabel(d[0])}부터 ${parseDateToAriaLabel(d[1])}까지`}
            >
              <span>{parseDateToYYYYMM(d[0])}</span>
              <span aria-hidden> - </span>
              <span>{parseDateToYYYYMM(d[1])}</span>
              {idx !== duration.length - 1 && (
                <span className="mx-2" aria-hidden>
                  &#183;
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="relative">
          <Image
            width={32}
            height={32}
            src="/image/star.png"
            alt="별"
            className="absolute right-0 -z-10"
            aria-hidden
          />
          <h3 className="mb-1.5 text-xl font-bold tablet:text-2xl desktop:text-3xl">
            {title}
          </h3>
          <h4 className="text-base font-medium tablet:text-xl desktop:text-2xl">
            {subtitle}
          </h4>
        </div>
        {description ? (
          <p className="mt-4 text-base leading-normal desktop:text-lg">
            <span aria-hidden>&gt;</span> {description}
          </p>
        ) : (
          <></>
        )}
      </div>
      <div>
        <h5 className="mb-2 text-base font-bold tablet:text-lg desktop:text-xl">
          주요 활동
        </h5>
        <ul>
          {activities.map((activity, idx) => (
            <li
              key={`act-${title}-${idx}`}
              className="text-base desktop:text-lg [&>b]:font-semibold"
              dangerouslySetInnerHTML={{ __html: activity }}
            />
          ))}
        </ul>
      </div>
      <div>
        <h5 className="mb-2 text-base font-bold tablet:text-lg desktop:text-xl">
          성과
        </h5>
        <ul>
          {achievements.map((achievement, idx) => (
            <li
              key={`ach-${title}-${idx}`}
              className="text-base desktop:text-lg [&>b]:font-bold [&>b]:text-primary/80"
              dangerouslySetInnerHTML={{ __html: achievement }}
            />
          ))}
        </ul>
      </div>
      {links && links.length > 0 ? (
        <div>
          <h5 className="mb-2 text-base font-bold tablet:text-lg desktop:text-xl">
            참조
          </h5>
          <ul className="flex flex-col gap-1">
            {links.map((link, idx) => (
              <li
                key={`lin-${title}-${idx}`}
                className="text-base text-dark2 underline desktop:text-lg"
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
