'use client';
import useActiveIndexStore, {
  TSectionId,
} from '@/app/_stores/useActiveSectionIdStore';
import { motion } from 'motion/react';
import { ComponentProps } from 'react';

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
      viewport={{ margin: '0px 0px -10%' }}
    >
      {children}
    </motion.section>
  );
}
export default SectionWatcher;
