//burger nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})


//change header bg on scroll
const header = document.querySelector('header');
const hero = document.querySelector('.hero-container');
const heroOptions = {};

const heroObserver = new IntersectionObserver(function(entries, heroObserver) {
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }

  });
}, heroOptions);

heroObserver. observe(hero);

//smooth scroll
const scroll = new SmoothScroll('.nav a[href*="#"]',{
  speed: 800
});

const scrollUp = new SmoothScroll('.wrapper a[href*="#"]',{
  speed: 800
});

const scrollHome = new SmoothScroll('.logo a[href*="#"]', {
  speed: 800
});
