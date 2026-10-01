/* ==========================================================================
   Portfolio data — edit the objects below to update the site.
   ========================================================================== */

// Personal details & links used throughout the page.
// Leave a link as an empty string ("") to hide the buttons that use it.
const profile = {
  name: "Home",
  role: "Data Analyst",
  availability: "Open to Data Analyst roles",
  pitch:
    "Transforming raw data into operational efficiency — using SQL, Python and BI dashboards to surface the metrics that drive decisions.",
  email: "athangghag@gmail.com",
  linkedin: "https://www.linkedin.com/in/athangghag/",
  github: "https://github.com/athang11",
  resume: "https://athang11.github.io/resume/resume.pdf",
  tableau: "https://public.tableau.com/app/profile/your-profile",
};

// Core analytics stack, grouped by category.
const stack = [
  {
    category: "Languages",
    icon: "code-2",
    tools: ["SQL", "Python", "R"],
  },
  {
    category: "BI & Visualization",
    icon: "bar-chart-3",
    tools: ["Tableau", "Power BI", "Looker Studio", "Excel"],
  },
  {
    category: "Libraries & Frameworks",
    icon: "boxes",
    tools: ["Pandas", "NumPy", "Seaborn", "Scikit-Learn"],
  },
  {
    category: "Cloud & Databases",
    icon: "database",
    tools: ["PostgreSQL", "BigQuery", "AWS", "Git"],
  },
];

// Data project case studies.
// Fields: title, problem, toolsUsed, keyInsight, githubLink, dashboardLink
// Set dashboardLink to "" if the project has no live dashboard.
const projects = [
  {
    title: "Expected Goals (xG) Model",
    problem:
      "Raw shot counts don't show how good a team's chances really are; clubs need a probability for every shot.",
    toolsUsed: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Jupyter"],
    keyInsight:
      "Built separate open-play and set-piece xG models with gradient boosting (calibrated XGBoost), so every shot gets a goal probability for match and player analysis.",
    githubLink: "https://github.com/athang11/xG_Model",
    dashboardLink: "",
  },
  {
    title: "Expected Pass (xPass) Model",
    problem:
      "Pass completion rates don't account for how hard a pass is, so they can't fairly compare players' passing quality.",
    toolsUsed: ["Python", "Pandas", "Scikit-Learn"],
    keyInsight:
      "Models the probability that each pass is completed, so players can be judged on passes completed above expectation instead of raw accuracy.",
    githubLink: "https://github.com/athang11/xPass_Model",
    dashboardLink: "",
  },
  {
    title: "Football Analytics",
    problem:
      "Football event data is dense and hard for coaches and scouts to read without clear visual summaries.",
    toolsUsed: ["Python", "Pandas", "Seaborn"],
    keyInsight:
      "Football data visualisations alongside xG and xPass models, turning event data into charts that show team and player performance.",
    githubLink: "https://github.com/athang11/Football-Analytics",
    dashboardLink: "",
  },
  {
    title: "Cricket Analytics",
    problem:
      "Traditional cricket averages and strike rates don't show a player's value by match situation.",
    toolsUsed: ["Python", "Pandas"],
    keyInsight:
      "Analysis of cricket match data looking at player and team performance beyond headline averages.",
    githubLink: "https://github.com/athang11/Cricket-Analytics",
    dashboardLink: "",
  },
  {
    title: "SDEs for Wind Speed Modelling (MSc Dissertation)",
    problem:
      "Wind energy planning needs reliable models of wind speed, which is noisy and changes over time.",
    toolsUsed: ["Python", "NumPy", "Pandas", "Jupyter"],
    keyInsight:
      "MSc Data Science & Analytics dissertation: exploratory analysis of wind speed data and parameter estimation for stochastic differential equation models.",
    githubLink: "https://github.com/athang11/SDEs-for-Wind-Speed-Modelling",
    dashboardLink: "",
  },
  {
    title: "Data Science Coursera",
    problem:
      "Coursework repository for the Coursera Data Science programme.",
    toolsUsed: ["R", "Git"],
    keyInsight:
      "Foundational coursework in R programming, version control with Git, and the data science workflow.",
    githubLink: "https://github.com/athang11/datasciencecoursera",
    dashboardLink: "",
  },
];

/* ==========================================================================
   Rendering — no edits needed below this line.
   ========================================================================== */

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Only allow http(s) and mailto links to be rendered.
const safeURL = (url) => {
  if (!url) return "";
  try {
    const parsed = new URL(url, window.location.href);
    return ["http:", "https:", "mailto:"].includes(parsed.protocol) ? parsed.href : "";
  } catch {
    return "";
  }
};

function applyProfile() {
  document.querySelectorAll("[data-profile]").forEach((el) => {
    const value = profile[el.dataset.profile];
    if (value) el.textContent = value;
  });

  const links = {
    linkedin: profile.linkedin,
    github: profile.github,
    resume: profile.resume,
    tableau: profile.tableau,
    email: profile.email ? `mailto:${profile.email}` : "",
  };
  document.querySelectorAll("[data-link]").forEach((el) => {
    const url = safeURL(links[el.dataset.link]);
    if (url) el.href = url;
    else el.remove();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
}

function renderKPIs() {
  const uniqueTools = new Set(projects.flatMap((p) => p.toolsUsed));
  const kpis = [
    { label: "Case studies", value: projects.length, icon: "folder-kanban" },
    { label: "Tools applied", value: uniqueTools.size, icon: "wrench" },
    { label: "Live dashboards", value: projects.filter((p) => safeURL(p.dashboardLink)).length, icon: "monitor" },
    { label: "Stack categories", value: stack.length, icon: "layers" },
  ].filter((k) => k.label !== "Live dashboards" || k.value > 0);
  document.getElementById("kpis").classList.toggle("sm:grid-cols-4", kpis.length === 4);
  document.getElementById("kpis").innerHTML = kpis
    .map(
      (k) => `
      <div class="kpi-card">
        <dt class="kpi-label">
          <i data-lucide="${k.icon}"></i>${escapeHTML(k.label)}
        </dt>
        <dd class="kpi-value">${escapeHTML(k.value)}</dd>
      </div>`
    )
    .join("");
}

function renderStack() {
  document.getElementById("stack-grid").innerHTML = stack
    .map(
      (group) => `
      <article class="stack-card">
        <div class="stack-title">
          <i data-lucide="${escapeHTML(group.icon)}"></i>
          <h3>${escapeHTML(group.category)}</h3>
        </div>
        <ul class="tag-list">
          ${group.tools
            .map(
              (tool) =>
                `<li>${escapeHTML(tool)}</li>`
            )
            .join("")}
        </ul>
      </article>`
    )
    .join("");
}

function projectCard(project) {
  const github = safeURL(project.githubLink);
  const dashboard = safeURL(project.dashboardLink);
  return `
    <article class="project-card">
      <h3>${escapeHTML(project.title)}</h3>

      <div class="mt-4">
        <p class="project-label">Business problem</p>
        <p class="project-copy">${escapeHTML(project.problem)}</p>
      </div>

      <ul class="tag-list" aria-label="Tech stack">
        ${project.toolsUsed
          .map(
            (tool) =>
              `<li>${escapeHTML(tool)}</li>`
          )
          .join("")}
      </ul>

      <div class="project-impact">
        <p class="project-label">
          <i data-lucide="trending-up"></i> Key insight / impact
        </p>
        <p class="project-copy">${escapeHTML(project.keyInsight)}</p>
      </div>

      <div class="project-links">
        ${
          github
            ? `<a href="${escapeHTML(github)}" target="_blank" rel="noopener noreferrer">
                 <i data-lucide="github"></i> Read Case Study / Code
               </a>`
            : ""
        }
        ${
          dashboard
            ? `<a href="${escapeHTML(dashboard)}" target="_blank" rel="noopener noreferrer">
                 <i data-lucide="external-link"></i> View Live Dashboard
               </a>`
            : `<span>
                 <i data-lucide="monitor-off"></i> No live dashboard
               </span>`
        }
      </div>
    </article>`;
}

let activeFilter = "All";

function renderFilters() {
  const tools = ["All", ...new Set(projects.flatMap((p) => p.toolsUsed))];
  const container = document.getElementById("filters");
  container.innerHTML = tools
    .map((tool) => {
      const active = tool === activeFilter;
      return `<button type="button" data-filter="${escapeHTML(tool)}" aria-pressed="${active}"
        class="filter-button">${escapeHTML(tool)}</button>`;
    })
    .join("");
}

function renderProjects() {
  const visible =
    activeFilter === "All" ? projects : projects.filter((p) => p.toolsUsed.includes(activeFilter));
  document.getElementById("project-grid").innerHTML = visible.map(projectCard).join("");
  refreshIcons();
}

function renderCharts() {
  if (typeof Chart === "undefined") return;

  Chart.defaults.color = "#786f62";
  Chart.defaults.font.family = "DM Sans, Inter, ui-sans-serif, system-ui, sans-serif";

  const counts = {};
  projects.forEach((p) => p.toolsUsed.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  new Chart(document.getElementById("toolChart"), {
    type: "bar",
    data: {
      labels: sorted.map(([tool]) => tool),
      datasets: [
        {
          label: "Projects",
          data: sorted.map(([, n]) => n),
          backgroundColor: "rgba(241, 90, 59, 0.78)",
          hoverBackgroundColor: "#dc4329",
          borderRadius: 4,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { autoSkip: false, maxRotation: 60 } },
        y: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: "rgba(120, 111, 98, 0.16)" } },
      },
    },
  });

  new Chart(document.getElementById("categoryChart"), {
    type: "doughnut",
    data: {
      labels: stack.map((g) => g.category),
      datasets: [
        {
          data: stack.map((g) => g.tools.length),
          backgroundColor: ["#f15a3b", "#ffd45c", "#3877da", "#a886bd"],
          borderColor: "#fffdf8",
          borderWidth: 3,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      cutout: "65%",
      plugins: { legend: { position: "bottom", labels: { boxWidth: 10, padding: 12 } } },
    },
  });
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function initNav() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  document.getElementById("filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-filter]");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    renderFilters();
    renderProjects();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyProfile();
  renderKPIs();
  renderStack();
  renderFilters();
  renderProjects();
  renderCharts();
  initNav();
  refreshIcons();
});
