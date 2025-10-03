function localTime() {
  const timeDisplay = document.getElementById("time-display");

  setInterval(() => {
    const now = new Date();

    // Convert to IST (UTC + 5:30)
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const formatter = new Intl.DateTimeFormat([], options);
    timeDisplay.textContent = formatter.format(now);
  }, 1000);
}

// Call the function
localTime();




// --------------About section--------------

function opentab(tabName) {
  const tabs = document.querySelectorAll(".tab-contents");
  const links = document.querySelectorAll(".tab-links");

  tabs.forEach((tab) => {
    tab.classList.remove("active-tab");
  });

  links.forEach((link) => {
    link.classList.remove("active-link");
  });

  document.getElementById(tabName).classList.add("active-tab");

  // Add active link highlight
  links.forEach((link) => {
    if (link.textContent.trim().toLowerCase() === tabName) {
      link.classList.add("active-link");
    }
  });
}

const serviceCards = document.querySelectorAll(".services-list div");

const appearOptions = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    observer.unobserve(entry.target);
  });
}, appearOptions);

serviceCards.forEach((card) => {
  appearOnScroll.observe(card);
});



document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Navya E\nFrom Kerala"; // ✨ your text
  const h1 = document.getElementById("animated-h1");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      if (text[index] === "\n") {
        h1.appendChild(document.createElement("br")); // line break
      } else {
        const span = document.createElement("span");
        span.textContent = text[index];
        span.classList.add("gradient-letter");
        h1.appendChild(span);
      }
      index++;
      setTimeout(typeEffect, 120); // typing speed
    }
  }

  typeEffect();
});

