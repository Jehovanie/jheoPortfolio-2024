# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server (bound to `host: true` / `0.0.0.0`, so reachable on the LAN).
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/` on port 8080.
- `npm run lint` — ESLint over `.js`/`.jsx`; runs with `--max-warnings 0`, so any warning fails the build.

There is no test runner configured in this project.

Deployment is Netlify (`netlify.toml`): build command `npm install && npm run build`, publish dir `dist`.

## Architecture

Single-page React portfolio (Vite, plain JS/JSX — no TypeScript despite the `@types/*` dev deps). The whole site is one scrolling page; there is no router.

- **Composition is top-down and static.** `main.jsx` → `App.jsx` → `Page/Home.jsx`. `Home.jsx` is the layout manifest: it renders every section in order (`Navbar`, `Presentation`, `About`, `Service`, `Experience`, `Timeline`, `Project`, `Ending`, `Footer`) plus a floating `Messenger`. To add or reorder a section, edit `Home.jsx`.
- **Components live in `src/components/<name>/`**, each a `Name.jsx` + `name.css` pair. CSS is plain (imported per-component, globally scoped — no CSS modules), so class names are effectively global; keep them namespaced by section.
- **Scroll animations** go through `src/hooks/useScrollAnimation.js` (GSAP + `ScrollTrigger`, registered once in that file). `useScrollAnimation(ref, opts)` animates one element; `useScrollAnimationChildren(ref, opts)` staggers an element's direct children. Both clean up their own ScrollTriggers on unmount. Prefer these hooks over calling GSAP directly so cleanup stays consistent.

## Internationalization

- i18n is initialized in `src/i18n.js` and imported for its side effect in `main.jsx`. Two locales: `src/locales/fr.json` and `src/locales/en.json`. **French is the default and fallback.**
- Selected language persists to `localStorage["language"]`; the switcher (`components/navbar/Navbar.jsx`) calls `i18n.changeLanguage(...)`.
- All user-facing copy must go through `useTranslation()`/`t("key")` and be added to **both** `fr.json` and `en.json`. Do not hardcode display strings in components.

## Conventions

- **Path alias `@` → `src/`** (configured in `vite.config.js`). Used sparingly today (`components/experience/Experience.jsx`, `constant/svg.js`); prefer it for cross-directory imports.
- Icons come from `react-icons`; tech-stack/brand SVGs are in `src/assets/svg/` and re-exported via `src/constant/svg.js`.
- Indentation is tabs.
- Comments and much of the copy are in French — match the surrounding language when editing a file.

## Known gotchas

- `emailjs-com` is a dependency but the contact form in `components/messenger/Messenger.jsx` actually uses a `mailto:` link — and that link still points at the placeholder `votreemail@example.com`. Wire up the real address/EmailJS before treating the form as functional.
- Two CVs exist under `src/assets/pdf/` with near-identical names (`CV_Jehovanie_RAMANDRIJOEL.pdf` vs `CV-Jehovanie-RAMANDRIJOEL.pdf`); the Messenger imports the hyphenated one. Check which is current before swapping.
