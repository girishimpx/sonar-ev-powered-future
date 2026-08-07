import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://sonar-ev-powered-future.lovable.app";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const STATIC_ENTRIES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/products", changefreq: "monthly", priority: "0.9" },
  { path: "/chargers", changefreq: "monthly", priority: "0.9" },
  { path: "/products/software", changefreq: "monthly", priority: "0.8" },
  { path: "/products/cms", changefreq: "monthly", priority: "0.8" },
  { path: "/elite", changefreq: "weekly", priority: "0.9" },
  { path: "/contest", changefreq: "weekly", priority: "0.9" },
  { path: "/funding", changefreq: "weekly", priority: "0.9" },
  { path: "/franchise", changefreq: "monthly", priority: "0.9" },
  { path: "/calculator", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/models/coco", changefreq: "monthly", priority: "0.7" },
  { path: "/models/foco", changefreq: "monthly", priority: "0.7" },
  { path: "/models/fofo", changefreq: "monthly", priority: "0.7" },
  { path: "/models/capital-circle", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/business-consultancy", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/land-survey", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/project-report", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/installation", changefreq: "monthly", priority: "0.7" },
  { path: "/solutions/post-installation-inspection", changefreq: "monthly", priority: "0.7" },
];

async function blogEntries(): Promise<SitemapEntry[]> {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) return [];
  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { data } = await supabase
      .from("blog_posts")
      .select("slug, updated_at")
      .eq("published", true);
    return (data ?? []).map((p: { slug: string; updated_at: string }) => ({
      path: `/blog/${p.slug}`,
      lastmod: new Date(p.updated_at).toISOString().slice(0, 10),
      changefreq: "monthly" as const,
      priority: "0.6",
    }));
  } catch {
    return [];
  }
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [...STATIC_ENTRIES, ...(await blogEntries())];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
