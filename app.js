const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('in'));
}

const links = document.querySelectorAll('.links a');
const sections = [...links].map((a) => document.querySelector(a.getAttribute('href')));
addEventListener('scroll', () => {
  const y = scrollY + 200;
  let current = 0;
  sections.forEach((s, i) => { if (s && s.offsetTop <= y) current = i; });
  links.forEach((a, i) => a.classList.toggle('on', i === current));
}, { passive: true });
