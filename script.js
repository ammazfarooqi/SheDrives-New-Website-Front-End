window.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const target = parseInt(bar.getAttribute("data-target")); // Target % (bar width ke liye)
    const valueText = bar.parentElement.previousElementSibling.querySelector(".value");

    // HTML me likha hua final percentage read karo (jaise "25%")
    const finalValue = parseInt(valueText.textContent);

    let current = 0; // 0 se start

    // Start me hamesha 0% dikhaye
    valueText.textContent = "0%";
    bar.style.width = "0%";

    setTimeout(() => {
      const timer = setInterval(() => {
        if (current < finalValue) {
          current++;
          // Bar width target tak jayegi
          const progressWidth = Math.min(current, target);
          bar.style.width = progressWidth + "%";
          // Text value finalValue tak jayega
          valueText.textContent = current + "%";
        } else {
          clearInterval(timer);
        }
      }, 20); // animation speed
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

// account del
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".open-modal-btn");
  const modal = document.getElementById("deleteModal");
  const cancelBtn = document.getElementById("cancelBtn");

  openBtn.addEventListener("click", () => {
    modal.classList.remove("d-none");
  });

  cancelBtn.addEventListener("click", () => {
    modal.classList.add("d-none");
  });

  // Close when clicking outside modal-box
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("d-none");
    }
  });
});


// hero welcom section js
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 100;
}

function animateAboutSection() {
  const section = document.querySelector('.about-section');
  if (!section) return;

  const targets = section.querySelectorAll(
    '.main-heading, .description, .feature, .progress-box'
  );

  targets.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateAboutSection);
window.addEventListener('load', animateAboutSection);
// about us anmition gsap
// <!-- gsap scrit about hero section -->
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // TEXT ANIMATION
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      }
    });

    textTimeline
      .from(".about-text h2", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      .from(".about-text h6", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      .from(".about-text p", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

    // IMAGE ANIMATION (slide from right + blur to clear)
    gsap.from(".about-img", {
      scrollTrigger: {
        trigger: ".about-img",
        start: "top 80%",
      },
      x: 100,
      opacity: 0,
      filter: "blur(20px)",
      scale: 1.1,
      duration: 1,
      ease: "power2.out"
    });
  });

// flip cards animation
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animate heading & paragraph
  gsap.from(".flip-section h2", {
    scrollTrigger: {
      trigger: ".flip-section h2",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from(".flip-section p", {
    scrollTrigger: {
      trigger: ".flip-section p",
      start: "top 85%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out"
  });

  // Animate custom image (circle-line)
  gsap.from(".custom-shape-img img", {
    scrollTrigger: {
      trigger: ".custom-shape-img",
      start: "top 90%",
    },
    scale: 0,
    rotate: 180,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)"
  });

  // Animate flip cards with stagger
  gsap.from(".flip-card", {
    scrollTrigger: {
      trigger: ".flip-card",
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.2
  });
});

// meet our founder page animation
 document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  });
  // mission and vision page animations start here

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  });


  // safety js
  // Small fade-in animation on tab change
document.querySelectorAll('.nav-link').forEach(tab => {
  tab.addEventListener('shown.bs.tab', function () {
    const activePane = document.querySelector(this.dataset.bsTarget);
    activePane.classList.add('fade-in');
    setTimeout(() => activePane.classList.remove('fade-in'), 500);
  });
});


  

// terms and condtions
