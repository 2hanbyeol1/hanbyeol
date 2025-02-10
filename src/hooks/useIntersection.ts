import { useEffect, useState } from 'react';
import useActiveIndexStore from '../stores/useActiveSectionIdStore';

interface TUseIntersectionOptions {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

function useIntersection({
  onIntersect,
  options,
}: {
  onIntersect: (entry?: IntersectionObserverEntry) => void;
  options?: TUseIntersectionOptions;
}) {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    // Ensure the browser supports the Intersection Observer API
    if (!('IntersectionObserver' in window)) return;
    if (!target) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry);
      });
    }, options);

    observer.observe(target);
    return () => observer.disconnect();
  }, [onIntersect, options, target]);

  return { setTarget };
}

export function useSectionObserver({ sectionId }: { sectionId: string }) {
  const setActiveIndex = useActiveIndexStore((state) => state.setActiveIndex);

  const onIntersect = () => {
    setActiveIndex(sectionId);
  };

  return useIntersection({
    onIntersect,
    options: { rootMargin: '-58% 0px -40%', threshold: 0 },
  });
}

export default useIntersection;
