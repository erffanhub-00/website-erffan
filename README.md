# Erffan — Personal Website & Blog

> **Live Website:** [website-erffan.erffanhub.workers.dev](https://website-erffan.erffanhub.workers.dev/)

A minimalist personal website and blog with an **E-paper black & white aesthetic**, built with **Astro 5** and designed around speed, readability, and simplicity.

The site is primarily English-first while supporting **Persian (RTL)** content.

## ✦ Features

* Dark / Light theme with localStorage persistence
* No flash of unstyled theme on page load
* Client-side search across titles, descriptions, categories, and tags
* Category filtering
* Tag filtering with URL support
* Clickable tags on post pages
* Code block copy button
* Syntax highlighting with Shiki
* RSS feed
* Custom 404 page
* Automatic RTL support for Persian content
* Responsive design
* SEO meta tags
* Open Graph and Twitter Cards
* Minimal E-paper visual style
* Fully static — no server required
* Fast loading with minimal JavaScript

## ✦ Tech Stack

| Technology                               | Purpose               |
| ---------------------------------------- | --------------------- |
| [Astro 5](https://astro.build/)          | Static site framework |
| [Tailwind CSS](https://tailwindcss.com/) | Styling               |
| Markdown                                 | Blog content          |
| Content Collections                      | Content management    |
| [Shiki](https://shiki.style/)            | Syntax highlighting   |
| `@astrojs/rss`                           | RSS feed              |
| Cloudflare Pages                         | Deployment            |

## ✦ Project Structure

```text
website-erffan/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── .gitignore
├── public/
│   └── favicon.svg
└── src/
    ├── content.config.ts
    ├── content/
    │   └── posts/
    │       └── *.md
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── work.astro
    │   ├── contact.astro
    │   ├── 404.astro
    │   ├── rss.xml.js
    │   └── posts/
    │       └── [...slug].astro
    └── styles/
        └── global.css
```

## ✦ Getting Started

### Requirements

* Node.js 20+
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/erffanhub-00/website-erffan.git
cd website-erffan
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The website will be available at:

```text
http://localhost:4321
```

### Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## ✦ Adding a New Post

Create a Markdown file inside:

```text
src/content/posts/
```

The filename becomes the post URL.

For example:

```text
src/content/posts/network-debugging.md
```

will be available at:

```text
/posts/network-debugging
```

Use the following frontmatter:

```markdown
---
title: "Network Debugging"
date: 2026-09-20
category: Networks
tags: ["networking", "debugging"]
description: "A short description of the article."
readingTime: 5
---

Your content here...
```

Then write the article using normal Markdown.

## ✦ Deployment

The website is deployed using **Cloudflare**.

### Build settings

```text
Build command: npm run build
Build output directory: dist
Node version: 20
```

The project can be configured to automatically deploy whenever changes are pushed to the `main` branch.

## ✦ Design Philosophy

The website follows a simple E-paper-inspired design:

* Black and white
* Minimal interface
* High readability
* Content-first layout
* No unnecessary visual elements
* Comfortable reading width
* Maximum content width around `680px`

The goal is to keep the website fast, readable, and focused on the content rather than visual complexity.

## ✦ License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute the code according to the terms of the license.

## ✦ Me

[![Telegram](https://img.shields.io/badge/Telegram-erffan__hub-blue?style=for-the-badge\&logo=telegram)](https://t.me/erffan_hub)
[![Twitter](https://img.shields.io/badge/Twitter-@Erffanhub__00-000000?style=for-the-badge\&logo=x\&logoColor=white)](https://x.com/Erffanhub_00)
[![Gist](https://img.shields.io/badge/Gist-Profile-000000?style=for-the-badge\&logo=github)](https://gist.github.com/erffanhub-00)
[![Github](https://img.shields.io/badge/Github-Profile-000000?style=for-the-badge\&logo=github)](https://github.com/erffanhub-00)
