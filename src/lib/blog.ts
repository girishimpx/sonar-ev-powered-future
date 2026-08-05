import { supabase } from "@/integrations/supabase/client";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  authorId?: string | null;
  cover?: string | null;
  createdAt: number;
};

type Row = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  author_name: string;
  author_id: string | null;
  cover: string | null;
  created_at: string;
};

function toPost(r: Row): BlogPost {
  return {
    id: r.id,
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    body: r.body,
    author: r.author_name,
    authorId: r.author_id,
    cover: r.cover,
    createdAt: new Date(r.created_at).getTime(),
  };
}

const COLUMNS =
  "id, slug, title, excerpt, body, author_name, author_id, cover, created_at";

export function slugify(s: string) {
  return (
    s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 80) || `post-${Date.now()}`
  );
}

export async function loadPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(COLUMNS)
    .eq("published", true)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data as Row[]).map(toPost);
}

export async function postsByAuthor(authorId: string): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(COLUMNS)
    .eq("author_id", authorId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data as Row[]).map(toPost);
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(COLUMNS)
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return data ? toPost(data as Row) : undefined;
}

export async function addPost(input: {
  title: string;
  excerpt: string;
  body: string;
  author: string;
  authorId: string;
  cover?: string;
}): Promise<BlogPost> {
  const base = slugify(input.title);
  const slug = `${base}-${Math.random().toString(36).slice(2, 6)}`;
  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      slug,
      title: input.title.trim(),
      excerpt: input.excerpt.trim(),
      body: input.body.trim(),
      author_name: input.author.trim() || "Sonar EV Team",
      author_id: input.authorId,
      cover: input.cover?.trim() || null,
    })
    .select(COLUMNS)
    .single();
  if (error) throw error;
  return toPost(data as Row);
}

export async function updatePost(
  id: string,
  patch: { title?: string; excerpt?: string; body?: string; cover?: string },
): Promise<void> {
  const payload: Record<string, unknown> = {};
  if (patch.title !== undefined) payload["title"] = patch.title.trim();
  if (patch.excerpt !== undefined) payload["excerpt"] = patch.excerpt.trim();
  if (patch.body !== undefined) payload["body"] = patch.body.trim();
  if (patch.cover !== undefined) payload["cover"] = patch.cover.trim() || null;
  const { error } = await supabase.from("blog_posts").update(payload).eq("id", id);
  if (error) throw error;
}

export async function deletePost(id: string): Promise<void> {
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw error;
}

export function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
