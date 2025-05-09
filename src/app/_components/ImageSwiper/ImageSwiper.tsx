'use client';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

interface ImageSwiperProps {
  width: number;
  images: {
    src: string;
    caption: string;
  }[];
  transition?: number;
}

function ImageSwiper({ width, images, transition }: ImageSwiperProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = useCallback(() => {
    if (!transition) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, transition);
  }, [images, transition]);

  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startInterval();
    return () => clearExistingInterval();
  }, [startInterval]);

  const handleButtonClick = (idx: number) => {
    clearExistingInterval();
    setActiveIndex(idx);
    startInterval();
  };

  const { src, caption } = images[activeIndex];

  return (
    <div className="flex flex-col items-center gap-4">
      <figure className="flex flex-col items-center gap-3 text-sm">
        <Image width={width} height={0} src={src} alt={caption} />
        <figcaption className="text-dark2">{caption}</figcaption>
      </figure>
      <div className="flex">
        {images.map((image, idx) => (
          <button
            key={`img-swp-btn-${image.caption}`}
            className="p-1.5"
            onClick={() => handleButtonClick(idx)}
          >
            <div
              className={`rounded-full p-1 text-sm font-light ${activeIndex === idx ? 'bg-primary text-white' : 'bg-primary3'}`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSwiper;
