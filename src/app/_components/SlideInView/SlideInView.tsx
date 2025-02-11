'use client';
import useIntersection from '@/hooks/useIntersection';
import { ComponentProps } from 'react';

function SlideInView({ children, className = '' }: ComponentProps<'div'>) {
  const onIntersect = (entry: IntersectionObserverEntry | undefined) => {
    entry?.target.classList.add('animate-opacity');
  };

  const { setTarget } = useIntersection({
    onIntersect,
    options: { rootMargin: '0px 0px -10% 0px', threshold: 0 },
  });

  return (
    <div ref={setTarget} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}

export default SlideInView;
