# New Grace Electrical — Website Build Workflow
**Client:** New Grace Electrical (NGE) — Electrical Engineer | Contractor | Consultant | Panel Manufacturer, Hosur
**Deliverable:** Modern, 3D-accented React business website
**Your role:** Freelance UI/Frontend Designer

---

## 0. What I pulled from the client's files

From `NGE_Profile.pdf` + `New_Grace_Electrical_Presentation.pptx`:

- **Brand**: Green/teal identity, lightning-bolt "NGE" logo mark, clean corporate tone
- **Tagline**: "Electrical Engineer | Contractor | Consultant | Panel Manufacturer | Trunk Key Projects"
- **Founder**: A. Thangavel, Proprietor, 23 years in electrical engineering (ex-Kavery Electrical, Mercy Electrical, Easwary Electrical)
- **Core strengths**: Electrical Engineer, A-Grade Contractor (TANGEDCO/CEIG), Consultant, Panel Manufacturer, Siemens Switchgear Channel Partner, Turnkey Projects
- **Products**: MV Panel, VCB Panel, Distribution Panel, SSB Switch, MCC Panel, Control Panel, VFD Panel
- **In-house infra**: Muratec Turret Punch Press, CNC Bending/Press Brake, CNC Shearing, Mechanical Press, Pillar Drilling M/C, CO2 & Arc Welding
- **Clients**: Hindustan Unilever, TTK Prestige, Nagarjuna Cement, Sterling Lab, MEC, PG Industries, Alubee Diecaster, Indicarb, Total Environment, Delta CNC, Sree Lakshmi, Allcargo, Bio Plus, KMS Moulding, PKM Granites
- **Contact**: 97869 83972 / 84891 85157 / 88384 54514, newgraceeletrical@gmail.com, Hosur (H.O + Branch address)

I've extracted all 16 usable images (factory floor, panel boards, CNC/press machines, logo) into an `/images` folder — reference list at the bottom of this doc.

---

## 1. High-level approach

You're combining 3 tools in a pipeline:

1. **Stitch** (Google's AI UI designer, stitch.withgoogle.com) → generates the *visual UI screens* from text/image prompts
2. **Antigravity** (Google's agentic coding IDE, built on Gemini) → turns those screens into a real **React** codebase, using **MCP** so the agent can pull live data/images/tools while coding
3. **You** → creative director + QA — you steer prompts, curate the real photos over placeholder AI images, and do the business-facing polish (WhatsApp CTA, map, phone-tap links) that make it feel like a *real Hosur industrial contractor*, not a generic SaaS template

Think of it as: **Stitch = mockup**, **Antigravity = build**, **MCP = the wiring between Antigravity and your assets/services (filesystem, GitHub, image hosting, maybe a contact-form email service)**.

---

## 2. Site structure (sitemap)

```
/                Home        — hero (3D panel/switchgear render), trust bar (client logos), quick services
/about           About Us    — founder story, 23 yrs experience, timeline, certifications (TANGEDCO/CEIG)
/services        Services    — Engineer / Contractor / Consultant / Panel Mfr / Siemens Partner / Turnkey
/products        Products    — MV Panel, VCB Panel, Distribution Panel, SSB Switch, MCC Panel, Control Panel, VFD Panel
                              (each = card → modal/detail with spec bullets + photo)
/infrastructure  Facility    — CNC/press machine gallery (use real slide photos, not AI-generated)
/clients         Clients     — logo wall / marquee of HUL, TTK, Nagarjuna Cement etc.
/contact         Contact     — H.O + Branch address, click-to-call, WhatsApp button, embedded Google Map, enquiry form
```

Single-page scroll version also works well for a business of this size — your call based on client preference.

---

## 3. Design direction (senior UI designer take)

**Don't make it "techy SaaS."** This is a heavy-industry panel manufacturer — the site should feel like **precision engineering + trust + weight**, not like a startup dashboard. Translate that into:

- **Palette**: Keep NGE's green (`#1FA35C`-ish) as primary accent, but ground it in an industrial neutral base — charcoal/graphite (`#1A1D21`), steel grey (`#E7E9EC`), warm white. Avoid purple/pink gradients — they read as generic AI-template.
- **Typography**: A geometric sans for headings (e.g. Space Grotesk / Sora) + a clean workhorse sans for body (Inter). Bold, confident headline sizes — this audience (industrial buyers, procurement teams) trusts clarity over cleverness.
- **The "3D" element** — use it purposefully, not decoratively:
  - Hero: a subtly rotating **3D switchgear/panel model** (or a high-quality parallax photo-composite of the real panel photos with depth layers) — reacts to mouse/scroll
  - Product cards: soft 3D tilt-on-hover (react-tilt / framer-motion) using your **real product photos**, not generic AI panels
  - Infrastructure section: photo grid with depth-based hover zoom, not fake 3D machines
- **Motion**: restrained — fade/slide-up on scroll (Framer Motion), no bouncy/gimmicky animation. Industrial clients read excess motion as "not serious."
- **Trust signals above the fold**: 23 years experience, Siemens Channel Partner badge, TANGEDCO/CEIG grade, client logo strip — these convert far better for B2B than aesthetics alone.
- **CTA priority**: Phone call + WhatsApp are primary (this audience calls, doesn't fill forms). Put a sticky call button on mobile.

---

## 4. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **React + Vite** (or Next.js if you want SEO/SSR for Google visibility) | Next.js strongly recommended — local industrial clients get found via Google search, and SSR/meta tags matter a lot here |
| Styling | Tailwind CSS | fast, matches Stitch's generated markup well |
| 3D | **react-three-fiber + drei** for the hero model; **framer-motion** for scroll/tilt everywhere else | keep true WebGL 3D to 1–2 hero moments only — perf on mobile matters, this audience browses on phones |
| Animation | Framer Motion | |
| Forms | React Hook Form + a simple email service (Resend/EmailJS) or WhatsApp deep link | no backend needed for a brochure site |
| Hosting | Vercel (Next.js) or Netlify | free tier is enough |
| Images | Your extracted real photos (optimized via `next/image` or `vite-imagetools`) | never replace real factory/panel photos with AI-generated ones — credibility matters more than polish here |

---

## 5. Step-by-step workflow

### Step 1 — Prep assets (you, now)
- Use the 16 images already extracted from the PPTX (see list below). Crop/clean the best ~8–10 for hero, products, infra, clients sections.
- Write final copy in a doc (About text, service bullets, product spec one-liners) — don't let the AI invent claims about the business.

### Step 2 — Design screens in Stitch
Go to Stitch, create a new project, and prompt screen-by-screen (prompts below in §6). Iterate 2–3 times per screen. Export:
- Design specs (Stitch gives you HTML/CSS or Figma-style output)
- Screenshots of every screen/breakpoint (desktop + mobile) — you'll hand these to Antigravity as visual reference

### Step 3 — Set up Antigravity + MCP
- Install Antigravity, open a new workspace, connect it to a fresh GitHub repo for this project
- Configure MCP servers you'll actually need for this build:
  - **Filesystem MCP** — so the agent can read your `/images` folder and Stitch exports directly
  - **GitHub MCP** — commit/push as it builds
  - **Browser/Playwright MCP** (optional) — so the agent can visually verify its own output against the Stitch screenshots
  - **Fetch/web MCP** (optional) — if you want it to pull icon sets, fonts, etc.
- Point Antigravity at the Stitch screenshots + your copy doc + the real images folder as its "ground truth" context before it writes any code.

### Step 4 — Build in Antigravity (agentic loop)
Feed it one section at a time (Hero → Services → Products → Infra → Clients → Contact → footer), reviewing each before moving on. This keeps quality high and avoids a giant unreviewable diff.

### Step 5 — Swap in real assets + 3D polish
Replace any AI-generated imagery with your real client photos. Add the react-three-fiber hero model. Tune motion/tilt values by feel — Antigravity will get you 80% there, the last 20% (spacing, timing, easing) is where you earn the "senior designer" outcome.

### Step 6 — Content QA + client-specific correctness
Double check against the PDF: correct phone numbers, correct H.O/Branch addresses, correct spelling ("New Grace Electrical" — note the PDF footer typo "newgraceeletrical.in", confirm with client which is the real live domain before launch).

### Step 7 — Performance + SEO pass
Lighthouse check (especially mobile — 3D/WebGL is heavy), compress images, add meta tags/OG image, Google Business Profile alignment, add schema.org `LocalBusiness`/`Organization` markup — this matters a lot for local industrial search ("panel manufacturer Hosur").

### Step 8 — Deploy + handover
Deploy to Vercel/Netlify, connect the client's domain, hand over a short Loom/readme on how to update text/images later (or offer a retainer for updates — good freelance upsell).

---

## 6. Stitch prompts (copy-paste, screen by screen)

**Global style prompt (paste first, before any screen prompt, to lock the system):**
> "Design system: industrial-modern B2B website for an electrical panel manufacturer. Primary color deep green #1AA35C, base charcoal #1A1D21 and steel grey #E7E9EC, warm white background. Headline font geometric sans-serif (Space Grotesk style), body font Inter. Confident, high-contrast, trustworthy — NOT a soft SaaS/startup look. Generous whitespace, sharp corners with occasional 12px radius, subtle depth via shadows not gradients."

**Hero (Home):**
> "Hero section for an industrial electrical panel manufacturing company website. Large bold headline 'Engineering Power You Can Trust', subheadline mentioning 23+ years experience and Siemens Switchgear Channel Partner status. Primary CTA button 'Get a Quote', secondary 'Call Now'. Right side: large photo-realistic switchgear panel image with a subtle 3D floating depth effect. Trust bar below hero with 5-6 client logos in grayscale."

**About:**
> "About section with founder profile card — photo placeholder, name 'A. Thangavel', title 'Proprietor', '23 Years of Industry Experience'. Timeline component showing career progression across three prior companies before founding New Grace Electrical. Stat counters: 23+ Years Experience, 15+ Major Clients, 7 Panel Product Lines."

**Services:**
> "Services grid, 6 cards with icons: Electrical Engineering, A-Grade Contractor (TANGEDCO/CEIG), Consultancy, Panel Manufacturing, Siemens Switchgear Channel Partner, Turnkey Projects. Each card has icon, title, 2-line description, subtle hover lift with soft shadow."

**Products:**
> "Product showcase grid for MV Panel, VCB Panel, Distribution Panel, SSB Switch, MCC Panel, Control Panel, VFD Panel. Each card: product photo, name, 2-3 spec bullet points, 'View Details' link. Card has 3D tilt-on-hover styling. Grid responsive 3 columns desktop, 1 column mobile."

**Infrastructure/Facility:**
> "Manufacturing facility gallery section, masonry photo grid showcasing CNC bending machine, turret punch press, welding equipment, factory floor. Dark overlay caption on hover naming each machine. Section headline 'Precision-Built In-House'."

**Clients:**
> "Client trust section, infinite scrolling logo marquee row, grayscale logos that turn full-color on hover, headline 'Trusted By Industry Leaders', subtext mentioning HUL, TTK Prestige, Nagarjuna Cement among clients."

**Contact:**
> "Contact section split layout: left side has address cards (Head Office and Branch, Hosur), phone numbers as tap-to-call buttons, WhatsApp CTA button, email link. Right side embedded map placeholder and a short enquiry form (Name, Phone, Requirement dropdown, Message, Submit)."

---

## 7. Antigravity + MCP handoff prompt (paste into Antigravity to kick off the build)

> "Build a Next.js + Tailwind + Framer Motion + react-three-fiber website for New Grace Electrical, an industrial electrical panel manufacturer in Hosur, India. Use the attached Stitch screenshots as the exact visual reference for layout and styling — match spacing, color, and component structure closely. Use the images in `/images` (via filesystem MCP) as the real product/facility photography — do not generate placeholder images for these sections. Content and copy must come from `/content/site-copy.md` (also via filesystem MCP) — do not invent business claims, phone numbers, or client names. Structure as: Home, About, Services, Products, Infrastructure, Clients, Contact. Sticky mobile call/WhatsApp bar. SEO metadata + LocalBusiness schema.org markup on every page. Commit incrementally to the connected GitHub repo (via GitHub MCP) after each section, with descriptive commit messages, so I can review section by section."

---

## 8. Freelance delivery checklist (so this job feels genuinely "more satisfying" — i.e., professional, not rushed)

- [ ] Confirm real live domain with client (PDF footer has a typo — verify before buying/pointing DNS)
- [ ] Get client sign-off on copy before coding (saves rebuild cycles)
- [ ] Mobile-first review — most of this client's customers/procurement contacts will view on phone
- [ ] Real photos only for products/facility/clients — AI images only acceptable for abstract hero background textures, never for "this is our panel/factory"
- [ ] Contact number click-to-call + WhatsApp tested on actual phone
- [ ] Google Business Profile + site NAP (name/address/phone) consistency — critical for local SEO in Hosur
- [ ] Lighthouse mobile score 85+ after adding 3D hero (test on a mid-range Android, not just your dev machine)
- [ ] Short handover video/doc for the client on how to request future content updates
- [ ] Propose a small maintenance retainer (₹) — recurring freelance income beats one-off builds

---

## 9. Extracted image reference

| File | Content | Suggested use |
|---|---|---|
| slide1_0.jpg | Panel board factory line, wide shot | Hero background / About |
| slide3_1.jpg | Panel board close-up | Products |
| slide4_2.jpg, slide4_3.jpg | Machinery photos | Infrastructure gallery |
| slide5_4.jpg, slide5_5.jpg, slide5_6.jpg | Machinery photos | Infrastructure gallery |
| slide6_7.jpg – slide6_12.jpg | Machinery (turret punch, CNC bend, welding) | Infrastructure gallery |
| slide8_13.jpg, slide8_14.jpg, slide8_15.jpg | Additional facility/contact imagery | Facility / Contact / Footer |

All extracted to a working `/images` folder ready to hand to Antigravity via filesystem MCP.

---

### Bottom line as your senior-designer sounding board
The biggest lever for client satisfaction here isn't the 3D effect — it's **using their real photos correctly, getting the phone numbers and addresses exactly right, and making the call/WhatsApp CTA impossible to miss on mobile**. Nail those, then layer the 3D hero and tilt effects as the "wow" on top. That order of priorities is what separates a freelance job that gets referrals from one that just gets paid once.
