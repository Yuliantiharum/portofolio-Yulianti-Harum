// DARK MODE

const toggle = document.getElementById('toggleTheme');

toggle.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});

// SMOOTH SCROLL

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// VALIDASI FORM

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  const inputs = form.querySelectorAll('input, textarea');

  for (let input of inputs) {
    if (input.value.trim() === '') {
      alert('Semua field harus diisi');
      e.preventDefault();
      return;
    }
  }
});

// BINTANG JATUH

function star() {
  if (!document.body.classList.contains('dark')) return;

  const s = document.createElement('div');

  s.classList.add('star');

  s.style.left = Math.random() * window.innerWidth + 'px';

  document.body.appendChild(s);

  setTimeout(() => {
    s.remove();
  }, 2000);
}

setInterval(star, 300);
