'use client';
import { ComponentProps } from 'react';
import { motion } from 'motion/react';

import useActiveIndexStore, {
  TSectionId,
} from '@/stores/useActiveSectionIdStore';

function SectionWatcher({
  sectionId,
  children,
  className,
}: { sectionId: TSectionId } & ComponentProps<'section'>) {
  const activate = useActiveIndexStore((state) => state.activate);
  const deactivate = useActiveIndexStore((state) => state.deactivate);

  const onViewportEnter = () => {
    activate(sectionId);
  };

  const onViewportLeave = () => {
    deactivate(sectionId);
  };

  return (
    <motion.section
      id={sectionId}
      className={className}
      onViewportEnter={onViewportEnter}
      onViewportLeave={onViewportLeave}
      viewport={{ margin: '0px 0px 10%', amount: 0.1 }}
    >
      {children}
    </motion.section>
  );
}
export default SectionWatcher;
