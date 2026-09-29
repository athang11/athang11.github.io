/* ==========================================================================
   Portfolio data — edit the objects below to update the site.
   ========================================================================== */

// Personal details & links used throughout the page.
// Leave a link as an empty string ("") to hide the buttons that use it.
const profile = {
  name: "Athang",
  role: "Data Analyst",
  availability: "Open to Data Analyst roles",
  pitch:
    "Transforming raw data into operational efficiency — using SQL, Python and BI dashboards to surface the metrics that drive decisions.",
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  github: "https://github.com/athang11",
  resume: "https://athang11.github.io/resume/",
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
    title: "Customer Churn Analysis",
    problem:
      "A subscription business was losing customers without knowing which segments were most at risk.",
    toolsUsed: ["SQL", "PostgreSQL", "Python", "Tableau"],
    keyInsight:
      "Uncovered a 14% drop in customer retention after month 3; built a dashboard to track churn risk factors by cohort.",
    githubLink: "https://github.com/athang11/customer-churn-analysis",
    dashboardLink: "https://public.tableau.com/",
  },
  {
    title: "E-commerce Sales Performance",
    problem:
      "Leadership lacked a single view of revenue, margin and return rates across regions and product lines.",
    toolsUsed: ["SQL", "BigQuery", "Power BI", "Excel"],
    keyInsight:
      "Identified 3 low-margin SKUs driving 22% of returns; recommended pricing changes projected to lift margin by 4 pts.",
    githubLink: "https://github.com/athang11/ecommerce-sales-dashboard",
    dashboardLink: "https://app.powerbi.com/",
  },
  {
    title: "Supply Chain Delivery Forecasting",
    problem:
      "Late deliveries were hurting customer satisfaction and the ops team couldn't predict delays in advance.",
    toolsUsed: ["Python", "Pandas", "Scikit-Learn", "AWS"],
    keyInsight:
      "Built a delay-risk model (0.84 AUC) flagging at-risk orders 48h early, enabling a potential 18% reduction in late shipments.",
    githubLink: "https://github.com/athang11/delivery-delay-forecasting",
    dashboardLink: "",
  },
  {
    title: "Marketing Campaign A/B Test",
    problem:
      "The marketing team needed to know whether a new email campaign actually improved conversions.",
    toolsUsed: ["SQL", "R", "Looker Studio"],
    keyInsight:
      "Proved a statistically significant 9% conversion lift (p < 0.05) and reported ROI in a self-serve Looker Studio report.",
    githubLink: "https://github.com/athang11/ab-test-analysis",
    dashboardLink: "https://lookerstudio.google.com/",
  },
  {
    title: "HR Attrition Exploratory Analysis",
    problem:
      "HR wanted to understand the drivers of employee attrition to design better retention programs.",
    toolsUsed: ["Python", "Pandas", "NumPy", "Seaborn"],
    keyInsight:
      "Found overtime and < 2 years tenure were the top attrition drivers, accounting for 61% of voluntary exits.",
    githubLink: "https://github.com/athang11/hr-attrition-eda",
    dashboardLink: "",
  },
  {
    title: "Retail Inventory Optimization",
    problem:
      "Stores were overstocking slow-moving items while frequently running out of best sellers.",
    toolsUsed: ["SQL", "PostgreSQL", "Excel", "Tableau", "Git"],
    keyInsight:
      "ABC analysis revealed 20% of SKUs drove 78% of sales; reorder-point model cut projected stockouts by 30%.",
    githubLink: "https://github.com/athang11/inventory-optimization",
    dashboardLink: "https://public.tableau.com/",
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
  ];
  document.getElementById("kpis").innerHTML = kpis
    .map(
      (k) => `
      <div class="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
        <dt class="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
          <i data-lucide="${k.icon}" class="h-3.5 w-3.5 text-teal-400"></i>${escapeHTML(k.label)}
        </dt>
        <dd class="mt-2 font-mono text-3xl font-semibold text-white">${escapeHTML(k.value)}</dd>
      </div>`
    )
    .join("");
}

function renderStack() {
  document.getElementById("stack-grid").innerHTML = stack
    .map(
      (group) => `
      <article class="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-teal-500/50">
        <div class="flex items-center gap-3">
          <span class="flex h-9 w-9 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30">
            <i data-lucide="${escapeHTML(group.icon)}" class="h-4 w-4"></i>
          </span>
          <h3 class="font-semibold text-white">${escapeHTML(group.category)}</h3>
        </div>
        <ul class="mt-4 flex flex-wrap gap-2">
          ${group.tools
            .map(
              (tool) =>
                `<li class="rounded border border-slate-700 bg-slate-800/60 px-2.5 py-1 font-mono text-xs text-slate-200">${escapeHTML(tool)}</li>`
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
    <article class="flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-0.5 hover:border-teal-500/50">
      <h3 class="text-xl font-bold text-white">${escapeHTML(project.title)}</h3>

      <div class="mt-4">
        <p class="font-mono text-[11px] uppercase tracking-widest text-slate-500">Business problem</p>
        <p class="mt-1 text-sm leading-relaxed text-slate-300">${escapeHTML(project.problem)}</p>
      </div>

      <ul class="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
        ${project.toolsUsed
          .map(
            (tool) =>
              `<li class="rounded-full bg-blue-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-blue-300 ring-1 ring-blue-500/30">${escapeHTML(tool)}</li>`
          )
          .join("")}
      </ul>

      <div class="mt-5 rounded-lg border-l-4 border-teal-400 bg-teal-500/5 p-4">
        <p class="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-teal-400">
          <i data-lucide="trending-up" class="h-3.5 w-3.5"></i> Key insight / impact
        </p>
        <p class="mt-1 text-sm font-medium leading-relaxed text-slate-100">${escapeHTML(project.keyInsight)}</p>
      </div>

      <div class="mt-auto flex flex-wrap gap-3 pt-6">
        ${
          github
            ? `<a href="${escapeHTML(github)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-teal-400">
                 <i data-lucide="github" class="h-4 w-4"></i> Read Case Study / Code
               </a>`
            : ""
        }
        ${
          dashboard
            ? `<a href="${escapeHTML(dashboard)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-white hover:border-teal-500/60">
                 <i data-lucide="external-link" class="h-4 w-4"></i> View Live Dashboard
               </a>`
            : `<span class="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-slate-800 px-4 py-2 text-sm text-slate-500">
                 <i data-lucide="monitor-off" class="h-4 w-4"></i> No live dashboard
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
        class="rounded-full px-3 py-1 font-mono text-xs transition ${
          active
            ? "bg-teal-500 text-slate-950"
            : "border border-slate-700 text-slate-300 hover:border-teal-500/60"
        }">${escapeHTML(tool)}</button>`;
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

  Chart.defaults.color = "#94a3b8";
  Chart.defaults.font.family = "Inter, ui-sans-serif, system-ui, sans-serif";

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
          backgroundColor: "rgba(45, 212, 191, 0.7)",
          hoverBackgroundColor: "#2dd4bf",
          borderRadius: 4,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { autoSkip: false, maxRotation: 60 } },
        y: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: "rgba(148, 163, 184, 0.1)" } },
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
          backgroundColor: ["#2dd4bf", "#3b82f6", "#6366f1", "#64748b"],
          borderColor: "#0f172a",
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
    const open = menu.classList.toggle("hidden") === false;
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.add("hidden");
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
