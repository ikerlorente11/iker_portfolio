export async function GET() {
    const base = import.meta.env.PUBLIC_SITE_URL ?? "https://ikl.pistation.dev";
    return new Response(
        [
            "User-agent: *",
            "Allow: /",
            "Disallow: /es/easter-egg",
            "Disallow: /en/easter-egg",
            "Disallow: /eu/easter-egg",
            "",
            `Sitemap: ${base}/sitemap.xml`,
        ].join("\n"),
        { headers: { "Content-Type": "text/plain" } },
    );
}
