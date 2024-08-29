import {
  $,
  Slot,
  component$,
  useOnDocument,
  useSignal
} from '@builder.io/qwik';
import { gsap } from 'gsap';

type Props = {
  width?: '100%' | 'fit-content';
  id?: string;
};

export const Reveal = component$((props: Props) => {
  const { width = 'fit-content', id = '' } = props;
  const target = useSignal<HTMLDivElement>();
  const child = useSignal<HTMLDivElement>();
  const overlay = useSignal<HTMLDivElement>();

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observeCallback = $((entries: IntersectionObserverEntry[]) => {
    if (!child.value || !overlay.value) return;

    for (const entry of entries) {
      if (entry.isIntersecting) {
        const revealTL = gsap.timeline();
        revealTL
          .to(overlay.value, {
            left: '100%',
            duration: 0.5,
            ease: 'power1.in'
          })
          .to(child.value, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.25
          });
      }
    }
  });

  useOnDocument(
    'DOMContentLoaded',
    $(() => {
      const observer = new IntersectionObserver(observeCallback, options);

      if (target.value) {
        observer.observe(target.value);
      }
    })
  );

  return (
    <div ref={target}>
      <div id={id} class="relative h-fit overflow-hidden" style={{ width }}>
        <div
          ref={overlay}
          class="absolute inset-0 bottom-0 left-0 right-0 top-0 z-10 h-full bg-blue-500 dark:bg-emerald-500"
        />
        <div ref={child} class="relative h-fit overflow-hidden">
          <Slot />
        </div>
      </div>
    </div>
  );
});
