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
    <nav className="flex w-full gap-4 p-4 font-semibold max-tablet:h-full max-tablet:flex-col tablet:justify-between">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item}
          href={`#${item}`}
          className={`w-1/5 ${item === activeSectionId ? 'text-primary' : 'text-primary3'} `}
        >
          {capitalize(item)}
        </Link>
      ))}
    </nav>
  );
}

export default HeaderNav;
