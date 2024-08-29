import { cn } from '@/lib/utils';
import { Slot, component$ } from '@builder.io/qwik';
import type { ClassValue } from 'clsx';

export interface Props {
  id: string;
  title?: string;
  classes?: ClassValue;
  disableScrollMargin?: boolean;
}

export const Section = component$((props: Props) => {
  const { id, title, classes, disableScrollMargin = false } = props;

  return (
    <section
      class={cn(
        'w-full',
        'h-full',
        'py-4',
        'px-4',
        'md:px-0',
        'scroll-mt-10',
        'md:scroll-mt-16',
        {
          'scroll-mt-0': disableScrollMargin
        },
        classes
      )}
      data-active-id={id}
      id={id}
    >
      {title && (
        <div class="my-2 space-y-2 text-center">
          <h1 class="text-xl font-medium">{title}</h1>
          <hr class="divide-x-2 divide-solid" />
        </div>
      )}
      <Slot />
    </section>
  );
});
