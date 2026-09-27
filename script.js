// ============================================================
// SCRIPT.JS — Membaca SITE_DATA dari data.js, merender ke
// index.html (renderHome) atau detail.html (renderDetail)
// tergantung elemen mana yang ada di halaman itu.
// ============================================================

function renderHome() {
  const p = SITE_DATA.profile;

  const nameEl = document.getElementById("profileName");
  if (nameEl) nameEl.textContent = p.name;

  const roleEl = document.getElementById("profileRole");
  if (roleEl) roleEl.textContent = p.role;

  const locEl = document.getElementById("profileLocation");
  if (locEl) locEl.textContent = `${p.location} · ${p.school}`;

  const tagEl = document.getElementById("profileTagline");
  if (tagEl) tagEl.textContent = p.tagline;

  const s = SITE_DATA.stats;
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setText("statIQ", s.iq);
  setText("statMBTI", s.mbti);
  setText("statEnneagram", s.enneagram);
  setText("statTypology", s.typology);
  setText("statIdeologis", s.ideologis);
  setText("statMindset", s.mindset);

  const statsGrid = document.getElementById("statsGrid");
  if (statsGrid) {
    statsGrid.innerHTML = s.breakdown.map(item => `
      <div class="card mac-card stat-card">
        <h4>${item.label}</h4>
        <p>${item.a} / ${item.b}</p>
      </div>
    `).join("");
  }

  const skillsRow = document.getElementById("skillsRow");
  if (skillsRow) {
    skillsRow.innerHTML = SITE_DATA.skills.map(item => `
      <div class="skill-pill">
        <span>${item.label}</span>
        <div class="skill-bar"><div class="skill-fill" style="width:${item.value}%"></div></div>
      </div>
    `).join("");
  }

  const projectGrid = document.getElementById("projectGrid");
  if (projectGrid) {
    projectGrid.innerHTML = SITE_DATA.projects.map(item => `
      <a class="card mac-card" href="detail.html?id=${item.id}">
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <span class="card-link">Lihat detail →</span>
      </a>
    `).join("");
  }

  const sponsorRow = document.getElementById("sponsorRow");
  if (sponsorRow) {
    sponsorRow.innerHTML = SITE_DATA.sponsors.map(item => `
      <a class="mac-btn" href="${item.url}" target="_blank" rel="noopener">${item.name}</a>
    `).join("");
  }
}

function renderDetail() {
  const wrap = document.getElementById("detailWrap");
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = SITE_DATA.projects.find(item => item.id === id);

  if (!project) {
    wrap.innerHTML = `<p>Detail tidak ditemukan. <a href="index.html">Kembali ke beranda</a></p>`;
    return;
  }

  wrap.innerHTML = `
    <h1>${project.title}</h1>
    <p class="summary">${project.summary}</p>
    <div class="detail-body">${project.detail}</div>
    <a class="mac-btn" href="index.html">← Kembali</a>
  `;
}

function setupMenuToggle() {
  const btn = document.getElementById("menuToggle");
  const nav = document.querySelector(".navbar nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        document.querySelector(".navbar nav")?.classList.remove("open");
      }
    });
  });
}

// Animasi muncul halus saat elemen masuk viewport
function setupRevealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderDetail();
  setupMenuToggle();
  setYear();
  setupSmoothScroll();
  setupRevealOnScroll();
});