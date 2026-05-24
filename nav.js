// ─── SHARED NAV SYSTEM ───────────────────────────────────────
// Allen Capital Ventures // PULSE X
// Consistent navigation across all pages

const NAV = {
  pages: [
    { id: 'dashboard', label: 'COMMAND', href: 'dashboard.html' },
    { id: 'jarvis',    label: 'JARVIS',  href: 'jarvis.html', dot: true },
    { id: 'globe',     label: 'GLOBE',   href: 'globe.html' },
    { id: 'network',   label: 'NETWORK', href: 'network.html' },
    { id: 'hologram',  label: 'HOLOGRAM',href: 'hologram.html' },
    { id: 'analytics', label: 'ANALYTICS',href: 'analytics.html' },
    { id: 'markets',   label: 'MARKETS', href: 'markets.html' },
    { id: 'energy',    label: 'ENERGY',  href: 'energy.html' },
    { id: 'realestate',label: 'REAL ESTATE', href: 'realestate.html' },
    { id: 'velox',     label: 'VELOX',   href: 'velox.html' },
    { id: 'operator',  label: 'OPERATOR',href: 'operator.html' },
  ],

  getCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'dashboard.html';
    return path.replace('.html', '');
  },

  render(containerId, drawerId) {
    const current = this.getCurrentPage();
    const nav = document.getElementById(containerId);
    const drawer = document.getElementById(drawerId);
    if (!nav) return;

    nav.innerHTML = this.pages.map(p => {
      const active = current === p.id || (current === '' && p.id === 'dashboard') ? 'class="active"' : '';
      const dot = p.dot ? `<span class="jarvis-dot"></span>` : '';
      return `<li><a href="${p.href}" ${active}>${dot}${p.label}</a></li>`;
    }).join('');

    if (drawer) {
      drawer.innerHTML = this.pages.map(p => {
        const active = current === p.id ? 'class="active"' : '';
        return `<li><a href="${p.href}" ${active}>${p.label}</a></li>`;
      }).join('');
    }
  }
};
