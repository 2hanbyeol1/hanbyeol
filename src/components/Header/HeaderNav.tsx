'use client';
import Link from 'next/link';

import { MAIN_PATH } from '@/constants/path';
import useActiveIndexStore, {
  TSectionId,
} from '@/stores/useActiveSectionIdStore';

export const NAV_SECTION = [
  { id: TSectionId.INTRO, name: '소개' },
  { id: TSectionId.SKILLS, name: '기술 스택' },
  { id: TSectionId.EXPERIENCE, name: '경험' },
  { id: TSectionId.PROJECTS, name: '프로젝트' },
  { id: TSectionId.CONTACT, name: '연락처' },
];

function HeaderNav() {
  const activeSectionId = useActiveIndexStore((state) => state.activeSectionId);

  return (
    <nav className="absolute flex w-screen items-center gap-4 bg-gradient-to-b from-white/100 via-white/70 to-white/0 px-4 pb-10 pt-4 font-semibold backdrop-blur-sm max-tablet:pt-4">
      {NAV_SECTION.map((section) => (
        <Link
          key={`${section.id}-nav-link`}
          href={MAIN_PATH({ sectionId: section.id })}
          className={`w-1/5 whitespace-nowrap transition-all max-tablet:w-full max-tablet:text-center tablet:origin-left ${section.id === activeSectionId ? 'scale-110 text-primary tablet:scale-125' : 'text-sm text-primary3 desktop:text-base'}`}
        >
          {section.name}
        </Link>
      ))}
    </nav>
  );
}

export default HeaderNav;
