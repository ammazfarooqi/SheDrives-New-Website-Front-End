window.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");
  bars.forEach(bar => {
    const value = bar.getAttribute("data-target");
    setTimeout(() => {
      bar.style.width = value + "%";
    }, 300);
  });
});

// flip cards

 // Flip on tap for mobile
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("touchstart", function () {
      this.querySelector(".flip-card-inner").classList.toggle("flipped");
    });
  });
  // navbar dropdown
  document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});

// Heart section

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

const rules = document.querySelectorAll('.rule');
const revealOnScroll = () => {
  rules.forEach((rule, index) => {
    const rect = rule.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      setTimeout(() => {
        rule.classList.add('visible');
      }, index * 150);
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


