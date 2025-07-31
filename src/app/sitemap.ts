import type { MetadataRoute } from 'next';

import { PROJECT_DETAIL_PATH } from '@/constants/path';

import { PROJECT_CONTENTS } from '../data/project';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://hanbyeol.vercel.app';

  return [
    {
      url: BASE_URL,
    },
    ...PROJECT_CONTENTS.map(({ id }) => ({
      url: `${BASE_URL}${PROJECT_DETAIL_PATH({ projectId: id })}`,
    })),
  ];
}
