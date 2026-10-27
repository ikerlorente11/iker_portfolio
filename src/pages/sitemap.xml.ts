import { projects } from "../i18n/projects";

export async function GET() {
    const base = import.meta.env.PUBLIC_SITE_URL ?? "https://ikl.pistation.dev";
    // Fecha del build: la página se regenera con cada despliegue
    const lastmod = new Date().toISOString().slice(0, 10);

    const locales = ["es", "en", "eu"] as const;

    // Rutas sin prefijo de idioma; cada una se publica en los 3 idiomas
    const pages = [
        { path: "/", priority: "1.0" },
        { path: "/projects/", priority: "0.8" },
        ...projects.map((p) => ({ path: `/projects/${p.slug}/`, priority: "0.7" })),
    ];

    const urls = pages.flatMap(({ path, priority }) => {
        const hreflangs = locales
            .map((code) => `        <xhtml:link rel="alternate" hreflang="${code}" href="${base}/${code}${path}"/>`)
            .join("\n");
        return locales.map((code) => `
    <url>
        <loc>${base}/${code}${path}</loc>
${hreflangs}
        <xhtml:link rel="alternate" hreflang="x-default" href="${base}/es${path}"/>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${priority}</priority>
    </url>`);
    }).join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls}
</urlset>`;

    return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
