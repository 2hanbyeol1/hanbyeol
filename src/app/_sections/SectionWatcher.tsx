'use client';
import useIntersection from '@/hooks/useIntersection';
import useActiveIndexStore, {
  TSectionId,
} from '@/stores/useActiveSectionIdStore';
import { ComponentProps } from 'react';

function SectionWatcher({
  sectionId,
  children,
  className,
}: { sectionId: TSectionId } & ComponentProps<'section'>) {
  const setActiveIndex = useActiveIndexStore((state) => state.setActiveIndex);

  const onIntersect = () => {
    setActiveIndex(sectionId);
  };

  const { setTarget } = useIntersection({
    onIntersect,
    options: { rootMargin: '-58% 0px -40%', threshold: 0 },
  });

  return (
    <section id={sectionId} ref={setTarget} className={className}>
      {children}
    </section>
  );
}
export default SectionWatcher;
