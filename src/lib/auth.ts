export type User = {
  id: string;
  email: string;
  name: string;
  password: string; // demo-only, localStorage
  createdAt: number;
};

const USERS_KEY = "sonar_users_v1";
const SESSION_KEY = "sonar_session_v1";

function isBrowser() {
  return typeof window !== "undefined";
}

export function loadUsers(): User[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as User[]) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: User[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function currentUserId(): string | null {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(SESSION_KEY);
}

export function currentUser(): User | null {
  const id = currentUserId();
  if (!id) return null;
  return loadUsers().find((u) => u.id === id) ?? null;
}

export function signup(input: {
  email: string;
  name: string;
  password: string;
}): { ok: true; user: User } | { ok: false; error: string } {
  const email = input.email.trim().toLowerCase();
  if (!email || !input.password || input.password.length < 6) {
    return { ok: false, error: "Enter a valid email and a password of at least 6 characters." };
  }
  const users = loadUsers();
  if (users.some((u) => u.email === email)) {
    return { ok: false, error: "An account with this email already exists." };
  }
  const user: User = {
    id: `u-${Date.now()}`,
    email,
    name: input.name.trim() || email.split("@")[0],
    password: input.password,
    createdAt: Date.now(),
  };
  saveUsers([user, ...users]);
  window.localStorage.setItem(SESSION_KEY, user.id);
  return { ok: true, user };
}

export function login(
  email: string,
  password: string,
): { ok: true; user: User } | { ok: false; error: string } {
  const users = loadUsers();
  const user = users.find((u) => u.email === email.trim().toLowerCase());
  if (!user || user.password !== password) {
    return { ok: false, error: "Invalid email or password." };
  }
  window.localStorage.setItem(SESSION_KEY, user.id);
  return { ok: true, user };
}

export function logout() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(SESSION_KEY);
}

export function updateProfile(input: { name?: string; password?: string }): User | null {
  const id = currentUserId();
  if (!id) return null;
  const users = loadUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return null;
  if (input.name !== undefined) users[idx].name = input.name.trim() || users[idx].name;
  if (input.password && input.password.length >= 6) users[idx].password = input.password;
  saveUsers(users);
  return users[idx];
}