const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
  });
});
