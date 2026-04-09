# Questtee-Web: Project Handover & Architecture Guide

## 1. Project Overview
Questtee is a local community marketplace designed for teenagers (Questtees) to earn money by helping neighbours (Quest Givers) with small tasks. The platform emphasizes safety, trust, and skill-building for the next generation.

**Slogan:** "Where small hands help today, lead tomorrow"
**Primary Launch Market:** NSW, Australia (State-agnostic rollout architecture. State selection and Postcode tracking integrated.)

---

## 2. Technical Stack
### Front-End (Static Web)
*   **HTML5 / Vanilla CSS3:** Modern, responsive design with glassmorphism and gold/teal branding.
*   **Vanilla JavaScript:** Centralized logic in `main.js`.
*   **Fonts:** Nunito (Google Fonts).
*   **Icons:** Unicode emojis (for lightweight speed).

### Back-End (Serverless Integration)
*   **Google Apps Script (GAS):** Handles the "Waiting List" form submissions.
*   **Stripe (Planned):** Identified in the business model for future payment processing.

---

## 3. Key Services & Infrastructure
| Service | Details | Username / Account |
| :--- | :--- | :--- |
| **Domain** | GoDaddy (`questtee.com`) | User's Account |
| **Hosting** | Vercel (`project-6v25n`) | `weprojectinfinite-7270s-projects` |
| **GitHub** | Primary Deployment Repo | `Wonderbread-ai/questtee-web` |
| **GitHub** | Alternate/Backup Repo | `Proicimus/questtee-web` |
| **Waitlist Data** | Google Sheet ("New Waiting List Signup") | `weprojectinfinite@gmail.com` |
| **Support Email** | Google Workspace (`support@questtee.com`) | `weprojectinfinite@gmail.com` owner |

---

## 4. Navigation & Core Logic (`main.js`)
Future agents should look to `main.js` for all interactive features:
*   **Scroll-Spy:** Automatically highlights the active menu item based on user scroll position.
*   **Mobile Menu:** Toggles a vertical slide-down menu and switches the hamburger '☰' to '✕'.
*   **Quest Carousel:** Handles 14+ quest types. Includes a `scroll` listener that synchronizes the pagination dots below the carousel.
*   **Active States:** Uses a Gold Underline indicator (CSS `::after`) for consistent UX.

---

## 5. Waiting List Integration (`join.html`)
The form in `join.html` communicates with Google Sheets via a **Web App URL**.
*   **Method:** `POST` using `URLSearchParams` (essential for Google Apps Script compatibility).
*   **Fields:** Name, Email, Suburb, State, Postcode, Role, Referral Source.
*   **Troubleshooting:** If the sheet doesn't update, ensure the `SCRIPT_URL` in `join.html` matches the latest **New Deployment** URL from Google Apps Script.

---

## 6. Troubleshooting & Common Tasks
### Git Push to Wonderbread-ai (Main Repo)
To push updates from a local machine that is already logged into a different account, use:
```bash
git remote set-url origin https://Wonderbread-ai@github.com/Wonderbread-ai/questtee-web.git
git push origin main
```

### DNS Settings (GoDaddy to Vercel)
*   **A Record:** `@` points to **`216.198.79.1`** (Vercel Anycast)
*   **CNAME Record:** `www` points to **`cname.vercel-dns.com`**

---

## 7. Instructions for Future AI Agents (Prompt)
> You are an AI Coding Assistant working on the Questtee project. 
> 
> **Core Guidelines:**
> 1. **Aesthetics First:** Questtee uses a premium, high-trust design language. Maintain the Teal (#0D5257), Gold (#FFD700), and Lime (#BFFF40) color palette.
> 2. **Mobile-First:** Always ensure that legal/safety documents have at least `2rem` (32px) of side padding on mobile.
> 3. **Static Integrity:** This is a static site (HTML/CSS) hosted on Vercel. Do not introduce complex frameworks unless specifically requested.
> 4. **Service Awareness:** Be aware that the user manages domains at GoDaddy and mailing lists at Google. Always verify the `SCRIPT_URL` in `join.html` when adjusting form logic.
> 5. **Confirmation:** Always end your work session with the phrase "ALL DONE" as per the user's workflow requirement.

---

## 8. Directory Structure
*   `index.html`: Main landing page (Hero, Quests, Safety, CTA).
*   `how-it-works.html`: Detailed breakdown for Teens and Givers.
*   `safety.html`: Safety and security architecture.
*   `parent-consent.html`: Document for parent/guardian verification.
*   `privacy.html`: Data usage and privacy policy.
*   `terms.html`: Platform service agreement.
*   `join.html`: The waiting list signup page.
*   `style.css`: Centralized design system.
*   `main.js`: Interaction logic.
*   `images/`: Brand assets and logos.
