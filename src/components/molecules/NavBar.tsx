'use client';

import { SECTION_ID } from '@/constants/section';
import useActiveIndexStore from '@/hooks/store/useActiveSectionIdStore';
import NavLink from '../atoms/NavLink';

function NavBar() {
  const activeSectionId = useActiveIndexStore((state) => state.activeSectionId);

  return (
    <nav className="flex w-full gap-4 p-4 font-semibold max-tablet:h-full max-tablet:flex-col tablet:justify-between">
      <NavLink
        key={SECTION_ID.intro}
        href={`#${SECTION_ID.intro}`}
        selected={SECTION_ID.intro === activeSectionId}
      >
        Intro
      </NavLink>
      <NavLink
        key={SECTION_ID.skills}
        href={`#${SECTION_ID.skills}`}
        selected={SECTION_ID.skills === activeSectionId}
      >
        Skills
      </NavLink>
      <NavLink
        key={SECTION_ID.experiences}
        href={`#${SECTION_ID.experiences}`}
        selected={SECTION_ID.experiences === activeSectionId}
      >
        Experiences
      </NavLink>
      <NavLink
        key={SECTION_ID.projects}
        href={`#${SECTION_ID.projects}`}
        selected={SECTION_ID.projects === activeSectionId}
      >
        Projects
      </NavLink>
      <NavLink
        key={SECTION_ID.contact}
        href={`#${SECTION_ID.contact}`}
        selected={SECTION_ID.contact === activeSectionId}
      >
        Contact
      </NavLink>
    </nav>
  );
}
export default NavBar;
