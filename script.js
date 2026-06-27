import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initNavScroll();
  initSignalCarousel();
  initContactForm();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  requestAnimationFrame(() => {
    initHeroAnimations();
    initAboutTextReveal();
    initBentoReveal();
    initPinnedExperience();
    initProjectScroll();
    initSectionReveals();
    ScrollTrigger.refresh();
  });
});

function initMobileNav() {
  const nav = document.getElementById("nav");
  const button = document.getElementById("nav-menu-btn");
  const links = document.querySelectorAll(".nav-link");

  if (!nav || !button) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation");
    });
  });
}

function initNavScroll() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const update = () => {
    nav.classList.toggle("scrolled", window.scrollY > 48);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from(".nav-inner", { y: -24, opacity: 0, duration: 0.8 })
    .from(".hero-kicker", { y: 22, opacity: 0, duration: 0.65 }, "-=0.35")
    .from(".hero-title", { y: 34, opacity: 0, duration: 0.95 }, "-=0.3")
    .from(".hero-subtitle", { y: 24, opacity: 0, duration: 0.7 }, "-=0.55")
    .from(".hero-actions", { y: 20, opacity: 0, duration: 0.65 }, "-=0.45")
    .from(".portrait-frame", { x: 48, y: 26, opacity: 0, scale: 0.94, duration: 1.05 }, "-=0.85")
    .from(".system-note", { y: 18, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.35");
}

function initAboutTextReveal() {
  const container = document.getElementById("about-text-reveal");
  const paragraph = container?.querySelector(".about-reveal-text");
  if (!container || !paragraph) return;

  const words = paragraph.textContent.trim().split(/\s+/);
  paragraph.innerHTML = words.map((word) => `<span class="word">${escapeHtml(word)}</span>`).join(" ");

  const wordEls = paragraph.querySelectorAll(".word");

  ScrollTrigger.create({
    trigger: container,
    start: "top 72%",
    end: "bottom 32%",
    scrub: 0.45,
    onUpdate: (self) => {
      wordEls.forEach((word, index) => {
        const start = index / wordEls.length;
        const localProgress = Math.max(0, self.progress - start);
        word.style.opacity = String(Math.min(1, 0.14 + localProgress * 10));
      });
    },
  });
}

function initBentoReveal() {
  const cards = document.querySelectorAll(".bento-card");
  const lanes = document.querySelectorAll(".lane");

  if (cards.length) {
    gsap.set(cards, { y: 42, opacity: 0 });
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#bento-grid",
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });
  }

  if (lanes.length) {
    gsap.from(lanes, {
      y: 42,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".lanes",
        start: "top 84%",
        toggleActions: "play none none none",
      },
    });
  }
}

function initPinnedExperience() {
  const split = document.getElementById("exp-split");
  const left = document.getElementById("exp-left");
  const cards = document.querySelectorAll(".exp-card");
  const canPin = window.matchMedia("(min-width: 1121px)").matches;

  if (!split || !left || !cards.length) return;

  if (canPin) {
    ScrollTrigger.create({
      trigger: split,
      start: "top 18%",
      end: "bottom 72%",
      pin: left,
      pinSpacing: false,
    });
  }

  gsap.from(cards, {
    y: 54,
    opacity: 0,
    duration: 0.8,
    stagger: 0.16,
    ease: "power3.out",
    scrollTrigger: {
      trigger: split,
      start: "top 72%",
      toggleActions: "play none none none",
    },
  });
}

function initProjectScroll() {
  const projects = document.querySelectorAll(".project-item");
  if (!projects.length) return;

  projects.forEach((project) => {
    gsap.fromTo(
      project,
      { scale: 0.94, opacity: 0.45 },
      {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: project,
          start: "top 92%",
          end: "top 48%",
          scrub: 0.55,
        },
      }
    );
  });
}

function initSectionReveals() {
  const selectors = [
    ".section-header",
    ".section-statement",
    ".exp-left",
    ".signal-copy",
    ".signal-carousel",
    ".education-card",
    ".contact-copy",
    ".contact-form",
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      gsap.from(element, {
        y: 34,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          toggleActions: "play none none none",
        },
      });
    });
  });
}

function initSignalCarousel() {
  const carousel = document.getElementById("signal-carousel");
  const cards = Array.from(carousel?.querySelectorAll(".signal-card") || []);
  const prev = document.getElementById("signal-prev");
  const next = document.getElementById("signal-next");
  let index = cards.findIndex((card) => card.classList.contains("is-active"));

  if (!carousel || !cards.length || !prev || !next) return;
  if (index < 0) index = 0;

  const show = (nextIndex) => {
    if (nextIndex === index) return;

    const current = cards[index];
    const incoming = cards[nextIndex];
    const animate = typeof gsap !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (animate) {
      gsap.to(current, {
        opacity: 0,
        y: 10,
        duration: 0.18,
        onComplete: () => {
          current.classList.remove("is-active");
          current.style.opacity = "";
          current.style.transform = "";
          incoming.classList.add("is-active");
          gsap.fromTo(incoming, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" });
        },
      });
    } else {
      current.classList.remove("is-active");
      incoming.classList.add("is-active");
    }

    index = nextIndex;
  };

  prev.addEventListener("click", () => show((index - 1 + cards.length) % cards.length));
  next.addEventListener("click", () => show((index + 1) % cards.length));
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitBtn = form.querySelector(".btn-submit");
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showButtonFeedback(submitBtn, "Complete all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showButtonFeedback(submitBtn, "Check email");
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact: ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Opening email...";
    submitBtn.disabled = true;
    window.location.href = `mailto:thetam2103@gmail.com?subject=${subject}&body=${body}`;

    window.setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2200);
  });
}

function showButtonFeedback(button, message) {
  if (!button) return;

  const originalText = button.textContent;
  button.textContent = message;
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 1800);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
