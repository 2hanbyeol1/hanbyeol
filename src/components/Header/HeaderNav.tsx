'use client';
import Link from 'next/link';

import { MAIN_PATH } from '@/constants/path';
import useActiveIndexStore, {
  TSectionId,
} from '@/stores/useActiveSectionIdStore';
import { capitalize } from '@/utils/util';

export const NAV_SECTION_IDS: TSectionId[] = [
  TSectionId.INTRO,
  TSectionId.SKILLS,
  TSectionId.EXPERIENCE,
  TSectionId.PROJECTS,
  TSectionId.CONTACT,
];

function HeaderNav() {
  const activeSectionId = useActiveIndexStore((state) => state.activeSectionId);

  return (
    <nav className="absolute flex w-screen items-center gap-4 bg-gradient-to-b from-white/100 via-white/70 to-white/0 px-4 pb-10 pt-4 font-semibold backdrop-blur-sm max-tablet:pt-4">
      {NAV_SECTION_IDS.map((sectionId) => (
        <Link
          key={`${sectionId}-nav-link`}
          href={MAIN_PATH({ sectionId })}
          className={`w-1/5 transition-all max-tablet:w-full ${sectionId === activeSectionId ? 'text-base text-primary tablet:text-lg desktop:text-xl' : 'text-sm text-primary3 desktop:text-base'}`}
        >
          {capitalize(sectionId)}
        </Link>
      ))}
    </nav>
  );
}

export default HeaderNav;
