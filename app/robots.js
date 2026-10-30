const base = process.env.NEXT_PUBLIC_SITE_URL || "https://drp-fitness.my.id";

export default function robots() {
  return {
    rules: [
      {
        userAgent: [
          "*",
          "Google-Extended",
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
