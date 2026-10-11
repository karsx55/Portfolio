# The Kartik Dispatch

Kartik Verma’s portfolio, designed as an independent engineering newspaper. Built with Next.js, React, TypeScript, and locally hosted fonts.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` followed by `npm start`.

## Content and design

- `app/data.ts`: project links, descriptions, contact details, and toolkit entries.
- `app/components/Portfolio.tsx`: the masthead, cover story, project dossiers, biography, toolkit, career record, and contact form.
- `app/globals.css`: paper texture, editorial typography, responsive layouts, day/night editions, and reduced-motion behavior.
- `app/fonts/`: locally hosted fonts and their licenses; no font network request is needed to build or view the site.
- `public/resume.html`: printable résumé source.
- `public/Kartik_verma_resume.pdf`: downloadable résumé, rebuilt from the original portfolio’s résumé content because its original PDF was corrupt.

The home page includes the complete portfolio. `/Work`, `/Resume`, and `/Contact` provide dedicated editions. Projects can be filtered and opened in keyboard-accessible native dialogs. The day/night preference is stored locally.

The contact form validates the fields and opens a prefilled draft in the visitor’s email app. It does not send mail through a server. Email, phone, social links, and an email-copy button also work directly.

To regenerate the PDF on a system with Chromium installed:

```bash
chromium --headless --no-pdf-header-footer --print-to-pdf="$PWD/public/Kartik_verma_resume.pdf" "file://$PWD/public/resume.html"
```

## Verification

The production build and TypeScript checks pass. Browser checks covered all four routes, project filters, dossier opening/closing, Escape and focus restoration, toolkit selection, persistent day/night mode, clipboard copying, contact draft preparation, and layouts at 320, 375, 390, 600, 768, 1024, and 1440 pixels.
