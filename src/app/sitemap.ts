import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://hanbyeol.vercel.app';

  return [
    {
      url: BASE_URL,
    },
  ];
}
