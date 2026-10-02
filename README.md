# Data Analyst Portfolio

Single-page portfolio hosted on GitHub Pages at https://athang11.github.io/, showcasing data analysis projects across medical statistics, sports analytics, and environmental modelling.

Built with HTML5, Tailwind CSS (CDN), Lucide Icons and Chart.js — no build step.

## Structure

```
index.html         # Page layout: hero, toolkit, portfolio charts, medical project visualisations, case studies, contact
assets/script.js   # All content (profile, skills, projects) + rendering logic
```

## Updating content

Edit the data objects at the top of `assets/script.js`:

- `profile` — role, pitch, email, LinkedIn, GitHub, resume and Tableau Public links. Set a link to `""` to hide its buttons.
- `stack` — statistical methods, programming skills and tools shown in the toolkit grid.
- `projects` — one object per case study with `title`, `problem`, `toolsUsed`, `keyInsight`, `githubLink` and `dashboardLink` (use `""` if there is no live dashboard).

The hero KPIs, filter buttons and portfolio charts are generated automatically from this data. The medical coursework charts summarize reported results in the linked sample-data project; they are not clinical evidence. Tableau links are omitted until a profile URL is configured.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.
