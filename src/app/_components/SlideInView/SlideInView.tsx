'use client';
import { motion } from 'motion/react';
import { ComponentProps } from 'react';

interface SlideInViewProps {
  duration?: number;
  delay?: number;
}

function SlideInView({
  children,
  duration = 0.7,
  delay = 0,
}: SlideInViewProps & ComponentProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: {
          duration,
          delay,
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInView;
