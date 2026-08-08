const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open ? "true" : "false");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach(section => observer.observe(section));
