import { $, component$, useOnWindow, useSignal } from '@builder.io/qwik';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const getDistanceInPercentage = (distance: number) => {
  const scrollY = Math.max(0, Math.min(100, window.scrollY / distance));
  return scrollY;
};

export const PageScrollDistance = component$(() => {
  const ref = useSignal<Element>();

  const handleScroll = $(() => {
    const distance = ScrollTrigger.maxScroll(window);
    const distanceInPercentage = getDistanceInPercentage(distance);
    if (!ref.value) return;

    gsap.to(ref.value, {
      duration: 0.5,
      scaleX: distanceInPercentage,
      ease: 'none'
    });
  });

  useOnWindow('scroll', handleScroll);
  useOnWindow('resize', handleScroll);
  useOnWindow('load', handleScroll);

  return (
    <div
      class="fixed left-0 right-0 top-0 z-50 h-1 origin-[0%] scale-x-0 bg-blue-500 dark:bg-emerald-500"
      ref={ref}
    />
  );
});
