'use client';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';

interface TabProps {
  className?: string;
  tabMenus: string[];
  tabContents: (string | ReactNode)[];
}

function Tab({ className, tabMenus, tabContents }: TabProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMenuClick = (newIdx: number) => {
    setActiveIndex(newIdx);
  };

  return (
    <div className={clsx('flex flex-col items-start', className)}>
      <div className="mb-2 flex justify-center gap-3.5">
        {tabMenus.map((menu, idx) => (
          <button
            key={`tab-menu-${idx}`}
            className={`border-b-2 px-1 pb-2 text-sm tablet:text-base ${activeIndex === idx ? 'border-primary text-primary' : 'border-transparent text-dark2'}`}
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
