(function () {
  "use strict";
  var S = window.SITE;
  if (!S) return;

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }
  function $(id) { return document.getElementById(id); }

  // ---------- Header / hero ----------
  document.title = S.name + " · " + S.title;
  $("name").textContent = S.name;
  $("title").textContent = S.title;
  $("affiliation").textContent = S.affiliation;
  $("tagline").textContent = S.tagline;
  $("footer-name").textContent = S.name;
  $("year").textContent = new Date().getFullYear();

  if (S.photo) {
    var ph = $("photo");
    ph.src = S.photo;
    ph.hidden = false;
  }

  // ---------- Links ----------
  var linkDefs = [
    ["email", "Email", function (v) { return "mailto:" + v; }],
    ["github", "GitHub"],
    ["scholar", "Google Scholar"],
    ["orcid", "ORCID"],
    ["researchgate", "ResearchGate"],
    ["linkedin", "LinkedIn"],
    ["cv", "CV (PDF)"]
  ];
  var linksBox = $("links");
  linkDefs.forEach(function (d) {
    var v = S.links[d[0]];
    if (!v) return;
    var href = d[2] ? d[2](v) : v;
    linksBox.appendChild(el("a", { class: "btn", href: href, target: "_blank", rel: "noopener", text: d[1] }));
  });

  // ---------- About & interests ----------
  S.about.forEach(function (p) { $("about-text").appendChild(el("p", { text: p })); });
  S.interests.forEach(function (i) { $("interests").appendChild(el("li", { class: "chip", text: i })); });

  // ---------- News ----------
  if (S.news && S.news.length) {
    S.news.forEach(function (n) {
      $("news-list").appendChild(el("li", {}, [el("span", { class: "news-date", text: n.date }), " " + n.text]));
    });
  } else {
    $("news").hidden = true;
    var navNews = document.querySelector('a[href="#news"]');
    if (navNews) navNews.hidden = true;
  }

  // ---------- Publications ----------
  var typeLabels = { journal: "Journal", conference: "Conference", preprint: "Preprint", thesis: "Thesis" };
  var state = { type: "all", q: "" };

  function authorsNode(list) {
    var box = el("span", { class: "authors" });
    list.forEach(function (a, i) {
      box.appendChild(a === S.me ? el("strong", { text: a }) : document.createTextNode(a));
      if (i < list.length - 1) box.appendChild(document.createTextNode(", "));
    });
    return box;
  }

  function pubNode(p) {
    var links = el("div", { class: "pub-links" });
    if (p.doi) links.appendChild(el("a", { href: "https://doi.org/" + p.doi, target: "_blank", rel: "noopener", text: "DOI" }));
    if (p.pdf) links.appendChild(el("a", { href: p.pdf, target: "_blank", rel: "noopener", text: "PDF" }));
    if (p.url) links.appendChild(el("a", { href: p.url, target: "_blank", rel: "noopener", text: "Link" }));
    if (p.code) links.appendChild(el("a", { href: p.code, target: "_blank", rel: "noopener", text: "Code" }));

    var venue = [p.venue, p.volume].filter(Boolean).join(", ");
    var body = el("div", { class: "pub-body" }, [
      el("h3", { class: "pub-title", text: p.title }),
      el("p", { class: "pub-authors" }, [authorsNode(p.authors)]),
      el("p", { class: "pub-venue", text: venue }),
      p.abstract
        ? el("details", {}, [el("summary", { text: "Abstract" }), el("p", { text: p.abstract })])
        : null,
      links.childNodes.length ? links : null
    ]);
    return el("li", { class: "pub" }, [
      el("div", { class: "pub-meta" }, [
        el("span", { class: "pub-year", text: String(p.year) }),
        el("span", { class: "badge badge-" + p.type, text: typeLabels[p.type] || p.type })
      ]),
      body
    ]);
  }

  function matches(p) {
    if (state.type !== "all" && p.type !== state.type) return false;
    if (!state.q) return true;
    var hay = [p.title, p.authors.join(" "), p.venue, p.abstract, p.year].join(" ").toLowerCase();
    return hay.indexOf(state.q) !== -1;
  }

  function renderPubs() {
    var list = $("pub-list");
    list.innerHTML = "";
    var items = S.publications.slice().sort(function (a, b) { return b.year - a.year; }).filter(matches);
    if (!items.length) {
      list.appendChild(el("li", { class: "empty", text: "No publications match." }));
      return;
    }
    var lastYear = null;
    items.forEach(function (p) {
      list.appendChild(pubNode(p));
      lastYear = p.year;
    });
  }

  var types = ["all"].concat(Array.from(new Set(S.publications.map(function (p) { return p.type; }))));
  var filters = $("pub-filters");
  types.forEach(function (t) {
    var b = el("button", { type: "button", class: "filter" + (t === "all" ? " active" : ""), "data-type": t,
      text: t === "all" ? "All" : (typeLabels[t] || t) });
    b.addEventListener("click", function () {
      state.type = t;
      Array.prototype.forEach.call(filters.children, function (c) { c.classList.toggle("active", c === b); });
      renderPubs();
    });
    filters.appendChild(b);
  });
  $("pub-search").addEventListener("input", function (e) {
    state.q = e.target.value.trim().toLowerCase();
    renderPubs();
  });
  $("pub-count").textContent = S.publications.length + " total";
  renderPubs();

  // ---------- Skills ----------
  S.skills.forEach(function (g) {
    var ul = el("ul", { class: "skill-list" });
    g.items.forEach(function (it) {
      var li = el("li", {}, [el("span", { class: "skill-name", text: it.name })]);
      if (typeof it.level === "number") {
        var bar = el("span", { class: "bar", role: "img", "aria-label": "Level " + it.level + " of 5" });
        for (var i = 1; i <= 5; i++) bar.appendChild(el("i", { class: i <= it.level ? "on" : "" }));
        li.appendChild(bar);
      }
      ul.appendChild(li);
    });
    $("skill-groups").appendChild(el("div", { class: "card" }, [el("h3", { text: g.group }), ul]));
  });
})();
