/* ================================================================
   PORTFOLIO — GSAP ANIMATIONS & INTERACTIONS
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  waitForGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Small delay to let browser settle after load
    requestAnimationFrame(() => {
      initNavScroll();
      initHeroAnimations();
      initAboutTextReveal();
      initBentoReveal();
      initExperienceReveal();
      initProjectsScaleScroll();
      initSectionReveals();
      initContactForm();

      // Force ScrollTrigger to recalculate after all animations are set
      ScrollTrigger.refresh();
    });
  });
});

/* --- Wait for GSAP to load (deferred) --- */
function waitForGSAP(cb) {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    cb();
  } else {
    setTimeout(() => waitForGSAP(cb), 50);
  }
}

/* ================================================================
   NAV — Glass blur on scroll
   ================================================================ */
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      if (self.scroll() > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  });
}

/* ================================================================
   HERO — Staggered entry
   ================================================================ */
function initHeroAnimations() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero-greeting', {
    y: 30, opacity: 0, duration: 0.8, delay: 0.2
  })
  .from('.hero-h1', {
    y: 40, opacity: 0, duration: 1
  }, '-=0.5')
  .from('.hero-sub', {
    y: 30, opacity: 0, duration: 0.8
  }, '-=0.6')
  .from('.hero-ctas', {
    y: 20, opacity: 0, duration: 0.7
  }, '-=0.5')
  .from('.hero-status', {
    y: 15, opacity: 0, duration: 0.6
  }, '-=0.4')
  .from('.hero-image-wrap', {
    scale: 0.85, opacity: 0, duration: 1.2, ease: 'power2.out'
  }, '-=1.0');
}

/* ================================================================
   ABOUT — Scrubbing Text Reveal
   ================================================================ */
function initAboutTextReveal() {
  const container = document.getElementById('about-text-reveal');
  if (!container) return;

  const paragraph = container.querySelector('.about-reveal-p');
  if (!paragraph) return;

  // Split text into individual words wrapped in spans
  const text = paragraph.textContent.trim();
  const words = text.split(/\s+/);
  paragraph.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');

  const wordEls = paragraph.querySelectorAll('.word');

  // ScrollTrigger scrubs through word opacities
  ScrollTrigger.create({
    trigger: container,
    start: 'top 75%',
    end: 'bottom 30%',
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress;
      wordEls.forEach((word, i) => {
        const wordProgress = i / wordEls.length;
        const diff = progress - wordProgress;
        if (diff > 0) {
          const opacity = Math.min(1, 0.12 + diff * 8);
          word.style.opacity = opacity;
        } else {
          word.style.opacity = 0.12;
        }
      });
    }
  });
}

/* ================================================================
   BENTO GRID — Staggered reveal
   Uses set() for initial state + to() with ScrollTrigger
   ================================================================ */
function initBentoReveal() {
  const cards = document.querySelectorAll('.bento-card');
  if (!cards.length) return;

  // Set initial state explicitly
  gsap.set(cards, { y: 50, opacity: 0 });

  gsap.to(cards, {
    scrollTrigger: {
      trigger: '#bento-grid',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out'
  });
}

/* ================================================================
   EXPERIENCE — Reveal
   ================================================================ */
function initExperienceReveal() {
  const left = document.getElementById('exp-left');
  const right = document.getElementById('exp-right');
  if (!left || !right) return;

  // Set initial states
  gsap.set(left, { x: -40, opacity: 0 });
  gsap.set(right.children, { y: 40, opacity: 0 });

  gsap.to(left, {
    scrollTrigger: {
      trigger: '#exp-split',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    x: 0,
    opacity: 1,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.to(right.children, {
    scrollTrigger: {
      trigger: '#exp-split',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  });
}

/* ================================================================
   PROJECTS — Image Scale & Fade on Scroll
   ================================================================ */
function initProjectsScaleScroll() {
  const items = document.querySelectorAll('.project-item');
  if (!items.length) return;

  items.forEach((item) => {
    // Scale up from 0.88 to 1.0
    gsap.fromTo(item, {
      scale: 0.88,
      opacity: 0.3
    }, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        end: 'top 45%',
        scrub: 0.6,
      }
    });

    // Fade out on exit
    gsap.to(item, {
      opacity: 0.15,
      scale: 0.96,
      scrollTrigger: {
        trigger: item,
        start: 'bottom 25%',
        end: 'bottom -15%',
        scrub: 0.6,
      }
    });
  });
}

/* ================================================================
   GENERIC SECTION REVEALS
   ================================================================ */
function initSectionReveals() {
  const revealTargets = [
    '.section--skills .section-heading',
    '.section--experience .section-heading',
    '.section--projects .section-heading',
    '.section--education .section-heading',
    '.edu-card',
    '.contact-heading',
    '.contact-sub',
    '.contact-form',
    '.contact-links'
  ];

  revealTargets.forEach(selector => {
    const el = document.querySelector(selector);
    if (!el) return;

    gsap.set(el, { y: 35, opacity: 0 });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out'
    });
  });
}

/* ================================================================
   CONTACT FORM — Mailto handler
   ================================================================ */
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
      showBtnFeedback(submitBtn, 'Please fill all fields');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      showBtnFeedback(submitBtn, 'Invalid email');
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

function showBtnFeedback(btn, msg) {
  const original = btn.textContent;
  btn.textContent = msg;
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
  }, 2000);
}
