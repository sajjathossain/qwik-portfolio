/** @jsxImportSource react */
import { cn } from '@/lib/utils';
import { qwikify$ } from '@builder.io/qwik-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { type FC, memo } from 'react';

const resumeLinkCVA = cva(
  [
    'px-4',
    'py-2',
    'rounded',
    'bg-slate-300',
    'dark:bg-slate-700/65',
    'text-blue-500',
    'dark:text-emerald-500',
    'border',
    'border-blue-500',
    'dark:border-emerald-500'
  ],
  {
    variants: {
      hide: {
        sm: ['hidden', 'md:block'],
        md: ['block', 'md:hidden']
      },
      size: {
        'full-width': ['w-full', 'text-center']
      },
      text: {
        xl: ['text-xl', 'md:text-2xl']
      }
    },
    defaultVariants: {
      hide: 'sm'
    }
  }
);

type TResumeLink = {
  style?: VariantProps<typeof resumeLinkCVA>;
};

export const ResumeLink: FC<TResumeLink> = memo((props) => (
  <a
    className={cn(resumeLinkCVA(props.style))}
    href="https://docs.google.com/document/d/1v6utOZ6lqwdmXTsxu4EOsl7NofJLsD9klJDWei5X_1Y"
    target="_blank"
    rel="noopener noreferrer"
  >
    Resume
  </a>
));

export const QwikResumeLink = qwikify$(ResumeLink);