/** @jsxImportSource react */
import { type FC, useState, useEffect, Fragment } from 'react';
import {
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { SocialLinks } from './components/social-links';
import type { ClassNameValue } from 'tailwind-merge';
import { MobileNavs } from './components/mobile-navs';
import { DrawerToggleBtn } from './components/drawer-toggle-btn';
import { useDeviceWidth } from '@/integrations/react/hooks';
import { ResumeLink } from './components/resume-link';
import { qwikify$ } from '@builder.io/qwik-react';

const variants = {
  open: {
    height: '100vh',
    borderRaidus: 0
  },
  closed: {
    height: 'fit-content'
  }
};

type TProps = {
  className?: ClassNameValue;
};

export const TopNavbar: FC<TProps> = ({ className }) => {
  const [isFullHeight, setIsFullHeight] = useState(false);
  const { isLargeDevice, isMediumDevice, isSmallDevice } = useDeviceWidth();

  const controls = useDragControls();
  const y = useMotionValue(0);

  const toggleHeight = () => {
    setIsFullHeight((prev) => !prev);
  };

  const handleDragEnd = async () => {
    if (Math.abs(y.get()) >= 100) {
      toggleHeight();
    }
  };

  useEffect(() => {
    if (isMediumDevice || isLargeDevice) {
      setIsFullHeight(false);
    }
  }, [isMediumDevice, isLargeDevice]);

  return (
    <motion.nav
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.25,
        easings: 'easeInOut'
      }}
      variants={variants}
      initial={variants.closed}
      animate={isFullHeight ? variants.open : variants.closed}
      className={cn(
        'fixed',
        'top-0',
        'z-40',
        'w-screen',
        'bg-slate-300/75',
        'dark:bg-slate-800/75',
        'md:py-4',
        'shadow-md',
        'dark:shadow-gray-400/10',
        'backdrop-blur-sm',
        {
          'touch-none': isFullHeight
        },
        className
      )}
      style={{
        height: 'fit-content'
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className={cn('relative w-full bg-transparent px-4 md:h-full', {
            'h-[85dvh] rounded-b-3xl bg-slate-950/50':
              isSmallDevice && isFullHeight
          })}
          {...(isSmallDevice && {
            initial: {
              y: '100%'
            },
            animate: {
              y: '0%'
            },
            exit: {
              y: '0%'
            },
            drag: 'y',
            dragControls: controls,
            dragListener: false,
            dragConstraints: {
              top: 0,
              bottom: 0
            },
            dragElastic: {
              bottom: 0,
              top: 0.5
            },
            onDragEnd: handleDragEnd,
            style: {
              y
            }
          })}
        >
          <div className="mx-2 flex w-full items-center justify-between md:mx-auto md:w-4/6">
            <SocialLinks />
            <ResumeLink />
            {!isFullHeight && (
              <Fragment>
                <h1 className="whitespace-nowrap text-xl font-bold text-slate-400 dark:text-slate-500 md:hidden">
                  Sajjat Hossain
                </h1>
                <DrawerToggleBtn isOpen={isFullHeight} toggle={toggleHeight} />
              </Fragment>
            )}
          </div>

          {isFullHeight && (
            <motion.div
              layoutId="top-navbar-mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25
              }}
              className="h-dvh flex touch-none flex-col gap-10 px-2 py-9"
            >
              <MobileNavs />
              <ResumeLink
                style={{
                  size: 'full-width',
                  hide: 'md',
                  text: 'xl'
                }}
              />
              <SocialLinks className="flex h-fit w-full justify-evenly md:hidden" />
              <motion.button
                onPointerDown={(e) => controls.start(e)}
                className="absolute bottom-8 left-0 right-0 mx-auto h-2 w-14 cursor-grab touch-none rounded-full bg-slate-400 active:cursor-grabbing"
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.nav>
  );
};

export const QwikTopNavbar = qwikify$(TopNavbar, { eagerness: 'idle' });
