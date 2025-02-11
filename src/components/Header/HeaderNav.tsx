'use client';
import { SECTION_ID } from '@/constants/section';
import useActiveIndexStore from '@/stores/useActiveSectionIdStore';
import { capitalize } from '@/utils/util';
import Link from 'next/link';

function HeaderNav() {
  const activeSectionId = useActiveIndexStore((state) => state.activeSectionId);

  const NAV_ITEMS = [
    SECTION_ID.intro,
    SECTION_ID.skills,
    SECTION_ID.experiences,
    SECTION_ID.projects,
    SECTION_ID.contact,
  ];

  return (
    <nav className="absolute flex w-screen items-center gap-4 bg-gradient-to-b from-white/100 via-white/70 to-white/0 px-4 pb-10 pt-5 font-semibold backdrop-blur-sm max-tablet:pt-4">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item}
          href={`#${item}`}
          className={`w-1/5 transition-[font-size] max-tablet:w-full ${item === activeSectionId ? 'text-base text-primary' : 'text-sm text-primary3'}`}
        >
          {capitalize(item)}
        </Link>
      ))}
    </nav>
  );
}

export default HeaderNav;
