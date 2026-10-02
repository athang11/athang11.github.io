# Medical Statistics Portfolio

Single-page portfolio hosted on GitHub Pages at https://athang11.github.io/, focused on medical statistics and statistical programming.

Built with HTML5, Tailwind CSS (CDN), Lucide Icons and Chart.js — no build step.

## Structure

```
index.html         # Page layout: hero, statistics toolkit, portfolio and medical project charts, case studies, contact
assets/script.js   # All content (profile, skills, projects) + rendering logic
```

## Updating content

Edit the data objects at the top of `assets/script.js`:

- `profile` — role, pitch, email, LinkedIn, GitHub, resume and Tableau Public links. Set a link to `""` to hide its buttons.
- `stack` — statistical methods, programming skills and tools shown in the toolkit grid.
- `projects` — one object per case study with `title`, `problem`, `toolsUsed`, `keyInsight`, `githubLink` and `dashboardLink` (use `""` if there is no live dashboard).

The hero KPIs, filter buttons and portfolio charts are generated automatically from this data. The medical coursework charts summarize reported results in the linked sample-data project; they are not clinical evidence.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.
