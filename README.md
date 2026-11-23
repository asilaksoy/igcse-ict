# ICT Networks – IGCSE ICT 0417 (English / Türkçe)

Free, interactive, bilingual learning website for **Cambridge IGCSE ICT (0417) – Topic 4: Networks and the effects of using them**.
Lessons, simulations, activities, quizzes and exam-style practice for 8 modules. No sign-up, no tracking; progress is stored only in the visitor's browser.

> **Developed by Asil Aksoy, ICT Teacher, with AI assistance (Claude, by Anthropic).**
> The teacher planned the project, set the requirements and directed the content; AI was used to write the code and draft the learning material.
>
> **ICT Öğretmeni Asil Aksoy tarafından yapay zekâ desteğiyle geliştirilmiştir.**

Not affiliated with or endorsed by Cambridge University Press & Assessment. Found a mistake? Please [open an issue](../../issues).

## Modules
01 Network Devices · 02 Wireless Technologies · 03 Cloud Computing · 04 Common Network Environments · 05 Network Types · 06 Network Issues and Security · 07 Authentication Methods · 08 Electronic Conferencing

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production PWA build -> dist/
npm run preview    # serve dist/ locally
```

## Deploy (Vercel)
1. vercel.com → **Add New → Project** → import this GitHub repository.
2. Framework preset: **Vite** (build `npm run build`, output `dist`). Click **Deploy**.
3. Every push to `main` redeploys automatically. HTTPS is automatic, so the site can be installed on tablets and works offline after the first visit.

## Editing content
Each module's text and questions live in one file: `src/modules/<module>/content.ts`.
Author name, AI disclosure and licence: `src/data/site.ts`.

## Tech
React · TypeScript · Vite · Tailwind CSS · Framer Motion · vite-plugin-pwa (service worker, offline cache). No backend.

## Licence
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) © 2026 Asil Aksoy – free to use and adapt for non-commercial purposes with attribution. See `LICENSE`.
