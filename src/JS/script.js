// toggle dark/light mode
const html = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Initialization toggle dark/light mode
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  applyTheme(storedTheme);
  toggle.checked = storedTheme === 'dark';
} else {
  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const initialTheme = systemPrefersDark ? 'dark' : 'light';
  applyTheme(initialTheme);
  toggle.checked = systemPrefersDark;
}

// Toggle dark/light mode listener
toggle.addEventListener('change', () => {
  applyTheme(toggle.checked ? 'dark' : 'light');
});

// Menu burger

const overlay = document.querySelector('.header-overlay');
const burger = document.getElementById('burger');
const headerLinks = document.querySelectorAll('header nav a');

burger.addEventListener('click', (e) => {
  const body = document.body;
  if (e.target.checked) {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
    burger.checked = false;
  }
});

headerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (burger.checked) {
      burger.checked = false;
      document.body.classList.remove('no-scroll');
    }
  });
});
