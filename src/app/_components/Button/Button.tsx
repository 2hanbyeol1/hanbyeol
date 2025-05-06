import Link from 'next/link';
import React, { ComponentProps } from 'react';

type ButtonProps = ButtonVariant &
  (
    | ({} & ComponentProps<'button'>)
    | ({ href: string } & ComponentProps<typeof Link>)
  );

const BUTTON_CN = 'rounded-md px-4 py-2.5 text-center';

interface ButtonVariant {
  theme?: 'primary' | 'light';
}

const getClassNameByVariant = ({ theme }: ButtonVariant) => {
  switch (theme) {
    case 'light':
      return 'bg-primary/10 text-black hover:bg-primary/15';
    default:
      return 'bg-primary/95 text-white hover:bg-primary';
  }
};

function Button({ theme, className, children, ...props }: ButtonProps) {
  if ('href' in props)
    return (
      <Link
        className={
          BUTTON_CN + ' ' + getClassNameByVariant({ theme }) + ' ' + className
        }
        {...props}
      >
        {children}
      </Link>
    );

  return (
    <button className={BUTTON_CN + ' ' + className} {...props}>
      {children}
    </button>
  );
}

export default Button;
