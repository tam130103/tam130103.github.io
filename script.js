/**
 * MonoCV — Elite Portfolio Interactions
 * Orchestrated animations and state management
 */

document.addEventListener('DOMContentLoaded', () => {
  initRevealAnimations();
});

/**
 * Initialize staged reveal animations using IntersectionObserver
 */
function initRevealAnimations() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a slight stagger effect based on element index or delay
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100); 
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/**
 * Toggle experience detail visibility with smooth state transition
 */
function toggleExpand(el) {
  const details = el.nextElementSibling;
  if (!details || !details.classList.contains('experience-details')) return;

  const isExpanding = details.style.display !== 'block';
  
  if (isExpanding) {
    details.style.display = 'block';
    // Small delay to allow display:block to take effect before opacity/height change
    requestAnimationFrame(() => {
      el.classList.add('expanded');
    });
  } else {
    el.classList.remove('expanded');
    details.style.display = 'none';
  }
}

/**
 * Handle contact form submission with feedback
 */
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('.btn-submit');
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) return;

  // Visual feedback
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    window.location.href = `mailto:thetam2103@gmail.com?subject=${encodeURIComponent('Portfolio Contact: ' + name)}&body=${encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
    
    // Reset state
    submitBtn.textContent = 'Sent!';
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  }, 500);
}
