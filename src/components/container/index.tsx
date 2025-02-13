import { cn } from '@/lib/utils';
import { Slot, component$ } from '@builder.io/qwik';
import type { ClassNameValue } from 'tailwind-merge';

interface Props {
  classes?: ClassNameValue;
}

export const Container = component$((props: Props) => {
  const { classes } = props;

  return (
    <div class={cn('flex h-screen w-full md:w-3/4 lg:w-3/6', classes)}>
      <Slot />
    </div>
  );
});
