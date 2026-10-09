import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: 'https://seotriks.com',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://seotriks.com/about',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://seotriks.com/services',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://seotriks.com/blog',
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://seotriks.com/contact',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://seotriks.com/pricing',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
