'use client';
import useIntersection from '@/hooks/useIntersection';
import useActiveIndexStore from '@/stores/useActiveSectionIdStore';
import { ComponentProps } from 'react';

function SectionWrapper({
  sectionId,
  children,
  className,
}: { sectionId: string } & ComponentProps<'section'>) {
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
export default SectionWrapper;
