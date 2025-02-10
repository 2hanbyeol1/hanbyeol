import { TSkillContent } from '@/data/skill';
import Image from 'next/image';

function Skill({
  skill: { title, descriptions, imgFileName },
}: {
  skill: TSkillContent;
}) {
  return (
    <div>
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
            className="text-xl font-medium leading-normal text-[#797d89]"
          >
            {description}
          </p>
        ))}
      </div>
    </div>
  );
}
export default Skill;
