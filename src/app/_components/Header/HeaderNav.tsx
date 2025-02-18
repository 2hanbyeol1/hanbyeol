'use client';
import useActiveIndexStore, {
  TSectionId,
} from '@/stores/useActiveSectionIdStore';
import { capitalize } from '@/utils/util';
import Link from 'next/link';

const NAV_ITEMS: TSectionId[] = [
  'intro',
  'skills',
  'experiences',
  'projects',
  'contact',
];

function HeaderNav() {
  const activeSectionId = useActiveIndexStore((state) => state.activeSectionId);

  return (
    <nav className="absolute flex w-screen items-center gap-4 bg-gradient-to-b from-white/100 via-white/70 to-white/0 px-4 pb-10 pt-4 font-semibold backdrop-blur-sm max-tablet:pt-4">
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
