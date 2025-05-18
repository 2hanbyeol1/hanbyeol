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
        <div className="desktop:text-lg mb-2 flex text-sm tablet:text-base">
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
          <h3 className="desktop:text-3xl mb-1.5 text-xl font-bold tablet:text-2xl">
            {title}
          </h3>
          <h4 className="desktop:text-2xl text-base font-medium tablet:text-xl">
            {subtitle}
          </h4>
        </div>
        {description ? (
          <p className="desktop:text-lg mt-4 text-base leading-normal">
            <span aria-hidden>&gt;</span> {description}
          </p>
        ) : (
          <></>
        )}
      </div>
      <div>
        <h5 className="desktop:text-xl mb-2 text-base font-bold tablet:text-lg">
          주요 활동
        </h5>
        <ul>
          {activities.map((activity, idx) => (
            <li
              key={`act-${title}-${idx}`}
              className="desktop:text-lg text-base [&>b]:font-semibold"
              dangerouslySetInnerHTML={{ __html: activity }}
            />
          ))}
        </ul>
      </div>
      <div>
        <h5 className="desktop:text-xl mb-2 text-base font-bold tablet:text-lg">
          성과
        </h5>
        <ul>
          {achievements.map((achievement, idx) => (
            <li
              key={`ach-${title}-${idx}`}
              className="desktop:text-lg text-base [&>b]:font-bold [&>b]:text-primary/80"
              dangerouslySetInnerHTML={{ __html: achievement }}
            />
          ))}
        </ul>
      </div>
      {links && links.length > 0 ? (
        <div>
          <h5 className="desktop:text-xl mb-2 text-base font-bold tablet:text-lg">
            참조
          </h5>
          <ul className="flex flex-col gap-1">
            {links.map((link, idx) => (
              <li
                key={`lin-${title}-${idx}`}
                className="desktop:text-lg text-base text-dark2 underline"
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
