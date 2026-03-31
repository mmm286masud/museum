const routeButtons = document.querySelectorAll('[data-target]');
const routeStatus = document.querySelector('[data-route-status]');
const observedSections = document.querySelectorAll('[data-stage]');

const stageNames = {
  foyer: 'Entrance Hall',
  origins: 'Origins',
  'color-evolution': 'Color Evolution',
  'performance-expansion': 'Performance Expansion',
  'multimedia-era': 'Multimedia Era',
  'innovation-era': 'Innovation Era',
  'modern-era': 'Modern Era',
};

function setActiveRoute(id) {
  routeButtons.forEach((button) => {
    const isActive = button.dataset.target === id;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-current', isActive ? 'true' : 'false');
  });

  if (routeStatus && stageNames[id]) {
    routeStatus.textContent = `Now viewing: ${stageNames[id]}`;
  }
}

routeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setActiveRoute(button.dataset.target);
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
    threshold: [0.35, 0.55, 0.75],
  }
);

observedSections.forEach((section) => observer.observe(section));
