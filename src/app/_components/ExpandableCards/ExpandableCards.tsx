import Image from 'next/image';
import React from 'react';

interface ExpandableCardsProps {
  className: string;
  images: CardProps[];
  isMobile?: boolean;
}

function ExpandableCards({
  className,
  images,
  isMobile,
}: ExpandableCardsProps) {
  return (
    <div className={'flex h-96 w-full gap-1.5 ' + className}>
      {images.map(({ src, caption }, idx) => (
        <Card
          key={`card-img-${idx}`}
          src={src}
          caption={caption}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}

interface CardProps {
  src: string;
  caption: string;
  isMobile?: boolean;
}

function Card({ src, caption, isMobile }: CardProps) {
  return (
    <figure
      className={`group/card h-full flex-grow overflow-hidden rounded-xl bg-white brightness-75 duration-500 hover:brightness-100 ${isMobile ? 'hover:flex-grow-[3]' : 'hover:flex-grow-[8]'}`}
    >
      <div className={`relative h-full w-full`}>
        <Image
          src={src}
          alt={caption}
          fill
          sizes="38rem"
          className="object-cover group-hover/card:object-contain"
        />
        <figcaption className="text-md absolute bottom-0 left-0 mt-1 hidden whitespace-nowrap rounded-sm bg-white px-3 py-2 group-hover/card:block">
          {caption}
        </figcaption>
      </div>
    </figure>
  );
}

export default ExpandableCards;
