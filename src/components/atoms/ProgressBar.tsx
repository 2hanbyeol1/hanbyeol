'use client';
import useScrollProgress from '@/hooks/useScrollProgress';
import useThrottle from '@/hooks/useThrottle';
import { useEffect } from 'react';

function ProgressBar() {
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
        className="h-2 bg-primary2 px-2 max-tablet:hidden"
      ></div>
      <div
        style={{ height: `${progress}%` }}
        className="w-2 bg-primary2 py-2 tablet:hidden"
      ></div>
    </>
  );
}
export default ProgressBar;
