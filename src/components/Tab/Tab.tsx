'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { cn } from '@/utils/util';

interface TabProps {
  className?: string;
  tabMenus: string[];
  tabContents: (string | ReactNode)[];
}

function Tab({ className, tabMenus, tabContents }: TabProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  const handleMenuClick = (newIdx: number) => {
    setActiveIndex(newIdx);

    const selectedButton = buttonsRef.current[newIdx];
    if (activeRef.current)
      activeRef.current.style.left = `${selectedButton.offsetLeft}px`;
  };

  useEffect(() => {
    activeRef.current?.style.setProperty(
      'width',
      `${buttonsRef.current[activeIndex]?.offsetWidth}px`,
    );
  }, [activeIndex]);

  return (
    <div className={clsx('flex flex-col items-start', className)}>
      <div className="relative mb-2 flex justify-center gap-3.5">
        <div
          ref={activeRef}
          className="absolute left-0 top-full h-0.5 w-full -translate-y-1/2 rounded-full bg-primary duration-200"
        ></div>

        {tabMenus.map((menu, idx) => (
          <button
            ref={(ref) => {
              buttonsRef.current[idx] = ref!;
            }}
            key={`tab-menu-${idx}`}
            className={cn(
              'px-1 pb-2 text-sm tablet:text-base',
              activeIndex === idx ? 'text-primary' : 'text-dark',
            )}
            onClick={() => handleMenuClick(idx)}
          >
            {menu}
          </button>
        ))}
      </div>

      <div className="w-full max-w-full px-3 py-3">
        {tabContents[activeIndex]}
      </div>
    </div>
  );
}

export default Tab;
