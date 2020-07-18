const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav__link');

const portfolioItens = document.querySelectorAll('.portfolio__item');


navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
});

portfolioItens.forEach(item => {
  item.addEventListener('click', () => {
    const portfolioItemId = item.getAttribute("id");
    window.location.href = `/portfolio-item?id=${portfolioItemId}`
  })
})