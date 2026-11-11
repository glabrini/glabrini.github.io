# glabrini.github.io

Personal research page, served by GitHub Pages.

## How to edit

All content lives in [`assets/data.js`](assets/data.js): name, bio, links, publications and skills.
Entries marked `TODO` are placeholders to replace.

- **Add a publication**: copy an object in the `publications` array and fill in `year`, `type` (`journal`, `conference`, `preprint`, `thesis`), `title`, `authors`, `venue`. Optional: `doi`, `pdf`, `url`, `code`, `abstract`.
- **Edit skills**: change the `skills` groups. Remove the `level` field if you prefer no self-rating.
- **Add a CV**: put the PDF in `assets/` and set `links.cv` to `"assets/cv.pdf"`.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Structure: `index.html` (layout), `assets/style.css` (design, automatic dark mode), `assets/main.js` (renders the data), `assets/data.js` (your content).
