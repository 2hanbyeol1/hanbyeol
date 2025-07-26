'use client';
import { motion } from 'motion/react';

function WaveIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', visualDuration: 0.6, bounce: 0.6 }}
    >
      <div className="origin-bottom-right animate-wiggle text-7xl tablet:text-8xl desktop:text-9xl">
        👋
      </div>
    </motion.div>
  );
}
export default WaveIcon;
