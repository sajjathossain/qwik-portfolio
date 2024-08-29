/** @jsxImportSource react */
import type { TNavItem } from '@/data/nav-items';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { VscLinkExternal } from 'react-icons/vsc';

type TProps = {
  active: boolean;
  item: TNavItem;
};

export const SideNavItem: FC<TProps> = (props) => {
  const { item, active } = props;

  return (
    <motion.li
      style={{
        position: 'relative'
      }}
    >
      <a
        href={`/${item.href}`}
        className={`z-10 ${active ? 'text-white' : 'text-primary'
          } dark:hover:text-white/85 relative flex cursor-pointer items-center justify-center gap-2 px-2 text-sm dark:text-white dark:mix-blend-exclusion`}
        style={{
          position: 'relative'
        }}
      >
        <p>{item.title}</p>
        {item.targetBlank && <VscLinkExternal />}
      </a>
      {active && (
        <motion.div
          layoutId="active-link"
          className="bg-blue-500 dark:bg-white"
          style={{
            inset: 0,
            position: 'absolute',
            borderRadius: 9999
          }}
        />
      )}
    </motion.li>
  );
};
