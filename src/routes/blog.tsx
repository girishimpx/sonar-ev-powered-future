import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, PenSquare, Calendar, User } from "lucide-react";
import {
  Nav,
  Footer,
  FloatingCTAs,
  ContactStrip,
} from "@/components/site";
import {
  loadPosts,
  formatDate,
  type BlogPost,
} from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  component: BlogIndex,
  head: () => ({
    links: [{ rel: "canonical", href: "https://sonar-ev-powered-future.lovable.app/blog" }],
    meta: [
      { property: "og:url", content: "https://sonar-ev-powered-future.lovable.app/blog" },
      { title: "Blog — Sonar EV" },
      {
        name: "description",
        content:
          "Insights, guides and case studies on EV charging infrastructure in India from the Sonar EV team.",
      },
      { property: "og:title", content: "Blog — Sonar EV" },
      {
        property: "og:description",
        content:
          "Insights, guides and case studies on EV charging infrastructure in India.",
      },
    ],
  }),
});

function BlogIndex() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    loadPosts()
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                <PenSquare className="h-3.5 w-3.5" /> Sonar EV Journal
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Insights on EV charging <br />
                <span className="text-white/50">infrastructure & business</span>
              </h1>
              <p className="mt-5 max-w-xl text-white/60">
                Field notes, sizing guides and business playbooks from the team building India's next EV charging network.
              </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-14 text-center">
              <div className="text-white/60">No posts yet. Check back soon.</div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <article
                  key={p.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/25"
                >
                  {p.cover && (
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-white/50">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(p.createdAt)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {p.author}
                      </span>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold leading-snug">
                      {p.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: p.slug }}
                        className="inline-flex items-center gap-1 text-sm font-medium text-white transition-transform group-hover:translate-x-0.5"
                      >
                        Read post <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactStrip>Have a topic we should cover? Tell the Sonar EV team.</ContactStrip>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}