/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { type FC, useState, useEffect } from 'react';
import { cn } from '~/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { getAllBlogs } from '~/routes/(blogs)/blogs';
import type { TBlogFrontmatter } from '~/lib/types';
import { useDeviceWidth } from '../hooks';

type TMenuIconProps = {
  isOpen: boolean;
};

const MenuIcon: FC<TMenuIconProps> = ({ isOpen }) => {
  if (isOpen) {
    return (
      <motion.svg
        animate={{ rotate: 180, transition: { duration: 0.3 } }}
        className="aspect-square w-8"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414"
          clipRule="evenodd"
        />
      </motion.svg>
    );
  }

  return (
    <motion.svg
      className="aspect-square w-8"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </motion.svg>
  );
};

const variants = {
  open: (isSmallDevice: boolean) => ({
    width: isSmallDevice ? '75vw' : '25vw',
    height: isSmallDevice ? '55vh' : '45vh',
    ...(isSmallDevice && {
      minWidth: '75vw',
      minHeight: '55vh'
    }),
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 50
    }
  }),
  closed: {
    height: '45px',
    width: '45px',
    transition: {
      delay: 0.35,
      type: 'spring',
      stiffness: 500,
      damping: 50
    }
  }
} as const;

const liVariants = {
  initial: {
    opacity: 0
  },
  animate: (value: number) => ({
    opacity: 1,
    transition: {
      delay: 0.35 + value * 0.1
    }
  }),
  exit: {
    opacity: 0
  }
};

const NavItems = ({
  isSmallDevice,
  slug
}: {
  isSmallDevice: boolean;
  slug: string;
}) => {
  const [blogs, setBlogs] = useState<TBlogFrontmatter[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getAllBlogs();
      setBlogs(res);
    })();
  }, []);

  return (
    <ul
      className={cn(
        'relative flex h-fit w-full flex-col gap-2 overflow-y-auto px-3 pt-16 no-scrollbar',
        {
          'px-4 pt-5': isSmallDevice
        }
      )}
    >
      {blogs.map((blog, idx) => {
        return (
          <motion.li
            variants={liVariants}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            custom={idx}
            key={blog.slug}
            className={cn('text-base text-gray-400 hover:text-gray-300', {
              'text-emerald-600 underline underline-offset-4 hover:text-emerald-500':
                slug === blog.slug
            })}
          >
            <a href={`/blogs/${blog.slug}`}>
              {idx + 1}. {blog.title}
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
};

type Props = {
  slug: string;
};

export const BlogsSideNav: FC<Props> = ({ slug }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { checkDevice } = useDeviceWidth();
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    setIsSmallDevice(checkDevice() === 'small');
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 top-[auto] z-20 h-fit w-fit overflow-hidden rounded-sm bg-slate-800/75 shadow-md backdrop-blur-md md:bottom-[auto] md:top-4'
      )}
    >
      <motion.div
        custom={isSmallDevice}
        variants={variants}
        initial={variants.closed}
        animate={isOpen ? 'open' : 'closed'}
        exit={variants.closed}
      >
        <AnimatePresence>
          {isOpen && <NavItems slug={slug} isSmallDevice={isSmallDevice} />}
        </AnimatePresence>

        {isOpen && (
          <p className="fixed bottom-2 left-4 text-xl md:top-2">Blogs</p>
        )}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          name="toggle-button"
          className={cn(
            'shadow-gray-400/15 fixed bottom-0 right-0 top-[auto] z-20 aspect-square overflow-hidden rounded-sm bg-slate-700/75 p-2 text-gray-400 shadow-sm hover:text-gray-300 focus:outline-none md:bottom-[auto] md:top-0'
          )}
        >
          <MenuIcon isOpen={isOpen} />
        </button>
      </motion.div>
    </div>
  );
};

export const QwikBlogsSideNav = qwikify$(BlogsSideNav, {
  eagerness: 'load'
});
