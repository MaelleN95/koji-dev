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
