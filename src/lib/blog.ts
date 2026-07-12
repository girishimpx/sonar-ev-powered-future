export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  authorId?: string;
  cover?: string;
  createdAt: number;
};

const KEY = "sonar_blog_posts_v1";

const SEED: BlogPost[] = [
  {
    id: "seed-1",
    slug: "why-ev-charging-is-indias-next-big-infra-bet",
    title: "Why EV Charging Is India's Next Big Infrastructure Bet",
    excerpt:
      "The EV market is scaling faster than anyone predicted. Here's why charging infrastructure is the real business opportunity.",
    body:
      "India's EV adoption is entering a hockey-stick moment. Two-wheelers, three-wheelers, fleets and premium four-wheelers are all electrifying at once.\n\nThe bottleneck isn't the cars — it's the chargers. Property owners, fuel retailers and fleet operators who deploy DC fast charging today will own the location, the brand and the recurring revenue tomorrow.\n\nAt Sonar EV, we've engineered a stack — 30kW to 240kW hardware, OCPP-compliant software, turnkey installation and free AMC — designed for operators who want to move fast without becoming an engineering company themselves.",
    author: "Sonar EV Team",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6,
  },
  {
    id: "seed-2",
    slug: "sizing-your-first-dc-fast-charger",
    title: "Sizing Your First DC Fast Charger: 30kW vs 60kW vs 120kW",
    excerpt:
      "A practical guide to picking the right charger power for hotels, highways, malls and fleet depots.",
    body:
      "The right charger is the one that matches your traffic pattern, your grid capacity and your ROI horizon.\n\n30kW works beautifully for dealerships, boutique hotels and destination charging where guests stay for 45+ minutes.\n\n60kW is the workhorse for offices, malls and mid-tier highway plazas — fast enough to feel premium, cheap enough to scale.\n\n120kW and above belong on highways, transit corridors and fleet depots where throughput is the whole business model.\n\nUse the Sonar EV profit calculator to pressure-test the numbers before you commit.",
    author: "Sonar EV Team",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
];

function isBrowser() {
  return typeof window !== "undefined";
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80) || `post-${Date.now()}`;
}

export function loadPosts(): BlogPost[] {
  if (!isBrowser()) return SEED;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return SEED;
    const arr = JSON.parse(raw) as BlogPost[];
    return Array.isArray(arr) ? arr : SEED;
  } catch {
    return SEED;
  }
}

export function savePosts(posts: BlogPost[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(KEY, JSON.stringify(posts));
}

export function addPost(input: {
  title: string;
  excerpt: string;
  body: string;
  author: string;
  cover?: string;
  authorId?: string;
}): BlogPost {
  const posts = loadPosts();
  const post: BlogPost = {
    id: `p-${Date.now()}`,
    slug: slugify(input.title),
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    body: input.body.trim(),
    author: input.author.trim() || "Sonar EV Team",
    authorId: input.authorId,
    cover: input.cover?.trim() || undefined,
    createdAt: Date.now(),
  };
  savePosts([post, ...posts]);
  return post;
}

export function deletePost(id: string) {
  savePosts(loadPosts().filter((p) => p.id !== id));
}

export function updatePost(
  id: string,
  patch: Partial<Pick<BlogPost, "title" | "excerpt" | "body" | "author" | "cover">>,
): BlogPost | undefined {
  const posts = loadPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return undefined;
  const next: BlogPost = { ...posts[idx], ...patch };
  if (patch.title) {
    next.title = patch.title.trim();
    next.slug = slugify(patch.title);
  }
  if (patch.excerpt !== undefined) next.excerpt = patch.excerpt.trim();
  if (patch.body !== undefined) next.body = patch.body.trim();
  if (patch.author !== undefined) next.author = patch.author.trim() || next.author;
  if (patch.cover !== undefined) next.cover = patch.cover.trim() || undefined;
  posts[idx] = next;
  savePosts(posts);
  return next;
}

export function postsByAuthor(authorId: string): BlogPost[] {
  return loadPosts().filter((p) => p.authorId === authorId);
}

export function getPost(slug: string): BlogPost | undefined {
  return loadPosts().find((p) => p.slug === slug);
}

export function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}