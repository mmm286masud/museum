const routeLinks = document.querySelectorAll('[data-target]');
const routeStatus = document.querySelector('[data-route-status]');
const observedSections = document.querySelectorAll('[data-stage]');

const stageNames = {
  hero: 'Foyer',
  origins: 'Origins',
  color: 'Color Evolution',
  performance: 'Performance Expansion',
  multimedia: 'Multimedia Era',
  innovation: 'Innovation Era',
  modern: 'Modern Era',
};

function setActiveRoute(id) {
  routeLinks.forEach((link) => {
    const isActive = link.dataset.target === id;
    link.classList.toggle('is-active', isActive);
    link.setAttribute('aria-current', isActive ? 'true' : 'false');
  });

  if (routeStatus && stageNames[id]) {
    routeStatus.textContent = stageNames[id];
  }
}

routeLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.getElementById(link.dataset.target);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setActiveRoute(link.dataset.target);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visibleEntry) {
      setActiveRoute(visibleEntry.target.id);
    }
  },
  {
    threshold: [0.3, 0.55, 0.75],
  }
);

observedSections.forEach((section) => observer.observe(section));
