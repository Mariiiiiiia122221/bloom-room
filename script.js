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

const form = document.querySelector('.order-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = '79221049456';
    const name = this.querySelector('input[type="text"]').value || 'Клиент';
    const interest = this.querySelector('select').value || 'Мебель';
    const comment = this.querySelector('textarea').value || '';

    const text = encodeURIComponent(
      `Здравствуйте! Меня зовут ${name}. Хочу рассчитать стоимость: ${interest}. ${comment}`
    );

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  });
}
