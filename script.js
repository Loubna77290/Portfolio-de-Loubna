// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

let mx = 0, my = 0;
let rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Scale cursor on hover over links/buttons
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.transform  = 'translate(-50%, -50%) scale(1.8)';
    ring.style.opacity    = '0.8';
    ring.style.borderColor = 'var(--accent)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.transform  = 'translate(-50%, -50%) scale(1)';
    ring.style.opacity    = '0.5';
  });
});

// ── SCROLL FADE-IN ANIMATIONS ──
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => navObserver.observe(section));
