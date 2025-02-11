import { TExperienceContent } from '@/data/experience';
import { parseDateToYYYYMM } from '@/utils/util';
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
  experience: TExperienceContent;
}) {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <div className="mb-2.5 text-base text-dark2">
          <span>{parseDateToYYYYMM(duration[0])}</span>
          <span> - </span>
          <span>{parseDateToYYYYMM(duration[1])}</span>
        </div>
        <div className="relative mb-5">
          <Image
            width={20}
            height={20}
            src="/image/star.png"
            alt="별"
            className="absolute right-0 -z-10 tablet:-left-10 tablet:top-1"
          />
          <h3 className="mb-1 text-[1.7rem] font-bold">{title}</h3>
          <h4 className="text-lg font-medium">{subtitle}</h4>
        </div>
        <p className="leading-normal">{description}</p>
      </div>
      <div>
        <h5 className="mb-2 font-semibold">주요 활동</h5>
        <ul>
          {activities.map((activity, idx) => (
            <li key={`act-${title}-${idx}`} className="leading-relaxed">
              {activity}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="mb-2 font-semibold">성과</h5>
        <ul>
          {achievements.map((achievement, idx) => (
            <li key={`ach-${title}-${idx}`} className="leading-relaxed">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
      {links && links.length > 0 ? (
        <div>
          <ul>
            {links.map((link, idx) => (
              <li key={`lin-${title}-${idx}`}>
                <Link href={link.url} className="text-primary underline">
                  {link.text}
                </Link>
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
