import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with the actual domain where the site will be hosted
  const baseUrl = 'https://hiskidshighschool.ug';

  // Core static routes of the application
  const routes = [
    '',
    '/about',
    '/academics',
    '/vocational-skills',
    '/student-life',
    '/admissions',
    '/contact'
  ];

  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
