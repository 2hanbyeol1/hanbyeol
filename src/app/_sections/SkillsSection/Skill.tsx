import { TSkill } from '@/app/_data/skill';
import Image from 'next/image';
import { cn } from '@/app/_utils/util';

interface SkillProps {
  skill: TSkill;
  isFocused: boolean;
}

function Skill({ skill: { title, imgFileName }, isFocused }: SkillProps) {
  return (
    <div
      className={cn(
        'group/skill relative flex w-full flex-col items-center rounded-md drop-shadow-md transition-all duration-300 hover:z-10',
        isFocused
          ? 'opacity-100'
          : 'pointer-events-none cursor-not-allowed opacity-30 blur-sm',
      )}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={`/image/skills/${imgFileName}.png`}
          alt={`${imgFileName} 아이콘`}
          className="rounded-md p-1.5 transition-transform duration-200 group-hover/skill:scale-110 foldable:p-2"
          fill
          sizes="6rem"
        />
      </div>
      <div className="absolute top-full mt-1 hidden min-w-full whitespace-nowrap rounded-md bg-dark/90 px-1.5 py-1 text-center text-sm text-white group-hover/skill:block">
        {title}
      </div>
    </div>
  );
}
export default Skill;
