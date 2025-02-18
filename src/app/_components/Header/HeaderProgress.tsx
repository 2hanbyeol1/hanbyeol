'use client';
import { motion, useScroll } from 'motion/react';

function HeaderProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="z-10 h-1 origin-left bg-primary2 max-tablet:hidden"
      ></motion.div>
      <motion.div
        style={{
          scaleY: scrollYProgress,
        }}
        className="z-10 w-1 origin-top bg-primary2 tablet:hidden"
      ></motion.div>
    </>
  );
}
export default HeaderProgress;
