// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Custom Cursor Setup
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", e => {
  const { clientX: x, clientY: y } = e;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  follower.style.left = `${x}px`;
  follower.style.top = `${y}px`;
});

// Hover scaling for links
document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(1.5)";
    follower.style.transform = "scale(2)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    follower.style.transform = "scale(1)";
  });
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeToggle.textContent =
      document.body.classList.contains("light-mode") ? "🌞" : "🌙";
    document.querySelector(".navbar").classList.toggle("light-mode");
  });
}