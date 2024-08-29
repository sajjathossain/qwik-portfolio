import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { activeSectionAtom } from '@/store';
import type { TActiveSection } from '@/data/nav-items';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

export const useActiveSection = () => {
  useEffect(() => {
    const elementsWithDataActiveId =
      document.querySelectorAll('[data-active-id]');

    const handleScroll = () => {
      for (const ref of elementsWithDataActiveId) {
        const isInView = ScrollTrigger.isInViewport(ref);

        if (isInView) {
          const activeId = ref.getAttribute('data-active-id') as TActiveSection;
          activeSectionAtom.set(activeId);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('DOMContentLoaded', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('DOMContentLoaded', handleScroll);
    };
  });
};

export const getActiveSection = ({ elements }: { elements: NodeListOf<Element> }) => {
  for (const ref of elements) {
    const isInView = ScrollTrigger.isInViewport(ref);

    if (isInView) {
      const activeId = ref.getAttribute('data-active-id') as TActiveSection;
      activeSectionAtom.set(activeId);
    }
  }

};
