/** @jsxImportSource @emotion/react */

import { cn } from '~/lib/utils';
import type { ClassValue } from 'clsx';
import type { FC } from 'react';

export interface Props {
  children: JSX.Element | JSX.Element[];
  id: string;
  title?: string;
  classes?: ClassValue;
  disableScrollMargin?: boolean;
}

export const ReactSection: FC<Props> = (props) => {
  const { id, title, classes, disableScrollMargin = false, children } = props;

  return (
    <section
      className={cn(
        'relative',
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
        <div className="my-2 space-y-2 text-center">
          <h1 className="text-xl font-medium">{title}</h1>
          <hr className="divide-x-2 divide-solid" />
        </div>
      )}
      {children}
    </section>
  );
};
