import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/api/'], // Disallow API routes or private paths
        },
        sitemap: 'https://www.greenthumbfoundation.org/sitemap.xml',
    };
}
