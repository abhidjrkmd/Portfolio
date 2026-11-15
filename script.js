const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const themeToggle = document.querySelector('#themeToggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
});

const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

// The browser may show its install prompt on supported Android browsers.
// On iPhone, open the site in Safari and use Share > Add to Home Screen.
let installPrompt;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
  document.documentElement.classList.add('can-install');
});

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(error => {
      console.info('Offline support was not enabled:', error);
    });
  });
}
