import { cn } from '@/lib/utils';
import { component$ } from '@builder.io/qwik';
import type { ClassNameValue } from 'tailwind-merge';

type Props = {
  title: string;
  classes?: ClassNameValue;
};

export const Header = component$((props: Props) => {
  const { title, classes } = props;

  return (
    <h1
      class={cn(
        'mb-[2vh] text-center text-[3vh] md:mb-[4vh] md:text-[2vw]',
        classes
      )}
    >
      {title}
    </h1>
  );
});
