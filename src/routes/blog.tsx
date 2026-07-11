import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, PenSquare, Trash2, X, Calendar, User } from "lucide-react";
import {
  Nav,
  Footer,
  FloatingCTAs,
  ContactStrip,
  btnPrimary,
  btnSecondary,
} from "@/components/site";
import {
  loadPosts,
  addPost,
  deletePost,
  formatDate,
  type BlogPost,
} from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  component: BlogIndex,
  head: () => ({
    meta: [
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPosts(loadPosts());
  }, []);

  function refresh() {
    setPosts(loadPosts());
  }

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Nav />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
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
            <button onClick={() => setOpen(true)} className={btnPrimary}>
              <PenSquare className="h-4 w-4" /> Write a Post
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-14 text-center">
              <div className="text-white/60">No posts yet. Write the first one.</div>
              <button onClick={() => setOpen(true)} className={`${btnPrimary} mt-6`}>
                <PenSquare className="h-4 w-4" /> Write a Post
              </button>
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
                      {!p.id.startsWith("seed-") && (
                        <button
                          onClick={() => {
                            if (confirm(`Delete "${p.title}"?`)) {
                              deletePost(p.id);
                              refresh();
                            }
                          }}
                          className="text-white/40 transition-colors hover:text-white"
                          aria-label="Delete post"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
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

      {open && (
        <WritePostModal
          onClose={() => setOpen(false)}
          onSaved={() => {
            setOpen(false);
            refresh();
          }}
        />
      )}
    </div>
  );
}

function WritePostModal({
  onClose,
  onSaved,
}: {
  onClose: () => void;
  onSaved: () => void;
}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Sonar EV Team");
  const [excerpt, setExcerpt] = useState("");
  const [cover, setCover] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="text-sm font-semibold">Write a new post</div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!title.trim() || !body.trim()) return;
            addPost({
              title,
              author,
              excerpt: excerpt || body.slice(0, 140),
              body,
              cover,
            });
            onSaved();
          }}
          className="max-h-[70vh] space-y-4 overflow-y-auto p-6"
        >
          <PostField label="Title" value={title} onChange={setTitle} required />
          <PostField label="Author" value={author} onChange={setAuthor} />
          <PostField
            label="Cover image URL (optional)"
            value={cover}
            onChange={setCover}
            placeholder="https://..."
          />
          <PostField
            label="Excerpt (1–2 lines)"
            value={excerpt}
            onChange={setExcerpt}
            placeholder="Short summary shown on the blog card"
          />
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">
              Body
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={9}
              required
              placeholder="Write your post. Blank lines start a new paragraph."
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40"
            />
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className={btnSecondary}>
              Cancel
            </button>
            <button type="submit" className={btnPrimary}>
              Publish Post <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <p className="pt-1 text-xs text-white/40">
            Posts are saved to this browser (localStorage). Clearing site data will remove them.
          </p>
        </form>
      </div>
    </div>
  );
}

function PostField({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40"
      />
    </div>
  );
}