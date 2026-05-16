document.addEventListener('DOMContentLoaded', () => {
  initRevealAnimations();
  initExperienceToggles();
  initContactForm();
});

function initRevealAnimations() {
  const options = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Math.random() * 200 + 50;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initExperienceToggles() {
  document.querySelectorAll('[data-expand]').forEach((item) => {
    item.addEventListener('click', () => {
      const targetId = item.dataset.expand;
      const details = document.getElementById(targetId);
      if (!details) return;

      const isExpanding = details.style.display !== 'block';

      if (isExpanding) {
        details.style.display = 'block';
        requestAnimationFrame(() => {
          item.classList.add('expanded');
        });
      } else {
        item.classList.remove('expanded');
        details.style.display = 'none';
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.btn-submit');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      submitBtn.textContent = 'Please fill all fields';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }, 2000);
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      submitBtn.textContent = 'Invalid email';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }, 2000);
      return;
    }

    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    window.location.href = `mailto:thetam2103@gmail.com?subject=${encodeURIComponent('Portfolio Contact: ' + name)}&body=${encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;

    submitBtn.textContent = 'Sent!';
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 3000);
  });
}
