import type { MetadataRoute } from 'next';
import { PROJECT_CONTENTS } from './_data/project';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://hanbyeol.vercel.app';
  const projectDetailSitemap = PROJECT_CONTENTS.map(({ id }) => ({
    url: `${BASE_URL}/project/${id}`,
  }));

  return [
    {
      url: BASE_URL,
    },
    ...projectDetailSitemap,
  ];
}
