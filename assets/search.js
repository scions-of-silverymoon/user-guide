document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Resolve a sensible path for assets/search.json based on where this script
    // was loaded from. This allows the site to be hosted under a base path
    // (e.g. /user-guide) without hardcoding that value.
    let jsonUrl = 'assets/search.json';
    try {
      const scriptEl = document.querySelector('script[src$="search.js"]');
      if (scriptEl && scriptEl.src) {
        const scriptUrl = new URL(scriptEl.src, window.location.href);
        const basePath = scriptUrl.pathname.replace(/\/assets\/search\.js$/, '');
        jsonUrl = (basePath ? basePath + '/assets/search.json' : 'assets/search.json');
      }
    } catch (e) {
      // ignore and fall back to relative path
    }

    // Try the resolved URL first, then fall back to a few common locations.
    const tryUrls = [jsonUrl, '/assets/search.json', 'assets/search.json'];
    let resp = null;
    for (const u of tryUrls) {
      try {
        resp = await fetch(u);
        if (resp && resp.ok) break;
      } catch (e) {
        resp = null;
      }
    }
    if (!resp || !resp.ok) return;
    const pages = await resp.json();

    // Wait for Fuse to be available (loaded via CDN in the page)
    if (typeof Fuse === 'undefined') {
      console.warn('Fuse.js not found; search will be unavailable.');
      return;
    }

    const fuse = new Fuse(pages, {
      keys: ['title', 'description', 'text'],
      threshold: 0.35,
      includeScore: true,
    });

    const input = document.getElementById('site-search');
    const results = document.getElementById('search-results');
    if (!input || !results) return;

    input.addEventListener('input', () => {
      const q = input.value.trim();
      results.innerHTML = '';
      if (!q) return;
      const matches = fuse.search(q, {limit: 10});
      let items = matches.map(m => m.item);

      // If Fuse found nothing, do a simple substring fallback over the raw fields.
      if (!items.length) {
        const ql = q.toLowerCase();
        items = pages.filter(p => ((p.title || '') + ' ' + (p.description || '') + ' ' + (p.text || '')).toLowerCase().includes(ql)).slice(0, 10);
      }
      if (!items.length) {
        results.textContent = 'No results';
        return;
      }
      items.forEach(p => {
        const a = document.createElement('a');
        a.href = p.url;
        a.textContent = p.title;
        a.style.display = 'block';
        const desc = document.createElement('div');
        desc.textContent = p.description || '';
        desc.style.fontSize = '0.9em';
        desc.style.opacity = '0.9';
        const container = document.createElement('div');
        container.className = 'search-result';
        container.appendChild(a);
        container.appendChild(desc);
        results.appendChild(container);
      });
    });
  } catch (e) {
    // Fail silently — search is an enhancement
    console.warn('Search initialization failed', e);
  }
});
