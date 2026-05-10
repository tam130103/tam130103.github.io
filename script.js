document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});

function toggleExpand(el) {
  const details = el.nextElementSibling;
  if (!details || !details.classList.contains('experience-details')) return;
  const isOpen = details.style.display === 'block';
  details.style.display = isOpen ? 'none' : 'block';
  el.classList.toggle('expanded', !isOpen);
}

function handleSubmit(e) {
  e.preventDefault();
  const n = document.getElementById('name').value.trim();
  const em = document.getElementById('email').value.trim();
  const m = document.getElementById('message').value.trim();
  if (!n || !em || !m) return;
  window.location.href = `mailto:thetam2103@gmail.com?subject=${encodeURIComponent('Contact from ' + n)}&body=${encodeURIComponent('From: ' + n + '\nEmail: ' + em + '\n\n' + m)}`;
}
