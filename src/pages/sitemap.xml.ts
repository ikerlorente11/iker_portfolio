export async function GET() {
    const base = import.meta.env.PUBLIC_SITE_URL ?? "https://ikl.pistation.dev";
    // Fecha del build: la página se regenera con cada despliegue
    const lastmod = new Date().toISOString().slice(0, 10);

    const locales = [
        { code: "es", priority: "1.0", comment: "Español — prioridad máxima (idioma por defecto)" },
        { code: "en", priority: "0.9", comment: "English" },
        { code: "eu", priority: "0.9", comment: "Euskera" },
    ];

    const hreflangs = locales
        .map(({ code }) => `        <xhtml:link rel="alternate" hreflang="${code}" href="${base}/${code}/"/>`)
        .join("\n");

    const urls = locales.map(({ code, priority, comment }) => `
    <!-- ${comment} -->
    <url>
        <loc>${base}/${code}/</loc>
${hreflangs}
        <xhtml:link rel="alternate" hreflang="x-default" href="${base}/es/"/>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${priority}</priority>
    </url>`).join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls}
</urlset>`;

    return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
