// Script pour le compte à rebours
const countdownDate = new Date('April 15, 2025 00:00:00').getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML =
      'Le site est maintenant disponible !';
  }
}, 1000);

// toggle dark/light mode
const html = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Initialisation
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

// Toggle listener
toggle.addEventListener('change', () => {
  applyTheme(toggle.checked ? 'dark' : 'light');
});
