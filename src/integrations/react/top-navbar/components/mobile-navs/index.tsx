/** @jsxImportSource react */
import { navItems } from '@/data/nav-items';
import { useActiveSection } from '@/integrations/react/hooks';
import { cn } from '@/lib/utils';
import { type FC, memo } from 'react';
import type { ClassNameValue } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { activeSectionAtom } from '@/store';

type TProps = {
  className?: ClassNameValue;
};

export const MobileNavs: FC<TProps> = memo((props) => {
  const { className } = props;
  const $activeSection = useStore(activeSectionAtom);
  useActiveSection();

  return (
    <ul className={cn('flex flex-col gap-4 text-center text-2xl', className)}>
      {navItems.map(({ title, href, active }) => (
        <motion.li
          transition={{
            duration: 0.25,
            ease: 'backOut',
            type: 'spring',
            stiffness: 300,
            damping: 10
          }}
          key={href}
          className={cn({
            'text-gray-600 dark:text-gray-300/75': $activeSection !== active,
            'border-b-2 border-blue-500 dark:border-emerald-500':
              $activeSection === active,
            'text-blue-500 dark:text-emerald-500': $activeSection === active
          })}
        >
          <a aria-label={href} href={href}>
            {title}
          </a>
        </motion.li>
      ))}
    </ul>
  );
});
