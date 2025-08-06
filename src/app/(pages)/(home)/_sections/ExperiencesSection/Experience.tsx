import Image from 'next/image';

import { TExperience } from '@/data/experience';
import { parseDateToAriaLabel, parseDateToYYYYMM } from '@/utils/util';

function Experience({
  experience: { title, image, subtitle, description, activities },
}: {
  experience: TExperience;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-5 tablet:flex-row">
        <div className="relative">
          <div className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-lg">
            <Image src={`/image/experiences/${image}`} alt={title} fill />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center justify-center gap-x-2 tablet:justify-start">
            <div className="text-lg font-semibold tablet:text-xl">{title}</div>
            <span>•</span>
            <div className="text-lg tablet:text-xl">{subtitle}</div>
          </div>

          {description && (
            <div className="leading-normal tracking-wide text-dark2">
              {description}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {activities.map((activity, idx) => (
          <div
            key={`act-${title}-${idx}`}
            className="flex flex-col items-start gap-4"
          >
            <div
              className="rounded-md bg-dark2/10 px-3 py-1 text-sm tracking-wide text-dark2"
              aria-label={`${parseDateToAriaLabel(activity.duration[0])}부터 ${parseDateToAriaLabel(activity.duration[1])}까지`}
            >
              {parseDateToYYYYMM(activity.duration[0])}
              <span aria-hidden> - </span>
              {parseDateToYYYYMM(activity.duration[1])}
            </div>

            <div className="ml-1.5 flex flex-col gap-7">
              <ul className="flex flex-col gap-1.5">
                {activity.works.map((work, idx) => (
                  <li
                    key={`work-${title}-${idx}`}
                    className="leading-normal [&>b]:font-semibold"
                    dangerouslySetInnerHTML={{ __html: `• ${work}` }}
                  />
                ))}
              </ul>

              {activity.achievements && (
                <ul className="flex flex-col gap-1.5">
                  {activity.achievements.map((achievement, idx) => (
                    <li
                      key={`ach-${title}-${idx}`}
                      className="leading-normal underline-offset-2 [&>b]:font-semibold [&_a]:text-primary [&_a]:underline"
                      dangerouslySetInnerHTML={{ __html: `→ ${achievement}` }}
                    />
                  ))}
                </ul>
              )}

              {/* {activity.links && (
                <div className="flex flex-col gap-1.5">
                  <div className="mb-1 font-semibold leading-normal text-dark2">
                    참고
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {activity.links.map((link, idx) => (
                      <li
                        key={`link-${title}-${idx}`}
                        className="leading-normal text-dark3 hover:underline"
                      >
                        <Link href={link.url} target={'_blank'}>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience;
