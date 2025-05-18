import { TSkill } from '@/app/_data/skill';
import Image from 'next/image';

function Skill({
  skill: { title, descriptions, imgFileName },
}: {
  skill: TSkill;
}) {
  return (
    <div>
      <div className="relative mb-6 h-20 w-20 tablet:mb-10 tablet:h-24 tablet:w-24">
        <Image
          src={`/image/skills/${imgFileName}.png`}
          alt={`${imgFileName} 아이콘`}
          className="rounded-md"
          fill
          sizes="6rem"
        />
      </div>
      <h3 className="desktop:text-3xl mb-5 text-2xl font-bold">{title}</h3>
      <div className="flex flex-col gap-3">
        {descriptions.map((description, idx) => (
          <p
            key={`${title}-${idx}`}
            className="desktop:text-xl text-base font-medium leading-normal text-dark3 tablet:text-lg [&>b]:font-semibold [&>b]:text-dark2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ))}
      </div>
    </div>
  );
}
export default Skill;
