import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface TNavLinkProps extends LinkProps {
  selected?: boolean;
}

function NavLink({
  selected,
  children,
  ...props
}: PropsWithChildren<TNavLinkProps>) {
  return (
    <Link
      className={`w-1/5 ${selected ? 'text-primary' : 'text-primary3'} `}
      {...props}
    >
      {children}
    </Link>
  );
}
export default NavLink;
