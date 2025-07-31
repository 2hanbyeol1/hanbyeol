import { ComponentProps } from 'react';

import { cn } from '@/utils/util';

interface TagProps extends ComponentProps<'button'> {
  isSelected: boolean;
}
function Tag({ isSelected, children, ...props }: TagProps) {
  return (
    <button
      className={cn(
        'whitespace-nowrap rounded-full px-4 py-2 hover:brightness-125 foldable:px-5 foldable:py-1.5 foldable:text-lg',
        isSelected
          ? 'bg-primary/20 font-medium text-primary'
          : 'bg-dark3/10 text-dark2',
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Tag;
