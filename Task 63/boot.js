const targets = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); 
      observer.unobserve(entry.target);    
    }
  });
});

targets.forEach(target => observer.observe(target));
window.addEventListener("load", () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
});
