import { TSkill } from '@/app/_data/skill';
import Image from 'next/image';

function Skill({
  skill: { title, descriptions, imgFileName },
}: {
  skill: TSkill;
}) {
  return (
    <div>
      <Image
        width={110}
        height={110}
        src={`/image/skills/${imgFileName}.png`}
        alt={`${imgFileName} 아이콘`}
        className="mb-10 rounded-md max-tablet:mx-auto"
      />
      <h3 className="mb-5 text-3xl font-bold max-tablet:text-center">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {descriptions.map((description, idx) => (
          <p
            key={`${title}-${idx}`}
            className="text-xl font-medium leading-normal text-dark3 [&>b]:font-bold [&>b]:text-dark2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ))}
      </div>
    </div>
  );
}
export default Skill;
