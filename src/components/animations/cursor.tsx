import {
  $,
  component$,
  useOnDocument,
  useOnWindow,
  useSignal
} from '@builder.io/qwik';
import { gsap } from 'gsap';

export const Cursor = component$(() => {
  const cursor = useSignal<HTMLDivElement>();

  const handleMouseMove = $((event: MouseEvent) => {
    const { clientX: x, clientY: y } = event;
    if (!cursor.value) return;

    gsap.to(cursor.value, {
      x: `${x - 24}px`,
      y: `${y - 24}px`,
      duration: 0.1,
      ease: 'sine.in'
    });
  });

  const handleMouseEnter = $(() => {
    if (!cursor.value) return;

    gsap.to(cursor.value, {
      scale: 7
    });
  });

  const handleMouseLeave = $(() => {
    if (!cursor.value) return;
    gsap.to(cursor.value, {
      scale: 1
    });
  });

  useOnWindow(
    'DOMContentLoaded',
    $(() => {
      document.addEventListener('mousemove', handleMouseMove);
    })
  );

  useOnDocument(
    'DOMContentLoaded',
    $(() => {
      const elementsWithDataMouseGrow =
        document.querySelectorAll('.grow-cursor');

      for (const ref of elementsWithDataMouseGrow) {
        ref.addEventListener('mouseenter', handleMouseEnter);
        ref.addEventListener('mouseleave', handleMouseLeave);
      }
    })
  );

  return (
    <div
      ref={cursor}
      class="pointer-events-none fixed z-[9999] hidden aspect-square h-10 rounded-full bg-emerald-300 mix-blend-difference md:block"
    />
  );
});
