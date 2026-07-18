# Flamingo Hitmix — website

A single-page site for Flamingo Hitmix, an electronic cover band. Plain HTML/CSS/JS, no build step. Bilingual (EN/NL) with a language toggle in the nav.

## Run locally

Serve the folder (video files need to be served over HTTP, not opened as `file://`):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

- `index.html` — the page. Translatable text is marked with `data-i18n="key"`.
- `styles.css` — all styling.
- `script.js` — footer year, translations (`I18N`), and the EN/NL language toggle.
- `images/` — photos (also used as video posters).
- `videos/` — web-optimised MP4s (H.264, 720p, ~9 MB each).
- `input/` — original source assets (bios, full-res pics, raw large videos). Not used by the site directly.

## Editing content

- **Text (both languages)** lives in the `I18N` object in `script.js` — edit the `en` and `nl` entries.
- **Photos** — drop files in `images/` and update the `<img src>` in the Photos section.
- **Videos** — add an MP4 to `videos/`, then add a `<figure class="video-item">` block. To re-compress a large source file:
  ```bash
  ffmpeg -i input.mov -vf "scale=-2:720" -c:v libx264 -preset medium -crf 24 \
    -movflags +faststart -c:a aac -b:a 128k output.mp4
  ```
- **Booking email** — `flamingohitmix@gmail.com` (in the `mailto:` link in the `#book` section of `index.html`).
- **Instagram** — links to https://www.instagram.com/flamingohitmix/

## Deploy

Fully static — host anywhere (GitHub Pages, Netlify, Cloudflare Pages).
