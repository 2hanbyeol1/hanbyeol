'use client';
import useScrollProgress from '@/hooks/useScrollProgress';
import useThrottle from '@/hooks/useThrottle';
import { useEffect } from 'react';

function HeaderProgress() {
  const { progress, handleScroll } = useScrollProgress();
  const throttleOnScroll = useThrottle(handleScroll, 30);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', () => {
      throttleOnScroll();
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        style={{ width: `${progress}%` }}
        className="z-10 h-2 bg-primary2 px-2 max-tablet:hidden"
      ></div>
      <div
        style={{ height: `${progress}%` }}
        className="z-10 w-1 bg-primary2 py-2 tablet:hidden"
      ></div>
    </>
  );
}
export default HeaderProgress;
