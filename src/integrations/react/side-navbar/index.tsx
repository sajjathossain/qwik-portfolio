/** @jsxImportSource react */
import { motion as nomotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ClassNameValue } from 'tailwind-merge';
import { SideNavItem } from './side-nav-item';
import { navItems } from '@/data/nav-items';
import { activeSectionAtom } from '@/store';
import { useStore } from '@nanostores/react';
import { qwikify$ } from '@builder.io/qwik-react';
import { useActiveSection } from '../hooks/get-active-section';

type TProps = {
  className?: ClassNameValue;
};

const Component = ({ className }: TProps) => {
  const $activeSection = useStore(activeSectionAtom);

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

export const SideNavbar = qwikify$(Component, { eagerness: 'load' });
