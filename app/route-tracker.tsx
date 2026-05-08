'use client';

import { useEffect } from 'react';

const stageNames: Record<string, string> = {
  hero: 'Foyer',
  origins: 'Origins',
  color: 'Color Evolution',
  performance: 'Performance Expansion',
  multimedia: 'Multimedia Era',
  innovation: 'Innovation Era',
  modern: 'Modern Era',
};

export function RouteTracker() {
  useEffect(() => {
    const routeLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('[data-target]')
    );
    const routeStatus = document.querySelector<HTMLElement>(
      '[data-route-status]'
    );
    const observedSections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-stage]')
    );

    function setActiveRoute(id: string) {
      routeLinks.forEach((link) => {
        const isActive = link.dataset.target === id;
        link.classList.toggle('is-active', isActive);
        link.setAttribute('aria-current', isActive ? 'true' : 'false');
      });

      if (routeStatus && stageNames[id]) {
        routeStatus.textContent = stageNames[id];
      }
    }

    const cleanups = routeLinks.map((link) => {
      const handleClick = (event: MouseEvent) => {
        const targetId = link.dataset.target;
        const target = targetId ? document.getElementById(targetId) : null;

        if (!target || !targetId) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        setActiveRoute(targetId);
      };

      link.addEventListener('click', handleClick);

      return () => link.removeEventListener('click', handleClick);
    });

    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
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
          )
        : null;

    observedSections.forEach((section) => observer?.observe(section));
    setActiveRoute('hero');

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      observer?.disconnect();
    };
  }, []);

  return null;
}
