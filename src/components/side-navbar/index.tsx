/** @jsxImportSource react */
import { motion as nomotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ClassNameValue } from 'tailwind-merge';
import { SideNavItem } from './side-nav-item';
import { useActiveSection } from '@/lib/get-active-section';
import { navItems } from '@/data/nav-items';
import { activeSectionAtom } from '@/store';
import { qwikify$ } from '@builder.io/qwik-react';

type TProps = {
  className?: ClassNameValue;
};

const Component = ({ className }: TProps) => {
  const $activeSection = activeSectionAtom.get();

  useActiveSection();

  return (
    <nomotion.div
      className={cn(
        'flex h-screen w-10 items-center justify-center',
        'fixed z-[99]',
        'invisible md:visible',
        'left-2 top-0',
        className
      )}
      style={{ rotate: '90deg' }}
    >
      <nomotion.ul className="flex w-fit gap-6">
        {navItems.map((item) => (
          <SideNavItem
            key={item.href}
            item={item}
            active={item.active === $activeSection}
          />
        ))}
      </nomotion.ul>
    </nomotion.div>
  );
};

export const SideNavbar = qwikify$(Component);
