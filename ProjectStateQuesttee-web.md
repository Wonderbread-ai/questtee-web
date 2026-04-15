# Questtee Web — Project State & Handover
**Last updated:** 2026-04-15 | **Updated by:** Michael + Claude (Cowork session)

---

## 1. What Is This Project?

The **questtee-web** repo is the static marketing website for the Questtee platform, live at **questtee.com**. It is separate from the mobile app and backend (which live in `Proicimus/questtee-app`).

**Product summary:** Questtee is a community micro-job marketplace connecting teens aged 12–18 with safe, small local tasks posted by community members and parents. Positioned as "Airtasker for young people."

**Tagline:** "Where small hands help today, lead tomorrow"
**Launch market:** NSW, Australia (state-agnostic architecture for future rollout)

---

## 2. Full Technology Stack

### questtee-web (This Repo — Static Marketing Site)
| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Vanilla CSS3 (centralized in `style.css`) |
| Logic | Vanilla JavaScript (`main.js`) |
| Fonts | Nunito (Google Fonts) |
| Form submissions | Google Apps Script (waiting list → Google Sheets) |

### questtee-app (Mobile + Backend — Separate Repo)
| Layer | Technology |
|---|---|
| Mobile app | React Native / Expo SDK 54, TypeScript |
| Backend | Convex (edge functions, database, auth) |
| Auth | Clerk |
| Payments | Stripe Connect (test mode — switch to live before launch) |
| Push notifications | FCM (Firebase Cloud Messaging) |
| Email | Resend (`onboarding@resend.dev` for testing; `questtee.app` domain for prod) |
| Web admin dashboard | Next.js 15 (App Router), Vercel |
| State management | Zustand |
| CDN / DNS | Cloudflare |

---

## 3. Services, Accounts & Credentials

| Service | Purpose | Account / Details |
|---|---|---|
| **questtee.com** | Live website domain | GoDaddy — Michael's account |
| **Vercel** | Hosts questtee.com | Account: `weprojectinfinite-7270s-projects` / Project: `project-6v25n` |
| **GitHub (web repo)** | Source for Vercel auto-deploy | `Wonderbread-ai/questtee-web` |
| **GitHub (app repo)** | Mobile app + backend + web dashboard | `Proicimus/questtee-app` |
| **Vercel (web admin)** | Hosts Next.js admin dashboard | Connected to `Proicimus/questtee-app` / `web/` subfolder |
| **Google Sheet** | Waiting list signups | "New Waiting List Signup" — `weprojectinfinite@gmail.com` |
| **Support email** | Customer support | `support@questtee.com` (Google Workspace) — owner: `weprojectinfinite@gmail.com` |
| **Convex (prod)** | Backend deployment | Deployment: `calculating-cat-557` |
| **Convex (dev)** | Dev backend | Deployment: `rare-stoat-493` |
| **Feedback form admin** | Admin dashboard for customer feedback | Login: `Admin` / Password: `7021` |
| **Clerk** | Mobile app auth | Connected to Convex |
| **Stripe** | Payments (test mode) | Switch to live keys before go-live |
| **Resend** | Transactional email | Verify `questtee.app` domain in Resend before launch |

### GitHub Accounts
- **Proicimus** — primary dev account, contributor on `questtee-web`, owner of `questtee-app`
- **Wonderbread-ai** — organisation that owns the `questtee-web` repo

### DNS (GoDaddy → Vercel)
- **A Record:** `@` → `216.198.79.1` (Vercel Anycast)
- **CNAME:** `www` → `cname.vercel-dns.com`

---

## 4. Local File Paths (Michael's Mac)

| Project | Mac Path |
|---|---|
| questtee-web (website) | `~/Documents/Claude/Projects/questtee-web` |
| questtee-app (mobile + backend) | `~/Documents/Claude/Projects/Questtee` |
| Archive folder (files to review) | `~/Documents/Claude/Projects/Questtee/old-to-be-deleted-by-Michael/` |

### Cowork Mounted Folders
Both folders are mounted in Cowork and accessible to Claude directly:
- `/sessions/.../mnt/questtee-web` → questtee-web
- `/sessions/.../mnt/Questtee` → questtee-app

---

## 5. Deployment Workflow

**questtee.com auto-deploys from `Wonderbread-ai/questtee-web` main branch via Vercel.**

Standard push command (run in Terminal after Claude makes changes):
```bash
cd ~/Documents/Claude/Projects/questtee-web && git add -A && git commit -m "your message here" && git push
```

Timeline: Push → GitHub webhook → Vercel build (~3s) → Live on questtee.com (~30s total)

**If Vercel doesn't auto-deploy after a push:**
Go to vercel.com → questtee-web project → Deployments → click `···` on latest → Redeploy.
This happened once (2026-04-15) — a push didn't trigger a webhook. Manually redeploying or doing a new push fixed it.

**If push gives 403 (wrong GitHub credentials):**
```bash
git remote set-url origin https://Proicimus@github.com/Wonderbread-ai/questtee-web.git
git push
```

---

## 6. Pages & Their Purpose

| File | URL | Purpose |
|---|---|---|
| `index.html` | questtee.com | Main landing page — hero, quest carousel, safety section, CTA |
| `how-it-works.html` | questtee.com/how-it-works.html | Detailed breakdown for teens and quest givers |
| `join.html` | questtee.com/join.html | Waiting list signup (feeds → Google Sheet via Apps Script) |
| `safety.html` | questtee.com/safety.html | Safety & security architecture overview |
| `parent-consent.html` | questtee.com/parent-consent.html | Parent/guardian verification document |
| `privacy.html` | questtee.com/privacy.html | Privacy policy |
| `terms.html` | questtee.com/terms.html | Platform terms of service |
| `contact.html` | questtee.com/contact.html | Contact page |
| `feedbackhidden.html` | questtee.com/feedbackhidden.html | Customer feedback form (internal, not linked from nav) |
| `feedbackhidden-admin.html` | questtee.com/feedbackhidden-admin.html | Feedback admin dashboard — login: `Admin` / `7021` |
| `feedbackhidden-qr.html` | questtee.com/feedbackhidden-qr.html | QR code version of feedback form (for printing) |

**Note:** `PITCH-DECK.html` was briefly in this repo but removed 2026-04-15 — it is a private document, archived at `~/Documents/Claude/Projects/Questtee/old-to-be-deleted-by-Michael/PITCH-DECK.html` for Michael to review.

---

## 7. Brand & Design System

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#0D5257` | Main teal — nav, buttons, banner, footer |
| `--primary-dark` | `#073538` | Darker teal for hover states |
| `--teal-light` | `#1a7a7f` | Lighter teal accents |
| `--gold` | `#FFD700` | Primary CTA buttons ("Get in early") |
| `--gold-dark` | `#C9A800` | Gold button shadow/hover |
| `--lime` | `#BFFF40` | Accent — banner icons, secondary accents |
| `--light` | `#FAF9F6` | Page background (warm cream) |
| `--dark` | `#1a1a1a` | Dark text |

**Font:** Nunito (Google Fonts) — weights 400, 600, 700, 800, 900

**Design rules:**
- Mobile-first — legal/safety pages need minimum `2rem` side padding on mobile
- Static site only — do not introduce frameworks unless explicitly requested
- Gold underline (`::after`) for active nav states

---

## 8. Key JavaScript Features (`main.js`)

- **Scroll-spy:** Highlights active nav item based on scroll position
- **Mobile menu:** Toggles slide-down menu, hamburger ☰ ↔ ✕
- **Quest carousel:** 14+ quest types with scroll-synced pagination dots
- **Active states:** Gold underline indicator via CSS `::after`

---

## 9. Waiting List Integration (`join.html`)

Form posts to Google Sheets via Google Apps Script Web App URL.
- **Method:** `POST` using `URLSearchParams` (required for GAS compatibility)
- **Fields:** Name, Email, Suburb, State, Postcode, Role, Referral Source
- **If sheet stops updating:** Check that `SCRIPT_URL` in `join.html` matches the latest **New Deployment** URL in Google Apps Script

---

## 10. Recent Changes Log

### 2026-04-15 (Cowork session — Michael + Claude)
- **Added scrolling announcement banner to `index.html`** — teal (`#0D5257`) background, white text, lime (`#BFFF40`) icons. Text: "Coming Soon to iOS · Coming Soon to Android". Uses JavaScript to auto-fill screen width seamlessly on all devices.
- **Banner CSS** added to `style.css` — `.announcement-banner`, `.banner-track`, `.banner-item`, `.banner-sep`, `.banner-icon`, `@keyframes bannerScroll`. Nav `top` shifted from `0` to `38px` to accommodate banner.
- **Removed `PITCH-DECK.html`** from public repo — private investor document, now archived in `Questtee/old-to-be-deleted-by-Michael/`
- **Diagnosed Vercel deployment issue** — one push (commit `e030a15`) didn't auto-trigger Vercel. Fixed by doing a fresh push. Root cause: likely a transient GitHub webhook miss.
- **questtee-web mounted in Cowork** — Claude can now edit files directly without manual copying.

---

## 11. Test Accounts (Mobile App)

| Role | Account |
|---|---|
| Mum / Quest Giver | `mnm.douglas` |
| Emma / Teen | `weprojectinfinite` |
| Dad / Parent | `proicimus.assist` |

---

## 12. Instructions for Future Claude Sessions

1. **Both folders are pre-mounted in Cowork** — `questtee-web` and `Questtee` are directly accessible. No need to request directory access.
2. **To push changes live:** Edit files → give Michael the `git add / commit / push` command → Vercel auto-deploys in ~30s.
3. **Claude cannot push to GitHub directly** from the Cowork sandbox (proxy restriction). Michael runs the Terminal command.
4. **Design authority:** Stick to the teal/gold/lime palette. Do not introduce new colours without checking the design system above.
5. **Static site only:** No React, no frameworks — plain HTML/CSS/JS.
6. **Check `PROJECT_HANDOVER.md`** for additional agent guidance and troubleshooting notes.
7. **Feedback admin** is at `/feedbackhidden-admin.html` — login `Admin` / `7021`. Data stored in Convex `businessFeedback` table on deployment `calculating-cat-557`.
