/** @jsxImportSource react */
import type { FC } from 'react';
import { motion } from 'framer-motion';

type TProps = {
  toggle: () => void;
  isOpen: boolean;
};

export const DrawerToggleBtn: FC<TProps> = (props) => {
  const { toggle, isOpen } = props;

  return (
    <div className="flex w-full cursor-pointer justify-end px-2 py-2 text-blue-500 dark:text-slate-500 md:hidden">
      {!isOpen ? (
        <motion.svg
          onClick={toggle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-full w-8"
        >
          <title>Menu</title>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
              duration: 0.5
            }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </motion.svg>
      ) : (
        <motion.svg
          onClick={toggle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-full w-10"
        >
          <title>Close</title>
          <motion.path
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: 180 }}
            exit={{ pathLength: 1, rotate: 0 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 300,
              damping: 25
            }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </motion.svg>
      )}
    </div>
  );
};
