import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LogoButton({
  image,
  href,
  name,
}: {
  image: any;
  href: string;
  name: string;
}) {
  return (
    <div className="max-sm:mx-1 sm:mr-3 last:mr-0">
      <Link href={href} target="_blank">
        <Image className="w-7 sm:w-10" src={image} alt={`${name}-link`} />
      </Link>
    </div>
  );
}
