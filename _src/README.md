# How this site is built

Plain static files, no framework. One small script generates the essay pages.

## Add an essay

1. Create `_src/essays/<slug>.md` (the slug becomes the URL: `/texts/<slug>/`):

   ```
   ---
   title: The title
   date: 2026-11-20
   description: One sentence, used on the Texts list, in link previews and in the feed.
   ---

   First paragraph.

   * * *

   ## An optional heading

   Another paragraph with a [link](https://example.com).
   ```

   - A blank line separates paragraphs.
   - `* * *` on its own line is a section break (the star ornament).
   - `## Heading` is a section heading.

2. Run `python3 _src/build.py`. It writes the essay page, the Texts list, `feed.xml`,
   `sitemap.xml`, `robots.txt`, and gives the background spiral one more turn.

3. Commit and push. GitHub Pages publishes in about a minute.

Don't edit `texts/*/index.html`, `texts/index.html`, `feed.xml` or `sitemap.xml` by hand;
the next build overwrites them. The home page (`index.html`) and `404.html` are hand-written.

## Files

- `assets/style.css` — all styles; dark mode follows the system.
- `assets/site.js` — the spiral and the ornament draw-in. Home and 404: huge spiral behind the page.
  Essays: small corner spiral that winds as you scroll. Texts list: small corner spiral.
  Set per page with `data-spiral="small" | "scroll"` on `<body>` (none = huge).
- `assets/fonts/` — JetBrains Mono (SIL Open Font License, see `OFL.txt`).
- `og.png` — link-preview image; its source is `_src/og.html`.
- `_src/` is not published (GitHub Pages skips folders that start with an underscore).
