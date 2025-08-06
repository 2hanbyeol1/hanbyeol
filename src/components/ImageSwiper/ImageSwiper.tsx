'use client';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';

import 'swiper/css';

interface ImageSwiperProps {
  width: number;
  images: {
    src: string;
    caption: string;
  }[];
  ratio: [number, number];
  transition?: number;
}

function ImageSwiper({
  width,
  images,
  ratio,
  transition = 2500,
}: ImageSwiperProps) {
  if (images.length === 1) {
    const { src, caption } = images[0];
    return (
      <div style={{ maxWidth: width, width }} className="mx-auto">
        <figure className="flex w-full flex-col items-center gap-2 text-sm">
          <div
            style={{
              aspectRatio: `${ratio[0]}/${ratio[1]}`,
            }}
            className="relative w-full"
          >
            <Image src={src} alt={caption} fill className="object-contain" />
          </div>
          <figcaption className="whitespace-nowrap text-dark2">
            {caption}
          </figcaption>
        </figure>
      </div>
    );
  }

  return (
    <Swiper
      style={{
        maxWidth: width,
      }}
      slidesPerView={1}
      pagination={{ dynamicBullets: true }}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: transition,
      }}
      loop={true}
      className="mr-auto w-full"
    >
      {images.map(({ src, caption }) => (
        <SwiperSlide key={caption}>
          <figure className="mx-auto flex w-full flex-col items-center gap-2 text-sm">
            <div
              style={{
                aspectRatio: `${ratio[0]}/${ratio[1]}`,
              }}
              className="relative w-full"
            >
              <Image src={src} alt={caption} fill className="object-contain" />
            </div>
            <figcaption className="mb-12 whitespace-nowrap text-dark2">
              {caption}
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSwiper;
