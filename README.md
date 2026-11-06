# website-erffan — Personal Website & Blog

A minimalist personal website and blog with an e-paper black-and-white aesthetic. English-first, with full Persian (RTL) support. Built with Astro 5 and Tailwind CSS, deployed as a static site on Cloudflare Workers. No database, no server, no tracking.

Live: [website-erffan.erffanhub.workers.dev](https://website-erffan.erffanhub.workers.dev/)

[![CI](https://github.com/erffanhub-00/website-erffan/actions/workflows/ci.yml/badge.svg)](https://github.com/erffanhub-00/website-erffan/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Features

- **Blog** — Markdown posts via Astro Content Collections, with categories,
  tags, search, and filters (all server-rendered, works without JavaScript)
- **Reading experience** — light/dark theme with no flash on load, Shiki
  syntax highlighting that follows the theme, copy button on code blocks
- **Persian support** — per-post `lang`, RTL layout, Vazirmatn font with
  Tahoma fallback
- **SEO** — canonical URLs, Open Graph and Twitter Cards, sitemap,
  `robots.txt`, RSS feed, and JSON-LD structured data
- **Accessibility** — skip link, visible focus states, reduced-motion support,
  semantic HTML, labeled form controls
- **Performance** — fully static output, minimal JavaScript, 680px reading
  width, system fonts

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [Astro 5](https://astro.build/) | Static site framework |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility styling |
| [Shiki](https://shiki.style/) | Syntax highlighting |
| `@astrojs/rss` | RSS feed |
| `@astrojs/sitemap` | Sitemap generation |
| [Cloudflare Workers](https://workers.cloudflare.com/) | Static hosting |
| Markdown | Blog content |

## Quickstart

### Requirements

- Node.js 20+
- npm

### Install and run

```bash
git clone https://github.com/erffanhub-00/website-erffan.git
cd website-erffan
npm install
npm run dev
```

The site runs at <http://localhost:4321>.

## Usage

### Adding a Post

Create a Markdown file in `src/content/posts/`. The filename becomes the
URL: `src/content/posts/network-debugging.md` is served at
`/posts/network-debugging`.

Frontmatter:

```markdown
---
title: "Network Debugging"
date: 2026-09-20
category: Networks
tags: ["networking", "debugging"]
lang: "en"
description: "A short description of the article."
readingTime: 5
---
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Post title |
| `date` | yes | Publication date (`YYYY-MM-DD`) |
| `category` | yes | Shown on cards and used as a filter |
| `description` | yes | Used on cards, in meta tags, and in RSS |
| `tags` | no | Array of strings, `#tag` links on the post page |
| `lang` | no | `en` (default) or `fa`; `fa` switches the post to RTL with Vazirmatn |
| `readingTime` | no | Minutes, roughly words / 200 |
| `image` | no | Hero image URL, shown above the post body |
| `draft` | no | `true` hides the post from the site, RSS, and sitemap |

Write the article in normal Markdown. Code blocks get Shiki highlighting
and a copy button automatically.

## Project Structure

```text
website-erffan/
├── astro.config.mjs          # site URL, integrations, Shiki themes
├── wrangler.toml             # Cloudflare Workers static assets
├── tailwind.config.mjs       # content paths (colors live in CSS variables)
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg           # "ff" mark
│   ├── og.png                # social share image (1200x630)
│   └── robots.txt
└── src/
    ├── content.config.ts     # post schema (title, date, tags, lang, ...)
    ├── content/posts/        # blog posts, one Markdown file each
    ├── components/
    │   └── PostCard.astro    # post card used by Home and Work pages
    ├── data/
    │   └── site.ts           # site metadata and social links (single source)
    ├── layouts/
    │   └── BaseLayout.astro  # head/meta/SEO, header, footer, theme script
    ├── pages/
    │   ├── index.astro       # about + latest posts
    │   ├── work.astro        # post list with search and filters
    │   ├── contact.astro
    │   ├── 404.astro
    │   ├── rss.xml.js
    │   └── posts/
    │       └── [...slug].astro  # post page (locale date, prev/next)
    ├── styles/
    │   └── global.css        # theme variables, article typography, components
    └── utils/
        └── format.ts         # shared date formatting
```

## Theming

Colors live in CSS variables in `src/styles/global.css` (`--bg`, `--fg`,
`--muted`, `--line`, `--card`, `--code-bg`, `--accent`), with separate
values under `[data-theme="dark"]`. The theme toggle in the header stores
the choice in `localStorage`; without a stored choice the OS preference is
used. A small inline script in the head applies the theme before first
paint, so there is no flash.

Code highlighting uses Shiki's dual themes (`github-light` /
`github-dark`) with `defaultColor: false`, so token colors come from
`--shiki-*` variables and follow the toggle instead of the OS setting.

## SEO

- Every page gets a canonical URL, description, Open Graph and Twitter
  Card tags from `BaseLayout.astro`.
- Post pages additionally get `og:type=article`, `article:published_time`,
  `article:tag`, and `BlogPosting` JSON-LD. All pages get `WebSite` JSON-LD.
- `sitemap-index.xml` and `robots.txt` are generated/served automatically.
- `/rss.xml` lists all published posts.
- `public/og.png` is the social share image (1200×630). To replace it,
  overwrite the file with a new PNG of the same size.

## Deployment

The site is a static build deployed on Cloudflare Workers
(see `wrangler.toml`, which serves `dist/` as static assets).

From the command line:

```bash
npm run build
npx wrangler deploy
```

Or connect the repository in the Cloudflare dashboard (Workers & Pages →
Create → Workers → import the repo) with these build settings:

```text
Build command:   npm run build
Output directory: dist
Node version:    20
```

Every push to `main` can then deploy automatically, if that is enabled in
the dashboard.

## Development

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check the project (`astro check`) |
| `npm run astro` | Run the Astro CLI directly |

Run `npm run check` before pushing to catch type errors early.

## License

MIT — see [LICENSE](LICENSE).

---

## Me
[![Telegram](https://img.shields.io/badge/Telegram-erffan__hub-blue?style=for-the-badge&logo=telegram)](https://t.me/erffan_hub)
[![Twitter](https://img.shields.io/badge/Twitter-@Erffanhub__00-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Erffanhub_00)
[![Gist](https://img.shields.io/badge/Gist-Profile-000000?style=for-the-badge&logo=github)](https://gist.github.com/erffanhub-00)
[![Github](https://img.shields.io/badge/Github-Profile-000000?style=for-the-badge&logo=github)](https://github.com/erffanhub-00)
