import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, User } from "lucide-react";
import {
  Nav,
  Footer,
  FloatingCTAs,
  ContactStrip,
  btnSecondary,
} from "@/components/site";
import { getPost, formatDate, type BlogPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  head: ({ params }) => {
    const url = `https://sonar-ev-powered-future.lovable.app/blog/${params.slug}`;
    return {
      links: [{ rel: "canonical", href: url }],
      meta: [
        { title: "Post — Sonar EV Blog" },
        { name: "description", content: "Insights on EV charging infrastructure, franchising and station economics from the Sonar EV team." },
        { property: "og:title", content: "Sonar EV Blog" },
        { property: "og:description", content: "Insights on EV charging infrastructure and station economics in India." },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    getPost(slug)
      .then((p) => {
        if (!active) return;
        setPost(p);
        setLoaded(true);
      })
      .catch(() => {
        if (!active) return;
        setPost(undefined);
        setLoaded(true);
      });
    return () => {
      active = false;
    };
  }, [slug]);

  useEffect(() => {
    if (loaded && post) document.title = `${post.title} — Sonar EV Blog`;
  }, [loaded, post]);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />

      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <button
          onClick={() => router.history.back()}
          className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        {!loaded ? (
          <div className="mt-10 text-white/50">Loading…</div>
        ) : !post ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
            <h1 className="text-2xl font-semibold">Post not found</h1>
            <p className="mt-2 text-sm text-white/60">
              This post may have been removed or the link is incorrect.
            </p>
            <Link to="/blog" className={`${btnSecondary} mt-6`}>
              Back to blog
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-8 flex items-center gap-4 text-xs text-white/50">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {formatDate(post.createdAt)}
              </span>
              <span className="inline-flex items-center gap-1">
                <User className="h-3.5 w-3.5" /> {post.author}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                {post.excerpt}
              </p>
            )}
            {post.cover && (
              <img
                src={post.cover}
                alt={post.title}
                className="mt-8 w-full rounded-2xl border border-white/10 object-cover"
                loading="lazy"
              />
            )}
            <div className="prose prose-invert mt-10 max-w-none space-y-5 text-white/80">
              {post.body.split(/\n\s*\n/).map((para, i) => (
                <p key={i} className="text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </>
        )}
      </article>

      <ContactStrip>Ready to build your EV charging site? Talk to Sonar EV.</ContactStrip>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}