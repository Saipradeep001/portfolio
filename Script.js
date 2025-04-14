// Typing text effect for Hero Section
const text = "Java Developer | Backend Specialist";
let index = 0;
function type() {
  const typedText = document.getElementById("typed-text");
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// Highlight nav links on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Scroll reveal animation
window.onload = function () {
  const allSections = document.querySelectorAll("section");
  allSections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
  });

  const reveal = () => {
    allSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();
};
