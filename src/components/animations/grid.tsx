import { $, component$, useOnWindow, useSignal } from '@builder.io/qwik';
import type { ClassValue } from 'class-variance-authority/dist/types';
import { gsap } from 'gsap';
import { cn } from '~/lib/utils';

const GridDots = component$(() => {
  const gridRef = useSignal<HTMLDivElement>();
  let index = 0;

  const colsRef = useSignal<number>(25);
  const rowsRef = useSignal<number>(25);

  useOnWindow(
    'DOMContentLoaded',
    $(() => {
      const target = document.querySelector('html');
      if (!target) return;
      const width = target.clientWidth;
      if (width <= 768) {
        colsRef.value = 15;
        rowsRef.value = 25;
      }
    })
  );

  const GRID_COLs = colsRef.value || 25;
  const GRID_ROWS = rowsRef.value || 25;

  const handleClick = $((event: MouseEvent) => {
    const tl = gsap.timeline();
    const targetClass = '.grid-dot';

    const { target } = event;
    const targetElement = target as HTMLDivElement;
    if (!target) return;

    tl.from(targetClass, {
      scale: 1.25,
      ease: 'sine.in',
      duration: 0.25,
      translateY: -15,
      opacity: 1,
      stagger: {
        repeatDelay: 0.1,
        amount: 1.25,
        from: parseInt(targetElement.dataset.index as string),
        grid: [GRID_COLs, GRID_ROWS]
      },
      delay: 0.1
    }).to(targetClass, {
      scale: 1,
      ease: 'sine.out',
      duration: 0.5,
      translateY: 0,
      opacity: 0.5
    });
  });

  const dots = [];

  for (let i = 0; i < GRID_COLs; i++) {
    for (let j = 0; j < GRID_ROWS; j++) {
      dots.push(
        <div
          key={`${i}-${j}`}
          class="group cursor-crosshair rounded-full p-1 transition-colors hover:bg-slate-600 md:p-2"
          data-index={index}
          onClick$={handleClick}
        >
          <div
            class="grid-dot aspect-square w-1 rounded-full bg-gradient-to-b from-slate-700/75 to-slate-400/75 opacity-50 group-hover:from-emerald-600 group-hover:to-emerald-300 md:w-2"
            data-index={index}
          />
        </div>
      );
      index += 1;
    }
  }

  return (
    <div
      ref={gridRef}
      class={cn(
        `grid w-fit grid-cols-[repeat(25,1fr)] md:grid-cols-[repeat(25,1fr)]`
      )}
    >
      {dots}
    </div>
  );
});

export const GridAnimation = component$((props: { classes?: ClassValue }) => {
  const { classes } = props;

  return (
    <div class={cn('relative grid h-full w-full place-items-center', classes)}>
      <GridDots />
    </div>
  );
});
