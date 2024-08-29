/** @jsxImportSource react */
import { memo, useEffect, useRef, type FC } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type TProps = {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
};

export const ReactReveal: FC<TProps> = memo((props) => {
  const { children, width = 'fit-content' } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const childrenAnimation = useAnimation();
  const overlayAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      childrenAnimation.start('visible');
      overlayAnimation.start('visible');
    }
  }, [isInView, childrenAnimation, overlayAnimation]);

  return (
    <motion.div
      style={{ position: 'relative', width, overflow: 'hidden' }}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75
          },
          visible: {
            opacity: 1,
            y: 0
          }
        }}
        initial="hidden"
        animate={childrenAnimation}
        transition={{
          delay: 0.25,
          duration: 0.5
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0
          },
          visible: {
            left: '100%'
          }
        }}
        initial="hidden"
        animate={overlayAnimation}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          z: 10
        }}
        className="bg-blue-500 dark:bg-emerald-500"
      />
    </motion.div>
  );
});
