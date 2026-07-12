import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  LogOut,
  PenSquare,
  Trash2,
  User as UserIcon,
  X,
  Save,
  Pencil,
  FileText,
} from "lucide-react";
import { btnPrimary, btnSecondary, Logo } from "@/components/site";
import {
  currentUser,
  login,
  logout,
  signup,
  updateProfile,
  type User,
} from "@/lib/auth";
import {
  addPost,
  deletePost,
  loadPosts,
  postsByAuthor,
  updatePost,
  formatDate,
  type BlogPost,
} from "@/lib/blog";

export const Route = createFileRoute("/account")({
  component: AccountPage,
  head: () => ({
    meta: [
      { title: "Account — Sonar EV" },
      {
        name: "description",
        content: "Private account area for Sonar EV contributors.",
      },
      { name: "robots", content: "noindex, nofollow, noarchive, nosnippet" },
      { name: "googlebot", content: "noindex, nofollow" },
      { property: "og:title", content: "Account — Sonar EV" },
      { property: "og:description", content: "Private account area." },
      { property: "og:robots", content: "noindex" },
    ],
  }),
});

function AccountPage() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(currentUser());
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="grid min-h-screen place-items-center bg-black text-white/50">
        Loading…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Logo />
          <div className="text-xs uppercase tracking-widest text-white/40">
            Private · Account
          </div>
        </div>
      </header>

      {user ? (
        <Dashboard user={user} onUser={setUser} onSignOut={() => setUser(null)} />
      ) : (
        <AuthPanel onAuthed={setUser} />
      )}
    </div>
  );
}

/* --------------------------------- Auth ---------------------------------- */

function AuthPanel({ onAuthed }: { onAuthed: (u: User) => void }) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res =
      mode === "login"
        ? login(email, password)
        : signup({ email, name, password });
    if (!res.ok) {
      setError(res.error);
      return;
    }
    onAuthed(res.user);
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col justify-center px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          {mode === "login" ? "Sign in to your account" : "Create your account"}
        </h1>
        <p className="mt-2 text-sm text-white/60">
          {mode === "login"
            ? "Access your contributor dashboard."
            : "Set up a contributor account to publish posts."}
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          {mode === "signup" && (
            <AuthField
              label="Name"
              value={name}
              onChange={setName}
              placeholder="Your name"
            />
          )}
          <AuthField
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            required
            placeholder="you@company.com"
          />
          <AuthField
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            required
            placeholder="At least 6 characters"
          />
          {error && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">
              {error}
            </div>
          )}
          <button type="submit" className={`${btnPrimary} w-full`}>
            {mode === "login" ? "Sign in" : "Create account"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-5 text-center text-xs text-white/50">
          {mode === "login" ? (
            <>
              No account?{" "}
              <button
                onClick={() => {
                  setMode("signup");
                  setError(null);
                }}
                className="text-white underline underline-offset-2"
              >
                Create one
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setMode("login");
                  setError(null);
                }}
                className="text-white underline underline-offset-2"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-white/30">
        This is a private area. It is not indexed and not linked from the public
        site.
      </p>
    </main>
  );
}

function AuthField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40"
      />
    </div>
  );
}

/* ------------------------------- Dashboard ------------------------------- */

type Tab = "posts" | "profile";

function Dashboard({
  user,
  onUser,
  onSignOut,
}: {
  user: User;
  onUser: (u: User) => void;
  onSignOut: () => void;
}) {
  const [tab, setTab] = useState<Tab>("posts");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);

  function refresh() {
    setPosts(postsByAuthor(user.id));
  }

  useEffect(() => {
    // Migration: seed posts are shown for context but only user's own are editable.
    loadPosts();
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-white/40">
            Welcome back
          </div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">
            {user.name}
          </h1>
          <div className="text-sm text-white/50">{user.email}</div>
        </div>
        <button
          onClick={() => {
            logout();
            onSignOut();
          }}
          className={btnSecondary}
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>

      <div className="mt-8 flex gap-1 rounded-full border border-white/10 bg-white/[0.02] p-1 w-fit">
        <TabButton active={tab === "posts"} onClick={() => setTab("posts")}>
          <FileText className="h-3.5 w-3.5" /> My posts
        </TabButton>
        <TabButton active={tab === "profile"} onClick={() => setTab("profile")}>
          <UserIcon className="h-3.5 w-3.5" /> Profile
        </TabButton>
      </div>

      {tab === "posts" && (
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Your posts</h2>
            <button onClick={() => setCreating(true)} className={btnPrimary}>
              <PenSquare className="h-4 w-4" /> New post
            </button>
          </div>

          {posts.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center text-sm text-white/50">
              You haven't published any posts yet.
            </div>
          ) : (
            <ul className="mt-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              {posts.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
                  <div className="min-w-0">
                    <div className="truncate font-medium">{p.title}</div>
                    <div className="mt-0.5 text-xs text-white/40">
                      {formatDate(p.createdAt)} · /blog/{p.slug}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      onClick={() => setEditing(p)}
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/80 hover:border-white/30"
                    >
                      <Pencil className="h-3.5 w-3.5" /> Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete "${p.title}"?`)) {
                          deletePost(p.id);
                          refresh();
                        }
                      }}
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-red-300 hover:border-red-400/40"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {tab === "profile" && <ProfilePanel user={user} onUser={onUser} />}

      {(creating || editing) && (
        <PostEditor
          user={user}
          post={editing}
          onClose={() => {
            setCreating(false);
            setEditing(null);
          }}
          onSaved={() => {
            setCreating(false);
            setEditing(null);
            refresh();
          }}
        />
      )}
    </main>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "bg-white text-black"
          : "text-white/60 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

/* -------------------------------- Profile -------------------------------- */

function ProfilePanel({
  user,
  onUser,
}: {
  user: User;
  onUser: (u: User) => void;
}) {
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section className="mt-8 max-w-lg">
      <h2 className="text-lg font-semibold">Profile</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setError(null);
          if (password && password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
          }
          const updated = updateProfile({ name, password: password || undefined });
          if (updated) {
            onUser(updated);
            setPassword("");
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
          }
        }}
        className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
      >
        <AuthField label="Display name" value={name} onChange={setName} />
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">
            Email
          </label>
          <input
            value={user.email}
            disabled
            className="w-full cursor-not-allowed rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/50 outline-none"
          />
        </div>
        <AuthField
          label="New password (optional)"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Leave blank to keep current"
        />
        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">
            {error}
          </div>
        )}
        <div className="flex items-center gap-3">
          <button type="submit" className={btnPrimary}>
            <Save className="h-4 w-4" /> Save changes
          </button>
          {saved && (
            <span className="text-xs text-emerald-300">Saved.</span>
          )}
        </div>
      </form>
    </section>
  );
}

/* ------------------------------ Post Editor ------------------------------ */

function PostEditor({
  user,
  post,
  onClose,
  onSaved,
}: {
  user: User;
  post: BlogPost | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const editingId = post?.id ?? null;
  const [title, setTitle] = useState(post?.title ?? "");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [cover, setCover] = useState(post?.cover ?? "");
  const [body, setBody] = useState(post?.body ?? "");

  const heading = useMemo(
    () => (editingId ? "Edit post" : "Publish a new post"),
    [editingId],
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="text-sm font-semibold">{heading}</div>
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
            if (editingId) {
              updatePost(editingId, {
                title,
                excerpt: excerpt || body.slice(0, 140),
                body,
                cover,
              });
            } else {
              addPost({
                title,
                author: user.name,
                authorId: user.id,
                excerpt: excerpt || body.slice(0, 140),
                body,
                cover,
              });
            }
            onSaved();
          }}
          className="max-h-[70vh] space-y-4 overflow-y-auto p-6"
        >
          <AuthField label="Title" value={title} onChange={setTitle} required />
          <AuthField
            label="Cover image URL (optional)"
            value={cover}
            onChange={setCover}
            placeholder="https://..."
          />
          <AuthField
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
              {editingId ? "Save changes" : "Publish post"}{" "}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}