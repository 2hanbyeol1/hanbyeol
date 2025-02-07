import { TSkillContents } from '@/constants/contents';
import { useIntersectionOpacity } from '@/hooks/useIntersection';
import Image from 'next/image';
import { ComponentProps } from 'react';

function Skill({
  title,
  descriptions,
  imgFileName,
  className,
}: TSkillContents & ComponentProps<'div'>) {
  const { setTarget } = useIntersectionOpacity();
  return (
    <div ref={setTarget} className={'opacity-0 ' + className}>
      <Image
        width={110}
        height={110}
        src={`/image/skills/${imgFileName}.png`}
        alt={imgFileName}
        className="mb-10 rounded-md max-tablet:mx-auto"
      />
      <h3 className="mb-5 text-3xl font-bold max-tablet:text-center">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {descriptions.map((description, idx) => (
          <p
            key={`${title}-${idx}`}
            className="text-xl font-semibold leading-normal text-[#797d89]"
          >
            {description}
          </p>
        ))}
      </div>
    </div>
  );
}
export default Skill;
