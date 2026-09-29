# Data Analyst Portfolio

Single-page portfolio hosted on GitHub Pages at https://athang11.github.io/.

Built with HTML5, Tailwind CSS (CDN), Lucide Icons and Chart.js — no build step.

## Structure

```
index.html         # Page layout: hero, analytics stack, metrics charts, case studies, contact
assets/script.js   # All content (profile, stack, projects) + rendering logic
```

## Updating content

Edit the data objects at the top of `assets/script.js`:

- `profile` — name, role, pitch, email, LinkedIn, GitHub, resume and Tableau Public links. Set a link to `""` to hide its buttons.
- `stack` — tool categories shown in the "Core Analytics Stack" grid.
- `projects` — one object per case study with `title`, `problem`, `toolsUsed`, `keyInsight`, `githubLink` and `dashboardLink` (use `""` if there is no live dashboard).

The hero KPIs, filter buttons and charts are generated automatically from this data.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.
