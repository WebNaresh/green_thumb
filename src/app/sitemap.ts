import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.greenthumbfoundation.org';

    // Core pages with high priority
    const routes = [
        '',
        '/about',
        '/project',
        '/green-warrior',
        '/suresh-patil',
        '/media',
        '/contact',
        '/donate',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Add specific high-value content pages if any (future scalability)

    return routes;
}
