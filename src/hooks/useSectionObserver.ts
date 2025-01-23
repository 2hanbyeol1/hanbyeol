import { useEffect, useState } from 'react';
import useActiveIndexStore from '../stores/useActiveSectionIdStore';

function useSectionObserver({ sectionId }: { sectionId: string }) {
  const [section, setSection] = useState<Element | null>(null);
  const setActiveIndex = useActiveIndexStore((state) => state.setActiveIndex);

  useEffect(() => {
    // Ensure the browser supports the Intersection Observer API
    if (!('IntersectionObserver' in window)) return;
    if (!section) return;

    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveIndex(sectionId);
      });
    }, options);

    observer.observe(section);
  }, [section, setActiveIndex, sectionId]);

  return { setSection };
}
export default useSectionObserver;
