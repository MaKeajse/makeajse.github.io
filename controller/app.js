// controller/app.js
window.addEventListener('DOMContentLoaded', () => {
    const expWrap = document.getElementById('exp-wrap');
    const filtro = document.getElementById('filtro');
    const data = Array.isArray(window.experiencias) ? window.experiencias : [];

    const render = (items) => {
        expWrap.innerHTML = '';
        items.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'card';
        const chips = (exp.chip || []).map(t => `<span class="badge">${t}</span>`).join(' ');
        card.innerHTML = `
            <h3>${exp.rol}</h3>
            <p><strong>${exp.empresa}</strong> | ${exp.periodo}</p>
            <p>${chips}</p>

            <h4>Responsabilidades</h4>
            <ul>${exp.responsabilidades.map(r => `<li>${r}</li>`).join('')}</ul>

            <h4>Logros</h4>
            <ul>${exp.logros.map(l => `<li>${l}</li>`).join('')}</ul>
        `;
        expWrap.appendChild(card);
        });
    };

    const normaliza = s => s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'');
    const coincide = (exp, q) => {
        const blob = [
        exp.rol, exp.empresa, exp.periodo,
        ...(exp.chip||[]), ...(exp.responsabilidades||[]), ...(exp.logros||[])
        ].join(' ');
        return normaliza(blob).includes(normaliza(q));
    };

    filtro.addEventListener('input', () => {
        const q = filtro.value.trim();
        if (!q) return render(data);
        render(data.filter(exp => coincide(exp, q)));
    });

    render(data);
});

// =================== EDUCACIÓN ===================
// =================== EDUCACIÓN (logo flotante arriba, sin línea) ===================
(function renderEducacion(){
  const eduWrap = document.getElementById("edu-wrap");
  if (!eduWrap || !Array.isArray(window.educacion)) return;
  eduWrap.innerHTML = "";

  window.educacion.forEach(e => {
    const card = document.createElement("div");

    const logo = e.logo || (window.logosInstituciones && window.logosInstituciones[e.institucion]);
    const classes = ["card", "edu-card"];
    if (logo) classes.push("has-logo");   // <-- reserva espacio si hay logo
    card.className = classes.join(" ");

    card.innerHTML = `
      ${logo ? `<img class="logo-pin" src="${logo}" alt="Logo ${e.institucion}">` : ""}

      <h3>${e.titulo}</h3>
      <p><strong>${e.institucion}</strong>${e.ciudad ? " · " + e.ciudad : ""}</p>
      <p><em>${e.periodo}</em></p>
      ${e.detalle ? `<p>${e.detalle}</p>` : ""}
    `;
    eduWrap.appendChild(card);
  });
})();







// =================== CURSOS (tabs + búsqueda + color por categoría) ===================
(function renderCursos(){
    const scope = document.getElementById("formacion"); // sección donde aplicaremos el color activo
    const wrap = document.getElementById("curso-wrap");
    const tabs = document.getElementById("curso-tabs");
    const search = document.getElementById("curso-search");
    const data = Array.isArray(window.cursos) ? [...window.cursos] : [];
    if (!wrap || !tabs) return;

    // Color por categoría (puedes ajustar a tu gusto)
    const catColors = {
        "Ingeniería & Fundamentos": "#7c3aed",   // morado
        "Lenguajes & Programación": "#06b6d4",   // cyan
        "Web & Frontend": "#f59e0b",             // ámbar
        "Datos, Excel & Automatización": "#10b981", // verde
        "Bases de Datos": "#6366f1",             // índigo
        "Idiomas": "#ef4444",                    // rojo
        "Móviles": "#84cc16",                    // lima
        "Otros": "#64748b"                       // gris
    };

    const setActiveColor = (cat) => {
        const bg = catColors[cat] || getComputedStyle(document.documentElement).getPropertyValue('--brand').trim();
        const text = '#fff';
        scope?.style.setProperty('--tab-active-bg', bg);
        scope?.style.setProperty('--tab-active-border', bg);
        scope?.style.setProperty('--tab-active-text', text);
    };

  const norm = s => (s||"").toString().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,'');

    // Categorías
    const categorias = Array.from(new Set(data.map(c => c.categoria))).sort();
    let activa = "Todas";

    const renderTabs = () => {
        tabs.innerHTML = "";
        const allBtn = document.createElement("button");
        allBtn.className = `tab ${activa==="Todas" ? "active":""}`;
        allBtn.textContent = `Todas (${data.length})`;
        allBtn.onclick = () => { activa = "Todas"; setActiveColor(activa); pintar(); };
        tabs.appendChild(allBtn);

        categorias.forEach(cat => {
        const count = data.filter(c => c.categoria === cat).length;
        const btn = document.createElement("button");
        btn.className = `tab ${activa===cat ? "active":""}`;
        btn.textContent = `${cat} (${count})`;
        btn.onclick = () => { activa = cat; setActiveColor(cat); pintar(); };
        tabs.appendChild(btn);
        });

        // color inicial
        setActiveColor(activa);
    };

    const tarjeta = (c) => {
    const fecha = c.month && c.year ? `${String(c.month).padStart(2,"0")}/${c.year}` : (c.fecha || "");
    const logo  = c.logo || (window.logosInstituciones?.[c.institucion]);

    return `
        <div class="card">
        <div class="card-head">
            <div class="head-left">
            <h3>${c.nombre}</h3>
            <p class="meta"><strong>${c.institucion}</strong>${fecha ? " · " + fecha : ""}</p>
            </div>
            ${logo ? `<img class="brand-logo--top" src="${logo}" alt="Logo ${c.institucion}">` : ""}
        </div>

        <span class="badge">${c.categoria}</span>
        <!-- aquí puedes añadir más contenido si luego lo necesitas -->
        </div>
    `;
    };


    const pintar = () => {
        let lista = [...data];
        if (activa !== "Todas") lista = lista.filter(c => c.categoria === activa);
        const q = norm(search.value || "");
        if (q) {
        lista = lista.filter(c => norm([c.nombre, c.institucion, c.categoria].join(" ")).includes(q));
        }
        // Orden por fecha desc (year*100+month)
        lista.sort((a,b) => ((b.year||0)*100+(b.month||0)) - ((a.year||0)*100+(a.month||0)));
        wrap.innerHTML = lista.map(tarjeta).join("");
        // marcar active visualmente
        const allTabs = tabs.querySelectorAll('.tab');
        allTabs.forEach(btn => btn.classList.remove('active'));
        const current = Array.from(allTabs).find(b => b.textContent.startsWith(activa)) || allTabs[0];
        current.classList.add('active');
    };

  search?.addEventListener("input", pintar);

  renderTabs();
  pintar();
})();



// ====== Tema (claro/oscuro) con persistencia ======
(function tema(){
    const root = document.documentElement;
    const btn = document.getElementById('btn-tema');

    // 1) Determinar tema inicial:
    //    - si hay preferencia guardada, úsala
    //    - si no, respeta el sistema (prefers-color-scheme)
    const saved = localStorage.getItem('ls_tema');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const start = saved || (prefersDark ? 'dark' : 'light');
    root.setAttribute('data-theme', start);

    const syncBtn = () => {
        const dark = root.getAttribute('data-theme') === 'dark';
        if (btn) {
        btn.textContent = dark ? '☀️ Modo claro' : '🌙 Modo oscuro';
        btn.setAttribute('aria-pressed', String(dark));
        // accesibilidad: aria-label descriptivo
        btn.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
        }
        // Si tu header no fuera 100% brand, podrías ajustar el botón según tema
    };

    syncBtn();

    // 2) Toggle al hacer click
    btn?.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('ls_tema', next);
        syncBtn();
    });

    // 3) Si el usuario cambia el tema del SO en caliente
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // solo adapta si no hay preferencia guardada manualmente
        const manual = localStorage.getItem('ls_tema');
        if (manual) return;
        root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        syncBtn();
        });
    }
})();

// =================== PROYECTOS (tabs + search + color por tecnología) ===================
(function renderProyectos(){
  const scope = document.getElementById("proyectos");
  const wrap = document.getElementById("proy-wrap");
  const tabs = document.getElementById("proy-tabs");
  const search = document.getElementById("proy-search");
  const data = Array.isArray(window.proyectos) ? [...window.proyectos] : [];
  if (!wrap || !tabs) return;

  const techColors = {
    "Python": "#f59e0b",
    "Pandas": "#16a34a",
    "Tkinter": "#06b6d4",
    "SQL Server": "#dc2626",
    "Excel/VBA": "#22c55e",
    "APU": "#8b5cf6"
  };
  const setActiveColor = (tech) => {
    const bg = techColors[tech] || getComputedStyle(document.documentElement).getPropertyValue('--brand').trim();
    scope?.style.setProperty('--tab-active-bg', bg);
    scope?.style.setProperty('--tab-active-border', bg);
    scope?.style.setProperty('--tab-active-text', '#fff');
  };

  const norm = s => (s||"").toString().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,'');
  const techs = Array.from(new Set(data.flatMap(p => p.tecnologias || []))).sort();
  let activa = "Todas";

  const card = (p) => `
    <div class="card">
      <h3>${p.titulo}</h3>
      <p>${p.resumen || ""}</p>
      <p>${(p.tecnologias||[]).map(t => `<span class="badge">${t}</span>`).join(" ")}</p>
      ${p.responsabilidades?.length ? `<h4>Responsabilidades</h4><ul>${p.responsabilidades.map(x=>`<li>${x}</li>`).join("")}</ul>` : ""}
      ${p.resultados?.length ? `<h4>Resultados</h4><ul>${p.resultados.map(x=>`<li>${x}</li>`).join("")}</ul>` : ""}
      ${(p.links?.repo || p.links?.demo) ? `<p style="margin-top:10px;">${p.links.repo ? `<a href="${p.links.repo}" target="_blank">Repositorio</a>` : ""}${p.links.demo ? ` · <a href="${p.links.demo}" target="_blank">Demo</a>` : ""}</p>` : ""}
    </div>
  `;

  const renderTabs = () => {
    tabs.innerHTML = "";
    const all = document.createElement("button");
    all.className = `tab ${activa==="Todas" ? "active":""}`;
    all.textContent = `Todas (${data.length})`;
    all.onclick = () => { activa = "Todas"; setActiveColor(activa); paint(); };
    tabs.appendChild(all);

    techs.forEach(t => {
      const btn = document.createElement("button");
      btn.className = `tab ${activa===t ? "active":""}`;
      const count = data.filter(p => (p.tecnologias||[]).includes(t)).length;
      btn.textContent = `${t} (${count})`;
      btn.onclick = () => { activa = t; setActiveColor(t); paint(); };
      tabs.appendChild(btn);
    });

    setActiveColor(activa);
  };

  const paint = () => {
    let list = [...data];
    if (activa !== "Todas") list = list.filter(p => (p.tecnologias||[]).includes(activa));
    const q = norm(search.value);
    if (q) {
      list = list.filter(p => norm([p.titulo, p.resumen, (p.tecnologias||[]).join(" "), (p.responsabilidades||[]).join(" "), (p.resultados||[]).join(" ")].join(" ")).includes(q));
    }
    // Heurística: prioriza Python/SQL/VBA
    const rank = (p) => /\b(sql|python|vba)\b/i.test((p.tecnologias||[]).join(" ")) ? 1 : 2;
    list.sort((a,b) => rank(a)-rank(b) || a.titulo.localeCompare(b.titulo));
    wrap.innerHTML = list.map(card).join("");

    const allTabs = tabs.querySelectorAll('.tab');
    allTabs.forEach(btn => btn.classList.remove('active'));
    const current = Array.from(allTabs).find(b => b.textContent.startsWith(activa)) || allTabs[0];
    current.classList.add('active');
  };

  search?.addEventListener("input", paint);
  renderTabs();
  paint();
})();




