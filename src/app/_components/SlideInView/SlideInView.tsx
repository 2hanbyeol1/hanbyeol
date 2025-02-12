'use client';
import { motion } from 'motion/react';
import { ComponentProps } from 'react';

interface SlideInViewProps {
  delay?: number;
}

function SlideInView({
  children,
  delay = 0,
}: SlideInViewProps & ComponentProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 1,
          delay,
        },
      }}
      viewport={{ once: true, amount: 0.9 }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInView;
