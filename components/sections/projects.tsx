import Link from 'next/link';

import Title from '../common/title';

import ProjectSlider from '../projects/project-slider';

export default function Projects() {
  return (
    <>
      <Title title="Projects" />
      <ProjectSlider />
      <div className="!text-white text-center">
        Need more information? Visit{' '}
        <Link
          className="underline"
          href="https://github.com/2hanbyeol1?tab=repositories"
          target="_blank"
        >
          GitHub
        </Link>{' '}
        or{' '}
        <Link
          className="underline"
          href="https://2hanbyeol1.notion.site/f96e9b89d3fe4f7487894b94f95002ef?pvs=4"
          target="_blank"
        >
          Notion
        </Link>
      </div>
    </>
  );
}
