import { useState } from 'react';

function useScrollProgress() {
  const [progress, setProgress] = useState<number>(0); // 0 ~ 100

  function calcProgress() {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progressHeight = window.scrollY;
    return Math.floor((progressHeight / totalHeight) * 100);
  }

  function handleScroll() {
    setProgress(calcProgress());
  }

  return { progress, handleScroll };
}
export default useScrollProgress;
