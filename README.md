# ICT Interactive – Cambridge IGCSE ICT 0417 (English / Türkçe)

Free, interactive, bilingual learning website for **Cambridge IGCSE ICT (0417)**.
Lessons, simulations, activities, quizzes and exam-style practice. Units 1–4 are available (17 modules); more units will be added. No sign-up, no tracking; progress is stored only in the visitor's browser.

> **Developed by Asil Aksoy, ICT Teacher, with AI assistance (Claude, by Anthropic).**
> The teacher planned the project, set the requirements and directed the content; AI was used to write the code and draft the learning material.
>
> **ICT Öğretmeni Asil Aksoy tarafından yapay zekâ desteğiyle geliştirilmiştir.**

Not affiliated with or endorsed by Cambridge University Press & Assessment. Found a mistake? Please [open an issue](../../issues).

## Units
1. Types and components of computer systems – 1.1 Hardware and software · 1.2 Main components · 1.3 Operating systems · 1.4 Types of computer · 1.5 Emerging technologies
2. Input and output devices – 2.1 Input devices · 2.2 Direct data entry · 2.3 Output devices
3. Storage devices and media
4. Networks and the effects of using them – network devices, Wi-Fi and Bluetooth, cloud computing, internet/intranet/extranet, LAN/WLAN/WAN, security, authentication, electronic conferencing

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
Each module's text and questions live in one file: `src/modules/<module>/content.ts`. Units and module list: `src/data/modules.ts` and `src/data/units.ts`.
Author name, AI disclosure and licence: `src/data/site.ts`.

## Tech
React · TypeScript · Vite · Tailwind CSS · Framer Motion · vite-plugin-pwa (service worker, offline cache). No backend.

## Licence
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) © 2026 Asil Aksoy – free to use and adapt for non-commercial purposes with attribution. See `LICENSE`.
