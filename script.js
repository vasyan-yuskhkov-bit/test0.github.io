const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Переключение темы
function toggleTheme() {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  }
}

themeToggle.addEventListener('click', toggleTheme);

// Загрузка сохранённой темы
if (localStorage.getItem('theme') === 'dark' || 
   (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

// Tailwind script (уже подключён через CDN)
