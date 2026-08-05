-- helpers
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;

-- profiles
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  full_name text,
  avatar_url text,
  phone text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT ON public.profiles TO anon;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users insert own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(COALESCE(NEW.email,'member'), '@', 1)),
    NEW.raw_user_meta_data->>'avatar_url'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END; $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- roles
CREATE TYPE public.app_role AS ENUM ('admin', 'member');
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

-- blog posts
CREATE TABLE public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name text NOT NULL DEFAULT 'Sonar EV Team',
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  body text NOT NULL DEFAULT '',
  cover text,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.blog_posts TO authenticated;
GRANT SELECT ON public.blog_posts TO anon;
GRANT ALL ON public.blog_posts TO service_role;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published posts are public" ON public.blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Authors read own posts" ON public.blog_posts FOR SELECT TO authenticated USING (auth.uid() = author_id OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authors create posts" ON public.blog_posts FOR INSERT TO authenticated WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors update own posts" ON public.blog_posts FOR UPDATE TO authenticated USING (auth.uid() = author_id OR public.has_role(auth.uid(), 'admin')) WITH CHECK (auth.uid() = author_id OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Authors delete own posts" ON public.blog_posts FOR DELETE TO authenticated USING (auth.uid() = author_id OR public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.blog_posts (slug, title, excerpt, body, author_name) VALUES
('why-ev-charging-is-indias-next-big-infra-bet', 'Why EV Charging Is India''s Next Big Infrastructure Bet', 'The EV market is scaling faster than anyone predicted. Here''s why charging infrastructure is the real business opportunity.', E'India''s EV adoption is entering a hockey-stick moment. Two-wheelers, three-wheelers, fleets and premium four-wheelers are all electrifying at once.\n\nThe bottleneck isn''t the cars — it''s the chargers. Property owners, fuel retailers and fleet operators who deploy DC fast charging today will own the location, the brand and the recurring revenue tomorrow.\n\nAt Sonar EV, we''ve engineered a stack — 30kW to 240kW hardware, OCPP-compliant software, turnkey installation and free AMC — designed for operators who want to move fast without becoming an engineering company themselves.', 'Sonar EV Team'),
('sizing-your-first-dc-fast-charger', 'Sizing Your First DC Fast Charger: 30kW vs 60kW vs 120kW', 'A practical guide to picking the right charger power for hotels, highways, malls and fleet depots.', E'The right charger is the one that matches your traffic pattern, your grid capacity and your ROI horizon.\n\n30kW works beautifully for dealerships, boutique hotels and destination charging where guests stay for 45+ minutes.\n\n60kW is the workhorse for offices, malls and mid-tier highway plazas — fast enough to feel premium, cheap enough to scale.\n\n120kW and above belong on highways, transit corridors and fleet depots where throughput is the whole business model.\n\nUse the Sonar EV profit calculator to pressure-test the numbers before you commit.', 'Sonar EV Team');

-- leads
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text,
  phone text,
  city text,
  source text NOT NULL DEFAULT 'website',
  message text,
  details jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT SELECT ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a lead" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins read leads" ON public.leads FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- elite workspace
CREATE TABLE public.land_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  location text NOT NULL,
  area_sqft numeric,
  price numeric,
  highway_access boolean NOT NULL DEFAULT false,
  power_availability text,
  status text NOT NULL DEFAULT 'available',
  description text,
  image_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.land_listings TO authenticated;
GRANT ALL ON public.land_listings TO service_role;
ALTER TABLE public.land_listings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members view listings" ON public.land_listings FOR SELECT TO authenticated USING (true);
CREATE POLICY "Owners create listings" ON public.land_listings FOR INSERT TO authenticated WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Owners update listings" ON public.land_listings FOR UPDATE TO authenticated USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Owners delete listings" ON public.land_listings FOR DELETE TO authenticated USING (auth.uid() = owner_id);
CREATE TRIGGER land_listings_updated_at BEFORE UPDATE ON public.land_listings FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.elite_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  location text,
  stage text NOT NULL DEFAULT 'discovery',
  capacity_kw numeric,
  investment numeric,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.elite_projects TO authenticated;
GRANT ALL ON public.elite_projects TO service_role;
ALTER TABLE public.elite_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owners manage projects" ON public.elite_projects FOR ALL TO authenticated USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
CREATE TRIGGER elite_projects_updated_at BEFORE UPDATE ON public.elite_projects FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.community_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.community_posts TO authenticated;
GRANT ALL ON public.community_posts TO service_role;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members read community" ON public.community_posts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Members post to community" ON public.community_posts FOR INSERT TO authenticated WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors edit own community posts" ON public.community_posts FOR UPDATE TO authenticated USING (auth.uid() = author_id) WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors delete own community posts" ON public.community_posts FOR DELETE TO authenticated USING (auth.uid() = author_id);

-- billing
CREATE TABLE public.subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  plan text NOT NULL DEFAULT 'starter',
  status text NOT NULL DEFAULT 'inactive',
  amount numeric,
  current_period_end timestamptz,
  razorpay_order_id text,
  razorpay_payment_id text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.subscriptions TO authenticated;
GRANT ALL ON public.subscriptions TO service_role;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own subscription" ON public.subscriptions FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE TRIGGER subscriptions_updated_at BEFORE UPDATE ON public.subscriptions FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan text NOT NULL,
  amount numeric NOT NULL,
  currency text NOT NULL DEFAULT 'INR',
  status text NOT NULL DEFAULT 'created',
  razorpay_order_id text NOT NULL UNIQUE,
  razorpay_payment_id text,
  razorpay_signature text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.payments TO authenticated;
GRANT ALL ON public.payments TO service_role;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own payments" ON public.payments FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE TRIGGER payments_updated_at BEFORE UPDATE ON public.payments FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();